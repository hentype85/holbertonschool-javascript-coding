console.log('Welcome to Holberton School, what is your name?');

// await input
process.stdin.resume();

process.stdin.on('readable', () => {
  // read input convert to a string, trim leading or trailing whitespace
  const name = process.stdin.read().toString().trim();

  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
});
