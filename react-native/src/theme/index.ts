/**
 * VengeanceUI React Native — Design Tokens
 *
 * A theme system that mirrors the web VengeanceUI palette so components look
 * consistent across platforms. Consumers can override these values via the
 * `ThemeProvider` or by passing custom `colors` to individual components.
 */

export const colors = {
  /** Core */
  primary: "#171717",
  primaryForeground: "#fafafa",

  secondary: "#f5f5f5",
  secondaryForeground: "#171717",

  destructive: "#ef4444",
  destructiveForeground: "#ffffff",

  /** Surfaces */
  background: "#ffffff",
  foreground: "#0a0a0a",

  card: "#ffffff",
  cardForeground: "#0a0a0a",

  muted: "#f5f5f5",
  mutedForeground: "#737373",

  accent: "#f5f5f5",
  accentForeground: "#171717",

  /** Borders & rings */
  border: "#e5e5e5",
  input: "#e5e5e5",
  ring: "#0a0a0a",
};

export const darkColors: typeof colors = {
  primary: "#fafafa",
  primaryForeground: "#171717",

  secondary: "#262626",
  secondaryForeground: "#fafafa",

  destructive: "#dc2626",
  destructiveForeground: "#ffffff",

  background: "#0a0a0a",
  foreground: "#fafafa",

  card: "#0a0a0a",
  cardForeground: "#fafafa",

  muted: "#262626",
  mutedForeground: "#a3a3a3",

  accent: "#262626",
  accentForeground: "#fafafa",

  border: "#262626",
  input: "#262626",
  ring: "#d4d4d4",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radii = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;

export const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
} as const;

export type ThemeColors = typeof colors;
