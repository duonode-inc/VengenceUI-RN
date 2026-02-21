/**
 * VengeanceUI — React Native
 *
 * Modern, animated UI components for React Native.
 * Built with react-native-reanimated for smooth 60 fps animations.
 */

// Components
export { Button } from "./components/Button";
export type { ButtonProps } from "./components/Button";

export { AnimatedButton } from "./components/AnimatedButton";
export type { AnimatedButtonProps } from "./components/AnimatedButton";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/Card";
export type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
} from "./components/Card";

export { Input } from "./components/Input";
export type { InputProps } from "./components/Input";

export { Badge } from "./components/Badge";
export type { BadgeProps } from "./components/Badge";

export { Avatar } from "./components/Avatar";
export type { AvatarProps } from "./components/Avatar";

export { AnimatedNumber, AnimatedScore } from "./components/AnimatedNumber";
export type {
  AnimatedNumberProps,
  AnimatedScoreProps,
} from "./components/AnimatedNumber";

export { FlipText } from "./components/FlipText";
export type { FlipTextProps } from "./components/FlipText";

// Theme & utilities
export { colors, darkColors, spacing, radii, fontSizes } from "./theme";
export type { ThemeColors } from "./theme";
export { mergeStyles } from "./utils";
