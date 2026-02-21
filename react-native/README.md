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

### 2. Copy the components

VengeanceUI follows a **copy-paste** model — copy the `react-native/src` directory into your project:

```bash
cp -r react-native/src/components ./src/vengenceui
cp -r react-native/src/theme ./src/vengenceui/theme
cp -r react-native/src/utils ./src/vengenceui/utils
```

Or install the package directly (when published):

```bash
npm install vengenceui-rn
```

### 3. Import and use

```tsx
import {
  Button,
  AnimatedButton,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  Badge,
  Avatar,
  AnimatedNumber,
  FlipText,
} from './vengenceui'; // or 'vengenceui-rn' when installed as a package
```

---

## 📦 Components

### Button

A flexible button with variant and size presets.

```tsx
import { Button } from './vengenceui';

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
```

| Prop       | Type                                                                  | Default     |
|------------|-----------------------------------------------------------------------|-------------|
| `variant`  | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` |
| `size`     | `'default' \| 'sm' \| 'lg' \| 'icon'`                                | `'default'` |
| `children` | `ReactNode \| string`                                                 | —           |
| `style`    | `StyleProp<ViewStyle>`                                                | —           |
| `textStyle`| `StyleProp<TextStyle>`                                                | —           |

---

### AnimatedButton

A spring-animated button with a shimmer effect, powered by `react-native-reanimated`.

```tsx
import { AnimatedButton } from './vengenceui';

<AnimatedButton onPress={() => console.log('pressed!')}>
  Browse Components
</AnimatedButton>
```

| Prop       | Type                   | Default              |
|------------|------------------------|----------------------|
| `children` | `ReactNode \| string`  | `'Browse Components'`|
| `onPress`  | `() => void`           | —                    |
| `style`    | `StyleProp<ViewStyle>` | —                    |
| `textStyle`| `StyleProp<TextStyle>` | —                    |

---

### Card

A card system with composable sub-components.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './vengenceui';

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

---

### Input

A styled `TextInput` wrapper with focus & validation states.

```tsx
import { Input } from './vengenceui';

<Input placeholder="Email address" keyboardType="email-address" />
<Input placeholder="Required field" invalid />
```

| Prop             | Type                    | Default |
|------------------|-------------------------|---------|
| `invalid`        | `boolean`               | `false` |
| `containerStyle` | `StyleProp<ViewStyle>`  | —       |
| `style`          | `StyleProp<TextStyle>`  | —       |
| Plus all `TextInputProps` from React Native.          |         |

---

### Badge

Small status indicator with variant support.

```tsx
import { Badge } from './vengenceui';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

| Prop       | Type                                                    | Default     |
|------------|---------------------------------------------------------|-------------|
| `variant`  | `'default' \| 'secondary' \| 'destructive' \| 'outline'` | `'default'` |
| `children` | `ReactNode \| string`                                    | —           |

---

### Avatar

Circular avatar with image source and text fallback.

```tsx
import { Avatar } from './vengenceui';

<Avatar source={{ uri: 'https://example.com/avatar.jpg' }} size={48} />
<Avatar fallback="AB" size={48} />
```

| Prop       | Type                    | Default |
|------------|-------------------------|---------|
| `source`   | `ImageSourcePropType`   | —       |
| `fallback` | `string`                | `'?'`  |
| `size`     | `number`                | `32`    |

---

### AnimatedNumber

Digits slide-animate when the value changes.

```tsx
import { AnimatedNumber } from './vengenceui';

const [count, setCount] = useState(42);

<AnimatedNumber value={count} />
```

---

### AnimatedScore

Score display with directional color feedback (green ↑ / red ↓).

```tsx
import { AnimatedScore } from './vengenceui';

const [score, setScore] = useState(100);

<AnimatedScore value={score} duration={400} />
```

---

### FlipText

Characters flip with a 3D rotation animation powered by Reanimated.

```tsx
import { FlipText } from './vengenceui';

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

---

## 🎨 Theming

VengeanceUI ships with a default light theme and a matching dark theme. Import and customize them:

```tsx
import { colors, darkColors, spacing, radii, fontSizes } from './vengenceui';

// Use directly
<View style={{ backgroundColor: colors.background, padding: spacing.md }}>
  <Text style={{ color: colors.foreground, fontSize: fontSizes.base }}>
    Themed content
  </Text>
</View>
```

Override the theme by editing `theme/index.ts` or providing your own color tokens.

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
│   │   ├── AnimatedButton.tsx
│   │   ├── AnimatedNumber.tsx
│   │   ├── Avatar.tsx
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── FlipText.tsx
│   │   └── Input.tsx
│   ├── theme/
│   │   └── index.ts          # Design tokens (colors, spacing, radii)
│   └── utils/
│       └── index.ts          # Style merge helper
├── package.json
├── tsconfig.json
└── README.md                 # This file
```

---

## 📄 License

MIT
