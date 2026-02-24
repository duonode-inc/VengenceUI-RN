import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle, StyleProp } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  Easing,
} from "react-native-reanimated";
import { colors } from "../theme";
import { mergeStyles } from "../utils";

/* ------------------------------------------------------------------ */
/*  AnimatedNumber                                                     */
/* ------------------------------------------------------------------ */

export interface AnimatedNumberProps {
  value: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export function AnimatedNumber({ value, style, textStyle }: AnimatedNumberProps) {
  return (
    <View style={mergeStyles(componentStyles.row, style)}>
      {value
        .toString()
        .split("")
        .map((digit, index) => (
          <SingleDigit
            key={`${index}-${value.toString().length}`}
            value={digit}
            textStyle={textStyle}
          />
        ))}
    </View>
  );
}

/* ---- Single digit with slide animation ---- */

function SingleDigit({
  value,
  textStyle,
}: {
  value: string;
  textStyle?: StyleProp<TextStyle>;
}) {
  const prev = useRef(value);
  const translateY = useSharedValue(0);

  useEffect(() => {
    if (prev.current !== value) {
      const currentVal = parseInt(value) || 0;
      const prevVal = parseInt(prev.current) || 0;
      const direction = currentVal > prevVal ? -1 : 1;

      translateY.value = withSequence(
        withTiming(direction * 24, { duration: 0 }),
        withTiming(0, { duration: 400, easing: Easing.out(Easing.cubic) }),
      );
      prev.current = value;
    }
  }, [value, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={componentStyles.digitContainer}>
      <Animated.Text style={[componentStyles.digit, textStyle, animatedStyle]}>
        {value}
      </Animated.Text>
    </View>
  );
}

/* ------------------------------------------------------------------ */
/*  AnimatedScore                                                      */
/* ------------------------------------------------------------------ */

export interface AnimatedScoreProps {
  value: number;
  duration?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export function AnimatedScore({
  value,
  duration = 400,
  style,
  textStyle,
}: AnimatedScoreProps) {
  const prevRef = useRef(value);
  const direction = value >= prevRef.current ? "forwards" : "backwards";

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return (
    <View style={mergeStyles(componentStyles.scoreRow, style)}>
      {value
        .toString()
        .split("")
        .map((digit, index) => (
          <ScoreDigit
            key={`${index}-${value.toString().length}`}
            digit={digit}
            direction={direction}
            duration={duration}
            textStyle={textStyle}
          />
        ))}
    </View>
  );
}

/* ---- Score digit with color feedback ---- */

const SCORE_COLORS = {
  increase: "#37ff1a",
  decrease: "#ff1a4b",
  neutral: "#ffffff",
};

function ScoreDigit({
  digit,
  direction,
  duration,
  textStyle,
}: {
  digit: string;
  direction: string;
  duration: number;
  textStyle?: StyleProp<TextStyle>;
}) {
  const translateY = useSharedValue(0);
  const scaleVal = useSharedValue(1);
  const opacity = useSharedValue(1);
  const prev = useRef(digit);

  useEffect(() => {
    if (prev.current !== digit) {
      const fromY = direction === "forwards" ? -40 : 40;

      translateY.value = withSequence(
        withTiming(fromY, { duration: 0 }),
        withTiming(0, { duration, easing: Easing.out(Easing.back(1.5)) }),
      );

      scaleVal.value = withSequence(
        withTiming(1.5, { duration: 0 }),
        withTiming(1, { duration, easing: Easing.out(Easing.cubic) }),
      );

      opacity.value = withSequence(
        withTiming(0.2, { duration: 0 }),
        withTiming(1, { duration: duration * 0.5 }),
      );

      prev.current = digit;
    }
  }, [digit, direction, duration, translateY, scaleVal, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value },
      { scale: scaleVal.value },
    ],
    opacity: opacity.value,
  }));

  const textColor =
    direction === "forwards"
      ? SCORE_COLORS.increase
      : direction === "backwards"
      ? SCORE_COLORS.decrease
      : SCORE_COLORS.neutral;

  return (
    <View style={componentStyles.scoreDigitContainer}>
      <Animated.Text
        style={[componentStyles.scoreDigit, { color: textColor }, textStyle, animatedStyle]}
      >
        {digit}
      </Animated.Text>
    </View>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const componentStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  digitContainer: {
    overflow: "hidden",
  },
  digit: {
    fontSize: 24,
    fontVariant: ["tabular-nums"],
    color: colors.foreground,
  },
  scoreRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  scoreDigitContainer: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  scoreDigit: {
    fontSize: 24,
    fontVariant: ["tabular-nums"],
    fontWeight: "700",
  },
});
