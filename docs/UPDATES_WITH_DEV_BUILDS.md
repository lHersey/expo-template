# 🛠️ Dev Builds and Branch Assignments

## 🔍 Understanding Dev Builds

Dev builds are unique in that they do not have a specific branch assigned to them. Instead, they are designed to provide flexibility for developers to test any release that matches the build number.

### ⚙️ How It Works

1. **No Branch Assignment**: Unlike production or preview builds, dev builds are not tied to a specific branch.
2. **Dynamic Release Selection**: From the app's menu, developers can view and select any release that matches the build number of the dev build.
3. **Testing Flexibility**: This allows developers to test multiple updates or features without creating new builds for each branch.

### 🗝️ Key Features

- **Release Visibility**: All releases that match the dev build's configuration are visible in the app's menu.
- **Manual Selection**: Developers can manually select which release to test, providing greater control over the testing process.
- **No Channel Restrictions**: Dev builds are not restricted by channels (e.g., production, preview), making them ideal for exploratory testing.

### 📚 Example Workflow

1. **Build a Dev Build**: Create a dev build using the appropriate EAS commands.
   ```bash
   eas build --profile development
   ```
2. **Publish Updates**: Publish updates to any branch as needed.
   ```bash
   eas update --branch version-1.0.0 --message "New feature for testing"
   ```
3. **Select Release in App**: Open the dev build, navigate to the menu, and select the desired release to test.

This approach ensures that developers can quickly iterate and validate changes without the overhead of managing branch assignments for dev builds.

### 🚀 Benefits

- Faster iteration and testing.
- Simplified workflow for developers.
- Greater flexibility in selecting and testing updates.

For more details on managing branches and updates, refer to the [EAS Update Documentation](https://docs.expo.dev/eas-update/introduction/).
