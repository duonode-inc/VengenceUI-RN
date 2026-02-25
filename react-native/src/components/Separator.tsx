import React from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";
import { colors } from "../theme";
import { mergeStyles } from "../utils";

export interface SeparatorProps {
  /** Orientation of the separator */
  orientation?: "horizontal" | "vertical";
  /** Override style */
  style?: StyleProp<ViewStyle>;
}

export function Separator({
  orientation = "horizontal",
  style,
}: SeparatorProps) {
  return (
    <View
      accessibilityRole="none"
      style={mergeStyles(
        orientation === "horizontal"
          ? styles.horizontal
          : styles.vertical,
        style,
      )}
    />
  );
}

const styles = StyleSheet.create({
  horizontal: {
    height: 1,
    width: "100%",
    backgroundColor: colors.border,
  },
  vertical: {
    width: 1,
    height: "100%",
    backgroundColor: colors.border,
  },
});
