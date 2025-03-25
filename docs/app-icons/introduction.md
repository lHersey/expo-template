# App Icons and Splash Screen

In this project, app icons and splash screens are dynamically configured based on the `APP_VARIANT` being built. This ensures that each app variant (e.g., development, preview, production) can have its own unique branding and visual identity.

## Dynamic Configuration

The `APP_VARIANT` is defined in the `eas.json` file under the `env` property for each build profile. This value is passed to the app configuration in `app.config.ts`, where it determines the appropriate app icon and splash screen to use.

### Additional Resources for App Icons

To create app icons, you can use the [Figma template](https://www.figma.com/community/file/1466490409418563617/expo-app-icon-splash-v2-community). This template provides a structured way to design app icons and splash screens for your project.

For guidance on using different app icons for various app variants, check out this helpful [Expo YouTube video](https://www.youtube.com/watch?v=UtJJCAfrjIg&t).

If you're working on adaptive icons for Android or creating icons for dark, light, and tinted themes, this [YouTube tutorial](https://www.youtube.com/watch?v=3Bsw8a1BJoQ&t) provides a step-by-step guide.

1. **Development**

   - Icons and splash screens are located in the `./assets/icons/development/` directory.
   - Example:
     - App Icon: `ios-light.png`, `ios-dark.png`
     - Splash Screen: `splash-icon-light.png`, `splash-icon-dark.png`

2. **Preview**

   - Icons and splash screens are located in the `./assets/icons/preview/` directory.
   - Example:
     - App Icon: `ios-light.png`, `ios-dark.png`
     - Splash Screen: `splash-icon-light.png`, `splash-icon-dark.png`

3. **Production**
   - Icons and splash screens are located in the `./assets/icons/production/` directory.
   - Example:
     - App Icon: `ios-light.png`, `ios-dark.png`
     - Splash Screen: `splash-icon-light.png`, `splash-icon-dark.png`

### Default Behavior

By default, each app variant has its own unique app icon and splash screen. However, this behavior can be customized by modifying the paths in the `getDynamicAppConfig` function in `app.config.ts`.

## How It Works

1. **EAS Build Configuration**  
   The `eas.json` file specifies the `APP_VARIANT` for each build profile:

   ```jsonc
   "env": {
     "APP_VARIANT": "development"
   }
   ```

2. **Dynamic App Configuration**  
   The `getDynamicAppConfig` function in `app.config.ts` uses the `APP_VARIANT` to load the appropriate assets:

   ```typescript
   export const getDynamicAppConfig = (env: 'development' | 'preview' | 'production') => {
     if (env === 'development') {
       return {
         icon: {
           light: './assets/icons/development/ios-light.png',
           dark: './assets/icons/development/ios-dark.png',
         },
         splashIcon: {
           light: './assets/icons/development/splash-icon-light.png',
           dark: './assets/icons/development/splash-icon-dark.png',
         },
       };
     }
   };
   ```

3. **Expo Configuration**  
   The dynamically loaded assets are applied to the Expo configuration:
   ```typescript
   plugins: [
     [
       'expo-splash-screen',
       {
         image: envConfig.splashIcon.dark,
         dark: {
           image: envConfig.splashIcon.light,
         },
       },
     ],
   ];
   ```

## Customization

To change the default behavior:

- Update the paths in the `getDynamicAppConfig` function to point to new assets.
- Ensure the new assets are included in the appropriate directories.

This approach provides flexibility while maintaining a clear structure for managing app icons and splash screens across different environments.
