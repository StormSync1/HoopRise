# Future backup and sync boundary

Court Level v1 is intentionally local-only. The UI talks to repositories rather than directly to a remote service, so a future release can add encrypted export, backup, or synchronization without changing the player-development calculations or screens.

The current repository uses browser/device-local persistence. Do not add cloud credentials or a remote account provider to v1.
