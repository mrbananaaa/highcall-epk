---
name: Chrome Industrial
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#e9bcb5'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#b08781'
  outline-variant: '#5f3f3a'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#690001'
  primary-container: '#e60005'
  on-primary-container: '#fff7f5'
  inverse-primary: '#c00003'
  secondary: '#c8c6c7'
  on-secondary: '#303031'
  secondary-container: '#49494a'
  on-secondary-container: '#bab8b9'
  tertiary: '#c7c6ca'
  on-tertiary: '#303034'
  tertiary-container: '#737276'
  on-tertiary-container: '#fbf8fd'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930002'
  secondary-fixed: '#e5e2e3'
  secondary-fixed-dim: '#c8c6c7'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474647'
  tertiary-fixed: '#e4e1e6'
  tertiary-fixed-dim: '#c7c6ca'
  on-tertiary-fixed: '#1b1b1f'
  on-tertiary-fixed-variant: '#46464a'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-lg:
    fontFamily: Anybody
    fontSize: 84px
    fontWeight: '900'
    lineHeight: 90%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Anybody
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 110%
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 110%
  headline-md:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 120%
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 140%
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 140%
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1440px
---

## Brand & Style
This design system occupies the intersection of **Modern Y2K** and **Industrial Club** aesthetics. It is designed for high-energy, professional environments that require an edgy, tech-forward presence. The brand personality is aggressive yet precise, drawing inspiration from late-90s futurism, warehouse techno culture, and high-performance machinery.

The visual style is a hybrid of **Brutalism** and **Glassmorphism**. It utilizes heavy structural borders and a rigid grid system to establish an industrial foundation, while incorporating translucent, frosted layers and metallic textures to inject the Y2K digital "slickness." The emotional response should be one of intensity, speed, and uncompromising quality.

## Colors
The palette is dominated by a deep, monochromatic dark range to evoke an underground club or industrial setting.

- **Primary (Metallic Red):** A high-intensity, saturated red pulled directly from the reference imagery. It is used sparingly for critical actions, high-impact branding, and status indicators.
- **Neutral/Background:** A core of "Obsidian Black" (#0A0A0B) provides the void-like background.
- **Surface/Secondary:** "Carbon Grey" (#1A1A1B) and "Steel" (#3E3E42) define the structural elements and container tiers.
- **Accents:** Use pure white (#FFFFFF) for maximum legibility on text and thin, high-contrast borders. 

Avoid mid-tones; the design thrives on the high-contrast gap between the dark void and the searing red/white elements.

## Typography
The typography strategy creates a tension between industrial weight and digital precision.

- **Headings:** Use **Anybody** with expanded widths and heavy weights. It should feel massive, like stamped metal. For hero sections, use "display-lg" with tight leading and negative letter spacing to create a wall of text effect.
- **Body:** **Hanken Grotesk** provides a sharp, contemporary sans-serif experience that maintains readability against dark backgrounds. 
- **Data & Secondary Info:** **JetBrains Mono** is used for all labels, captions, and UI metadata. This reinforces the "tech" and "code" aspect of the Y2K/Industrial aesthetic.

All text should be set in high-contrast (White or Light Grey) or the Primary Red.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy built on a rigorous 4px baseline.

- **Grid:** A 12-column grid for desktop with 24px gutters. Elements should align strictly to the grid lines.
- **Margins:** Generous outer margins (64px) on desktop to create a framed, "widescreen" cinematic feel.
- **Grid Pattern:** A subtle, low-opacity (5%) pixel grid pattern should be overlaid on the background to enhance the industrial/digital vibe.
- **Density:** High information density is encouraged in tool-like areas, while marketing sections should use aggressive whitespace to emphasize the "Anybody" typography.

## Elevation & Depth
Depth is created through material properties rather than traditional shadows.

- **Tonal Layering:** Layers are defined by increasing the brightness of the background. Level 0 is #0A0A0B, Level 1 (Cards) is #1A1A1B.
- **Glassmorphism:** Use for floating panels or navigation bars. Apply a 20px backdrop blur with a 10% white tint and a 1px solid white border at 20% opacity.
- **Heavy Borders:** Instead of shadows, use 2px solid borders (#3E3E42) to define component edges. For active states, these borders switch to the Primary Red or Pure White.
- **Metallic Textures:** High-impact areas (like primary buttons or hero text) should utilize a subtle vertical linear gradient that mimics the sheen of brushed aluminium or liquid chrome.

## Shapes
The shape language is **Sharp (0px)**. 

To maintain the industrial and brutalist influence, avoid all corner radii. Every button, input field, card, and image container must have 90-degree angles. This creates a hard-edged, aggressive aesthetic that differentiates the design from soft, consumer-grade SaaS products. 

Special exception: Status dots or decorative "circuitry" elements may use circles, but all structural UI remains rectangular.

## Components

### Buttons
- **Primary:** Solid Primary Red background, sharp corners, White "Anybody" bold text in uppercase. No shadow, but a 1px inner "glint" border on the top and left.
- **Secondary:** Transparent background, 2px Solid White border, sharp corners.
- **Ghost:** JetBrains Mono text with an underline that appears on hover.

### Input Fields
- **Style:** Bottom-border only or 1px Solid Steel (#3E3E42) frame.
- **Focus State:** Border changes to Primary Red with a subtle outer "glow" (0px 0px 8px) in the same color. 
- **Typography:** JetBrains Mono for input text and labels.

### Cards & Containers
- **Style:** Background #1A1A1B, 1px solid border #3E3E42.
- **Header:** Often includes a small "terminal-style" label in the top-left corner using JetBrains Mono (e.g., "SEC_01 // DATA").

### Chips & Tags
- **Style:** Rectangular, JetBrains Mono text. 
- **Visual:** Use "Industrial" details like a small 45-degree clipped corner or a small "serial number" prefix.

### Navigation
- **Style:** Glassmorphic top bar with a heavy 2px bottom border. Links are uppercase Anybody (Bold) or JetBrains Mono for a more technical feel.