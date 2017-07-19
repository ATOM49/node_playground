var request = require('request');

var server_key = "AAAASlJPDCw:APA91bGqkRmtODywsq89LwAy0Hj2ET_mG9oKYZ5FNEnchQjrvpbrOX48dw-aajC8CuMzPWXScRwlYtM2FqcCn0JCt5bDycluCuicMFh-q4o3iIChIac_ks44M_2gnXETxA1qbcvl4tIw";
var user_key = "ew0tXeBzH2w:APA91bGN1QzK3SGHjhQKoWYM6_Qdsn88inlN4GcM0SzNQw2DVREOiZVy7uAfAWncOGo4iX6wmLTBEd4IBt8L9HNTNkf5pyzaz8ejzgbucB36ZlcGWphzol4JAjaW2xfv8AIbz1PinS3C";
var push_url = "https://fcm.googleapis.com/fcm/send";

var notification = {
    "to" : user_key,
    "data" : {
    	"title" : "Title!",
    	"content" : "Test notification!!"
    }
};

var notifData = JSON.stringify(notification);

request({
    headers: {
		'Authorization': 'key=' + server_key,
		'Content-Type': 'application/json'
    },
    uri: push_url,
    body: notifData,
    method: 'POST'
  }, function (err, res, body) {
  	console.log('---error : ' + err + '---body : ' + body);
  });
