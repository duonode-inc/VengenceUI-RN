# VengeanceUI — React Native

Modern, animated UI components for React Native, powered by [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/).

> This is the React Native port of [VengeanceUI](../README.md). It provides the same beautiful, animation-first design language re-built with React Native primitives and 60 fps Reanimated animations.

---

## 🚀 Quick Start

### 1. Install peer dependencies

```bash
# npm
npm install react-native-reanimated

# yarn
yarn add react-native-reanimated
```

> **Note:** `react-native-reanimated` requires a Babel plugin. Add it to your `babel.config.js`:
>
> ```js
> module.exports = {
>   presets: ['module:@react-native/babel-preset'],
>   plugins: ['react-native-reanimated/plugin'], // must be last
> };
> ```
>
> For Expo projects, the plugin is included automatically when using `expo-dev-client`.

### 2. Install or copy the library

**Option A — Install as a package** (when published):

```bash
npm install vengenceui-rn
```

**Option B — Copy-paste** into your project:

```bash
cp -r react-native/src/components ./src/vengenceui
cp -r react-native/src/theme ./src/vengenceui/theme
cp -r react-native/src/utils ./src/vengenceui/utils
```

### 3. Import and use

```tsx
// When installed as a package:
import { Button, Card, CardHeader, CardTitle } from 'vengenceui-rn';

// When copy-pasted:
import { Button, Card, CardHeader, CardTitle } from './vengenceui';
```

---

## 📦 Full Import Reference

Every component and type is exported from the library entry point:

```tsx
import {
  // Core
  Button,
  AnimatedButton,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Input,
  Textarea,
  Badge,
  Avatar,
  Label,

  // Layout
  Separator,
  Tabs, TabsList, TabsTrigger, TabsContent,

  // Feedback
  Alert, AlertTitle, AlertDescription,
  Progress,
  Skeleton,

  // Controls
  Switch,
  Checkbox,

  // Animated text
  AnimatedNumber,
  AnimatedScore,
  FlipText,
  FlipFadeText,

  // Theme & utilities
  colors,
  darkColors,
  spacing,
  radii,
  fontSizes,
  mergeStyles,
} from 'vengenceui-rn'; // or './vengenceui'

// TypeScript types
import type {
  ButtonProps,
  AnimatedButtonProps,
  CardProps, CardHeaderProps, CardTitleProps, CardDescriptionProps, CardContentProps, CardFooterProps,
  InputProps,
  TextareaProps,
  BadgeProps,
  AvatarProps,
  LabelProps,
  SeparatorProps,
  TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps,
  AlertProps, AlertTitleProps, AlertDescriptionProps,
  ProgressProps,
  SkeletonProps,
  SwitchProps,
  CheckboxProps,
  AnimatedNumberProps,
  AnimatedScoreProps,
  FlipTextProps,
  FlipFadeTextProps,
  ThemeColors,
} from 'vengenceui-rn';
```

---

## 📦 Components

### Button

A flexible button with variant and size presets.

```tsx
import { Button } from 'vengenceui-rn';

<Button variant="default" size="default" onPress={() => {}}>
  Click Me
</Button>

<Button variant="destructive" size="lg" onPress={() => {}}>
  Delete
</Button>

<Button variant="outline" size="sm" onPress={() => {}}>
  Cancel
</Button>

<Button variant="ghost" onPress={() => {}}>
  Ghost
</Button>

<Button variant="link" onPress={() => {}}>
  Learn More
</Button>
```

| Prop       | Type                                                                  | Default     |
|------------|-----------------------------------------------------------------------|-------------|
| `variant`  | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` |
| `size`     | `'default' \| 'sm' \| 'lg' \| 'icon'`                                | `'default'` |
| `children` | `ReactNode \| string`                                                 | —           |
| `disabled` | `boolean`                                                             | `false`     |
| `style`    | `StyleProp<ViewStyle>`                                                | —           |
| `textStyle`| `StyleProp<TextStyle>`                                                | —           |

Plus all `PressableProps` from React Native.

---

### AnimatedButton

A spring-animated button with a shimmer effect, powered by `react-native-reanimated`.

```tsx
import { AnimatedButton } from 'vengenceui-rn';

<AnimatedButton onPress={() => console.log('pressed!')}>
  Browse Components
