<p align="center"><img src="icon.png" alt="Glassdeck icon: the GD monogram with a red bar" width="96"></p>

# Glassdeck

Turn any phone into a live desk panel for your Windows PC or Mac: an old iPhone, an Android phone or a tablet. Nothing to install on the phone.

It shows whatever needs you, like your AI coding agent (Claude Code, Codex, Antigravity or Gemini CLI) finishing or waiting for you, and lets you answer its permission prompts from the phone. It also has system stats, a volume mixer, a Stream Deck, a trackpad, synced lyrics, weather, a night clock and more.

Glassdeck is free.

## Download

From the [latest release](https://github.com/arjun-nair1090/glassdeck-releases/releases/latest):

- **Windows 10/11:** `Glassdeck-Setup.exe`. It installs just for you, so there's no administrator prompt, and lives in the tray next to the clock.
- **Mac, Apple Silicon (M1 and later):** `Glassdeck-mac-arm64.dmg`
- **Mac, Intel:** `Glassdeck-mac-intel.dmg`

Open the `.dmg` and drag Glassdeck into Applications. It lives in the menu bar.

## Pair your phone

1. Start Glassdeck. A pairing page opens with a QR code.
2. Scan it with your phone's camera. The phone must be on the same Wi-Fi.
3. Add it to the Home Screen:
   - **iPhone:** in Safari, Share → Add to Home Screen.
   - **Android:** in Chrome, follow the panel's steps.

On a Mac, the first time you use them, allow **Accessibility** (keyboard, trackpad, buttons), **Screen Recording** (screen view) and **Automation** (music control) in System Settings → Privacy & Security.

## The first launch

The downloads aren't code-signed yet, so the first time you open Glassdeck:

- **Windows** may say "Windows protected your PC". Click **More info**, then **Run anyway**. If Windows asks whether Glassdeck may use the network, choose **Allow**.
- **macOS** may say Glassdeck "can't be opened". Click **Done**, then go to **System Settings → Privacy & Security**, scroll down and click **Open Anyway**.

## Updates

Glassdeck checks for a new version every few hours. To install one, click the tray or menu-bar icon (or on the phone, Settings → Glassdeck) and choose **Update now**. It downloads the update, checks it against the checksum published with the release, installs it and restarts by itself.

## Uninstall

- **Windows:** Settings → Apps → Glassdeck → Uninstall. This also removes the hooks Glassdeck added to your AI tools.
- **Mac:** quit Glassdeck from the menu bar, then move it to the Bin.

Licence: [FSL-1.1-MIT](LICENSE).
