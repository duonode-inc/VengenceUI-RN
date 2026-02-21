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
  out: () => (t: number) => t,
  in: () => (t: number) => t,
  inOut: () => (t: number) => t,
  back: () => (t: number) => t,
};

/* ---------- Animated components ---------- */

const Animated = {
  View,
  Text,
  createAnimatedComponent: (comp: any) => comp,
};

export default Animated;