</AnimatedButton>
```

| Prop       | Type                   | Default              |
|------------|------------------------|----------------------|
| `children` | `ReactNode \| string`  | `'Browse Components'`|
| `onPress`  | `() => void`           | —                    |
| `disabled` | `boolean`              | `false`              |
| `style`    | `StyleProp<ViewStyle>` | —                    |
| `textStyle`| `StyleProp<TextStyle>` | —                    |

---

### Card

A card system with composable sub-components.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'vengenceui-rn';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Your content here */}
  </CardContent>
  <CardFooter>
    <Button onPress={() => {}}>Action</Button>
  </CardFooter>
</Card>
```

All sub-components accept `style` prop for customization.

---

### Input

A styled `TextInput` wrapper with focus & validation states.

```tsx
import { Input } from 'vengenceui-rn';

<Input placeholder="Email address" keyboardType="email-address" />
<Input placeholder="Required field" invalid />
<Input placeholder="Read only" editable={false} />
```

| Prop             | Type                    | Default |
|------------------|-------------------------|---------|
| `invalid`        | `boolean`               | `false` |
| `containerStyle` | `StyleProp<ViewStyle>`  | —       |
| `style`          | `StyleProp<TextStyle>`  | —       |

Plus all `TextInputProps` from React Native.

---

### Textarea

A multiline text input with the same styling as Input.

```tsx
import { Textarea } from 'vengenceui-rn';

<Textarea placeholder="Enter description…" />
<Textarea placeholder="Invalid" invalid />
<Textarea placeholder="Read only" editable={false} />
```

| Prop             | Type                    | Default |
|------------------|-------------------------|---------|
| `invalid`        | `boolean`               | `false` |
| `containerStyle` | `StyleProp<ViewStyle>`  | —       |
| `style`          | `StyleProp<TextStyle>`  | —       |

Plus all `TextInputProps` from React Native.

---

### Badge

Small status indicator with variant support.

```tsx
import { Badge } from 'vengenceui-rn';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

| Prop       | Type                                                    | Default     |
|------------|---------------------------------------------------------|-------------|
| `variant`  | `'default' \| 'secondary' \| 'destructive' \| 'outline'` | `'default'` |
| `children` | `ReactNode \| string`                                    | —           |
| `style`    | `StyleProp<ViewStyle>`                                   | —           |
| `textStyle`| `StyleProp<TextStyle>`                                   | —           |

---

### Avatar

Circular avatar with image source and text fallback.

```tsx
import { Avatar } from 'vengenceui-rn';

<Avatar source={{ uri: 'https://example.com/avatar.jpg' }} size={48} />
<Avatar fallback="AB" size={48} />
```

| Prop       | Type                    | Default |
|------------|-------------------------|---------|
| `source`   | `ImageSourcePropType`   | —       |
| `fallback` | `string`                | `'?'`  |
| `size`     | `number`                | `32`    |
| `style`    | `StyleProp<ViewStyle>`  | —       |
| `textStyle`| `StyleProp<TextStyle>`  | —       |

---

### Label

Form label text component.

```tsx
import { Label } from 'vengenceui-rn';

<Label>Email address</Label>
<Label disabled>Disabled field</Label>
```

| Prop       | Type                    | Default |
|------------|-------------------------|---------|
| `disabled` | `boolean`               | `false` |
| `style`    | `StyleProp<TextStyle>`  | —       |

---

### Separator

Visual divider for content sections.

```tsx
import { Separator } from 'vengenceui-rn';

<Separator />                         {/* horizontal */}
<Separator orientation="vertical" />  {/* vertical */}
```

| Prop          | Type                          | Default        |
|---------------|-------------------------------|----------------|
| `orientation` | `'horizontal' \| 'vertical'`  | `'horizontal'` |
| `style`       | `StyleProp<ViewStyle>`        | —              |

---

### Skeleton

Animated loading placeholder with pulse effect.

```tsx
import { Skeleton } from 'vengenceui-rn';

<Skeleton height={20} />
<Skeleton height={40} width={40} circle />
<Skeleton height={12} width={200} />
```

| Prop           | Type                   | Default    |
|----------------|------------------------|------------|
| `width`        | `number \| string`     | `'100%'`   |
| `height`       | `number`               | `20`       |
| `borderRadius` | `number`               | `radii.md` |
| `circle`       | `boolean`              | `false`    |
| `style`        | `StyleProp<ViewStyle>` | —          |

---

### Progress

Animated progress bar with smooth transitions.

```tsx
import { Progress } from 'vengenceui-rn';

<Progress value={65} />
<Progress value={100} />
```

| Prop             | Type                   | Default |
|------------------|------------------------|---------|
| `value`          | `number` (0–100)       | `0`     |
| `style`          | `StyleProp<ViewStyle>` | —       |
| `indicatorStyle` | `StyleProp<ViewStyle>` | —       |

---

### Switch

Animated toggle switch.

```tsx
import { Switch } from 'vengenceui-rn';

