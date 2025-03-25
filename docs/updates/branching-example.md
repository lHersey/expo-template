# Branching Strategies for EAS Update

## 🌊 Example Flow

This example use versions as branches, when we create a build, we assign a specific channel (development, preview, production).

We can dynamically change the link between a channel and a branch (We can think like a git branch, and each update is a commit).

```
channel (Production) -> branch (1.0.0)
channel (Preview) -> branch (1.5.0)
```

Then once the branch preview is tested and it's ready for promotion, we can assign the channel Production to point to the same branch that Preview channel is pointing to.

```
channel (Production) -> branch (1.5.0)
channel (Preview) -> branch (1.5.0)
```

Once there is a new release candidate, we can create a new branch (like 1.7.0) and point the Preview channel to that branch and repeat the process.

```
channel (Production) -> branch (1.5.0)
channel (Preview) -> branch (1.7.0)
```

## 💡 Real Example

This is the first time we're developing (after successfully building our development and staging builds). It will automatically create EAS branches with the same name (development, staging).

But we will create our first release candidate (create a branch with the version 1.0.0):

```bash
eas branch:create version-1.0.0
```

Now we will edit the preview channel to point to our new branch:

```bash
eas channel:edit preview --branch version-1.0.0
```

So, all the users that have installed the build preview will receive the updates created in the branch `version-1.0.0`.

### 👨‍💻 Developing

Let's say that we created a new feature (Dark mode 🙌). We merged a new PR, and we want the feature to include the feature for the preview users. We publish an update to the correct branch!

(We can have an automated CI/GitHub action do this for us when we merge into main or a staging branch in our git repository.)

```bash
eas update --branch version-1.0.0 --message "Dark mode implementation"
```

Now, the update is tested, secure, and is ready for production! So we assign the build with channel production to the `version-1.0.0` branch! But first, let's create a new branch for the preview channel:

```bash
eas branch:create version-2.0.0 // Create a new branch version
eas channel:edit preview --branch version-2.0.0
```

✅ Then we assign the branch that was previously in the preview channel to the production channel!

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

And promote like `Development` -> `Preview` -> `Production`.
