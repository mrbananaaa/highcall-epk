#!/usr/bin/env node
/**
 * Tailwind class diagnostic — verifies every className in source actually
 * compiles to a CSS rule in the generated stylesheet.
 *
 * Tailwind v4 silently skips unknown utilities (no error, no CSS), so a
 * typo or an undefined theme token produces a class that does nothing.
 * This script catches that class of bug.
 *
 * Usage:
 *   node scripts/check-tailwind-classes.mjs            # from project root
 *   pnpm run check:tw
 *
 * Exit code: 0 = all classes compile, 1 = missing classes found.
 */
import { execSync } from "node:child_process";
import { readFileSync, existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, relative } from "node:path";
import { globSync } from "node:fs";

const ROOT = process.cwd();
const CSS_ENTRY = "src/app/globals.css";
const SRC_GLOB = "src/**/*.{ts,tsx,js,jsx}";
const CLI = existsSync(join(ROOT, "node_modules/.bin/tailwindcss"))
  ? join(ROOT, "node_modules/.bin/tailwindcss")
  : "tailwindcss"; // falls back to PATH (e.g. /workspace/tools install)

// --- 1. Extract class names from source files ---------------------------
const sourceFiles = globSync(SRC_GLOB, { cwd: ROOT });
const classes = new Set();
const dynamic = new Set();

// Matches className="..." / className={'...'} / className={`...`}
// Handles template literals with ${} by flagging them as dynamic.
const CLASS_ATTR = /className\s*=\s*(?:"([^"]*)"|'([^']*)'|`([^`]*)`)/g;

for (const file of sourceFiles) {
  const text = readFileSync(join(ROOT, file), "utf8");
  for (const m of text.matchAll(CLASS_ATTR)) {
    const raw = m[1] ?? m[2] ?? m[3];
    if (raw.includes("${")) {
      // Template interpolation — can't statically verify; extract literal chunks.
      for (const chunk of raw.split(/\$\{[^}]*\}/)) {
        for (const c of chunk.trim().split(/\s+/)) if (c) classes.add(c);
      }
      dynamic.add(relative(ROOT, file));
      continue;
    }
    for (const c of raw.trim().split(/\s+/)) if (c) classes.add(c);
  }
}

// --- 2. Compile the stylesheet -------------------------------------------
const tmp = mkdtempSync(join(tmpdir(), "tw-check-"));
const outCss = join(tmp, "out.css");
try {
  execSync(`${CLI} -i ${CSS_ENTRY} -o ${outCss}`, {
    cwd: ROOT,
    stdio: ["ignore", "ignore", "pipe"],
    env: { ...process.env, FORCE_COLOR: "0" },
  });
} catch (e) {
  console.error("✗ Tailwind compilation failed:\n" + e.stderr);
  process.exit(2);
}
const css = readFileSync(outCss, "utf8");
rmSync(tmp, { recursive: true, force: true });

// --- 3. Verify each class exists in the CSS ------------------------------
// Tailwind escapes special chars in selectors; a class "hover:text-primary"
// appears as ".hover\:text-primary:hover". So: check whether the escaped
// bare class name appears as a selector fragment anywhere in the CSS.
const missing = [];
for (const cls of [...classes].sort()) {
  const escaped = cls.replace(/([\\:\[\]\.#\(\)])/g, "\\$1");
  const re = new RegExp(`\\.${escaped.replace(/\\/g, "\\\\")}(?=[\\s,{.:\\[])`);
  if (!re.test(css)) missing.push(cls);
}

// --- 4. Report -----------------------------------------------------------
const total = classes.size;
if (dynamic.size) {
  console.log(
    `ℹ  ${dynamic.size} file(s) use dynamic className (skipped interpolation): ${[...dynamic].join(", ")}`,
  );
}
if (missing.length === 0) {
  console.log(`✓ All ${total} static class(es) compile to CSS.`);
  process.exit(0);
}
console.error(
  `✗ ${missing.length}/${total} class(es) generate NO CSS (typo or undefined theme token):`,
);
for (const cls of missing) console.error(`  - ${cls}`);
process.exit(1);