const [on, setOn] = useState(false);

<Switch value={on} onValueChange={setOn} />
<Switch value={on} onValueChange={setOn} disabled />
```

| Prop            | Type                       | Default |
|-----------------|----------------------------|---------|
| `value`         | `boolean`                  | `false` |
| `onValueChange` | `(value: boolean) => void` | —       |
| `disabled`      | `boolean`                  | `false` |
| `style`         | `StyleProp<ViewStyle>`     | —       |

---

### Checkbox

Animated checkbox with press feedback.

```tsx
import { Checkbox } from 'vengenceui-rn';

const [checked, setChecked] = useState(false);

<Checkbox checked={checked} onCheckedChange={setChecked} />
<Checkbox checked={checked} onCheckedChange={setChecked} disabled />
```

| Prop              | Type                         | Default |
|-------------------|------------------------------|---------|
| `checked`         | `boolean`                    | `false` |
| `onCheckedChange` | `(checked: boolean) => void` | —       |
| `disabled`        | `boolean`                    | `false` |
| `style`           | `StyleProp<ViewStyle>`       | —       |

---

### Alert

Alert container with title and description sub-components.

```tsx
import { Alert, AlertTitle, AlertDescription } from 'vengenceui-rn';

<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>This is an informational alert.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle variant="destructive">Error</AlertTitle>
  <AlertDescription variant="destructive">Something went wrong.</AlertDescription>
</Alert>
```

| Prop      | Type                              | Default     |
|-----------|-----------------------------------|-------------|
| `variant` | `'default' \| 'destructive'`      | `'default'` |
| `style`   | `StyleProp<ViewStyle \| TextStyle>`| —           |

---

### Tabs

Tab navigation with animated active state.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'vengenceui-rn';

const [tab, setTab] = useState('account');

<Tabs value={tab} onValueChange={setTab}>
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Text>Account settings here</Text>
  </TabsContent>
  <TabsContent value="settings">
    <Text>App settings here</Text>
  </TabsContent>
</Tabs>
```

| Component      | Key Props                                   |
|----------------|---------------------------------------------|
| `Tabs`         | `value`, `onValueChange`                    |
| `TabsList`     | `style`                                     |
| `TabsTrigger`  | `value`, `disabled`, `style`, `textStyle`   |
| `TabsContent`  | `value`, `style`                            |

---

### AnimatedNumber

Digits slide-animate when the value changes.

```tsx
import { AnimatedNumber } from 'vengenceui-rn';

const [count, setCount] = useState(42);

<AnimatedNumber value={count} />
```

| Prop       | Type                   | Default |
|------------|------------------------|---------|
| `value`    | `number`               | —       |
| `style`    | `StyleProp<ViewStyle>` | —       |
| `textStyle`| `StyleProp<TextStyle>` | —       |

---

### AnimatedScore

Score display with directional color feedback (green ↑ / red ↓).

```tsx
import { AnimatedScore } from 'vengenceui-rn';

const [score, setScore] = useState(100);

<AnimatedScore value={score} duration={400} />
```

| Prop       | Type                   | Default |
|------------|------------------------|---------|
| `value`    | `number`               | —       |
| `duration` | `number` (ms)          | `400`   |
| `style`    | `StyleProp<ViewStyle>` | —       |
| `textStyle`| `StyleProp<TextStyle>` | —       |

---

### FlipText

Characters flip with a 3D rotation animation powered by Reanimated.

```tsx
import { FlipText } from 'vengenceui-rn';

<FlipText duration={2200} loop>
  Hello World
</FlipText>
```

| Prop        | Type                   | Default  |
|-------------|------------------------|----------|
| `children`  | `string`               | —        |
| `duration`  | `number` (ms)          | `2200`   |
| `delay`     | `number` (ms)          | `0`      |
| `loop`      | `boolean`              | `true`   |
| `separator` | `string`               | `' '`    |
| `together`  | `boolean`              | `false`  |
| `style`     | `StyleProp<ViewStyle>` | —        |
| `textStyle` | `StyleProp<TextStyle>` | —        |

---

### FlipFadeText

Word cycling animation — rotates through an array of words with staggered 3D flip-fade transitions.

```tsx
import { FlipFadeText } from 'vengenceui-rn';

<FlipFadeText
  words={["LOADING", "COMPUTING", "SEARCHING"]}
  interval={2500}
  letterDuration={600}
/>
```

