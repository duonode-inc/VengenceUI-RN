import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
  PressableProps,
} from "react-native";
import { colors } from "../theme";
import { mergeStyles } from "../utils";

/* ------------------------------------------------------------------ */
/*  Variant & size maps                                                */
/* ------------------------------------------------------------------ */

const variantStyles: Record<string, { container: ViewStyle; text: TextStyle }> = {
  default: {
    container: {
      backgroundColor: colors.primary,
    },
    text: { color: colors.primaryForeground },
  },
  destructive: {
    container: {
      backgroundColor: colors.destructive,
    },
    text: { color: colors.destructiveForeground },
  },
  outline: {
    container: {
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.border,
    },
    text: { color: colors.foreground },
  },
  secondary: {
    container: {
      backgroundColor: colors.secondary,
    },
    text: { color: colors.secondaryForeground },
  },
  ghost: {
    container: {
      backgroundColor: "transparent",
    },
    text: { color: colors.foreground },
  },
  link: {
    container: {
      backgroundColor: "transparent",
    },
    text: {
      color: colors.primary,
      textDecorationLine: "underline",
    },
  },
};

const sizeStyles: Record<string, { container: ViewStyle; text: TextStyle }> = {
  default: {
    container: { height: 36, paddingHorizontal: 16, paddingVertical: 8 },
    text: { fontSize: 14 },
  },
  sm: {
    container: { height: 32, paddingHorizontal: 12 },
    text: { fontSize: 13 },
  },
  lg: {
    container: { height: 40, paddingHorizontal: 24 },
    text: { fontSize: 16 },
  },
  icon: {
    container: { height: 36, width: 36, paddingHorizontal: 0 },
    text: { fontSize: 14 },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export interface ButtonProps extends PressableProps {
  /** Visual variant */
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  /** Size preset */
  size?: "default" | "sm" | "lg" | "icon";
  /** Button label — when a string is passed it is wrapped in <Text> automatically */
  children?: React.ReactNode;
  /** Override container style */
  style?: StyleProp<ViewStyle>;
  /** Override text style */
  textStyle?: StyleProp<TextStyle>;
}

export function Button({
  variant = "default",
  size = "default",
  children,
  disabled,
  style,
  textStyle,
  ...rest
}: ButtonProps) {
  const v = variantStyles[variant] ?? variantStyles.default;
  const s = sizeStyles[size] ?? sizeStyles.default;

  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) =>
        mergeStyles(
          styles.base,
          v.container,
          s.container,
          pressed && styles.pressed,
          disabled && styles.disabled,
          style,
        )
      }
      accessibilityRole="button"
      {...rest}
    >
      {typeof children === "string" ? (
        <Text style={mergeStyles(styles.text, v.text, s.text, textStyle)}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    gap: 8,
  },
  text: {
    fontWeight: "500",
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.5,
  },
});
