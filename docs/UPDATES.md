# 🚀 OTA Updates with eas update

## 🔍 Understanding EAS Update

Expo Application Services (EAS) Update is a service that allows you to deliver over-the-air (OTA) updates to your app without requiring users to download a new version from the app store. This enables faster iteration and bug fixes, improving the user experience.

### ⚙️ How It Works

1. **Build and Publish**: After making changes to your app, you can publish updates using the `eas update` command.
2. **Update Delivery**: When users open your app, it checks for updates and downloads them in the background.
3. **Seamless Integration**: Updates are applied the next time the app is launched, ensuring a smooth experience.

### 🗝️ Key Concepts

- **Update Groups**: Updates are grouped together, allowing you to target specific builds or audiences.
- **Rollbacks**: If an update causes issues, you can roll back to a previous version.
- **Branching**: Use branches to manage updates for different environments (e.g., beta, alpha).

### 📚 Learn More

For detailed information, visit the [EAS Update Documentation](https://docs.expo.dev/eas-update/introduction/).

## 🌊 Example flow

This example use versions as branches, when we create a build, we assing a specific channel (development, preview, production)

We can dynamically chance the link between a channel and a branch (We can think like a git branch, and each update is a commit)

```
channel (Production) -> branch (1.0.0)
channel (Preview) -> branch (1.5.0)
```

Then once the branch preview is tested and it's ready for promotion, we can assign the channel Production to point to the same branch that Preview channel is pointing to

```
channel (Production) -> branch (1.5.0)
channel (Preview) -> branch (1.5.0)
```

Once there is a new release candidate, we can create a new branch (like 1.7.0) we can point the Preview channel to that branch and repeat the process

```
channel (Production) -> branch (1.5.0)
channel (Preview) -> branch (1.7.0)
```

## 💡 Real Example

This is the first time we're developing (after successfuly building our development and staging builds)
It will automatically create branches EAS branches with the same name (development, staging)

But we will create out first release candidate (create a branch with the version 1.0.0)

```bash
eas branch:create version-1.0.0
```

Now we will edit the preview channel to point to our new branch

```bash
eas channel:edit preview --branch version-1.0.0
```

So, all the users that have installed the build preview, will receive the updates create in the branch `version-1.0.0`

### 👨‍💻 Developing

Let's say that we created a new feature (Dark mode 🙌), we merged a new PR, we want the feature to include the feature for the preview users, do we publish an update to the correct branch!

(We can have an automated CI/github action do this for us when we merge into main or a staging branch in our git repository)

```bash
eas update --branch version-1.0.0 --message "Dark mode implementation"
```

Now, the update is tested, secure and is ready for production! so we assign the build with channel production to the `version-1.0.0` branch!, but first let's create a new branch for the preview channel

```bash
eas branch:create version-2.0.0 // Create a new branch version
eas channel:edit preview --branch version-2.0.0
```

✅ Then we assign the branch that was previously in the preview channel, to the production channel!

```bash
eas channel:edit production --branch version-1.0.0
```

## Current Status Example 🔄

Current state of our channels and branches:

- 🚀 **Production builds** (production channel) → pointing to `version-1.0.0` branch
- 🧪 **Preview builds** (preview channel) → pointing to `version-2.0.0` branch

## Adding Features to Preview 🔍

Let's say we develop a new feature (Login with Apple 🍎). We want to release this update to preview users first:

```bash
# Push the update to the preview branch
eas update --branch version-2.0.0 --message "Login with Apple integration"
```

✅ With this update, preview users get the new feature while production remains stable.

## Promoting to Production 📈

Once we've tested version-2.0.0 thoroughly and it's ready for production:

1️⃣ First, create a new branch for continued preview development:

```bash
# Create a new branch for future preview updates
eas branch:create version-3.0.0
```

2️⃣ Point the preview channel to this new branch:

```bash
# Redirect preview channel to the new branch
eas channel:edit preview --branch version-3.0.0
```

3️⃣ Finally, promote the stable version to production:

```bash
# Update production channel to use the tested version
eas channel:edit production --branch version-2.0.0
```

Now our channels look like this:

- 🚀 **Production builds** → `version-2.0.0` branch
- 🧪 **Preview builds** → `version-3.0.0` branch

## Additional Control Options 🎛️

For even more granular release control, you can use a three-stage promotion process:

- 🚀 **Production channel** → `version-2.0.0` branch
- 🧪 **Preview channel** → `version-3.0.0` branch
- 💾 **Development channel** → `version-4.0.0` branch

And promote like `Development` -> `Preview` -> `Production`
