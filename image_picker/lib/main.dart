import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:image_picker_widget/screens/home/home_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Image Picker Widget',
      theme: ThemeData(
          visualDensity: VisualDensity.adaptivePlatformDensity,
          scaffoldBackgroundColor: Colors.white,
          fontFamily: 'Arial',
          textTheme: const TextTheme(
            bodyText1: TextStyle(color: Color(0xFF757575)),
            bodyText2: TextStyle(color: Color(0xFF757575)),
          )),
      home: const MyHomePage(title: "Image Picker Example"),
    );
  }
}



