const functions = require("firebase-functions");
const admin = require("firebase-admin")
const sendGrind = require("@sendgrid/mail");
const cors = require("cors")({origin: true})
const express = require("express");
const app = express()
const userRouter = require("./routes/users");
const { response } = require("express");
app.use("/addNewUser", userRouter);




exports.webAPI = functions.https.onRequest(app);

