import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../../controllers/correspondence_controller.dart';

class CorrespondencePage extends StatelessWidget {
  const CorrespondencePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final controller = Get.put(CorrespondenceController());

    return Scaffold(
      appBar: AppBar(title: const Text('Correspondence')),
      body: Obx(
        () => controller.isLoading.value
            ? const Center(child: CircularProgressIndicator())
            : controller.correspondenceList.isEmpty
                ? const Center(
                    child: Text('No correspondence found'),
                  )
                : ListView.builder(
                    itemCount: controller.correspondenceList.length,
                    itemBuilder: (context, index) {
                      final item = controller.correspondenceList[index];
                      return ListTile(
                        title: Text(item['reference']),
                        subtitle: Text(item['doc_type']),
                        trailing: Text(item['status']),
                        onTap: () => controller.selectCorrespondence(item),
                      );
                    },
                  ),
      ),
    );
  }
}
