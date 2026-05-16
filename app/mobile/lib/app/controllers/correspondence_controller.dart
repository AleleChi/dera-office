import 'package:get/get.dart';

class CorrespondenceController extends GetxController {
  final isLoading = false.obs;
  final correspondenceList = <Map<String, dynamic>>[].obs;
  final selectedCorrespondence = Rx<Map<String, dynamic>?>(null);

  @override
  void onInit() {
    super.onInit();
    fetchCorrespondence();
  }

  Future<void> fetchCorrespondence() async {
    try {
      isLoading.value = true;
      // TODO: Implement actual API call
      await Future.delayed(const Duration(seconds: 1));
      
      // Mock data
      correspondenceList.value = [
        {
          'id': 1,
          'reference': 'REF-001',
          'doc_type': 'Invoice',
          'status': 'Pending',
          'logged_date': '2024-04-20',
        },
        {
          'id': 2,
          'reference': 'REF-002',
          'doc_type': 'Letter',
          'status': 'Completed',
          'logged_date': '2024-04-19',
        },
      ];
    } catch (e) {
      Get.snackbar('Error', 'Failed to load correspondence');
    } finally {
      isLoading.value = false;
    }
  }

  void selectCorrespondence(Map<String, dynamic> item) {
    selectedCorrespondence.value = item;
  }
}
