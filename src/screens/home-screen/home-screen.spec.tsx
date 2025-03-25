import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { ThemeProvider } from '@/styles/theme/ThemeProvider';
import { ThemePreference } from '@/styles/theme/types';

import HomeScreen from './home-screen';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  useAsyncStorage: () => ({
    getItem: jest.fn(() => Promise.resolve(null)),
    setItem: jest.fn(() => Promise.resolve()),
  }),
}));

// Mock useColorScheme to control the theme in tests

describe('HomeScreen', () => {
  // Helper function to render component with ThemeProvider
  const renderWithTheme = () => {
    return render(
      <ThemeProvider defaultThemePreference={ThemePreference.LIGHT} onThemeLoaded={jest.fn()}>
        <HomeScreen />
      </ThemeProvider>,
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default theme', async () => {
    renderWithTheme();

    // Verify the component renders with correct text
    expect(screen.getByText('Home Screen')).toBeTruthy();
  });
});
