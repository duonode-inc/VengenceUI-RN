import React from "react";
import { Text, StyleSheet, TextStyle, StyleProp } from "react-native";
import { colors } from "../theme";
import { mergeStyles } from "../utils";

export interface LabelProps {
  children?: React.ReactNode;
  /** Whether the associated field is disabled */
  disabled?: boolean;
  /** Override text style */
  style?: StyleProp<TextStyle>;
}

export function Label({ children, disabled = false, style }: LabelProps) {
  return (
    <Text
      style={mergeStyles(styles.label, disabled && styles.disabled, style)}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.foreground,
  },
  disabled: {
    opacity: 0.5,
  },
});
