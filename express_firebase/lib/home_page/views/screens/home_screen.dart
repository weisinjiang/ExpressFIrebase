import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  var color = Colors.red;
  @override
  Widget build(BuildContext context) {
    return Container(  
      color: color,
      child: Column(
        children: [
          TextButton(  
            child: Text("Testing"),
            onPressed: () async {
              await FirebaseFirestore.instance.collection("testing").doc("hh").set({
                "testing": "testing"
              });
              setState(() {
                color = Colors.blue;
              });
              print("done");
            },
          ),
        ],
      ),
    );
  }
}