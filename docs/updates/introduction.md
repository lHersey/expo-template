# Introduction to EAS Update

## 🔍 Understanding EAS Update

Expo Application Services (EAS) Update is a service that allows you to deliver over-the-air (OTA) updates to your app without requiring users to download a new version from the app store. This enables faster iteration and bug fixes, improving the user experience.

### ⚙️ How It Works

1. **Build and Publish**: After making changes to your app, you can publish updates using the `eas update` command.
2. **Update Delivery**: When users open your app, it checks for updates and downloads them in the background.
3. **Seamless Integration**: Updates are applied the next time the app is launched, ensuring a smooth experience.

### 🗝️ Key Concepts

- **Update Groups**: Updates are grouped together, allowing you to target specific builds or audiences. Learn more in the [Update Groups Guide](update-groups.md).
- **Rollbacks**: If an update causes issues, you can roll back to a previous version. See the [Rollbacks Guide](rollbacks.md).
- **Branching**: Use branches to manage updates for different environments (e.g., beta, alpha). Learn more in the [Branching Guide](branching-example.md).
- **Runtime Versions**: Ensure compatibility between native code and JavaScript updates. See the [Runtime Versions Guide](runtime-versions.md).
- **Dev Builds**: Test updates dynamically with dev builds. Check out the [Dev Builds Guide](dev-builds.md).

### 📚 Learn More

For detailed information, visit the [EAS Update Documentation](https://docs.expo.dev/eas-update/introduction/).
