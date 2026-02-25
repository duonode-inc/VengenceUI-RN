import React, { useState, useEffect, useMemo, useCallback } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, StyleProp } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";
import { colors } from "../theme";
import { mergeStyles } from "../utils";

export interface FlipFadeTextProps {
  /** Array of words to cycle through */
  words?: string[];
  /** Interval between word changes in milliseconds */
  interval?: number;
  /** Override container style */
  style?: StyleProp<ViewStyle>;
  /** Override text style */
  textStyle?: StyleProp<TextStyle>;
  /** Animation duration for each letter in milliseconds */
  letterDuration?: number;
  /** Stagger delay between letters in milliseconds */
  staggerDelay?: number;
}

const DEFAULT_WORDS = ["LOADING", "COMPUTING", "SEARCHING", "RETRIEVING", "ASSEMBLING"];

export function FlipFadeText({
  words = DEFAULT_WORDS,
  interval = 2500,
  style,
  textStyle,
  letterDuration = 600,
  staggerDelay = 100,
}: FlipFadeTextProps) {
  const [index, setIndex] = useState(0);

  const updateIndex = useCallback(() => {
    setIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const timer = setInterval(updateIndex, interval);
    return () => clearInterval(timer);
  }, [updateIndex, interval]);

  const currentWord = useMemo(() => words[index], [words, index]);

  return (
    <View style={mergeStyles(componentStyles.container, style)}>
      <FlipFadeWord
        key={currentWord}
        text={currentWord}
        letterDuration={letterDuration}
        staggerDelay={staggerDelay}
        textStyle={textStyle}
      />
    </View>
  );
}

function FlipFadeWord({
  text,
  letterDuration,
  staggerDelay,
  textStyle,
}: {
  text: string;
  letterDuration: number;
  staggerDelay: number;
  textStyle?: StyleProp<TextStyle>;
}) {
  const letters = useMemo(() => text.split(""), [text]);

  return (
    <Animated.View
      entering={FadeIn.duration(300)}
      exiting={FadeOut.duration(200)}
      style={componentStyles.wordContainer}
    >
      {letters.map((char, i) => (
        <FlipFadeLetter
          key={`${char}-${i}`}
          char={char}
          delay={i * staggerDelay}
          duration={letterDuration}
          textStyle={textStyle}
        />
      ))}
    </Animated.View>
  );
}

function FlipFadeLetter({
  char,
  delay,
  duration,
  textStyle,
}: {
  char: string;
  delay: number;
  duration: number;
  textStyle?: StyleProp<TextStyle>;
}) {
  const rotateX = useSharedValue(90);
  const translateY = useSharedValue(20);
  const opacity = useSharedValue(0);

  useEffect(() => {
    rotateX.value = withDelay(
      delay,
      withTiming(0, { duration, easing: Easing.bezier(0.2, 0.65, 0.3, 0.9) }),
    );
    translateY.value = withDelay(
      delay,
      withTiming(0, { duration, easing: Easing.bezier(0.2, 0.65, 0.3, 0.9) }),
    );
    opacity.value = withDelay(
      delay,
      withTiming(1, { duration: duration * 0.6, easing: Easing.out(Easing.cubic) }),
    );
  }, [delay, duration, rotateX, translateY, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { rotateX: `${rotateX.value}deg` },
      { translateY: translateY.value },
    ],
    opacity: opacity.value,
  }));

  return (
    <Animated.Text
      style={[componentStyles.letter, textStyle, animatedStyle]}
    >
      {char}
    </Animated.Text>
  );
}

const componentStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 80,
  },
  wordContainer: {
    flexDirection: "row",
    gap: 2,
  },
  letter: {
    fontSize: 32,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 2,
    color: colors.foreground,
  },
});
