import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle, StyleProp } from "react-native";
import { colors, radii } from "../theme";
import { mergeStyles } from "../utils";

/* ------------------------------------------------------------------ */
/*  Variant map                                                        */
/* ------------------------------------------------------------------ */

const variantStyles: Record<string, { container: ViewStyle; title: TextStyle; description: TextStyle }> = {
  default: {
    container: {
      backgroundColor: colors.card,
      borderColor: colors.border,
    },
    title: { color: colors.cardForeground },
    description: { color: colors.mutedForeground },
  },
  destructive: {
    container: {
      backgroundColor: colors.card,
      borderColor: colors.border,
    },
    title: { color: colors.destructive },
    description: { color: colors.destructive },
  },
};

/* ------------------------------------------------------------------ */
/*  Alert                                                              */
/* ------------------------------------------------------------------ */

export interface AlertProps {
  variant?: "default" | "destructive";
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function Alert({
  variant = "default",
  children,
  style,
}: AlertProps) {
  const v = variantStyles[variant] ?? variantStyles.default;

  return (
    <View
      accessibilityRole="alert"
      style={mergeStyles(styles.container, v.container, style)}
    >
      {children}
    </View>
  );
}

/* ------------------------------------------------------------------ */
/*  AlertTitle                                                         */
/* ------------------------------------------------------------------ */

export interface AlertTitleProps {
  children?: React.ReactNode;
  variant?: "default" | "destructive";
  style?: StyleProp<TextStyle>;
}

export function AlertTitle({
  children,
  variant = "default",
  style,
}: AlertTitleProps) {
  const v = variantStyles[variant] ?? variantStyles.default;

  return (
    <Text style={mergeStyles(styles.title, v.title, style)} numberOfLines={1}>
      {children}
    </Text>
  );
}

/* ------------------------------------------------------------------ */
/*  AlertDescription                                                   */
/* ------------------------------------------------------------------ */

export interface AlertDescriptionProps {
  children?: React.ReactNode;
  variant?: "default" | "destructive";
  style?: StyleProp<TextStyle>;
}

export function AlertDescription({
  children,
  variant = "default",
  style,
}: AlertDescriptionProps) {
  const v = variantStyles[variant] ?? variantStyles.default;

  return (
    <Text style={mergeStyles(styles.description, v.description, style)}>
      {children}
    </Text>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: radii.lg,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: -0.2,
  },
  description: {
    fontSize: 14,
  },
});
