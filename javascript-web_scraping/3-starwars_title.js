#!/usr/bin/node

const request = require('request');
const endPoint = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

// prints the title of a Star Wars movie where the episode number matches a given integer
request({ url: endPoint, methods: 'GET' }, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    console.log(body && JSON.parse(body).title);
  }
});
