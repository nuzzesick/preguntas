const fs = require("fs");
const db = require("./db");

const question = process.argv[2];
const topic = process.argv[3];

if (process.argv.length !== 4) {
  console.error('Usage: add_question [label] [topic]')
  process.exit(1);
}


db.query(
  `
    INSERT INTO questions (label, topic) VALUES ('${question}', '${topic}')
  `
)
  .then(() => {
    db.end()
  })
  .catch((e) => {
    console.error(e)
  })
