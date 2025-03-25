import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Appearance, ColorSchemeName, useColorScheme } from 'react-native';

import { DARK_THEME, LIGHT_THEME } from './themes';
import { Theme, ThemePreference, ThemeState } from './types';

// Constants
const THEME_STORAGE_KEY: string = '@app_theme';

// Types and Interfaces
interface ThemeContextProps {
  themeState: ThemeState;
  setTheme: (preference: ThemePreference) => void;
  isLoading: boolean;
  themePreference: ThemePreference;
}

type ThemeProviderProps = {
  children: ReactNode;
  defaultThemePreference?: ThemePreference;
  onThemeLoaded: () => void;
};

// Create context with a meaningful default value to help with debugging
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Custom hook for theme storage operations
function useThemeStorage() {
  const storage = useAsyncStorage(THEME_STORAGE_KEY);

  // Save theme preference to storage
  const saveThemePreference = async (preference: ThemePreference): Promise<void> => {
    try {
      await storage.setItem(preference);
    } catch {
      return;
    }
  };

  // Load saved theme preference from storage
  const loadThemePreference = async (): Promise<ThemePreference | null> => {
    try {
      const savedPreference = await storage.getItem();
      return savedPreference as ThemePreference | null;
    } catch {
      return null;
    }
  };

  return { saveThemePreference, loadThemePreference };
}

// Resolve actual theme based on user preference and system
const resolveTheme = (preference: ThemePreference, systemTheme: ColorSchemeName): Theme => {
  if (preference === ThemePreference.SYSTEM) {
    return systemTheme === 'dark' ? Theme.DARK : Theme.LIGHT;
  }
  // Convert preference to actual theme (safe since LIGHT and DARK enum values are the same)
  return preference === ThemePreference.DARK ? Theme.DARK : Theme.LIGHT;
};

// Theme mapping object
const themeMap: Record<Theme, ThemeState> = {
  [Theme.LIGHT]: LIGHT_THEME,
  [Theme.DARK]: DARK_THEME,
};

export const ThemeProvider = ({
  children,
  onThemeLoaded,
  defaultThemePreference = ThemePreference.SYSTEM,
}: ThemeProviderProps) => {
  // Get the current color scheme of the phone
  const currentColorScheme = useColorScheme();

  // Custom hook for theme storage operations
  const { saveThemePreference, loadThemePreference } = useThemeStorage();

  // Track loading state (When reading from local storage)
  const [isLoading, setIsLoading] = useState(true);

  // Ttack the current color scheme of the phone if it changes while the app is open
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(currentColorScheme);

  // Track the user's theme preference (LIGHT, DARK, or SYSTEM)
  const [userThemePreference, setUserThemePreference] = useState<ThemePreference>(defaultThemePreference);

  // Track the actual theme being applied (only LIGHT or DARK)
  const [activeTheme, setActiveTheme] = useState<Theme>(resolveTheme(defaultThemePreference, colorScheme));

  // Handler for changing theme preference
  const setTheme = async (preference: ThemePreference) => {
    setUserThemePreference(preference);
    await saveThemePreference(preference);
  };

  // Update active theme whenever theme preference or system theme changes
  useEffect(() => {
    setActiveTheme(resolveTheme(userThemePreference, colorScheme));
  }, [userThemePreference, colorScheme]);

  // Load saved theme on initial render
  useEffect(() => {
    const initializeTheme = async () => {
      try {
        const savedPreference = await loadThemePreference();
        if (savedPreference) {
          setUserThemePreference(savedPreference);
        }
      } finally {
        setIsLoading(false);
        onThemeLoaded?.();
      }
    };

    initializeTheme();
  }, [loadThemePreference, onThemeLoaded]);

  // If the user prefrence is system, and the user changes while the app is open,
  // we need to update the theme accordingly
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme: newColorScheme }) => {
      setColorScheme(newColorScheme);
    });

    return () => subscription.remove();
  }, []);

  // Get current theme state from resolved theme
  const currentThemeState = themeMap[activeTheme];

  return (
    <ThemeContext.Provider
      value={{
        themeState: currentThemeState,
        setTheme,
        isLoading,
        themePreference: userThemePreference,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
