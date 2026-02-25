import { StyleProp, ViewStyle, TextStyle, ImageStyle } from "react-native";

type Style = StyleProp<ViewStyle | TextStyle | ImageStyle>;

/**
 * Merge multiple style values into a single flat array, filtering out
 * falsy entries. This is the React Native equivalent of the web `cn()` helper.
 *
 * @example
 *   <View style={mergeStyles(styles.base, isActive && styles.active, customStyle)} />
 */
export function mergeStyles(...styles: (Style | undefined | false | null)[]): Style[] {
  return styles.filter(Boolean) as Style[];
}
