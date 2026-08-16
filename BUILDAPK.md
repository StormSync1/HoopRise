# Install HoopRise on Android

## Easiest way: install the ready APK

1. Open the [HoopRise Releases page](https://github.com/StormSync1/HoopRise/releases).
2. Open the newest release.
3. Download **HoopRise-debug.apk** directly to your Android phone.
4. Open the downloaded file.
5. If Android asks, allow your browser or file manager to **Install unknown apps**.
6. Return to the APK and tap **Install**.
7. Open HoopRise from your app list.

The APK is a debug build for personal testing. It does not require Android Studio, Node.js, Firebase, an account, or an internet connection after installation.

## If Android blocks the install

Open **Settings**, search for **Install unknown apps**, choose the browser or file manager used to download the APK, enable **Allow from this source**, and open the APK again. Only install APKs downloaded from a source you trust.

## Build the APK yourself

Use this option if you want to build from source:

1. Install [Android Studio](https://developer.android.com/studio).
2. Download `HoopRise-Phone-Project.zip` from the latest release.
3. Extract the ZIP.
4. Open the extracted `phone-project` folder in Android Studio.
5. Wait for Gradle sync and let Android Studio install the required SDK components.
6. Select **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

The generated debug APK is located at:

```text
phone-project/app/build/outputs/apk/debug/app-debug.apk
```

## Build from the repository

From the repository root on Windows:

```powershell
npm install
npm run sync:native --workspace phoneversion
cd phoneversion/phone-project
.\gradlew.bat assembleDebug
```

The app is a native Android WebView wrapper around the local HoopRise web app. It does not load the app from a website.
