# Office Management System Mobile App - Technical Documentation (Skill: Mobile Development)

## Overview

Office Management System is a Flutter mobile application for office administrators - allowing them to manage correspondence, consumables, printer usage, subscriptions, gas logs, and more. It integrates with a NestJS backend API.

---

## Folder Structure

```
lib/
├── core/
│   ├── constants/          # App-wide constants
│   │   ├── api_constants.dart
│   │   └── storage_keys.dart
│   ├── routes/
│   │   ├── app_routes.dart    # App navigation routes
│   │   └── app_pages.dart     # Route page bindings
│   └── services/          # Core services
│       ├── api_client.dart
│       ├── storage_service.dart
│       ├── auth_service.dart
│       ├── correspondence_service.dart
│       ├── consumables_service.dart
│       ├── printer_service.dart
│       ├── subscriptions_service.dart
│       ├── gas_logs_service.dart
│       └── offline_sync_service.dart
├── presentation/
│   ├── controllers/        # GetX controllers
│   │   ├── auth_controller.dart
│   │   ├── correspondence_controller.dart
│   │   ├── consumables_controller.dart
│   │   └── printer_controller.dart
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── controllers/
│   │   │   │   └── auth_controller.dart
│   │   │   ├── services/
│   │   │   │   └── auth_service.dart
│   │   │   ├── models/
│   │   │   │   └── auth_user_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── auth_widgets.dart
│   │   │   ├── login_screen.dart
│   │   │   ├── register_screen.dart
│   │   │   └── otp_screen.dart
│   │   ├── dashboard/
│   │   │   ├── controllers/
│   │   │   │   └── dashboard_controller.dart
│   │   │   ├── services/
│   │   │   │   └── dashboard_service.dart
│   │   │   ├── models/
│   │   │   │   └── dashboard_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── dashboard_widgets.dart
│   │   │   └── dashboard_screen.dart
│   │   ├── correspondence/
│   │   │   ├── controllers/
│   │   │   │   └── correspondence_controller.dart
│   │   │   ├── services/
│   │   │   │   └── correspondence_service.dart
│   │   │   ├── models/
│   │   │   │   └── correspondence_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── correspondence_widgets.dart
│   │   │   ├── correspondence_list_screen.dart
│   │   │   └── correspondence_detail_screen.dart
│   │   ├── consumables/
│   │   │   ├── controllers/
│   │   │   │   └── consumables_controller.dart
│   │   │   ├── services/
│   │   │   │   └── consumables_service.dart
│   │   │   ├── models/
│   │   │   │   └── consumable_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── consumables_widgets.dart
│   │   │   ├── consumables_list_screen.dart
│   │   │   └── manage_consumables_screen.dart
│   │   ├── printer/
│   │   │   ├── controllers/
│   │   │   │   └── printer_controller.dart
│   │   │   ├── services/
│   │   │   │   └── printer_service.dart
│   │   │   ├── models/
│   │   │   │   └── printer_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── printer_widgets.dart
│   │   │   └── printer_status_screen.dart
│   │   ├── subscriptions/
│   │   │   ├── controllers/
│   │   │   │   └── subscriptions_controller.dart
│   │   │   ├── services/
│   │   │   │   └── subscriptions_service.dart
│   │   │   ├── models/
│   │   │   │   └── subscription_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── subscriptions_widgets.dart
│   │   │   └── subscriptions_screen.dart
│   │   ├── gas_logs/
│   │   │   ├── controllers/
│   │   │   │   └── gas_logs_controller.dart
│   │   │   ├── services/
│   │   │   │   └── gas_logs_service.dart
│   │   │   ├── models/
│   │   │   │   └── gas_log_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── gas_logs_widgets.dart
│   │   │   └── gas_logs_screen.dart
│   │   ├── splash/
│   │   │   ├── controllers/
│   │   │   │   └── splash_controller.dart
│   │   │   ├── services/
│   │   │   │   └── splash_service.dart
│   │   │   ├── models/
│   │   │   │   └── splash_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── splash_widgets.dart
│   │   │   └── splash_screen.dart
│   │   └── settings/
│   │       ├── controllers/
│   │       │   └── settings_controller.dart
│   │       ├── services/
│   │       │   └── settings_service.dart
│   │       ├── models/
│   │       │   └── settings_model.dart
│   │       ├── widgets/
│   │       │   └── settings_widgets.dart
│   │       └── settings_screen.dart
│   └── widgets/          # Shared reusable widgets
│       ├── status_badge_widget.dart
│       ├── office_stats_widget.dart
│       ├── offline_sync_indicator.dart
│       ├── printer_status_widget.dart
│       ├── consumables_tracker_widget.dart
│       └── subscription_alert_widget.dart
├── theme/
│   ├── app_colors.dart
│   └── app_theme.dart
└── main.dart
```

