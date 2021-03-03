const fs = require("fs");
const db = require("./db");

db.query(
  `
    SELECT * FROM questions
  `
)
  .then(({ rows }) => {
    console.log(rows);
    db.end()
  })
  .catch((e) => {
    console.error(e)
  })
