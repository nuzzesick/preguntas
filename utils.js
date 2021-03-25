const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = (askToUserStr) => {
  return new Promise((resolve) => {
    rl.question(`${askToUserStr}`, (userAnswer) => {
      resolve(userAnswer);
      rl.close();
    });
  });
}

const random = (min, max) => {
  // TODO: resolver via Math.random y operaciones matematicas convencionales.
}

module.exports = { prompt, random };