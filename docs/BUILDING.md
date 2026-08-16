# Building HoopRise

## Windows

```powershell
npm install
npm run typecheck
npm run dist --workspace desktopversion
```

The NSIS installer is created in `desktopversion/release/`.

## Android

```powershell
npm run sync:native --workspace phoneversion
cd phoneversion/phone-project
gradlew.bat assembleDebug
```

The Android app loads the compiled React app from `app/src/main/assets/index.html`; it does not need a website or server.

The packaged Android project also includes `phoneversion/phone-project/BUILD-APK.md` for the short Android Studio build instructions.

## GitHub releases

Release builds run automatically when a `v*` tag is pushed. The workflow checks TypeScript, creates the Windows NSIS installer, refreshes Android assets, packages the Android Studio project, and attaches both artifacts to the GitHub release.
