# Update Groups in EAS Update

## 🔍 Understanding Update Groups

Update groups allow you to organize updates for specific builds or audiences. This ensures that the right updates are delivered to the right users, improving the overall update management process.

### ⚙️ How It Works

1. **Group Updates by Build**: Updates are grouped based on the build they target.
2. **Target Specific Audiences**: Use branches to manage updates for different user groups (e.g., beta testers, production users).
3. **Manage Updates Easily**: View and manage updates within a group using the EAS CLI.

### 🗝️ Key Steps

1. **Publish Updates to a Branch**:

   ```bash
   eas update --branch <branch-name> --message "Update message"
   ```

   Replace `<branch-name>` with the branch name for the target group.

2. **View Updates in a Group**:

   ```bash
   eas update:list --branch <branch-name>
   ```

   This command shows all updates in the specified branch.

3. **Target Specific Builds**:
   Use runtime versions or build profiles to ensure updates are applied only to compatible builds.

### 🚀 Benefits

- Deliver updates to specific user groups.
- Simplify update management for different environments (e.g., beta, production).
- Ensure compatibility with targeted builds.

For more details, refer to the [EAS Update Documentation](https://docs.expo.dev/eas-update/introduction/).
