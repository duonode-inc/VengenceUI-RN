import React, { useState } from "react";
import { View, Pressable, Text, StyleSheet, ViewStyle, TextStyle, StyleProp } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { colors, radii, spacing } from "../theme";
import { mergeStyles } from "../utils";

/* ------------------------------------------------------------------ */
/*  Tabs                                                               */
/* ------------------------------------------------------------------ */

export interface TabsProps {
  /** Currently active tab value */
  value: string;
  /** Called when active tab changes */
  onValueChange: (value: string) => void;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function Tabs({ value, onValueChange, children, style }: TabsProps) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <View style={mergeStyles(tabStyles.tabs, style)}>{children}</View>
    </TabsContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/*  TabsList                                                           */
/* ------------------------------------------------------------------ */

export interface TabsListProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function TabsList({ children, style }: TabsListProps) {
  return (
    <View style={mergeStyles(tabStyles.list, style)}>{children}</View>
  );
}

/* ------------------------------------------------------------------ */
/*  TabsTrigger                                                        */
/* ------------------------------------------------------------------ */

export interface TabsTriggerProps {
  /** Value that identifies this tab */
  value: string;
  children?: React.ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export function TabsTrigger({
  value,
  children,
  disabled = false,
  style,
  textStyle,
}: TabsTriggerProps) {
  const ctx = React.useContext(TabsContext);
  const isActive = ctx?.value === value;

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(
      isActive ? colors.background : "transparent",
      { duration: 150, easing: Easing.out(Easing.cubic) },
    ),
  }));

  return (
    <Pressable
      onPress={() => !disabled && ctx?.onValueChange(value)}
      disabled={disabled}
      accessibilityRole="tab"
      accessibilityState={{ selected: isActive, disabled }}
    >
      <Animated.View
        style={[
          mergeStyles(
            tabStyles.trigger,
            isActive && tabStyles.triggerActive,
            disabled && tabStyles.disabled,
            style,
          ),
          animatedStyle,
        ]}
      >
        {typeof children === "string" ? (
          <Text
            style={mergeStyles(
              tabStyles.triggerText,
              isActive && tabStyles.triggerTextActive,
              textStyle,
            )}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </Animated.View>
    </Pressable>
  );
}

/* ------------------------------------------------------------------ */
/*  TabsContent                                                        */
/* ------------------------------------------------------------------ */

export interface TabsContentProps {
  /** Value that identifies which tab shows this content */
  value: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function TabsContent({ value, children, style }: TabsContentProps) {
  const ctx = React.useContext(TabsContext);
  if (ctx?.value !== value) return null;

  return <View style={mergeStyles(tabStyles.content, style)}>{children}</View>;
}

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

const TabsContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
} | null>(null);

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const tabStyles = StyleSheet.create({
  tabs: {
    gap: spacing.sm,
  },
  list: {
    flexDirection: "row",
    backgroundColor: colors.muted,
    borderRadius: radii.lg,
    padding: 3,
  },
  trigger: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radii.md,
  },
  triggerActive: {
    // shadow for active tab (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 1,
    // shadow (Android)
    elevation: 1,
  },
  triggerText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.mutedForeground,
  },
  triggerTextActive: {
    color: colors.foreground,
  },
  content: {
    flex: 1,
  },
  disabled: {
    opacity: 0.5,
  },
});
