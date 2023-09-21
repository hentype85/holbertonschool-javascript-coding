#!/usr/bin/node

const request = require('request');
const movie = process.argv[2];

// prints the number of movies where the character “Wedge Antilles” is present
request.get(movie, (err, response, body) => {
  if (err) {
    console.log(err);
  }

  let characterFilms = 0;
  const movies = JSON.parse(body).results;

  for (const movie of movies) {
    for (const character of movie.characters) {
      if (character.includes('/people/18')) characterFilms++;
    }
  }
  console.log(characterFilms);
});
