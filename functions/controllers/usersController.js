const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
let User = require("../models/user");


admin.initializeApp();

const firestoreDB = admin.firestore();
const collection = "users";

exports.addNewUser = function(request, response) {
    return cors(request, response, () => {
        let newDoc = firestoreDB.collection(collection).doc();
        let newUser = User(
        request.body["firstName"],
        request.body["lastName"],
        newDoc.id );

        response.status(200).send(`${newUser["firstName"]} added!`);

    })
    .catch( (error) => {
        response.status(500).send("Issue with adding user")
    })

}

exports.testDefault = function(request, response) {
    response.status(200).send("Testing default");
}