# Flutter Mobile App - GetX State Management

Office Management System mobile application built with Flutter and GetX.

## Features

- 📱 Cross-platform (iOS & Android)
- 🎯 GetX for state management
- 🔐 JWT Authentication
- 🌐 RESTful API integration
- 💾 Local storage with GetStorage
- 🎨 Beautiful UI with Material Design

## Installation

1. Install Flutter: https://flutter.dev/docs/get-started/install

2. Clone and setup:
```bash
cd app/mobile
flutter pub get
```

## Running

### Android
```bash
flutter run
```

### iOS
```bash
flutter run -d ios
```

### Build
```bash
flutter build apk      # Android
flutter build ipa      # iOS
```

## Project Structure

```
lib/
├── main.dart
├── app/
│   ├── routes/
│   │   ├── app_routes.dart
│   │   └── app_pages.dart
│   ├── theme/
│   │   └── app_theme.dart
│   ├── controllers/
│   │   ├── auth_controller.dart
│   │   └── correspondence_controller.dart
│   └── modules/
│       ├── splash/
│       ├── auth/
│       │   ├── login/
│       │   └── register/
│       ├── dashboard/
│       ├── correspondence/
│       ├── subscriptions/
│       ├── printer/
│       ├── consumables/
│       └── gas_logs/
```

## State Management (GetX)

The app uses GetX for:
- State management with `GetxController`
- Route navigation with `Get.toNamed()`
- Dependency injection with `Get.put()`
- Local storage with `GetStorage`

## API Integration

Controllers handle API calls to the NestJS backend at `http://localhost:3001`.

Update the base URL in controllers as needed for different environments.