| Prop             | Type                   | Default              |
|------------------|------------------------|----------------------|
| `words`          | `string[]`             | `["LOADING", ...]`   |
| `interval`       | `number` (ms)          | `2500`               |
| `letterDuration` | `number` (ms)          | `600`                |
| `staggerDelay`   | `number` (ms)          | `100`                |
| `style`          | `StyleProp<ViewStyle>` | —                    |
| `textStyle`      | `StyleProp<TextStyle>` | —                    |

---

## 🎨 Theming

VengeanceUI ships with a default light theme and a matching dark theme. Import and customize them:

```tsx
import { colors, darkColors, spacing, radii, fontSizes } from 'vengenceui-rn';

// Use directly
<View style={{ backgroundColor: colors.background, padding: spacing.md }}>
  <Text style={{ color: colors.foreground, fontSize: fontSizes.base }}>
    Themed content
  </Text>
</View>

// Available tokens:
// colors — primary, primaryForeground, secondary, secondaryForeground,
//          destructive, destructiveForeground, background, foreground,
//          card, cardForeground, muted, mutedForeground, accent,
//          accentForeground, border, input, ring
// darkColors — same keys as colors, dark mode values
// spacing — xs(4), sm(8), md(16), lg(24), xl(32)
// radii — sm(4), md(8), lg(12), xl(16), full(9999)
// fontSizes — xs(12), sm(14), base(16), lg(18), xl(20), 2xl(24), 3xl(30)
```

Override the theme by editing `theme/index.ts` or providing your own color tokens.

---

## 🛠️ Using as a Library

The `react-native/` directory is structured as a standalone npm package. The `package.json` defines:

- **`main`** and **`types`** pointing to `src/index.ts`
- **`peerDependencies`**: `react ≥18`, `react-native ≥0.70`, `react-native-reanimated ≥3`
- All components and types are exported from the single entry point

This means you can:

1. **Publish to npm** — run `npm publish` from the `react-native/` directory
2. **Link locally** — use `npm link` or file-based dependencies
3. **Copy-paste** — copy the `src/` folder into your project

None of the E2E test infrastructure (`e2e/` directory) is included in the published package.

---

## 🧪 E2E Testing

The library includes Playwright E2E tests that verify all components render and function correctly:

```bash
cd react-native/e2e
npm install
npx playwright install chromium
npx playwright test
```

Tests run via Vite + `react-native-web`, rendering components in a browser. CI runs automatically via GitHub Actions on every push/PR.

---

## 🛠️ Tech Stack

| Technology                | Purpose                       |
|---------------------------|-------------------------------|
| React Native              | Cross-platform UI primitives  |
| TypeScript                | Type safety                   |
| react-native-reanimated   | 60 fps animations on the UI thread |
| StyleSheet                | Native-optimised styling      |

---

## 📁 Project Structure

```
react-native/
├── src/
│   ├── index.ts              # Public API — all exports
│   ├── components/
│   │   ├── Alert.tsx          # Alert + AlertTitle + AlertDescription
│   │   ├── AnimatedButton.tsx # Spring-animated button with shimmer
│   │   ├── AnimatedNumber.tsx # AnimatedNumber + AnimatedScore
│   │   ├── Avatar.tsx         # Image avatar with fallback
│   │   ├── Badge.tsx          # Status badge with variants
│   │   ├── Button.tsx         # Button with 6 variants, 4 sizes
│   │   ├── Card.tsx           # Card composite (6 sub-components)
│   │   ├── Checkbox.tsx       # Animated checkbox
│   │   ├── FlipFadeText.tsx   # Word cycling flip-fade animation
│   │   ├── FlipText.tsx       # Per-character 3D flip animation
│   │   ├── Input.tsx          # Styled TextInput
│   │   ├── Label.tsx          # Form label
│   │   ├── Progress.tsx       # Animated progress bar
│   │   ├── Separator.tsx      # Horizontal/vertical divider
│   │   ├── Skeleton.tsx       # Pulse loading placeholder
│   │   ├── Switch.tsx         # Animated toggle switch
│   │   ├── Tabs.tsx           # Tab navigation (4 sub-components)
│   │   └── Textarea.tsx       # Multiline text input
│   ├── theme/
│   │   └── index.ts           # Design tokens (colors, spacing, radii)
│   └── utils/
│       └── index.ts           # Style merge helper
├── e2e/                       # Playwright E2E tests (not published)
├── package.json
├── tsconfig.json
└── README.md                  # This file
```

---

## 📄 License

MIT
