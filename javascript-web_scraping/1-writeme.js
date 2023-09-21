#!/usr/bin/node

const fs = require('fs');

// writes a string to a file
fs.writeFile(process.argv[2], process.argv[3], (err) => {
  if (err) {
    console.log(err);
  }
});
