import React from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { colors, radii } from "../theme";
import { mergeStyles } from "../utils";

export interface ProgressProps {
  /** Progress value from 0 to 100 */
  value?: number;
  /** Override container style */
  style?: StyleProp<ViewStyle>;
  /** Override indicator style */
  indicatorStyle?: StyleProp<ViewStyle>;
}

export function Progress({
  value = 0,
  style,
  indicatorStyle,
}: ProgressProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  const animatedWidth = useAnimatedStyle(() => ({
    width: withTiming(`${clampedValue}%`, {
      duration: 300,
      easing: Easing.out(Easing.cubic),
    }),
  }));

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: clampedValue }}
      style={mergeStyles(styles.track, style)}
    >
      <Animated.View
        style={[mergeStyles(styles.indicator, indicatorStyle), animatedWidth]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 8,
    width: "100%",
    backgroundColor: colors.primaryTrack,
    borderRadius: radii.full,
    overflow: "hidden",
  },
  indicator: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: radii.full,
  },
});
