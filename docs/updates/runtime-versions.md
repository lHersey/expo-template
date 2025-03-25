# Runtime Versions in EAS Update

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

We can assign a version directly, or have a policy assigned.

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
