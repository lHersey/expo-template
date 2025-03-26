# 📱 Expo Template

A modern React Native application template built with Expo, featuring a comprehensive setup for building production-ready mobile applications. This template includes theme handling, testing infrastructure, code quality tools, and optimized build configurations.

## ✨ Features

- 📱 **React Native with Expo** - Modern mobile app development framework
- 🏗️ **TypeScript** - Type-safe code development
- 🎨 **Theme System** - Light/dark mode with persistence
- ✅ **Testing Framework** - Jest and React Native Testing Library setup
- 🧹 **Code Quality** - ESLint, Prettier, TypeScript strict mode
- 🔄 **Git Hooks** - Husky for pre-commit validation
- 📦 **AsyncStorage** - Local data persistence
- 🚀 **Multiple Build Types** - Development, Preview, and Production builds

## 🛠️ Prerequisites

- Node.js v22.14.0 (specified in .nvmrc)
- Expo CLI
- Yarn or npm

## 🚀 Installation

```bash
# Clone the repo
git clone https://github.com/lhersey/expo-template.git

# Navigate to the project folder
cd expo-template

# Install dependencies (Use yarn or any the package manager of your preference)
npm install
```

## 📋 Available Scripts

```bash
# Start Expo development server
npm run start

# Start Expo for specific platforms
npm run android
npm run ios
npm run web

# Linting
npm run lint

# Testing
npm run test            # Run all tests silently
npm run test:ci         # Run tests in CI environment
npm run test:watch      # Run tests in watch mode

# Code health
npm run doctor          # Run Expo Doctor for project health check

# Building
npm run build:dev:android       # Build Android DEV client app
npm run build:dev:ios           # Build iOS DEV client app (Real device)
npm run build:dev:simulator     # Build iOS DEV client app (Simulator)
npm run build:preview:android   # Build Android preview
npm run build:preview:ios       # Build iOS preview
npm run build:prod:android      # Build Android production
npm run build:prod:ios          # Build iOS production
```

## 📁 Project Structure

```
expo-template/
├── .husky/                # Git hooks configuration
├── assets/                # Static assets
│   └── icons/             # App icons for different build types
├── src/
│   ├── screens/           # Screen components
│   │   └── home-screen/   # Home screen component and tests
│   ├── styles/            # Style configurations
│   │   └── theme/         # Theme management system
│   └── shared/            # Shared components and utilities
├── App.tsx                # Main application component
├── app.config.ts          # Expo configuration with dynamic environment settings
├── babel.config.js        # Babel configuration
├── eslint.config.mjs      # ESLint configuration
├── jest.config.js         # Jest configuration
├── metro.config.js         # Metro bundler configuration
├── lint-staged.config.mjs # Lint-staged configuration
└── tsconfig.json          # TypeScript configuration
```

## Configuration and Setup

#### **Theme System**

The app includes a fully implemented theme system with light and dark modes. The theme state is persisted using `AsyncStorage` and automatically syncs with the device's preferred color scheme.

Located in `src/styles/theme/`
Uses ThemeProvider component to manage theme state
Includes custom hooks like `useStylesWithTheme` for applying themed styles
Supports dynamic theme switching with proper TypeScript typing
Light and dark themes with consistent color palette

#### **Testing**

Testing infrastructure is set up with Jest and React Native Testing Library:

- Jest as the test runner with Expo preset
- React Native Testing Library for component testing
- Custom test utilities and mock implementations
- Sample tests for components like HomeScreen

Run tests with:

```bash
npm test
```

## Code Quality Tools

#### **ESLint**

ESLint is configured with best practices for React Native and TypeScript:

- React/React Native specific rules
- TypeScript strict checking
- Import sorting with eslint-plugin-simple-import-sort
- Promise handling rules with eslint-plugin-promise
- Testing best practices with eslint-plugin-testing-library and eslint-plugin-jest

#### **Prettier**

Code formatting is automated with Prettier:

- Consistent code style enforced across the project
- Integration with ESLint via eslint-plugin-prettier
- Single quotes, trailing commas, and 120 character line width as defaults

#### **Husky and lint-staged**

- Runs tests via pre-commit hook
- Processes staged files with lint-staged
- Enforces commit message conventions with commitlint

## Build Configuration

The app uses Expo's configuration system to manage different build environments:

- **Development**: Includes debugging tools and development features
- **Preview**: Testing builds for QA and beta testing
- **Production**: Optimized builds for release

App configuration is defined in app.config.ts with dynamic environment-based settings for:

- App name and bundle identifiers
- App icons and splash screens
- Native configuration for iOS and Android

## 📚 Documentation

Explore the following documentation to learn more about the project and its features:

- [Introduction to EAS Update](docs/updates/introduction.md)
- [Theming](docs/themes/introduction.md)
- [App icon generation and app variants](docs/app-icons/introduction.md)

#### Documentation Links

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Library Documentation](https://testing-library.com/docs/react-native-testing-library/intro/)
- [AsyncStorage Documentation](https://react-native-async-storage.github.io/async-storage/docs/install/)
- [Expo Application Services (EAS)](https://docs.expo.dev/eas/)
- [Husky Documentation](https://typicode.github.io/husky/#/)
- [lint-staged Documentation](https://github.com/okonet/lint-staged#readme)
- [Expo Updates](https://docs.expo.dev/versions/latest/sdk/updates/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
