
<p align="center">
  <!-- Repo stats -->
  <img src="https://img.shields.io/github/stars/Ashutoshx7/VengeanceUI?style=social" />
  <img src="https://img.shields.io/github/forks/Ashutoshx7/VengeanceUI?style=social" />
  <img src="https://img.shields.io/github/issues/Ashutoshx7/VengeanceUI?style=social" />
</p>

<p align="center">
  <!-- Tech stack -->
  <img src="https://img.shields.io/badge/Next.js-black?style=social&logo=nextdotjs" />
  <img src="https://img.shields.io/badge/React-blue?style=social&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-blue?style=social&logo=typescript" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=social&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Framer%20Motion-black?style=social&logo=framer" />
</p>




https://github.com/user-attachments/assets/05b58add-f66e-4a4c-a04b-5dc3fba8c88b

---

# VengeanceUI

**VengeanceUI** is a modern, animated UI component library designed to help developers build beautiful landing pages and interfaces faster. It provides ready-to-use, copy-paste friendly components with smooth animations and clean design.

---

## 🚀 Features

- Prebuilt UI components for landing pages
- Smooth and modern animations
- Copy & paste friendly components
- Fully customizable styling
- Clean, minimal, and modern design
- Developer-focused DX (easy to integrate)

---

## 📱 React Native Port

VengeanceUI is also available for **React Native** with the same component API and design language. The port lives in the [`react-native/`](./react-native/) directory and uses `react-native-reanimated` for smooth 60 fps UI-thread animations.

**18 components** have been ported with full TypeScript support, matching the look, feel, and API of the web versions wherever possible.

👉 **[React Native Quick Start →](./react-native/README.md)**

### How it works

The React Native port re-implements each web component using RN primitives (`View`, `Text`, `Pressable`, `TextInput`, `Image`) and `react-native-reanimated` in place of Framer Motion / CSS animations. Tailwind classes are replaced with `StyleSheet.create()` using matching design tokens (colors, spacing, radii, font sizes) defined in `react-native/src/theme/`.

| Web (original)              | React Native (port)                     |
|-----------------------------|------------------------------------------|
| `className` + Tailwind      | `StyleSheet` + design tokens             |
| Framer Motion               | `react-native-reanimated`                |
| Radix UI primitives         | RN primitives (`Pressable`, context)     |
| `cn()` utility              | `mergeStyles()` utility                  |
| HTML elements               | `View`, `Text`, `Pressable`, `TextInput` |

### Quick example

```tsx
import {
  Button, AnimatedButton,
  Card, CardHeader, CardTitle, CardContent,
  Badge, FlipText,
} from 'vengenceui-rn';

<Card>
  <CardHeader>
    <CardTitle>Welcome</CardTitle>
  </CardHeader>
  <CardContent>
    <FlipText duration={2200} loop>Hello World</FlipText>
    <Badge variant="secondary">New</Badge>
    <AnimatedButton onPress={() => {}}>Get Started</AnimatedButton>
  </CardContent>
</Card>
```

### Ported components

| Category        | Components                                                                 |
|-----------------|----------------------------------------------------------------------------|
| **Core**        | Button, AnimatedButton, Card (6 sub-components), Input, Textarea, Badge, Avatar, Label |
| **Layout**      | Separator, Tabs (4 sub-components)                                         |
| **Feedback**    | Alert (3 sub-components), Progress, Skeleton                               |
| **Controls**    | Switch, Checkbox                                                           |
| **Animated**    | AnimatedNumber, AnimatedScore, FlipText, FlipFadeText                      |

> Components that depend on DOM-only APIs (Radix UI portals, GSAP ScrollTrigger, CSS `conic-gradient`, `getBoundingClientRect`, etc.) are not included in the port. See the [React Native README](./react-native/README.md) for the full list.

---

## 🛠️ Tech Stack

VengeanceUI is built using modern frontend technologies:

- **React** – Component-based UI development  
- **TypeScript** – Type safety and better developer experience  
- **Tailwind CSS** – Utility-first styling for rapid UI development  
- **Framer Motion** – Animations and transitions  
- **Vite** – Fast development server and build tool  
- **ESLint & Prettier** – Code quality and formatting  


---

## 🤝 Contributing

Contributions are welcome for both the **web** and **React Native** sides of VengeanceUI.

### Getting started

1. **Fork** the repository and clone your fork
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make your changes (see area-specific guides below)
4. Commit with a clear message: `git commit -m "feat: add MyComponent"`
5. Push and open a Pull Request against `main`

### Web components

```bash
npm install        # install dependencies
npm run dev        # start dev server
npm run lint       # lint
npm run build      # production build
```

### React Native components

```bash
cd react-native
npm install        # install library dependencies
npm run typecheck  # verify TypeScript compiles

# Run E2E tests
cd e2e
npm install
npx playwright install chromium
npx playwright test
```

When porting a new web component to React Native:

1. Create `react-native/src/components/MyComponent.tsx`
2. Use RN primitives (`View`, `Text`, `Pressable`) and `react-native-reanimated` for animations
3. Use existing design tokens from `react-native/src/theme/` (don't hard-code colors)
4. Export the component and its types from `react-native/src/index.ts`
5. Add a section to the E2E test harness (`react-native/e2e/app/App.tsx`) and a test in `react-native/e2e/tests/components.spec.ts`
6. Document the component with a prop table in `react-native/README.md`

### Guidelines

- Keep PRs focused — one component or feature per PR
- All components must be fully typed (TypeScript, no `any`)
- Follow existing code style and naming conventions
- Add/update tests for any new functionality


---
## Star History

<a href="https://star-history.com/#Ashutoshx7/VengeanceUI&Date">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="https://api.star-history.com/svg?repos=Ashutoshx7/VengeanceUI&type=Date&theme=dark&legend=top-left"
    />
    <source
      media="(prefers-color-scheme: light)"
      srcset="https://api.star-history.com/svg?repos=Ashutoshx7/VengeanceUI&type=Date&legend=top-left"
    />
    <img
      alt="Star History Chart"
      src="https://api.star-history.com/svg?repos=Ashutoshx7/VengeanceUI&type=Date&legend=top-left"
    />
  </picture>
</a>
a




