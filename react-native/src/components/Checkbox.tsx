import React from "react";
import { Pressable, View, StyleSheet, ViewStyle, StyleProp } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  Easing,
} from "react-native-reanimated";
import { colors, radii } from "../theme";
import { mergeStyles } from "../utils";

export interface CheckboxProps {
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Called when the value changes */
  onCheckedChange?: (checked: boolean) => void;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Override container style */
  style?: StyleProp<ViewStyle>;
}

export function Checkbox({
  checked = false,
  onCheckedChange,
  disabled = false,
  style,
}: CheckboxProps) {
  const scale = useSharedValue(1);

  const handlePress = () => {
    if (disabled) return;
    scale.value = withSequence(
      withTiming(0.85, { duration: 80, easing: Easing.out(Easing.cubic) }),
      withTiming(1, { duration: 120, easing: Easing.out(Easing.cubic) }),
    );
    onCheckedChange?.(!checked);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
    >
      <Animated.View
        style={[
          mergeStyles(
            styles.box,
            checked && styles.checked,
            disabled && styles.disabled,
            style,
          ),
          animatedStyle,
        ]}
      >
        {checked && (
          <View style={styles.checkmark}>
            <View style={styles.checkmarkShort} />
            <View style={styles.checkmarkLong} />
          </View>
        )}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.input,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkmark: {
    width: 10,
    height: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checkmarkShort: {
    position: "absolute",
    width: 4,
    height: 1.5,
    backgroundColor: colors.primaryForeground,
    borderRadius: 1,
    transform: [{ rotate: "45deg" }, { translateX: -1.5 }, { translateY: 1.5 }],
  },
  checkmarkLong: {
    position: "absolute",
    width: 8,
    height: 1.5,
    backgroundColor: colors.primaryForeground,
    borderRadius: 1,
    transform: [{ rotate: "-45deg" }, { translateX: 1 }, { translateY: -0.5 }],
  },
  disabled: {
    opacity: 0.5,
  },
});
