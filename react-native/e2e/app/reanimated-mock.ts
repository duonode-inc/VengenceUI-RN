/**
 * Lightweight mock for react-native-reanimated on web.
 *
 * Provides just enough API surface for VengeanceUI components to render
 * in a browser (via react-native-web) so Playwright can test them.
 */
import React from "react";
import { View, Text } from "react-native";

/* ---------- Hooks ---------- */

export function useSharedValue<T>(init: T) {
  const ref = React.useRef({ value: init });
  return ref.current;
}

export function useAnimatedStyle(updater: () => any) {
  return updater();
}

/* ---------- Animation builders (no-ops) ---------- */

export const withTiming = (val: any) => val;
export const withSpring = (val: any) => val;
export const withRepeat = (val: any) => val;
export const withSequence = (...vals: any[]) => vals[vals.length - 1];
export const withDelay = (_d: number, val: any) => val;

export const Easing = {
  linear: (t: number) => t,
  cubic: (t: number) => t,
  ease: (t: number) => t,
  out: () => (t: number) => t,
  in: () => (t: number) => t,
  inOut: () => (t: number) => t,
  back: () => (t: number) => t,
  bezier: () => (t: number) => t,
};

export function interpolateColor(
  value: number,
  inputRange: number[],
  outputRange: string[],
) {
  return value >= 0.5 ? outputRange[1] : outputRange[0];
}

/* ---------- Layout animations (no-ops that return props) ---------- */

function createLayoutAnimation(_duration?: number) {
  const builder = {
    duration: () => builder,
    delay: () => builder,
    easing: () => builder,
    springify: () => builder,
    damping: () => builder,
    stiffness: () => builder,
    build: () => undefined,
  };
  return builder;
}

export const FadeIn = createLayoutAnimation();
export const FadeOut = createLayoutAnimation();
export const SlideInRight = createLayoutAnimation();
export const SlideOutLeft = createLayoutAnimation();

/* ---------- Animated components ---------- */

const Animated = {
  View,
  Text,
  createAnimatedComponent: (comp: any) => comp,
};

export default Animated;
