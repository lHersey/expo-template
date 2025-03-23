import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

import { DARK_THEME, LIGHT_THEME } from './themes';
import { Theme, ThemeState } from './types';

// Constants
const THEME_STORAGE_KEY: string = '@app_theme';

// Types and Interfaces
interface ThemeContextProps {
  themeState: ThemeState;
  setTheme: (theme: Theme) => void;
  isLoading: boolean;
}

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  onThemeLoaded: () => void;
};

// Create context with a meaningful default value to help with debugging
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Custom hook for theme storage operations
function useThemeStorage() {
  const storage = useAsyncStorage(THEME_STORAGE_KEY);

  const saveTheme = async (theme: Theme): Promise<void> => {
    try {
      await storage.setItem(theme);
    } catch {
      return;
    }
  };

  const loadTheme = async (): Promise<Theme | null> => {
    try {
      const savedTheme = await storage.getItem();
      return savedTheme as Theme | null;
    } catch {
      return null;
    }
  };

  return { saveTheme, loadTheme };
}

// Theme mapping object
const themeMap: Record<Theme, ThemeState> = {
  [Theme.LIGHT]: LIGHT_THEME,
  [Theme.DARK]: DARK_THEME,
};

export const ThemeProvider = ({ children, onThemeLoaded, defaultTheme }: ThemeProviderProps) => {
  const preferredColorScheme = useColorScheme();
  defaultTheme = defaultTheme || preferredColorScheme === 'dark' ? Theme.DARK : Theme.LIGHT;

  const { saveTheme, loadTheme } = useThemeStorage();

  const [isLoading, setIsLoading] = useState(true);
  const [activeTheme, setActiveTheme] = useState<Theme>(defaultTheme);

  // Handler for changing theme
  const setTheme = async (theme: Theme) => {
    setActiveTheme(theme);
    await saveTheme(theme);
  };

  // Load saved theme on initial render
  useEffect(() => {
    const initializeTheme = async () => {
      try {
        const savedTheme = await loadTheme();
        if (savedTheme) {
          setActiveTheme(savedTheme);
        }
      } finally {
        setIsLoading(false);
        onThemeLoaded?.();
      }
    };

    initializeTheme();
  }, [loadTheme, onThemeLoaded]);

  // Get current theme state from theme type
  const currentThemeState = themeMap[activeTheme] || LIGHT_THEME;

  return (
    <ThemeContext.Provider
      value={{
        themeState: currentThemeState,
        setTheme,
        isLoading,
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
