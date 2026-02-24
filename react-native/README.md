<p align="center">
  <h1 align="center">VengeanceUI — React Native</h1>
  <p align="center"><strong>The official React Native port of VengeanceUI</strong></p>
  <p align="center">
    Modern, animated UI components for iOS &amp; Android — powered by <code>react-native-reanimated</code>
  </p>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" />
  <img src="https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React_Native-%3E%3D0.70-61DAFB?logo=react&logoColor=white" alt="React Native" />
  <img src="https://img.shields.io/badge/Reanimated-%3E%3D3.0-6C63FF?logo=data:image/svg+xml;base64,&logoColor=white" alt="Reanimated 3" />
  <img src="https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey" alt="Platform" />
  <img src="https://img.shields.io/badge/components-18-green" alt="18 Components" />
</p>

---

## 📖 About This Port

VengeanceUI started as a **web-first** component library built with React, Tailwind CSS, and Framer Motion. This package is the **official React Native port** — the same design language and API style, re-built from scratch with native primitives so you get identical-looking UIs on iOS and Android with smooth 60 fps animations.

### Architectural decisions

| Concern            | Web (original)                   | React Native (this port)                  | Why                                                            |
|--------------------|----------------------------------|-------------------------------------------|----------------------------------------------------------------|
| **Styling**        | Tailwind CSS utility classes     | `StyleSheet.create()` + design tokens     | RN has no CSS; StyleSheet is the native equivalent             |
| **Animations**     | Framer Motion / CSS transitions  | `react-native-reanimated` (UI thread)     | Only Reanimated runs animations on the native UI thread at 60 fps |
| **Primitives**     | HTML (`div`, `input`, `span`)    | `View`, `Text`, `Pressable`, `TextInput`  | RN does not render HTML; these are the native equivalents      |
| **Headless logic** | Radix UI primitives              | React context + `Pressable`               | Radix is web-only; we replicate the same composable API by hand |
| **Class merging**  | `cn()` (clsx + tailwind-merge)   | `mergeStyles()` (StyleSheet flattening)   | No class strings in RN; we merge style objects instead          |

---

## ✅ What's included

18 components have been ported — every feature from the web library that does **not** require a DOM-only API:

| Category        | Components                                                                                            | Count |
|-----------------|-------------------------------------------------------------------------------------------------------|-------|
| **Core**        | Button (6 variants, 4 sizes), AnimatedButton, Card (+ Header, Title, Description, Content, Footer), Input, Textarea, Badge, Avatar, Label | 8     |
| **Layout**      | Separator, Tabs (+ TabsList, TabsTrigger, TabsContent)                                                | 2     |
| **Feedback**    | Alert (+ AlertTitle, AlertDescription), Progress, Skeleton                                            | 3     |
| **Controls**    | Switch, Checkbox                                                                                      | 2     |
| **Animated**    | AnimatedNumber, AnimatedScore, FlipText, FlipFadeText                                                 | 4     |

> **Total: 18 components, 30+ named exports** including sub-components and TypeScript types.

---

## ❌ What's NOT ported (and why)

The web library has ~84 components. The following categories are **intentionally excluded** because they depend on browser-only APIs that have no React Native equivalent:

| Web component(s)                            | Blocking dependency                                  |
|---------------------------------------------|------------------------------------------------------|
| Dialog, Dropdown, Popover, Sheet, Tooltip, Command, ContextMenu, HoverCard, Select, Menubar, NavigationMenu | **Radix UI** — portal / focus-trap model is web-only |
| LiquidMetal, LiquidOcean, PerspectiveGrid, LiquidGradient, LiquidText | **Canvas / WebGL** — shader-based rendering          |
| CreepyButton, AnimatedHero                  | **DOM measurement** — `getBoundingClientRect`, `document.documentElement` |
| StaggeredGrid                               | **GSAP + ScrollTrigger** — scroll-linked GSAP timelines |
| GlowBorderCard, BorderBeam                  | **CSS-only effects** — `conic-gradient`, `@property` |
| Calendar, Carousel, Chart, Form, Table      | **Complex DOM** — deep DOM tree / third-party web libs |
| Breadcrumb, Pagination, ScrollArea, Slider  | **Web layout** — assumes browser scroll/layout model |

