import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle, StyleProp } from "react-native";
import { colors, radii } from "../theme";
import { mergeStyles } from "../utils";

/* ------------------------------------------------------------------ */
/*  Variant map                                                        */
/* ------------------------------------------------------------------ */

const variantStyles: Record<string, { container: ViewStyle; text: TextStyle }> = {
  default: {
    container: { backgroundColor: colors.primary, borderColor: "transparent" },
    text: { color: colors.primaryForeground },
  },
  secondary: {
    container: { backgroundColor: colors.secondary, borderColor: "transparent" },
    text: { color: colors.secondaryForeground },
  },
  destructive: {
    container: { backgroundColor: colors.destructive, borderColor: "transparent" },
    text: { color: colors.destructiveForeground },
  },
  outline: {
    container: { backgroundColor: "transparent", borderColor: colors.border },
    text: { color: colors.foreground },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export interface BadgeProps {
  variant?: "default" | "secondary" | "destructive" | "outline";
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export function Badge({
  variant = "default",
  children,
  style,
  textStyle,
}: BadgeProps) {
  const v = variantStyles[variant] ?? variantStyles.default;

  return (
    <View style={mergeStyles(styles.container, v.container, style)}>
      {typeof children === "string" ? (
        <Text style={mergeStyles(styles.text, v.text, textStyle)}>{children}</Text>
      ) : (
        children
      )}
    </View>
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
    borderRadius: radii.full,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
  },
});
