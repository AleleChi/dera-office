import 'package:get/get.dart';
import 'package:get_storage/get_storage.dart';

class AuthController extends GetxController {
  final box = GetStorage();
  
  final isLoading = false.obs;
  final isAuthenticated = false.obs;
  final user = Rx<Map<String, dynamic>?>(null);
  final token = Rx<String?>(null);

  @override
  void onInit() {
    super.onInit();
    _loadStoredToken();
  }

  void _loadStoredToken() {
    final storedToken = box.read<String>('token');
    if (storedToken != null) {
      token.value = storedToken;
      isAuthenticated.value = true;
    }
  }

  Future<bool> login(String email, String password) async {
    try {
      isLoading.value = true;
      // TODO: Implement actual API call to backend
      // For now, simulate login
      await Future.delayed(const Duration(seconds: 1));
      
      token.value = 'mock-jwt-token';
      user.value = {'email': email, 'id': '1'};
      isAuthenticated.value = true;
      
      await box.write('token', token.value);
      return true;
    } catch (e) {
      Get.snackbar('Error', 'Login failed: ${e.toString()}');
      return false;
    } finally {
      isLoading.value = false;
    }
  }

  Future<bool> register(String email, String password) async {
    try {
      isLoading.value = true;
      // TODO: Implement actual API call to backend
      await Future.delayed(const Duration(seconds: 1));
      return true;
    } catch (e) {
      Get.snackbar('Error', 'Registration failed: ${e.toString()}');
      return false;
    } finally {
      isLoading.value = false;
    }
  }

  void logout() {
    token.value = null;
    user.value = null;
    isAuthenticated.value = false;
    box.erase();
  }
}
