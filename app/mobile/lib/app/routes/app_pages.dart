import 'package:get/get.dart';
import '../modules/splash/splash_page.dart';
import '../modules/auth/login/login_page.dart';
import '../modules/auth/register/register_page.dart';
import '../modules/dashboard/dashboard_page.dart';
import '../modules/correspondence/correspondence_page.dart';
import '../modules/subscriptions/subscriptions_page.dart';
import '../modules/printer/printer_page.dart';
import '../modules/consumables/consumables_page.dart';
import '../modules/gas_logs/gas_logs_page.dart';
import 'app_routes.dart';

abstract class AppPages {
  static final routes = [
    GetPage(
      name: AppRoutes.splash,
      page: () => const SplashPage(),
      transition: Transition.fadeIn,
    ),
    GetPage(
      name: AppRoutes.login,
      page: () => const LoginPage(),
      transition: Transition.fadeIn,
    ),
    GetPage(
      name: AppRoutes.register,
      page: () => const RegisterPage(),
      transition: Transition.fadeIn,
    ),
    GetPage(
      name: AppRoutes.dashboard,
      page: () => const DashboardPage(),
      transition: Transition.fadeIn,
    ),
    GetPage(
      name: AppRoutes.correspondence,
      page: () => const CorrespondencePage(),
      transition: Transition.fadeIn,
    ),
    GetPage(
      name: AppRoutes.subscriptions,
      page: () => const SubscriptionsPage(),
      transition: Transition.fadeIn,
    ),
    GetPage(
      name: AppRoutes.printer,
      page: () => const PrinterPage(),
      transition: Transition.fadeIn,
    ),
    GetPage(
      name: AppRoutes.consumables,
      page: () => const ConsumablesPage(),
      transition: Transition.fadeIn,
    ),
    GetPage(
      name: AppRoutes.gasLogs,
      page: () => const GasLogsPage(),
      transition: Transition.fadeIn,
    ),
  ];
}
