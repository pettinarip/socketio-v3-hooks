## [0.2.0]

### Added

- `useIOEvent` so that we can listen to Manager events. More here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0#The-Socket-instance-will-no-longer-forward-the-events-emitted-by-its-Manager

## [0.1.0]

### Changes

- upgrade socket io client to v3

## [0.0.7]

### Fixes

- add a test script
- add github actions as CI
- better lint infra
- prepublish script
- better prettier presets
- better docs about the SocketIOProvider

## [0.0.6]

- perf: `useEmit` now returns the same callback if the same arguments are provided
- cleanup: use `useNamespace` across all hooks to de-dup namespace logic
