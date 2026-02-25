import React, { useEffect } from "react";
import { DimensionValue, StyleSheet, ViewStyle, StyleProp } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { colors, radii } from "../theme";
import { mergeStyles } from "../utils";

export interface SkeletonProps {
  /** Width of the skeleton */
  width?: DimensionValue;
  /** Height of the skeleton */
  height?: number;
  /** Border radius (default: radii.md) */
  borderRadius?: number;
  /** Make it circular (sets borderRadius to height/2) */
  circle?: boolean;
  /** Override style */
  style?: StyleProp<ViewStyle>;
}

export function Skeleton({
  width,
  height = 20,
  borderRadius = radii.md,
  circle = false,
  style,
}: SkeletonProps) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.4, { duration: 800, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 800, easing: Easing.inOut(Easing.ease) }),
      ),
      -1,
      false,
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const dynamicStyle: ViewStyle = {
    height,
    borderRadius: circle ? height / 2 : borderRadius,
    ...(width !== undefined ? { width } : {}),
  };

  return (
    <Animated.View
      style={[mergeStyles(styles.skeleton, dynamicStyle, style), animatedStyle]}
    />
  );
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: colors.accent,
    width: "100%",
  },
});
