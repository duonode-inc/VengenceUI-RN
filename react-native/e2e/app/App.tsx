import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Button } from "../../src/components/Button";
import { AnimatedButton } from "../../src/components/AnimatedButton";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../src/components/Card";
import { Input } from "../../src/components/Input";
import { Badge } from "../../src/components/Badge";
import { Avatar } from "../../src/components/Avatar";
import { AnimatedNumber, AnimatedScore } from "../../src/components/AnimatedNumber";
import { FlipText } from "../../src/components/FlipText";
import { colors, darkColors, spacing, radii, fontSizes } from "../../src/theme";

/**
 * E2E test harness — renders every component with data-testid attributes
 * so Playwright can locate and assert against them.
 *
 * Components that don't forward testID are wrapped in a View with testID.
 */
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [counter, setCounter] = useState(42);
  const [score, setScore] = useState(100);
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading} testID="heading">
        VengeanceUI RN — E2E Test Harness
      </Text>

      {/* ---- Button variants ---- */}
      <View style={styles.section} testID="button-section">
        <Text style={styles.sectionTitle}>Button</Text>

        <Button testID="btn-default" onPress={() => setButtonPressed(true)}>
          Default
        </Button>
        <Button testID="btn-destructive" variant="destructive">Destructive</Button>
        <Button testID="btn-outline" variant="outline">Outline</Button>
        <Button testID="btn-secondary" variant="secondary">Secondary</Button>
        <Button testID="btn-ghost" variant="ghost">Ghost</Button>
        <Button testID="btn-link" variant="link">Link</Button>

        <Button testID="btn-sm" size="sm">Small</Button>
        <Button testID="btn-lg" size="lg">Large</Button>
        <Button testID="btn-disabled" disabled>Disabled</Button>

        {buttonPressed && (
          <Text testID="btn-pressed-indicator">Button was pressed</Text>
        )}
      </View>

      {/* ---- AnimatedButton ---- */}
      <View style={styles.section} testID="animated-button-section">
        <Text style={styles.sectionTitle}>AnimatedButton</Text>
        <View testID="animated-btn">
          <AnimatedButton>Browse Components</AnimatedButton>
        </View>
      </View>

      {/* ---- Card ---- */}
      <View style={styles.section} testID="card-section">
        <Text style={styles.sectionTitle}>Card</Text>
        <View testID="card">
          <Card>
            <View testID="card-header">
              <CardHeader>
                <View testID="card-title"><CardTitle>Card Title</CardTitle></View>
                <View testID="card-desc"><CardDescription>Card description text</CardDescription></View>
              </CardHeader>
            </View>
            <View testID="card-content">
              <CardContent>
                <Text>Card body content</Text>
              </CardContent>
            </View>
            <View testID="card-footer">
              <CardFooter>
                <Text>Footer</Text>
              </CardFooter>
            </View>
          </Card>
        </View>
      </View>

      {/* ---- Input ---- */}
      <View style={styles.section} testID="input-section">
        <Text style={styles.sectionTitle}>Input</Text>
        <Input
          testID="input-default"
          placeholder="Type something…"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Input testID="input-invalid" placeholder="Invalid input" invalid />
        <Input testID="input-disabled" placeholder="Disabled" editable={false} />
        {inputValue !== "" && (
          <Text testID="input-echo">Typed: {inputValue}</Text>
        )}
      </View>

      {/* ---- Badge ---- */}
      <View style={styles.section} testID="badge-section">
        <Text style={styles.sectionTitle}>Badge</Text>
        <View style={styles.row}>
          <View testID="badge-default"><Badge>Default</Badge></View>
          <View testID="badge-secondary"><Badge variant="secondary">Secondary</Badge></View>
          <View testID="badge-destructive"><Badge variant="destructive">Destructive</Badge></View>
          <View testID="badge-outline"><Badge variant="outline">Outline</Badge></View>
        </View>
      </View>

      {/* ---- Avatar ---- */}
      <View style={styles.section} testID="avatar-section">
        <Text style={styles.sectionTitle}>Avatar</Text>
        <View style={styles.row}>
          <View testID="avatar-fallback"><Avatar fallback="AB" size={48} /></View>
          <View testID="avatar-default"><Avatar size={48} /></View>
        </View>
      </View>

      {/* ---- AnimatedNumber ---- */}
      <View style={styles.section} testID="animated-number-section">
        <Text style={styles.sectionTitle}>AnimatedNumber</Text>
        <View testID="anim-number"><AnimatedNumber value={counter} /></View>
        <Button testID="anim-number-inc" onPress={() => setCounter((c) => c + 1)}>
          Increment
        </Button>
      </View>

      {/* ---- AnimatedScore ---- */}
      <View style={styles.section} testID="animated-score-section">
        <Text style={styles.sectionTitle}>AnimatedScore</Text>
        <View testID="anim-score"><AnimatedScore value={score} /></View>
        <View style={styles.row}>
          <Button testID="score-up" onPress={() => setScore((s) => s + 5)}>+5</Button>
          <Button testID="score-down" onPress={() => setScore((s) => s - 5)}>-5</Button>
        </View>
      </View>

      {/* ---- FlipText ---- */}
      <View style={styles.section} testID="flip-text-section">
        <Text style={styles.sectionTitle}>FlipText</Text>
        <View testID="flip-text">
          <FlipText duration={2200} loop>
            Hello World
          </FlipText>
        </View>
      </View>

      {/* ---- Theme tokens (for assertion — hidden visually) ---- */}
      <View testID="theme-tokens" style={{ opacity: 0, height: 0, overflow: "hidden" }}>
        <Text testID="theme-primary">{colors.primary}</Text>
        <Text testID="theme-spacing-md">{spacing.md}</Text>
        <Text testID="theme-radii-lg">{radii.lg}</Text>
        <Text testID="theme-fontsize-base">{fontSizes.base}</Text>
        <Text testID="theme-dark-bg">{darkColors.background}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 24,
    maxWidth: 600,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  section: {
    gap: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
});
