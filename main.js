var admin = require("firebase-admin");

var serviceAccount = require("/google-services.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://playment-1266.firebaseio.com"
});

var registrationToken = "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1";

// See the "Defining the message payload" section below for details
// on how to define a message payload.
var payload = {
  data: {
    title: "Hey!",
    content: "This is a test maccha!"
  }
};



// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().sendToDevice(registrationToken, payload)
  .then(function(response) {
    // See the MessagingDevicesResponse reference documentation for
    // the contents of response.
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });
