$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$source = Join-Path $projectRoot 'desktopversion/dist'
$assets = Join-Path $PSScriptRoot 'phone-project/app/src/main/assets'
if (-not (Test-Path (Join-Path $source 'index.html'))) { throw 'Build the web app first.' }
New-Item -ItemType Directory -Force $assets | Out-Null
Copy-Item (Join-Path $source 'index.html') (Join-Path $assets 'index.html') -Force
if (Test-Path (Join-Path $assets 'assets')) { Remove-Item (Join-Path $assets 'assets') -Recurse -Force }
Copy-Item (Join-Path $source 'assets') (Join-Path $assets 'assets') -Recurse -Force
Write-Host 'Court Level web assets copied into the native Android project.'
