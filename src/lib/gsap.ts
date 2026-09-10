import gsap from "gsap";

interface HorizontalLoopConfig {
  speed?: number;
  paused?: boolean;
  repeat?: number;
  reversed?: boolean;
  paddingRight?: number | string;
  snap?: number | false;
}

interface HorizontalLoopTimeline extends gsap.core.Timeline {
  next: (vars?: gsap.TweenVars) => gsap.core.Tween;
  previous: (vars?: gsap.TweenVars) => gsap.core.Tween;
  toIndex: (index: number, vars?: gsap.TweenVars) => gsap.core.Tween;
  current: () => number;
  times: number[];
}

/*
 * This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.
 *
 * Features:
 * - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 * - When each item animates to the left or right enough, it will loop back to the other side
 * - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
 * - The returned timeline will have the following methods added to it:
 * - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
 * - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
 * - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
 * - current() - returns the current index (if an animation is in-progress, it reflects the final index)
 * - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
 */
export function horizontalLoop(
  items: gsap.DOMTarget,
  config: HorizontalLoopConfig = {},
): HorizontalLoopTimeline {
  const elements = gsap.utils.toArray<HTMLElement>(items);

  const length = elements.length;

  if (length === 0) {
    throw new Error("horizontalLoop requires at least one element");
  }

  let curIndex = 0;
  let totalWidth = 0;
  let curX = 0;
  let distanceToStart = 0;
  let distanceToLoop = 0;

  const times: number[] = [];
  const widths: number[] = [];
  const xPercents: number[] = [];

  const pixelsPerSecond = (config.speed || 1) * 100;

  const snap =
    config.snap === false
      ? (value: number) => value
      : gsap.utils.snap(config.snap || 1);

  const startX = elements[0].offsetLeft;

  const tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: {
      ease: "none",
    },
    onReverseComplete: () => {
      tl.totalTime(tl.rawTime() + tl.duration() * 100);
    },
  }) as HorizontalLoopTimeline;

  gsap.set(elements, {
    xPercent: (index: number, element: HTMLElement) => {
      const width = (widths[index] = parseFloat(
        gsap.getProperty(element, "width", "px") as string,
      ));

      xPercents[index] = snap(
        (parseFloat(gsap.getProperty(element, "x", "px") as string) / width) *
          100 +
          (gsap.getProperty(element, "xPercent") as number),
      );

      return xPercents[index];
    },
  });

  gsap.set(elements, {
    x: 0,
  });

  const lastIndex = length - 1;
  const lastItem = elements[lastIndex];

  totalWidth =
    lastItem.offsetLeft +
    (xPercents[lastIndex] / 100) * widths[lastIndex] -
    startX +
    lastItem.offsetWidth * (gsap.getProperty(lastItem, "scaleX") as number) +
    (parseFloat(String(config.paddingRight)) || 0);

  for (let i = 0; i < length; i++) {
    const item = elements[i];

    curX = (xPercents[i] / 100) * widths[i];

    distanceToStart = item.offsetLeft + curX - startX;

    distanceToLoop =
      distanceToStart +
      widths[i] * (gsap.getProperty(item, "scaleX") as number);

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0,
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond,
      )
      .add(`label${i}`, distanceToStart / pixelsPerSecond);

    times[i] = distanceToStart / pixelsPerSecond;
  }

  function toIndex(index: number, vars: gsap.TweenVars = {}): gsap.core.Tween {
    if (Math.abs(index - curIndex) > length / 2) {
      index += index > curIndex ? -length : length;
    }

    const newIndex = gsap.utils.wrap(0, length, index);
    let time = times[newIndex];

    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = {
        time: gsap.utils.wrap(0, tl.duration()),
      };

      time += tl.duration() * (index > curIndex ? 1 : -1);
    }

    curIndex = newIndex;

    vars.overwrite = true;

    return tl.tweenTo(time, vars);
  }

  tl.next = (vars) => toIndex(curIndex + 1, vars);

  tl.previous = (vars) => toIndex(curIndex - 1, vars);

  tl.current = () => curIndex;

  tl.toIndex = (index, vars) => toIndex(index, vars);

  tl.times = times;

  // Pre-render for performance.
  tl.progress(1, true).progress(0, true);

  if (config.reversed) {
    tl.vars.onReverseComplete?.();
    tl.reverse();
  }

  return tl;
}

type STVarsFunc = (trigger?: gsap.DOMTarget | undefined) => ScrollTrigger.Vars;

type STriggerVarsType = {
  [key: string]: STVarsFunc;
};

// INFO: SHARED SCROLL TRIGGER VARS
export const STriggerVars: STriggerVarsType = {
  base: (trigger) => {
    return {
      trigger,
      toggleActions: "play reverse play reverse",
    };
  },
};
