import React from "react";
import { Pressable, StyleSheet, ViewStyle, StyleProp } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolateColor,
} from "react-native-reanimated";
import { colors, radii } from "../theme";
import { mergeStyles } from "../utils";

export interface SwitchProps {
  /** Whether the switch is on */
  value?: boolean;
  /** Called when the value changes */
  onValueChange?: (value: boolean) => void;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Override track style */
  style?: StyleProp<ViewStyle>;
}

export function Switch({
  value = false,
  onValueChange,
  disabled = false,
  style,
}: SwitchProps) {
  const progress = useSharedValue(value ? 1 : 0);

  React.useEffect(() => {
    progress.value = withTiming(value ? 1 : 0, {
      duration: 200,
      easing: Easing.out(Easing.cubic),
    });
  }, [value, progress]);

  const trackStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [colors.input, colors.primary],
    ),
  }));

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(value ? 14 : 0, {
          duration: 200,
          easing: Easing.out(Easing.cubic),
        }),
      },
    ],
  }));

  return (
    <Pressable
      onPress={() => !disabled && onValueChange?.(!value)}
      disabled={disabled}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
    >
      <Animated.View
        style={[mergeStyles(styles.track, disabled && styles.disabled, style), trackStyle]}
      >
        <Animated.View style={[styles.thumb, thumbStyle]} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 32,
    height: 18,
    borderRadius: radii.full,
    padding: 1,
    justifyContent: "center",
  },
  thumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  disabled: {
    opacity: 0.5,
  },
});
