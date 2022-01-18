const functions = require("firebase-functions");
const admin = require("firebase-admin")
const express = require("express");
const app = express()
const userRouter = require("./routes/users");
app.use("/addNewUser", userRouter);

exports.webAPI = functions.https.onRequest(app);
