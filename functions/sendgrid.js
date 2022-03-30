const functions = require("firebase-functions");
const sendGrind = require("@sendgrid/mail");
const cors = require("cors")({origin: true})



var myMessage = {
    to: "jarrod's email",
    from: "jarrod's email",
    subject: "",
    html: ""
}

exports.sendMessageTest = functions.https.onRequest((request, response) => {
    return cors(request, response, () => {
        sendGrind.setApiKey(functions.config().sendGrind.apikey); // send the API key from env
        myMessage.subject = request.body["subject"],
        myMessage.html = `<p>${request.body["message"]}</p>`

        sendGrind.send(myMessage);
        response.status(200).send("Email send!");
    }).catch(() => {
        response.status(500).send("Error, message not send");
    });
});