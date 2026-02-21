import React from "react";
import { View, Text, Image, StyleSheet, ViewStyle, TextStyle, StyleProp, ImageSourcePropType } from "react-native";
import { colors, radii } from "../theme";
import { mergeStyles } from "../utils";

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

export interface AvatarProps {
  /** Image source (uri or require) */
  source?: ImageSourcePropType;
  /** Fallback text shown when image is not available (e.g. user initials) */
  fallback?: string;
  /** Diameter in points (default 32) */
  size?: number;
  /** Override container style */
  style?: StyleProp<ViewStyle>;
  /** Override fallback text style */
  textStyle?: StyleProp<TextStyle>;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function Avatar({
  source,
  fallback,
  size = 32,
  style,
  textStyle,
}: AvatarProps) {
  const [imgError, setImgError] = React.useState(false);
  const showFallback = !source || imgError;

  const dynamic: ViewStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return (
    <View style={mergeStyles(styles.container, dynamic, style)}>
      {!showFallback ? (
        <Image
          source={source}
          style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
          onError={() => setImgError(true)}
        />
      ) : (
        <View style={[styles.fallback, dynamic]}>
          <Text
            style={mergeStyles(
              styles.fallbackText,
              { fontSize: size * 0.4 },
              textStyle,
            )}
          >
            {fallback ?? "?"}
          </Text>
        </View>
      )}
    </View>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "cover",
  },
  fallback: {
    backgroundColor: colors.muted,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackText: {
    color: colors.mutedForeground,
    fontWeight: "600",
  },
});
