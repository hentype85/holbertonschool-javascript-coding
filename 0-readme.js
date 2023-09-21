#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];

// reads and prints the content of a file
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
