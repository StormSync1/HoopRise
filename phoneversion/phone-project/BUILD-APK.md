# Build the APK

1. Open the `phone-project` folder in Android Studio.
2. Allow Gradle sync and install any SDK component Android Studio requests.
3. Select the `app` module and choose **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
4. The debug APK will be at:

```text
app/build/outputs/apk/debug/app-debug.apk
```

The project uses Android SDK 35, minimum SDK 24, and application ID `com.courtlevel.app`.

For the easiest option, download `HoopRise-debug.apk` from a GitHub release and install it directly on your phone. See the repository [BUILDAPK.md](../../BUILDAPK.md) for phone installation steps.
