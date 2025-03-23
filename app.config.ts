import { ConfigContext, ExpoConfig } from '@expo/config';

const APP_NAME = 'My App'; // Your app name
const APP_SLUG = 'my-new-app'; // Needs to be the same across all variants
const BUNDLE_IDENTIFIER = 'com.template.my-app'; // Your bundle identifier (iOS)
const PACKAGE_NAME = 'com.template.my-app'; // Your package name (Android)
const SCHEME = 'my-app'; // Your app scheme used for Linking (e.g. my-app://)
const EXPO_PROJECT_ID = 'YOUR_EXPO_PROJECT_ID'; //'YOUR_EXPO_PROJECT_ID';
const EXPO_UPDATES_URL = 'YOUR_EXPO_UPDATES_URL'; //'YOUR_EXP_UPDATES_URL';
const APP_VERSION = '1.0.0'; // Your app version,since we are using appVersion policy, this value will be used to avoid OTA updates in incorrect versions

export default ({ config }: ConfigContext): ExpoConfig => {
  const envConfig = getDynamicAppConfig(process.env.APP_VARIANT as 'development' | 'preview' | 'production');

  return {
    ...config,
    name: envConfig.name,
    slug: APP_SLUG,
    version: APP_VERSION,
    orientation: 'portrait',
    scheme: envConfig.scheme,
    userInterfaceStyle: 'light',
    newArchEnabled: true,
    updates: {
      url: EXPO_UPDATES_URL,
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: envConfig.bundleIdentifier,
      icon: {
        light: envConfig.icon.light,
        dark: envConfig.icon.dark,
        tinted: envConfig.icon.tinted,
      },
    },
    android: {
      package: envConfig.packageName,
      adaptiveIcon: {
        foregroundImage: envConfig.icon.adaptiveIcon,
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: {
        projectId: EXPO_PROJECT_ID,
      },
    },
    plugins: [
      [
        'expo-splash-screen',
        {
          backgroundColor: '#232323',
          imageWidth: 200,
          image: envConfig.splashIcon.dark,
          resizeMode: 'contain',
          dark: {
            image: envConfig.splashIcon.dark,
            backgroundColor: '#000000',
          },
        },
      ],
    ],
  };
};

interface DynamicEnvironmentConfig {
  name: string;
  bundleIdentifier: string;
  packageName: string;
  icon: {
    light: string;
    dark: string;
    tinted: string;
    adaptiveIcon: string;
  };
  splashIcon: {
    light: string;
    dark: string;
  };
  scheme: string;
}

export const getDynamicAppConfig = (env: 'development' | 'preview' | 'production'): DynamicEnvironmentConfig => {
  if (env === 'development') {
    return {
      name: `${APP_NAME} Dev`,
      bundleIdentifier: `${BUNDLE_IDENTIFIER}.dev`,
      packageName: `${PACKAGE_NAME}.dev`,
      icon: {
        light: './assets/icons/development/ios-light.png',
        dark: './assets/icons/development/ios-dark.png',
        tinted: './assets/icons/development/ios-tinted.png',
        adaptiveIcon: './assets/icons/development/adaptive-icon.png',
      },
      splashIcon: {
        light: './assets/icons/development/splash-icon-light.png',
        dark: './assets/icons/development/splash-icon-dark.png',
      },
      scheme: `${SCHEME}-dev`,
    };
  }

  if (env === 'preview') {
    return {
      name: `${APP_NAME} Preview`,
      bundleIdentifier: `${BUNDLE_IDENTIFIER}.preview`,
      packageName: `${PACKAGE_NAME}.preview`,
      icon: {
        light: './assets/icons/preview/ios-light.png',
        dark: './assets/icons/preview/ios-dark.png',
        tinted: './assets/icons/preview/ios-tinted.png',
        adaptiveIcon: './assets/icons/preview/adaptive-icon.png',
      },
      splashIcon: {
        light: './assets/icons/preview/splash-icon-light.png',
        dark: './assets/icons/preview/splash-icon-dark.png',
      },
      scheme: `${SCHEME}-preview`,
    };
  }

  return {
    name: APP_NAME,
    bundleIdentifier: BUNDLE_IDENTIFIER,
    packageName: PACKAGE_NAME,
    icon: {
      light: './assets/icons/production/ios-light.png',
      dark: './assets/icons/production/ios-dark.png',
      tinted: './assets/icons/production/ios-tinted.png',
      adaptiveIcon: './assets/icons/production/adaptive-icon.png',
    },
    splashIcon: {
      light: './assets/icons/production/splash-icon-light.png',
      dark: './assets/icons/production/splash-icon-dark.png',
    },
    scheme: SCHEME,
  };
};
