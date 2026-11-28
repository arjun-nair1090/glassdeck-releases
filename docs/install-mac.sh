#!/bin/sh
# SPDX-License-Identifier: FSL-1.1-MIT
# SPDX-FileCopyrightText: 2026 arjun-nair1090
# Install Glassdeck on a Mac from Terminal:
#
#   curl -fsSL https://arjun-nair1090.github.io/glassdeck-releases/install-mac.sh | sh
#
# Downloads the latest release for this Mac (Apple Silicon or Intel), copies Glassdeck.app into Applications and
# opens it. Glassdeck isn't signed with an Apple Developer ID yet, so macOS blocks a copy downloaded in a browser;
# a copy fetched here is never marked as downloaded, so it opens straight away. Run it again to update.
set -eu

if [ "$(uname -s)" != Darwin ]; then
  echo "This installer is for macOS. Downloads for other systems: https://arjun-nair1090.github.io/glassdeck-releases/" >&2
  exit 1
fi

case "$(uname -m)" in
  arm64) ARCH=arm64 ;;
  *) ARCH=intel ;;
esac
# Rosetta reports x86_64 on an Apple Silicon Mac: install the native build anyway.
if [ "$ARCH" = intel ] && [ "$(sysctl -in hw.optional.arm64 2>/dev/null || echo 0)" = 1 ]; then ARCH=arm64; fi

URL="https://github.com/arjun-nair1090/glassdeck-releases/releases/latest/download/Glassdeck-mac-$ARCH.dmg"
TMP=$(mktemp -d)
MNT="$TMP/mnt"
cleanup() {
  hdiutil detach "$MNT" -quiet >/dev/null 2>&1 || true
  rm -rf "$TMP"
}
trap cleanup EXIT INT TERM

if [ -n "${GLASSDECK_DMG:-}" ]; then
  cp "$GLASSDECK_DMG" "$TMP/Glassdeck.dmg"
else
  echo "Downloading Glassdeck for $( [ "$ARCH" = arm64 ] && echo 'Apple Silicon' || echo 'Intel Macs' )..."
  curl -fL --progress-bar -o "$TMP/Glassdeck.dmg" "$URL"
fi

mkdir -p "$MNT"
hdiutil attach -nobrowse -readonly -quiet -mountpoint "$MNT" "$TMP/Glassdeck.dmg"

DEST=/Applications
if [ ! -w "$DEST" ]; then
  DEST="$HOME/Applications"
  mkdir -p "$DEST"
fi

# Quit a running copy before replacing it.
if pgrep -x Glassdeck >/dev/null 2>&1; then
  osascript -e 'tell application "Glassdeck" to quit' >/dev/null 2>&1 || true
  sleep 2
  pkill -x Glassdeck >/dev/null 2>&1 || true
fi

rm -rf "$DEST/Glassdeck.app"
ditto "$MNT/Glassdeck.app" "$DEST/Glassdeck.app"
# A copy that was ever downloaded in a browser keeps that mark; clear it so macOS doesn't block the app.
xattr -dr com.apple.quarantine "$DEST/Glassdeck.app" 2>/dev/null || true

echo "Installed Glassdeck in $DEST."
if [ -z "${GLASSDECK_NO_OPEN:-}" ]; then
  open "$DEST/Glassdeck.app"
  echo "Glassdeck is starting: it lives in the menu bar and opens a page with a QR code to scan with your phone."
fi
