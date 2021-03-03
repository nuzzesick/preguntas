const fs = require("fs");
const db = require("./db");
const down = fs.readFileSync("./down.sql");
const up = fs.readFileSync("./up.sql");

async function runQueries() {
  await db.query(down.toString());
  await db.query(up.toString());
}

runQueries()
  .then(() => {
    db.end()
  })
  .catch((e) => {
    console.error(e)
  })
