import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  StyleProp,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
  withSequence,
  Easing,
} from "react-native-reanimated";
import { colors } from "../theme";
import { mergeStyles } from "../utils";

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

export interface AnimatedButtonProps {
  children?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function AnimatedButton({
  children = "Browse Components",
  onPress,
  disabled,
  style,
  textStyle,
}: AnimatedButtonProps) {
  /* ---- scale spring on press ---- */
  const scale = useSharedValue(1);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  /* ---- shimmer / shine overlay ---- */
  const shimmerX = useSharedValue(-1);

  React.useEffect(() => {
    shimmerX.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1000, easing: Easing.linear }),
        withTiming(-1, { duration: 0 }),
      ),
      -1, // infinite
      false,
    );
  }, [shimmerX]);

  const shimmerStyle = useAnimatedStyle(() => ({
    opacity: shimmerX.value > -0.5 && shimmerX.value < 0.5 ? 0.6 : 0,
    transform: [{ translateX: shimmerX.value * 150 }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.97, { stiffness: 200, damping: 15, mass: 0.5 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { stiffness: 200, damping: 15, mass: 0.5 });
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      accessibilityRole="button"
    >
      <Animated.View
        style={[animatedContainerStyle, mergeStyles(styles.container, disabled && styles.disabled, style)]}
      >
        {/* Shimmer overlay */}
        <Animated.View style={[styles.shimmer, shimmerStyle]} />

        {/* Content */}
        {typeof children === "string" ? (
          <Text style={mergeStyles(styles.text, textStyle)}>{children}</Text>
        ) : (
          children
        )}
      </Animated.View>
    </Pressable>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderRadius: 8,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    position: "relative",
  },
  shimmer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 40,
    backgroundColor: colors.mutedForeground,
    opacity: 0,
  },
  text: {
    fontWeight: "300",
    letterSpacing: 1,
    color: colors.foreground,
    fontSize: 14,
  },
  disabled: {
    opacity: 0.5,
  },
});
