import { ColorTheme, Theme } from './types';

// Custom modern color palette
export const colors: Record<Theme, Readonly<ColorTheme>> = {
  [Theme.LIGHT]: {
    primary: {
      main: '#3B82F6', // Main brand color, used for key actions and navigation
      light: '#60A5FA', // Lighter version for hover states and backgrounds
      dark: '#2563EB', // Darker version for pressed states and emphasis
      text: '#FFFFFF', // Text on primary color backgrounds
    },
    secondary: {
      main: '#EC4899', // Used for secondary actions and accents
      light: '#F472B6', // Lighter version for hover states
      dark: '#DB2777', // Darker version for pressed states
      text: '#FFFFFF', // Text on secondary color backgrounds
    },
    background: {
      default: '#F9FAFB', // Main app background
      paper: '#FFFFFF', // Card and modal backgrounds
      elevated: '#FFFFFF', // Elevated components like popovers
    },
    text: {
      primary: '#1F2937', // Main text content
      secondary: '#6B7280', // Secondary and less important text
      disabled: '#9CA3AF', // Text for disabled elements
      hint: '#9CA3AF', // Placeholder text
    },
    button: {
      primary: '#3B82F6', // Primary action buttons
      secondary: '#F3F4F6', // Secondary and outline buttons
      disabled: '#E5E7EB', // Disabled button state
      text: '#FFFFFF', // Text on button surfaces
    },
    border: '#E5E7EB', // Standard borders for inputs, cards, etc.
    divider: '#F3F4F6', // Subtle dividers between elements
    error: '#EF4444', // Error states and alerts
    warning: '#F59E0B', // Warning states and notices
    info: '#3B82F6', // Informational states
    success: '#10B981', // Success states and confirmations
    action: {
      active: 'rgba(31, 41, 55, 0.54)', // Active UI controls
      hover: 'rgba(31, 41, 55, 0.04)', // Hover state background
      selected: 'rgba(31, 41, 55, 0.08)', // Selected state background
      disabled: 'rgba(31, 41, 55, 0.26)', // Disabled state opacity
    },
  },
  [Theme.DARK]: {
    primary: {
      main: '#60A5FA', // Main brand color, brighter for dark mode
      light: '#93C5FD', // Lighter version for hover states
      dark: '#3B82F6', // Slightly darker version for pressed states
      text: '#111827', // Text on primary color backgrounds
    },
    secondary: {
      main: '#F472B6', // Secondary actions and accents, brighter for dark mode
      light: '#F9A8D4', // Lighter version for hover states
      dark: '#EC4899', // Darker version for pressed states
      text: '#111827', // Text on secondary color backgrounds
    },
    background: {
      default: '#111827', // Main app background
      paper: '#1F2937', // Card and modal backgrounds
      elevated: '#374151', // Elevated components
    },
    text: {
      primary: '#F9FAFB', // Main text content
      secondary: '#D1D5DB', // Secondary text
      disabled: '#6B7280', // Disabled text
      hint: '#9CA3AF', // Placeholder text
    },
    button: {
      primary: '#60A5FA', // Primary action buttons
      secondary: '#374151', // Secondary buttons
      disabled: '#4B5563', // Disabled button state
      text: '#111827', // Text on button surfaces
    },
    border: '#374151', // Standard borders
    divider: '#1F2937', // Subtle dividers
    error: '#F87171', // Error states and alerts, brighter for dark mode
    warning: '#FBBF24', // Warning states, brighter for dark mode
    info: '#60A5FA', // Informational states, brighter for dark mode
    success: '#34D399', // Success states, brighter for dark mode
    action: {
      active: 'rgba(249, 250, 251, 0.7)', // Active UI controls
      hover: 'rgba(249, 250, 251, 0.08)', // Hover state background
      selected: 'rgba(249, 250, 251, 0.16)', // Selected state background
      disabled: 'rgba(249, 250, 251, 0.3)', // Disabled state opacity
    },
  },
};

// Helper function to get the current theme colors
export const getThemeColors = (mode: Theme): ColorTheme => colors[mode];

export default colors;
