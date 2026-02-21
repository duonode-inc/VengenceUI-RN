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

export interface TextareaProps extends TextInputProps {
  /** Wrapping View style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Override TextInput style */
  style?: StyleProp<TextStyle>;
  /** Mark as invalid (shows destructive border) */
  invalid?: boolean;
}

export function Textarea({
  containerStyle,
  style,
  invalid,
  editable = true,
  ...rest
}: TextareaProps) {
  const [focused, setFocused] = React.useState(false);

  return (
    <View style={mergeStyles(styles.wrapper, containerStyle)}>
      <TextInput
        multiline
        textAlignVertical="top"
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
          styles.textarea,
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

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  textarea: {
    minHeight: 64,
    width: "100%",
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.input,
    backgroundColor: "transparent",
    paddingHorizontal: 12,
    paddingVertical: 8,
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
