#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

// display the status code of a GET request
request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    console.log('code: ' + response.statusCode);
  }
});