---

## Screen Pattern

Each screen follows this consistent structure:

```
screen_name/
├── screen_name.dart          # UI screen
├── controllers/             # GetX controller
│   └── screen_name_controller.dart
├── services/               # API service layer
│   └── screen_name_service.dart
├── models/                 # Data models
│   └── model_name.dart
└── widgets/               # Reusable widgets
    └── widget_name.dart
```

---

## State Management

### Framework: GetX

Controllers extend `GetxController` and manage both state and business logic:

```dart
class AuthController extends GetxController {
  /*
   * STATE
   */
  final _loading = false.obs;
  final _obscure = true.obs;

  /*
   * GETTERS
   */
  bool get obscure => _obscure.value;
  set obscure(bool value) => _obscure.value = value;
  bool get loading => _loading.value;

  /*
   * SETTERS
   */
  void setLoading(bool value) {
    _loading.value = value;
  }

  /*
   * LIFECYCLE
   */
  @override
  void onInit() {
    super.onInit();
  }
}
```

### Usage in Screens

```dart
final controller = Get.find<AuthController>();

Obx(() => controller.loading
  ? CircularProgressIndicator()
  : ElevatedButton(onPressed: controller.login, child: Text('Login'))
)
```

---

## Models

### Model Pattern

```dart
IAuthUser iAuthUserFromMap(Map<String, dynamic> json) => IAuthUser.fromMap(json);
String iAuthUserToMap(IAuthUser data) => json.encode(data.toMap());

class IAuthUser {
  final String? id;
  final String? email;
  final String? phone;
  final String? firstName;
  final String? lastName;
  final String? role;

  IAuthUser({
    this.id,
    this.email,
    this.phone,
    this.firstName,
    this.lastName,
    this.role,
  });

  factory IAuthUser.fromMap(Map<String, dynamic> json) => IAuthUser(
    id: json['id'] as String,
    email: json['email'] as String,
    phone: json['phone'] as String?,
    firstName: json['firstName'] as String,
    lastName: json['lastName'] as String,
    role: json['role'] as String,
  );

  Map<String, dynamic> toMap() => {
    'id': id,
    'email': email,
    'firstName': firstName,
    'lastName': lastName,
    'role': role,
  };
}
```

---

## API Integration

### API Client Service

Located at: `core/services/api_client.dart`

Uses **Dio** HTTP client:

```dart
class ApiClient extends GetxService {
  late Dio _dio;
  final StorageService _storage = Get.find<StorageService>();

  Future<ApiClient> init() async {
    _dio = Dio(
      BaseOptions(
        baseUrl: ApiConstants.baseUrl,
        connectTimeout: ApiConstants.connectTimeout,
        receiveTimeout: ApiConstants.receiveTimeout,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      ),
    );

    _dio.interceptors.add(
      InterceptorsWrapper(
        onRequest: _onRequest,
        onError: _onError,
      ),
    );

    return this;
  }
}
```

### Service Layer Pattern

Each screen has its own service in the screen folder:

```dart
// screens/auth/services/auth_service.dart
class AuthService {
  final ApiClient _apiClient = Get.find<ApiClient>();

  Future<ILoginResponse> login(Map<String, dynamic> credentials) async {
    final response = await _apiClient.post(
      ApiConstants.login,
      data: credentials,
    );
    return ILoginResponse.fromMap(response.data['data']);
  }
}
```

---

## Navigation

### App Routes

```dart
class AppRoutes {
  static const String splash = '/';
  static const String login = '/login';
  static const String register = '/register';
  static const String otpVerification = '/otp-verification';
  static const String dashboard = '/dashboard';
  static const String correspondence = '/correspondence';
  static const String correspondenceDetail = '/correspondence/:id';
  static const String consumables = '/consumables';
  static const String manageConsumables = '/manage-consumables';
  static const String printer = '/printer';
  static const String printerStatus = '/printer/:id';
  static const String subscriptions = '/subscriptions';
  static const String gasLogs = '/gas-logs';
  static const String settings = '/settings';
}
```

### Navigation Methods

