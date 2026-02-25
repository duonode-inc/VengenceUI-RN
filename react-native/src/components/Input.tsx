import React from "react";
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
  StyleProp,
  View,
} from "react-native";
import { colors, radii } from "../theme";
import { mergeStyles } from "../utils";

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

export interface InputProps extends TextInputProps {
  /** Wrapping View style — use for width / margin / etc. */
  containerStyle?: StyleProp<ViewStyle>;
  /** Override TextInput style */
  style?: StyleProp<TextStyle>;
  /** Mark as invalid (shows destructive border) */
  invalid?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function Input({
  containerStyle,
  style,
  invalid,
  editable = true,
  ...rest
}: InputProps) {
  const [focused, setFocused] = React.useState(false);

  return (
    <View style={mergeStyles(styles.wrapper, containerStyle)}>
      <TextInput
        editable={editable}
        onFocus={(e) => {
          setFocused(true);
          rest.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          rest.onBlur?.(e);
        }}
        placeholderTextColor={colors.mutedForeground}
        style={mergeStyles(
          styles.input,
          focused && styles.focused,
          invalid && styles.invalid,
          !editable && styles.disabled,
          style,
        )}
        {...rest}
      />
    </View>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  input: {
    height: 36,
    width: "100%",
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.input,
    backgroundColor: "transparent",
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 14,
    color: colors.foreground,
  },
  focused: {
    borderColor: colors.ring,
  },
  invalid: {
    borderColor: colors.destructive,
  },
  disabled: {
    opacity: 0.5,
  },
});
