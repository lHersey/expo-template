# 🛠️ Runtime Versions and Update Compatibility

## 🔍 Understanding Runtime Versions in EAS Updates

When managing updates with EAS, it is crucial to understand how runtime versions ensure compatibility between your app's native code and JavaScript updates. This prevents users from receiving updates that are incompatible with their installed app version.

### ⚙️ Why This is Important

Native code changes, such as adding new dependencies or modifying native modules, require a new build of the app. If an update containing incompatible JavaScript is delivered to a build with outdated native code, it can cause crashes or unexpected behavior. The runtime version prevents this by ensuring that only compatible updates are delivered to the correct builds.

### 🗝️ Key Benefits

- **Compatibility Assurance**: Updates are only applied to builds with matching runtime versions.
- **Crash Prevention**: Avoids delivering updates that could break the app due to mismatched native dependencies.
- **Streamlined Workflow**: Developers can confidently manage updates without worrying about compatibility issues.

### 📚 Example Workflow

1. **Set Runtime Version**: When making changes to native code, update the runtime version in your app config.

We can assign a version directly, or have a policy assigned

```ts
// In app.config.ts
{
  "expo": {
    "runtimeVersion": "2.0.0"
  }
}
```

OR

```ts

// In app.config.ts
{
    "expo": {
        "runtimeVersion": {
            "policy" : "appVersion"
        }
    }
}

```

- **appVersion**: The "appVersion" policy is provided for projects with that wish to define their runtime compatibility based on the app version. The "appVersion" policy will set the runtime version to the project's current "version" property. (version property in app.config.ts)

- **nativeVersion**: The "nativeVersion" policy is provided for projects that wish to define their runtime compatibility based on the project's current "version" and "versionCode" (Android) or "buildNumber" (iOS) properties.

- **fingerprint**: The "fingerprint" runtime version policy automatically calculates the runtime version for you, including through changes like SDK upgrades or adding custom native code. This policy works for both projects with and without custom native code. It works by using the `@expo/fingerprint` package to calculate the hash of your project during builds and updates to determine build-update compatibility (also known as the runtime).

- **sdkVersion**: The "sdkVersion" policy works using just the expo sdkVersion number, this policy works grear if native code does not change often, and we only want a new "build" each time a expoSdk is published

For more information about policies, check: [Runtime policies](https://docs.expo.dev/versions/latest/sdk/updates/#runtime-version)

2. **Create a New Build**: Build your app with the updated runtime version.

   ```bash
   eas build --profile production
   ```

3. **Create a Branch for the Version**: Create a branch for your app version.

   ```bash
   eas branch:create version-2.0.0
   ```

4. **Publish Updates to the Branch**: Publish updates to the branch.

   ```bash
   eas update --branch version-2.0.0 --message "Bug fixes and performance improvements"
   ```

5. **Ensure Compatibility**: Only users with a matching runtime version will receive updates from this branch.

### 🚀 Real-World Example

Imagine you release a new feature that requires a native dependency update:

1. Update your runtime version to "3.0.0" in your app config
2. Create a new build and submit it to app stores
3. Create a branch for this version

```bash
# Create a new branch for the updated version
eas branch:create version-3.0.0

# Publish an update to the new branch
eas update --branch version-3.0.0 --message "New feature: Dark mode"
```

Now, users with runtime version "3.0.0" will receive the update, while users with version "2.0.0" remain on their compatible branch.

### 🔄 Current Status Example

- 🚀 **Production builds** (runtime version "2.0.0") → `version-2.0.0` branch
- 🧪 **Preview builds** (runtime version "3.0.0") → `version-3.0.0` branch

This approach ensures that updates are delivered safely and effectively, maintaining a seamless user experience without appending build numbers to branch names.
