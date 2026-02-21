import { test, expect } from "@playwright/test";

/**
 * VengeanceUI React Native — E2E Tests
 *
 * Components are rendered via react-native-web in a Vite-served test harness.
 * Each test uses `data-testid` attributes set in the App.tsx harness.
 */

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** react-native-web renders testID as data-testid */
const tid = (id: string) => `[data-testid="${id}"]`;

/* ------------------------------------------------------------------ */
/*  Page load                                                          */
/* ------------------------------------------------------------------ */

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(tid("heading"))).toBeVisible();
});

/* ------------------------------------------------------------------ */
/*  Button                                                             */
/* ------------------------------------------------------------------ */

test.describe("Button", () => {
  test("renders all variant buttons", async ({ page }) => {
    for (const variant of [
      "default",
      "destructive",
      "outline",
      "secondary",
      "ghost",
      "link",
    ]) {
      await expect(page.locator(tid(`btn-${variant}`))).toBeVisible();
    }
  });

  test("renders size variants", async ({ page }) => {
    await expect(page.locator(tid("btn-sm"))).toBeVisible();
    await expect(page.locator(tid("btn-lg"))).toBeVisible();
  });

  test("disabled button is marked disabled", async ({ page }) => {
    const btn = page.locator(tid("btn-disabled"));
    await expect(btn).toBeVisible();
    await expect(btn).toBeDisabled();
  });

  test("button press triggers onPress callback", async ({ page }) => {
    await expect(page.locator(tid("btn-pressed-indicator"))).not.toBeVisible();
    await page.locator(tid("btn-default")).click();
    await expect(page.locator(tid("btn-pressed-indicator"))).toBeVisible();
  });
});

/* ------------------------------------------------------------------ */
/*  AnimatedButton                                                     */
/* ------------------------------------------------------------------ */

test.describe("AnimatedButton", () => {
  test("renders with default text", async ({ page }) => {
    const wrapper = page.locator(tid("animated-btn"));
    await expect(wrapper).toBeVisible();
    await expect(wrapper).toContainText("Browse Components");
  });
});

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */

test.describe("Card", () => {
  test("renders card with all sub-components", async ({ page }) => {
    await expect(page.locator(tid("card"))).toBeVisible();
    await expect(page.locator(tid("card-header"))).toBeVisible();
    await expect(page.locator(tid("card-title"))).toHaveText("Card Title");
    await expect(page.locator(tid("card-desc"))).toHaveText(
      "Card description text",
    );
    await expect(page.locator(tid("card-content"))).toContainText(
      "Card body content",
    );
    await expect(page.locator(tid("card-footer"))).toContainText("Footer");
  });
});

/* ------------------------------------------------------------------ */
/*  Input                                                              */
/* ------------------------------------------------------------------ */

test.describe("Input", () => {
  test("renders and accepts text input", async ({ page }) => {
    const input = page.locator(tid("input-default"));
    await expect(input).toBeVisible();
    await input.fill("hello world");
    await expect(page.locator(tid("input-echo"))).toHaveText(
      "Typed: hello world",
    );
  });

  test("invalid input has destructive border color", async ({ page }) => {
    const input = page.locator(tid("input-invalid"));
    await expect(input).toBeVisible();
    const borderColor = await input.evaluate(
      (el) => getComputedStyle(el).borderColor,
    );
    // destructive color #ef4444 → rgb(239, 68, 68)
    expect(borderColor).toContain("239");
  });

  test("disabled input is read-only", async ({ page }) => {
    const input = page.locator(tid("input-disabled"));
    await expect(input).toBeVisible();
    // react-native-web sets readonly for non-editable inputs
    await expect(input).toHaveAttribute("readonly", "");
  });
});

/* ------------------------------------------------------------------ */
/*  Badge                                                              */
/* ------------------------------------------------------------------ */

test.describe("Badge", () => {
  test("renders all badge variants with correct text", async ({ page }) => {
    for (const variant of [
      "default",
      "secondary",
      "destructive",
      "outline",
    ]) {
      const badge = page.locator(tid(`badge-${variant}`));
      await expect(badge).toBeVisible();
      const label = variant.charAt(0).toUpperCase() + variant.slice(1);
      await expect(badge).toContainText(label);
    }
  });
});

/* ------------------------------------------------------------------ */
/*  Avatar                                                             */
/* ------------------------------------------------------------------ */

test.describe("Avatar", () => {
  test("shows fallback text when no image provided", async ({ page }) => {
    const avatar = page.locator(tid("avatar-fallback"));
    await expect(avatar).toBeVisible();
    await expect(avatar).toContainText("AB");
  });

  test("shows default '?' when no fallback text", async ({ page }) => {
    const avatar = page.locator(tid("avatar-default"));
    await expect(avatar).toBeVisible();
    await expect(avatar).toContainText("?");
  });
});

/* ------------------------------------------------------------------ */
/*  AnimatedNumber                                                     */
/* ------------------------------------------------------------------ */

test.describe("AnimatedNumber", () => {
  test("renders the initial value", async ({ page }) => {
    const numEl = page.locator(tid("anim-number"));
    await expect(numEl).toBeVisible();
    await expect(numEl).toContainText("42");
  });

  test("updates when increment button is pressed", async ({ page }) => {
    await page.locator(tid("anim-number-inc")).click();
    const numEl = page.locator(tid("anim-number"));
    await expect(numEl).toContainText("43");
  });
});

/* ------------------------------------------------------------------ */
/*  AnimatedScore                                                      */
/* ------------------------------------------------------------------ */

test.describe("AnimatedScore", () => {
  test("renders the initial score", async ({ page }) => {
    const scoreEl = page.locator(tid("anim-score"));
    await expect(scoreEl).toBeVisible();
    await expect(scoreEl).toContainText("100");
  });

  test("score changes on button press", async ({ page }) => {
    await page.locator(tid("score-up")).click();
    await expect(page.locator(tid("anim-score"))).toContainText("105");

    await page.locator(tid("score-down")).click();
    await expect(page.locator(tid("anim-score"))).toContainText("100");
  });
});

/* ------------------------------------------------------------------ */
/*  FlipText                                                           */
/* ------------------------------------------------------------------ */

test.describe("FlipText", () => {
  test("renders the text content", async ({ page }) => {
    const flipText = page.locator(tid("flip-text"));
    await expect(flipText).toBeVisible();
    await expect(flipText).toContainText("Hello World");
  });
});

/* ------------------------------------------------------------------ */
/*  Theme tokens                                                       */
/* ------------------------------------------------------------------ */

test.describe("Theme", () => {
  test("exports correct design tokens", async ({ page }) => {
    // Theme section is visually hidden but tokens are in the DOM
    await expect(page.locator(tid("theme-primary"))).toHaveText("#171717");
    await expect(page.locator(tid("theme-spacing-md"))).toHaveText("16");
    await expect(page.locator(tid("theme-radii-lg"))).toHaveText("12");
    await expect(page.locator(tid("theme-fontsize-base"))).toHaveText("16");
    await expect(page.locator(tid("theme-dark-bg"))).toHaveText("#0a0a0a");
  });
});
