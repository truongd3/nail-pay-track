<div align="center">

<img src="./assets/logo/logo-full.png" alt="Nail Pay Track logo" width="220" />

# Nail Pay Track

**Keep track of nail tech's personal income**

A simple, private, offline-first mobile app that helps nail techs log their daily earnings, understand their real take-home pay, and know exactly which tips have and haven't been paid out.

</div>

---

## Why I Built This

My girlfriend is a nail tech, and her salon has no tool to track employees' pay — no app, no shared spreadsheet, nothing. I originally built her a Google Sheet to log her daily money and tips and auto-calculate her monthly totals. It worked, but it lived on a computer and wasn't something she (or any other nail tech) could carry around and update in thirty seconds between clients.

This app is that same idea, rebuilt from scratch as a real mobile app — designed to be fast enough to update at the front desk, and honest enough to catch a paycheck discrepancy before it slips by.

## Features

- **Log daily earnings**: enter today's money and tips in a few taps
- **Full history**: every day you've logged, editable and deletable
- **Add a past entry**: forgot to log yesterday? Add any past date, blocked from duplicating a day you've already logged
- **Real wage math**: your take-home pay is calculated as `(money × your salon split %) + tips`, not just the raw total
- **Tip reconciliation**: salons often pay out cash tips twice a month (15th and last day of month). The app automatically tracks which tips have been **Received** vs. are still **Unpaid**, based on those payout dates
- **Salon profile**: save salon's name, address, and commission split
- **Local daily reminder**: an on-device push notification so you never forget to log a day
- **Data export**: share a full JSON export of your entries anytime, so you always have a backup
- **Dark mode**: full light/dark theme support throughout
- **Fully private**: everything is stored locally on your device. No account, no server, no ads, nothing leaves your phone

## Screenshots

<table>
<tr>
<td align="center" width="33%">
<img src="./assets/screenshots/today-dark.jpeg" width="240" /><br />
<sub>Today entry (dark mode)</sub>
</td>
<td align="center" width="33%">
<img src="./assets/screenshots/history-light.jpeg" width="240" /><br />
<sub>History — tap any day to edit</sub>
</td>
<td align="center" width="33%">
<img src="./assets/screenshots/settings-dark.jpeg" width="240" /><br />
<sub>Settings — light/dark theme</sub>
</td>
</tr>
</table>

<p align="center">
<img src="./assets/screenshots/today-light.jpeg" width="240" /><br />
<sub>Today entry (light mode)</sub>
</p>

## Status

This is a personal project, currently shared directly with a small group of testers (not published on the App Store). Cloud backup/sync across devices is a planned future addition, along with email reminders — both are intentionally deferred until there's real demand, since they require ongoing backend hosting costs.

## Tech Stack

### Frontend

- [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/) (SDK 57)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/) (bottom tabs + native stack, incl. modal presentation)
- [Zustand](https://github.com/pmndrs/zustand) for state management

### Database

- [expo-sqlite](https://docs.expo.dev/versions/latest/sdk/sqlite/) — local, on-device database (entries, profile, salon, settings)
- `expo-file-system` — persisting profile photos on-device

### Tooling & Distribution
- [EAS (Expo Application Services)](https://expo.dev/eas) — builds and updates
- Expo Go — development/preview distribution

### Backend _(planned)_
- [Go](https://go.dev/) — for future cloud sync/backup, once there's validated user demand
