# Theme Handling in the App

This document explains how the theme system works in the app, how to customize it, and how to add or update themes. The theme system is designed to provide a consistent and flexible way to manage light and dark modes, as well as custom themes.

---

## Overview of Theme System

The theme system is built using the following key components:

1. **ThemeProvider**: Manages the current theme state and provides it to the app via React Context.
2. **Themes**: Predefined light and dark themes with customizable properties.
3. **Dynamic Styling**: `useStylesWithTheme` hook for creating styles that adapt to the current theme.
4. **Theme Types**: Strongly typed interfaces to ensure consistency across the app.

---

## Key Components

### 1. ThemeProvider

The `ThemeProvider` is the core of the theme system. It:

- Resolves the active theme based on user preference or system settings.
- Provides the theme state and a method to update the theme via React Context.

#### Key Features:

- Supports light, dark, and system themes.
- Persists user preferences using AsyncStorage.
- Automatically updates the theme when the system theme changes.

#### Example Usage:

Wrap your app with the `ThemeProvider` in the root component:

```tsx
import { ThemeProvider } from '@/styles/theme/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider onThemeLoaded={() => console.log('Theme loaded')}>
      <YourAppComponents />
    </ThemeProvider>
  );
}
```

---

### 2. Themes

Themes are defined in the `themes.ts` file. Each theme includes:

- **Colors**: Defined in `colors.ts` for primary, secondary, background, text, and more.
- **Typography**: Font sizes, weights, and line heights.
- **Spacing**: Predefined spacing values for consistent layout.
- **Shadows**: Shadow styles for light and dark modes.
- **Border Radius**: Predefined values for rounded corners.

#### Example:

```typescript
export const LIGHT_THEME: ThemeState = {
  theme: Theme.LIGHT,
  colors: colors[Theme.LIGHT],
  typography,
  spacing,
  borderRadius,
  shadows: getShadows(Theme.LIGHT),
};
```

---

### 3. Dynamic Styling with `useStylesWithTheme`

The `useStylesWithTheme` hook allows you to create styles that adapt to the current theme.

#### Example:

```tsx
import { useStylesWithTheme } from '@/styles/theme/useStylesWithTheme';

const MyComponent = () => {
  const styles = useStylesWithTheme(theme => ({
    container: {
      backgroundColor: theme.colors.background.default,
      padding: theme.spacing.md,
    },
    text: {
      color: theme.colors.text.primary,
    },
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Themed Component</Text>
    </View>
  );
};
```

---

### 4. Theme Types

The `types.ts` file defines the structure of themes, including:

- `ThemeState`: The overall theme structure.
- `ColorTheme`: Colors for various UI elements.
- `Typography`, `Spacing`, `Shadows`, and `BorderRadius`: Additional theme properties.

These types ensure consistency and provide IntelliSense support.

---

## Customizing Themes

### Updating Existing Themes

To update an existing theme:

1. Open the `themes.ts` or `colors.ts` file.
2. Modify the properties of the `LIGHT_THEME` or `DARK_THEME`.

#### Example:

```typescript
colors[Theme.LIGHT].primary.main = '#FF5733'; // Update primary color
```

### Adding a New Theme

To add a new theme:

1. Define a new color palette in `colors.ts`.
2. Create a new theme in `themes.ts` using the new color palette.
3. Update the `themeMap` in `ThemeProvider.tsx` to include the new theme.

#### Example:

```typescript
export const CUSTOM_THEME: ThemeState = {
  theme: 'CUSTOM',
  colors: customColors,
  typography,
  spacing,
  borderRadius,
  shadows: getShadows('CUSTOM'),
};
```

---

## Using Themes in Screens

To use themes in your screens, import the `useStylesWithTheme` hook or access the theme directly using the `useTheme` hook.

#### Example:

In `home-screen.tsx`:

```tsx
const HomeScreen = () => {
  const styles = useStylesWithTheme(theme => ({
    container: {
      backgroundColor: theme.colors.background.default,
    },
    text: {
      color: theme.colors.text.primary,
    },
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};
```

---

## Conclusion

The theme system in this app is designed to be flexible and easy to customize. By following the structure outlined above, you can:

- Update existing themes.
- Add new themes.
- Use dynamic styling to create a consistent user experience.

For more details, refer to the source files:

- [`ThemeProvider.tsx`](../../src/styles/theme/ThemeProvider.tsx)
- [`themes.ts`](../../src/styles/theme/themes.ts)
- [`colors.ts`](../../src/styles/theme/colors.ts)
- [`useStylesWithTheme.ts`](../../src/styles/theme/useStylesWithTheme.ts)
