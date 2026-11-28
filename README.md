<p align="center"><img src="icon.png" alt="Glassdeck icon: the GD monogram with a red bar" width="96"></p>

# Glassdeck

**Website: [arjun-nair1090.github.io/glassdeck-releases](https://arjun-nair1090.github.io/glassdeck-releases/)**

Turn any phone into a live desk panel for your Windows PC, Mac or Linux PC: an old iPhone, an Android phone or a tablet. Nothing to install on the phone.

It shows whatever needs you, like your AI coding agent (Claude Code, Codex, Antigravity or Gemini CLI) finishing or waiting for you, and lets you answer its permission prompts from the phone. It also has system stats, a volume mixer, a Stream Deck, a trackpad, synced lyrics, weather, a night clock and more.

Glassdeck is free.

## Download

From the [latest release](https://github.com/arjun-nair1090/glassdeck-releases/releases/latest):

- **Windows 10/11:** `Glassdeck-Setup.exe`. It installs just for you, so there's no administrator prompt, and lives in the tray next to the clock.
- **Mac, Apple Silicon (M1 and later):** `Glassdeck-mac-arm64.dmg`
- **Mac, Intel:** `Glassdeck-mac-intel.dmg`
- **Linux, 64-bit PC** (Ubuntu 22.04, Debian 12, Fedora 36 or newer): `Glassdeck-linux-x86_64.AppImage`

Mac: open the `.dmg` and drag Glassdeck into Applications. It lives in the menu bar.

Linux: allow the AppImage to run as a program (in its Properties, or `chmod +x Glassdeck-linux-x86_64.AppImage`) and open it. It adds Glassdeck to your app menu and starts it when you log in. There's no tray icon: open Glassdeck from the app menu to see the pairing page, and right-click it there to quit.

## Pair your phone

1. Start Glassdeck. A pairing page opens with a QR code.
2. Scan it with your phone's camera. The phone must be on the same Wi-Fi.
3. Add it to the Home Screen:
   - **iPhone:** in Safari, Share → Add to Home Screen.
   - **Android:** in Chrome, follow the panel's steps.

On a Mac, the first time you use them, allow **Accessibility** (keyboard, trackpad, buttons), **Screen Recording** (screen view) and **Automation** (music control) in System Settings → Privacy & Security.

On Linux with Wayland (the default on Ubuntu and Fedora), the pairing page shows a one-time command that lets Glassdeck use the keyboard and mouse, the way remote-desktop apps do. On X11 nothing is needed. Sound control needs PulseAudio or PipeWire, which almost every desktop has; clipboard sharing needs `wl-clipboard` (Wayland) or `xclip` (X11).

## The first launch

The downloads aren't code-signed yet, so the first time you open Glassdeck:

- **Windows** may say "Windows protected your PC". Click **More info**, then **Run anyway**. If Windows asks whether Glassdeck may use the network, choose **Allow**.
- **macOS** blocks a copy downloaded in a browser. The easiest way is to install from Terminal instead; Glassdeck then opens straight away, and running the line again updates it:

  ```sh
  curl -fsSL https://arjun-nair1090.github.io/glassdeck-releases/install-mac.sh | sh
  ```

  Already dragged it into Applications? Run `xattr -dr com.apple.quarantine /Applications/Glassdeck.app` and open it again. Or, without Terminal: when macOS says Glassdeck "can't be opened", click **Done**, go to **System Settings → Privacy & Security**, scroll down and click **Open Anyway**.

## Updates

Glassdeck checks for a new version every few hours. To install one, choose **Update now** on the phone in Settings → Glassdeck, or from the tray or menu-bar icon on Windows and Mac. It downloads the update, checks it against the checksum published with the release, installs it and restarts by itself.

## Uninstall

- **Windows:** Settings → Apps → Glassdeck → Uninstall. This also removes the hooks Glassdeck added to your AI tools.
- **Mac:** quit Glassdeck from the menu bar, then move it to the Bin.
- **Linux:** right-click Glassdeck in the app menu, choose **Quit Glassdeck**, then delete the AppImage. Its settings are in `~/.local/share/Glassdeck`.

Licence: [FSL-1.1-MIT](LICENSE).
