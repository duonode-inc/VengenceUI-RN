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

export { Textarea } from "./components/Textarea";
export type { TextareaProps } from "./components/Textarea";

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

export { FlipFadeText } from "./components/FlipFadeText";
export type { FlipFadeTextProps } from "./components/FlipFadeText";

export { Separator } from "./components/Separator";
export type { SeparatorProps } from "./components/Separator";

export { Skeleton } from "./components/Skeleton";
export type { SkeletonProps } from "./components/Skeleton";

export { Progress } from "./components/Progress";
export type { ProgressProps } from "./components/Progress";

export { Switch } from "./components/Switch";
export type { SwitchProps } from "./components/Switch";

export { Checkbox } from "./components/Checkbox";
export type { CheckboxProps } from "./components/Checkbox";

export { Alert, AlertTitle, AlertDescription } from "./components/Alert";
export type {
  AlertProps,
  AlertTitleProps,
  AlertDescriptionProps,
} from "./components/Alert";

export { Label } from "./components/Label";
export type { LabelProps } from "./components/Label";

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "./components/Tabs";
export type {
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
} from "./components/Tabs";

// Theme & utilities
export { colors, darkColors, spacing, radii, fontSizes } from "./theme";
export type { ThemeColors } from "./theme";
export { mergeStyles } from "./utils";
