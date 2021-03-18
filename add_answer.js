const fs = require("fs");
const db = require("./db");

const question_id = process.argv[2];
const n = process.argv[3];
const label = process.argv[4];
const is_correct = process.argv[5];

if (process.argv.length !== 6) {
  console.error('Usage: add_answer [question_id] [n] [label] [is_correct]')
  process.exit(1);
}


db.query(
  `
    INSERT INTO answers (question_id, n, label, is_correct) VALUES ('${question_id}', '${n}', '${label}', '${is_correct}')
  `
)
  .then(() => {
    db.end()
  })
  .catch((e) => {
    console.error(e)
  })