```dart
Get.toNamed(AppRoutes.dashboard);
Get.offNamed(AppRoutes.dashboard);
Get.offAllNamed(AppRoutes.login);
```

---

## Token Management

```dart
final storage = Get.find<StorageService>();

await storage.saveTokens(
  accessToken: response.accessToken,
  refreshToken: response.refreshToken,
);

final token = storage.accessToken;

await storage.clearAll();
```

---

## Error Handling

```dart
Future<void> _onError(
  DioException error,
  ErrorInterceptorHandler handler,
) async {
  if (error.response?.statusCode == 401) {
    final refreshed = await _refreshToken();
    if (refreshed) {
      final opts = error.requestOptions;
      opts.headers['Authorization'] = 'Bearer ${_storage.accessToken}';
      try {
        final response = await _dio.fetch(opts);
        return handler.resolve(response);
      } catch (e) {
        return handler.next(error);
      }
    } else {
      await _storage.clearAll();
      Get.offAllNamed('/login');
    }
  }
  handler.next(error);
}
```

---

## Services

| Service               | Location                                  | Description                    |
| --------------------- | ----------------------------------------- | ------------------------------ |
| `ApiClient`           | `core/services/api_client.dart`           | HTTP client with interceptors |
| `StorageService`      | `core/services/storage_service.dart`      | Secure token storage          |
| `AuthService`         | `core/services/auth_service.dart`         | Authentication API calls      |
| `CorrespondenceService`| `core/services/correspondence_service.dart`| Correspondence management     |
| `ConsumablesService`  | `core/services/consumables_service.dart`  | Consumables tracking          |
| `PrinterService`      | `core/services/printer_service.dart`      | Printer status monitoring     |
| `SubscriptionsService`| `core/services/subscriptions_service.dart`| Subscription management       |
| `GasLogsService`      | `core/services/gas_logs_service.dart`     | Gas usage logging             |
| `OfflineSyncService`  | `core/services/offline_sync_service.dart` | Offline data sync             |

---

## Widgets

| Widget                    | Location                                   | Description                 |
| ------------------------- | ------------------------------------------ | --------------------------- |
| `StatusBadgeWidget`       | `presentation/widgets/status_badge_widget.dart`       | Status indicators           |
| `OfficeStatsWidget`       | `presentation/widgets/office_stats_widget.dart`       | Office statistics display   |
| `OfflineSyncIndicator`   | `presentation/widgets/offline_sync_indicator.dart`   | Offline status indicator   |
| `PrinterStatusWidget`    | `presentation/widgets/printer_status_widget.dart`    | Printer status display     |
| `ConsumablesTrackerWidget`| `presentation/widgets/consumables_tracker_widget.dart`| Consumables tracking       |
| `SubscriptionAlertWidget`| `presentation/widgets/subscription_alert_widget.dart`| Subscription alerts        |

---

## Adding a New Screen

1. **Create folder**: `lib/presentation/screens/new_feature/`

2. **Create controller**: `controllers/new_feature_controller.dart`

   ```dart
   class NewFeatureController extends GetxController {
     final _loading = false.obs;
     bool get loading => _loading.value;
   }
   ```

3. **Create service**: `services/new_feature_service.dart`

   ```dart
   class NewFeatureService {
     final ApiClient _apiClient = Get.find<ApiClient>();
     // API calls here
   }
   ```

4. **Create model**: `models/new_feature_model.dart`

   ```dart
   class NewFeatureModel {
     factory NewFeatureModel.fromMap(Map<String, dynamic> json) => ...
   }
   ```

5. **Create widgets**: `widgets/new_feature_widgets.dart`

   ```dart
   class NewFeatureWidget extends StatelessWidget { ... }
   ```

6. **Create screen**: `new_feature_screen.dart`

   ```dart
   class NewFeatureScreen extends GetView<NewFeatureController> {
     const NewFeatureScreen({super.key});

     @override
     Widget build(BuildContext context) {
       return Scaffold(
         body: Obx(() => controller.loading
           ? Center(child: CircularProgressIndicator())
           : Text('Content')
         ),
       );
     }
   }
   ```

7. Register route in `app_routes.dart`

8. Register page in `app_pages.dart`

---

## Dependencies

```yaml
dependencies:
  flutter:
    sdk: flutter
  get: ^4.6.6
  dio: ^5.4.0
  flutter_secure_storage: ^9.0.0
  intl: ^0.19.0
```

---

## Theme

Located at: `theme/`

- `app_colors.dart` - Color constants
- `app_theme.dart` - Material theme configuration