> If you need any of these in React Native, consider using a purpose-built RN library (e.g. `@gorhom/bottom-sheet` for sheets, `react-native-svg` for charts).

---

## 🚀 Quick Start

### 1. Install peer dependencies

```bash
# npm
npm install react-native-reanimated

# yarn
yarn add react-native-reanimated
```

> **Babel plugin required.** Add to your `babel.config.js`:
>
> ```js
> module.exports = {
>   presets: ['module:@react-native/babel-preset'],
>   plugins: ['react-native-reanimated/plugin'], // must be last
> };
> ```
>
> For **Expo** projects with `expo-dev-client`, the plugin is included automatically.

### 2. Install or copy the library

**Option A — Install as a package** (when published to npm):

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
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from 'vengenceui-rn';
// or, if copy-pasted:
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from './vengenceui';

export default function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="secondary">New</Badge>
        <Button variant="default" onPress={() => console.log('pressed')}>
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
```

---

## 📦 Full Import Reference

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
} from 'vengenceui-rn';

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

## 🧩 Components

### Button

A flexible button with variant and size presets.

```tsx
<Button variant="default" size="default" onPress={() => {}}>Click Me</Button>
<Button variant="destructive" size="lg" onPress={() => {}}>Delete</Button>
<Button variant="outline" size="sm" onPress={() => {}}>Cancel</Button>
<Button variant="ghost" onPress={() => {}}>Ghost</Button>
<Button variant="link" onPress={() => {}}>Learn More</Button>
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

Spring-animated button with shimmer overlay, powered by `react-native-reanimated`.

```tsx
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

Composable card system with six sub-components.

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description text</CardDescription>
  </CardHeader>
  <CardContent>{/* content */}</CardContent>
  <CardFooter><Button onPress={() => {}}>Action</Button></CardFooter>
</Card>
```

All sub-components accept a `style` prop for customisation.

---

### Input

Styled `TextInput` wrapper with focus and validation states.

```tsx
<Input placeholder="Email" keyboardType="email-address" />
<Input placeholder="Required" invalid />
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

Multiline text input with the same styling as Input.

```tsx
<Textarea placeholder="Enter description…" />
<Textarea placeholder="Invalid" invalid />
```

Same props as Input with `multiline` enabled by default.

---

### Badge

Small status indicator with variant support.

```tsx
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
<Avatar source={{ uri: 'https://example.com/avatar.jpg' }} size={48} />
<Avatar fallback="AB" size={48} />
```

| Prop       | Type                    | Default |
|------------|-------------------------|---------|
| `source`   | `ImageSourcePropType`   | —       |
| `fallback` | `string`                | `'?'`   |
| `size`     | `number`                | `32`    |
| `style`    | `StyleProp<ViewStyle>`  | —       |
| `textStyle`| `StyleProp<TextStyle>`  | —       |

---

### Label

Form label text component.

```tsx
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
<Skeleton height={20} />
<Skeleton height={40} width={40} circle />
```

| Prop           | Type                   | Default    |
|----------------|------------------------|------------|
| `width`        | `DimensionValue`       | `'100%'`   |
| `height`       | `number`               | `20`       |
| `borderRadius` | `number`               | `radii.md` |
| `circle`       | `boolean`              | `false`    |
| `style`        | `StyleProp<ViewStyle>` | —          |

---

### Progress

Animated progress bar with smooth transitions.

```tsx
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
const [on, setOn] = useState(false);
<Switch value={on} onValueChange={setOn} />
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
const [checked, setChecked] = useState(false);
<Checkbox checked={checked} onCheckedChange={setChecked} />
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
const [tab, setTab] = useState('account');

<Tabs value={tab} onValueChange={setTab}>
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account"><Text>Account settings</Text></TabsContent>
  <TabsContent value="settings"><Text>App settings</Text></TabsContent>
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

Characters flip with a 3D rotation animation.

```tsx
<FlipText duration={2200} loop>Hello World</FlipText>
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

VengeanceUI ships with a default light theme and a matching dark theme. Import and customise them:

```tsx
import { colors, darkColors, spacing, radii, fontSizes } from 'vengenceui-rn';

<View style={{ backgroundColor: colors.background, padding: spacing.md }}>
  <Text style={{ color: colors.foreground, fontSize: fontSizes.base }}>
    Themed content
  </Text>
