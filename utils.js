const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export const prompt = (askToUserStr) => {
  return new Promise((resolve) => {
    rl.question(`${askToUserStr}`, (userAnswer) => {
      resolve(userAnswer);
      rl.close();
    });
  });
}

export const random = (min, max) => {
  // TODO: resolver via Math.random y operaciones matematicas convencionales.
}
