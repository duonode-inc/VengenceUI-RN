import React, { useMemo, useEffect } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, StyleProp } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  withDelay,
  Easing,
} from "react-native-reanimated";
import { colors } from "../theme";
import { mergeStyles } from "../utils";

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

export interface FlipTextProps {
  /** The text content to animate */
  children: string;
  /** Duration of the flip animation in milliseconds (default 2200) */
  duration?: number;
  /** Initial delay before animation starts in milliseconds (default 0) */
  delay?: number;
  /** Whether the animation should loop infinitely (default true) */
  loop?: boolean;
  /** Custom separator for splitting text (default " ") */
  separator?: string;
  /** Whether all characters animate together (default false) */
  together?: boolean;
  /** Override container style */
  style?: StyleProp<ViewStyle>;
  /** Override character text style */
  textStyle?: StyleProp<TextStyle>;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function FlipText({
  children,
  duration = 2200,
  delay = 0,
  loop = true,
  separator = " ",
  together = false,
  style,
  textStyle,
}: FlipTextProps) {
  const words = useMemo(() => children.split(separator), [children, separator]);
  const totalChars = children.length;

  const getCharIndex = (wordIndex: number, charIndex: number) => {
    let idx = 0;
    for (let i = 0; i < wordIndex; i++) {
      idx += words[i].length + (separator === " " ? 1 : separator.length);
    }
    return idx + charIndex;
  };

  return (
    <View style={mergeStyles(flipStyles.wrapper, style)}>
      {words.map((word, wordIndex) => (
        <View key={`${wordIndex}-${word}`} style={flipStyles.word}>
          {word.split("").map((char, charIndex) => {
            const globalIndex = getCharIndex(wordIndex, charIndex);
            let charDelay = delay;
            if (!together) {
              const normalized = globalIndex / totalChars;
              const sine = Math.sin(normalized * (Math.PI / 2));
              charDelay = sine * (duration * 0.25) + delay;
            }
            return (
              <FlipChar
                key={`${wordIndex}-${charIndex}-${char}`}
                char={char}
                duration={duration}
                delay={charDelay}
                loop={loop}
                textStyle={textStyle}
              />
            );
          })}
          {separator === " " && wordIndex < words.length - 1 && (
            <Animated.Text style={[flipStyles.char, textStyle]}>{" "}</Animated.Text>
          )}
          {separator !== " " && wordIndex < words.length - 1 && (
            <Animated.Text style={[flipStyles.char, textStyle]}>
              {separator}
            </Animated.Text>
          )}
        </View>
      ))}
    </View>
  );
}

/* ---- Single flipping character ---- */

function FlipChar({
  char,
  duration,
  delay: charDelay,
  loop,
  textStyle,
}: {
  char: string;
  duration: number;
  delay: number;
  loop: boolean;
  textStyle?: StyleProp<TextStyle>;
}) {
  const rotateX = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    const halfDur = duration / 2;
    const flipAnimation = withSequence(
      withTiming(90, { duration: halfDur, easing: Easing.inOut(Easing.cubic) }),
      withTiming(0, { duration: halfDur, easing: Easing.inOut(Easing.cubic) }),
    );
    const opacityAnimation = withSequence(
      withTiming(0.3, { duration: halfDur, easing: Easing.inOut(Easing.cubic) }),
      withTiming(1, { duration: halfDur, easing: Easing.inOut(Easing.cubic) }),
    );

    if (loop) {
      rotateX.value = withDelay(
        charDelay,
        withRepeat(flipAnimation, -1, false),
      );
      opacity.value = withDelay(
        charDelay,
        withRepeat(opacityAnimation, -1, false),
      );
    } else {
      rotateX.value = withDelay(charDelay, flipAnimation);
      opacity.value = withDelay(charDelay, opacityAnimation);
    }
  }, [charDelay, duration, loop, rotateX, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { rotateX: `${rotateX.value}deg` },
    ],
    opacity: opacity.value,
  }));

  return (
    <Animated.Text style={[flipStyles.char, textStyle, animatedStyle]}>
      {char}
    </Animated.Text>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const flipStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  word: {
    flexDirection: "row",
  },
  char: {
    fontSize: 24,
    color: colors.foreground,
  },
});