</View>
```

### Available tokens

| Token        | Keys                                                                                          |
|--------------|-----------------------------------------------------------------------------------------------|
| `colors`     | `primary`, `primaryForeground`, `secondary`, `secondaryForeground`, `destructive`, `destructiveForeground`, `background`, `foreground`, `card`, `cardForeground`, `muted`, `mutedForeground`, `accent`, `accentForeground`, `border`, `input`, `ring`, `primaryTrack` |
| `darkColors` | Same keys as `colors`, dark-mode values                                                       |
| `spacing`    | `xs` (4), `sm` (8), `md` (16), `lg` (24), `xl` (32)                                          |
| `radii`      | `sm` (4), `md` (8), `lg` (12), `xl` (16), `full` (9999)                                      |
| `fontSizes`  | `xs` (12), `sm` (14), `base` (16), `lg` (18), `xl` (20), `2xl` (24), `3xl` (30)              |

Override the theme by editing `theme/index.ts` or providing your own colour tokens.

---

## 🛠️ Using as a Library

The `react-native/` directory is a standalone npm package. The `package.json` defines:

- **`main`** and **`types`** → `src/index.ts`
- **`files`** → `["src/"]` (E2E tests are excluded from publish)
- **`peerDependencies`** → `react ≥18`, `react-native ≥0.70`, `react-native-reanimated ≥3`

You can:

1. **Publish to npm** — `cd react-native && npm publish`
2. **Link locally** — `npm link` or file-based dependencies
3. **Copy-paste** — copy the `src/` folder into your project

---

## 🧪 E2E Testing

29 Playwright tests verify all components render and function correctly:

```bash
cd react-native/e2e
npm install
npx playwright install chromium
npx playwright test
```

Tests run via Vite + `react-native-web`, rendering RN components in a browser. CI runs automatically on every push/PR via GitHub Actions.

---

## 🛠️ Tech Stack

| Technology              | Purpose                              |
|-------------------------|--------------------------------------|
| React Native            | Cross-platform UI primitives         |
| TypeScript (strict)     | Type safety                          |
| react-native-reanimated | 60 fps animations on the UI thread   |
| StyleSheet              | Native-optimised styling             |
| Playwright              | E2E testing via react-native-web     |

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

## 🤝 Contributing

### Development setup

```bash
# 1. Clone the repo and enter the RN directory
git clone https://github.com/duonode-inc/VengenceUI-RN.git
cd VengenceUI-RN/react-native

# 2. Install dependencies
npm install

# 3. Verify TypeScript compiles
npm run typecheck

# 4. Run E2E tests
cd e2e
npm install
npx playwright install chromium
npx playwright test
```

### Adding a new component

1. **Create** `src/components/MyComponent.tsx`
   - Use RN primitives (`View`, `Text`, `Pressable`) — not HTML elements
   - Use `react-native-reanimated` for animations — not `Animated` from RN core
   - Import design tokens from `../theme` — don't hard-code colours or spacing
   - Accept a `style` prop for consumer customisation
   - Export a TypeScript interface for props (e.g. `MyComponentProps`)
2. **Export** from `src/index.ts` (both the component and its prop type)
3. **Add to E2E harness** in `e2e/app/App.tsx` with a `testID`
4. **Write a Playwright test** in `e2e/tests/components.spec.ts`
5. **Document** in this README with a usage example and prop table

### Coding conventions

- **TypeScript** — all components fully typed, no `any`
- **StyleSheet** — use `StyleSheet.create()` at module scope, not inline objects
- **Naming** — PascalCase for components and filenames (e.g. `AnimatedButton.tsx`)
- **Exports** — named exports only, no default exports
- **Props** — extend RN's built-in prop types where applicable (e.g. `TextInputProps`)
- **Theme** — use `colors`, `spacing`, `radii`, `fontSizes` from `../theme`

### Submitting a PR

1. Fork the repo and create a branch: `git checkout -b feat/my-component`
2. Make your changes following the conventions above
3. Run `npm run typecheck` in `react-native/` — must pass
4. Run `npx playwright test` in `react-native/e2e/` — must pass
5. Open a PR against `main` with a clear description

---

## 📄 License

MIT — see [LICENSE](../LICENSE) for details.
