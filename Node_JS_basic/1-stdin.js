console.log('Welcome to Holberton School, what is your name?');

// await input
process.stdin.resume();

process.stdin.on('data', (data) => {
  const name = data.toString();

  process.stdout.write(`Your name is: ${name}`);
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
