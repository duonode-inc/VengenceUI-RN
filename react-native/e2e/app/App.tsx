import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Button } from "../../src/components/Button";
import { AnimatedButton } from "../../src/components/AnimatedButton";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../src/components/Card";
import { Input } from "../../src/components/Input";
import { Textarea } from "../../src/components/Textarea";
import { Badge } from "../../src/components/Badge";
import { Avatar } from "../../src/components/Avatar";
import { AnimatedNumber, AnimatedScore } from "../../src/components/AnimatedNumber";
import { FlipText } from "../../src/components/FlipText";
import { FlipFadeText } from "../../src/components/FlipFadeText";
import { Separator } from "../../src/components/Separator";
import { Skeleton } from "../../src/components/Skeleton";
import { Progress } from "../../src/components/Progress";
import { Switch } from "../../src/components/Switch";
import { Checkbox } from "../../src/components/Checkbox";
import { Alert, AlertTitle, AlertDescription } from "../../src/components/Alert";
import { Label } from "../../src/components/Label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../src/components/Tabs";
import { colors, darkColors, spacing, radii, fontSizes } from "../../src/theme";

/**
 * E2E test harness — renders every component with data-testid attributes
 * so Playwright can locate and assert against them.
 *
 * Components that don't forward testID are wrapped in a View with testID.
 */
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [counter, setCounter] = useState(42);
  const [score, setScore] = useState(100);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);
  const [checked, setChecked] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

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

      {/* ---- Textarea ---- */}
      <View style={styles.section} testID="textarea-section">
        <Text style={styles.sectionTitle}>Textarea</Text>
        <Textarea
          testID="textarea-default"
          placeholder="Enter long text…"
          value={textareaValue}
          onChangeText={setTextareaValue}
        />
        <Textarea testID="textarea-invalid" placeholder="Invalid textarea" invalid />
        {textareaValue !== "" && (
          <Text testID="textarea-echo">Typed: {textareaValue}</Text>
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

      {/* ---- Separator ---- */}
      <View style={styles.section} testID="separator-section">
        <Text style={styles.sectionTitle}>Separator</Text>
        <Text>Above</Text>
        <View testID="separator-h"><Separator /></View>
        <Text>Below</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8, height: 24 }}>
          <Text>Left</Text>
          <View testID="separator-v"><Separator orientation="vertical" /></View>
          <Text>Right</Text>
        </View>
      </View>

      {/* ---- Skeleton ---- */}
      <View style={styles.section} testID="skeleton-section">
        <Text style={styles.sectionTitle}>Skeleton</Text>
        <View testID="skeleton-rect"><Skeleton height={20} /></View>
        <View testID="skeleton-circle"><Skeleton height={40} width={40} circle /></View>
        <View testID="skeleton-wide"><Skeleton height={12} width={200} /></View>
      </View>

      {/* ---- Progress ---- */}
      <View style={styles.section} testID="progress-section">
        <Text style={styles.sectionTitle}>Progress</Text>
        <View testID="progress-bar"><Progress value={65} /></View>
      </View>

      {/* ---- Switch ---- */}
      <View style={styles.section} testID="switch-section">
        <Text style={styles.sectionTitle}>Switch</Text>
        <View style={styles.row}>
          <View testID="switch-toggle">
            <Switch value={switchOn} onValueChange={setSwitchOn} />
          </View>
          <Text testID="switch-state">{switchOn ? "ON" : "OFF"}</Text>
        </View>
      </View>

      {/* ---- Checkbox ---- */}
      <View style={styles.section} testID="checkbox-section">
        <Text style={styles.sectionTitle}>Checkbox</Text>
        <View style={styles.row}>
          <View testID="checkbox-toggle">
            <Checkbox checked={checked} onCheckedChange={setChecked} />
          </View>
          <Text testID="checkbox-state">{checked ? "Checked" : "Unchecked"}</Text>
        </View>
      </View>

      {/* ---- Alert ---- */}
      <View style={styles.section} testID="alert-section">
        <Text style={styles.sectionTitle}>Alert</Text>
        <View testID="alert-default">
          <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>This is an informational alert.</AlertDescription>
          </Alert>
        </View>
        <View testID="alert-destructive">
          <Alert variant="destructive">
            <AlertTitle variant="destructive">Error</AlertTitle>
            <AlertDescription variant="destructive">Something went wrong.</AlertDescription>
          </Alert>
        </View>
      </View>

      {/* ---- Label ---- */}
      <View style={styles.section} testID="label-section">
        <Text style={styles.sectionTitle}>Label</Text>
        <View testID="label-default"><Label>Email address</Label></View>
        <View testID="label-disabled"><Label disabled>Disabled label</Label></View>
      </View>

      {/* ---- Tabs ---- */}
      <View style={styles.section} testID="tabs-section">
        <Text style={styles.sectionTitle}>Tabs</Text>
        <View testID="tabs">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="tab1">Account</TabsTrigger>
              <TabsTrigger value="tab2">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <Text testID="tab-content-1">Account content</Text>
            </TabsContent>
            <TabsContent value="tab2">
              <Text testID="tab-content-2">Settings content</Text>
            </TabsContent>
          </Tabs>
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

      {/* ---- FlipFadeText ---- */}
      <View style={styles.section} testID="flip-fade-text-section">
        <Text style={styles.sectionTitle}>FlipFadeText</Text>
        <View testID="flip-fade-text">
          <FlipFadeText words={["HELLO", "WORLD"]} interval={3000} />
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
