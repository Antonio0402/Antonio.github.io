import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

class Body extends StatefulWidget {
  const Body({Key? key}) : super(key: key);

  @override
  _BodyState createState() => _BodyState();
}

dynamic _pickImageError;
String? _retrieveDataError;
final ImagePicker _picker = ImagePicker();
XFile? imageFile;

class _BodyState extends State<Body> {
  Future getImageFromCamera() async {
    XFile? pickedFile = await _picker.pickImage(
      source: ImageSource.camera,
    );
    if (pickedFile != null) {
      setState(() {
        imageFile = pickedFile;
      });
    }
  }

  Future getImageFromGallery() async {
    XFile? pickedFile = await _picker.pickImage(
      source: ImageSource.gallery,
    );
    if (pickedFile != null) {
      setState(() {
        imageFile = pickedFile;
      });
    }
  }

  Widget previewImage() {
    final Text? retrieveError = _getRetrieveErrorWidget();
    if (retrieveError != null) {
      return retrieveError;
    }
    if (imageFile != null) {
      return Semantics(
            child:
            Card(
              elevation: 10,
              shadowColor: Colors.white38,
              clipBehavior: Clip.antiAlias,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(20),
              ),
              child: Center(
                child: imageFile == null
                    ? const Text("No Image is upload")
                    : Image.file(File(imageFile!.path), fit: BoxFit.fitWidth),
              ),
            ),
          label: 'image_picker_example_picked_images');
    } else if (_pickImageError != null) {
      return Center(
        child: Text(
          'Pick image error: $_pickImageError',
          textAlign: TextAlign.center,
        ),
      );
    } else {
      return const Center(
        child: Text(
          'You have not yet picked an image.',
          textAlign: TextAlign.center,
        ),
      );
    }
  }

  Text? _getRetrieveErrorWidget() {
    if (_retrieveDataError != null) {
      final Text result = Text(_retrieveDataError!);
      _retrieveDataError = null;
      return result;
    }
    return null;
  }

  Future<void> retrieveLostData() async {
    final LostDataResponse response = await ImagePicker().retrieveLostData();
    if (response.isEmpty) {
      return;
    }
    if (response.file != null) {
      if (response.type == RetrieveType.image) {
        setState(() {
          imageFile = response.file;
        });
      }
    } else {
      _retrieveDataError = response.exception!.message;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Flutter Image Picker Example"),
      ),
      body: Column(
        children: [
          Expanded(flex: 3, child: previewImage()),
          Expanded(
            flex: 1,
            child: Padding(
              padding: const EdgeInsets.only(bottom: 20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  FloatingActionButton(
                    onPressed: getImageFromGallery,
                    tooltip: "Pick Image from camera",
                    child: const Icon(Icons.upload_outlined),
                  ),
                  FloatingActionButton(
                    onPressed: getImageFromCamera,
                    tooltip: "Pick Image from gallery",
                    child: const Icon(Icons.camera_alt),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
