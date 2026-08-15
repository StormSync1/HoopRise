# HoopRise

HoopRise is a local-first basketball player development app with Windows and Android targets. It uses the supplied HoopRise logo and a modern dark athletic interface.

## Run the desktop web app

Install Node.js 20+ and run from this folder:

```powershell
npm install
npm run dev
```

The current app has no Firebase dependency, account system, or required environment variables. All profile, game, training, goals, XP, records, and image data is stored locally on the device. The recovery answer is salted-hash protected, but personal questions are weaker than real authentication.

## Build the Windows executable

```powershell
npm run dist --workspace desktopversion
```

The NSIS installer is written to `desktopversion/release/Court-Level-Setup-0.0.1.exe`.

For a portable build, use `npm run build:portable --workspace desktopversion`. The portable executable is inside `desktopversion/release/Court Level-win32-x64`.

## Build the Android project

Install Android Studio and its SDK, then run:

```powershell
npm run sync:native --workspace phoneversion
cd phoneversion/phone-project
gradlew.bat assembleDebug
```

Open `phoneversion/phone-project` in Android Studio. It is a native Android Studio project with a WebView that loads `app/src/main/assets/index.html` locally. Build a debug or release APK from Android Studio.

The debug APK is written to `phoneversion/phone-project/app/build/outputs/apk/debug/app-debug.apk`.

## GitHub release

Push the repository to `StormSync1/HoopRise`, then create and push a version tag:

```powershell
git add .
git commit -m "Prepare HoopRise v0.0.1 release"
git push origin main
git tag v0.0.1
git push origin v0.0.1
```

The GitHub Actions workflow builds the NSIS installer and Android Studio project ZIP on GitHub's clean build machines and attaches them to the tagged release.

## Content

NBA Training is presented as publicly inspired skill collections, not exact private workouts. Drills are original, clickable, and launch the shared training timer.
