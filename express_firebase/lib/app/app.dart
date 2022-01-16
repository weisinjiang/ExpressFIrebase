import 'package:express_firebase/home_page/views/screens/home_screen.dart';
import 'package:flutter/material.dart';

class StartApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(  
      title: "ExpressFirebase",
      debugShowCheckedModeBanner: false,
      home: HomeScreen(),

    );
  }
  
}