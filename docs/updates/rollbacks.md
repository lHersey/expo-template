# Rollbacks in EAS Update

## 🔍 Understanding Rollbacks

Rollbacks allow you to revert to a previous update if a newly published update causes issues. This ensures that users can continue using a stable version of your app while you address the problems in the latest update.

### ⚙️ How It Works

1. **Identify the Problematic Update**: Determine which update is causing issues by reviewing user feedback or monitoring tools.
2. **Select a Previous Update**: Choose a stable update from the update history.
3. **Rollback Command**: Use the `eas update:republish` command to republish the previous update.

### 🗝️ Key Steps

1. **View Update History**:

   ```bash
   eas update:list
   ```

   This command shows a list of all updates, including their branches and messages.

2. **Republish a Previous Update**:

   ```bash
   eas update:republish --branch <branch-name> --update-id <update-id>
   ```

   Replace `<branch-name>` with the branch name and `<update-id>` with the ID of the update you want to roll back to.

3. **Verify the Rollback**:
   Ensure the rollback is applied by testing the app and confirming that users receive the stable update.

### 🚀 Benefits

- Quickly restore app stability.
- Minimize user impact during update issues.
- Maintain user trust by addressing problems promptly.

For more details, refer to the [EAS Update Documentation](https://docs.expo.dev/eas-update/introduction/).
