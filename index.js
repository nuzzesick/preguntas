const db = require("./db");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const id = process.argv[2];

if (process.argv.length !== 3) {
  console.error('Usage: [question_id]')
  process.exit(1);
}

const getAnswers = async (question) => {
  try {
    let answers = await db.query(
      `
        SELECT * FROM answers WHERE question_id = ${id};
      `
    )
    rl.question(
      ` ${question}
        ${answers.rows.map((e) => 
          `
            ${e.n}- ${e.label}
          `
        ).join('')}
        Ingrese un número: `
      , (userAnswer) => {
      userAnswer = Number(userAnswer);
      let correct = answers.rows.filter((e) => e.is_correct === true);
      correct = correct[0].n;
      userAnswer === correct ? console.log("Respuesta correcta!") : console.log("Respuesta incorrecta!")
      rl.close();
    });
    db.end();
  } catch (error) {
    console.error('el error es: ', error);
  }
}

const getQuestion = async () => {
  try {
    let question = await db.query(
      `
        SELECT * FROM questions WHERE id = ${id};
      `
    )
    question = await question.rows[0].label;
    getAnswers(question);
  } catch (error) {
    console.error(error);
  }
}

getQuestion();