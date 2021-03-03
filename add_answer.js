const fs = require("fs");
const db = require("./db");


if (process.argv.length !== 6) {
  console.error('Usage: add_answer [question_id] [n] [label] [is_correct]')
  process.exit(1);
}


db.query(
  `
    INSERT INTO questions (question_id, n, label, is_correct) VALUES ()
  `
)
  .then(() => {
    db.end()
  })
  .catch((e) => {
    console.error(e)
  })
