const functions = require("firebase-functions");
const admin = require("firebase-admin");
let User = require("../models/user");


admin.initializeApp();

const firestoreDB = admin.firestore();
const collection = "users";

exports.addNewUser = function(request, response) {
    let newDoc = firestoreDB.collection(collection).doc();
    let newUser = User(
        request.body["firstName"],
        request.body["lastName"],
        newDoc.id
    );
    newDoc.set(newUser);
    response.json(newUser);
}

exports.testDefault = function(request, response) {
    response.send("Testing default");
}