import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle, StyleProp } from "react-native";
import { colors, spacing, radii } from "../theme";
import { mergeStyles } from "../utils";

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */

export interface CardProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function Card({ children, style }: CardProps) {
  return <View style={mergeStyles(styles.card, style)}>{children}</View>;
}

/* ------------------------------------------------------------------ */
/*  CardHeader                                                         */
/* ------------------------------------------------------------------ */

export interface CardHeaderProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function CardHeader({ children, style }: CardHeaderProps) {
  return <View style={mergeStyles(styles.cardHeader, style)}>{children}</View>;
}

/* ------------------------------------------------------------------ */
/*  CardTitle                                                          */
/* ------------------------------------------------------------------ */

export interface CardTitleProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export function CardTitle({ children, style }: CardTitleProps) {
  return (
    <Text style={mergeStyles(styles.cardTitle, style)}>
      {children}
    </Text>
  );
}

/* ------------------------------------------------------------------ */
/*  CardDescription                                                    */
/* ------------------------------------------------------------------ */

export interface CardDescriptionProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export function CardDescription({ children, style }: CardDescriptionProps) {
  return (
    <Text style={mergeStyles(styles.cardDescription, style)}>
      {children}
    </Text>
  );
}

/* ------------------------------------------------------------------ */
/*  CardContent                                                        */
/* ------------------------------------------------------------------ */

export interface CardContentProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function CardContent({ children, style }: CardContentProps) {
  return <View style={mergeStyles(styles.cardContent, style)}>{children}</View>;
}

/* ------------------------------------------------------------------ */
/*  CardFooter                                                         */
/* ------------------------------------------------------------------ */

export interface CardFooterProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function CardFooter({ children, style }: CardFooterProps) {
  return <View style={mergeStyles(styles.cardFooter, style)}>{children}</View>;
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radii.xl,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.lg,
    gap: spacing.lg,
    // shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    // shadow (Android)
    elevation: 1,
  },
  cardHeader: {
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.cardForeground,
  },
  cardDescription: {
    fontSize: 14,
    color: colors.mutedForeground,
  },
  cardContent: {
    paddingHorizontal: spacing.lg,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
  },
});
