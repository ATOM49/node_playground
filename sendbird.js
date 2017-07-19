var request = require('request');

var content_type = "application/json, charset=utf8";
var sendbird_api_token = "153605656198a51a6c302a1fc0874016b20e4dd1";
var url = "https://api.sendbird.com/v3/group_channels"

var create_group_payload = {
  "name": "App ki adalat",
  "cover_url": "https://sendbird.com/main/img/cover/cover_08.jpg",
  "custom_type": "personal",
  "data": "test",
  "user_ids": ["a4c5c66d-27b9-4a58-b899-a82c5576dbe9", "124df910-4551-4cc3-aeca-fd4722e92b50"],
  "is_distinct": true
}


var createGroup = JSON.stringify(create_group_payload);

request({
    headers: {
		'Content-Type': content_type,
		'Api-Token': sendbird_api_token
    },
    uri: url,
    body: createGroup,
    method: 'POST'
  }, function (err, res, body) {
  	console.log('---error : ' + err + '---body : ' + body);
  });
