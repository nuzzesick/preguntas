/*

Crear un script que recorra questions.js e inserte todas las preguntas y respuestas.


Me gustaría que haya al menos 5 preguntas por cada tópico. Crear al menos 5 tópicos. Cada pregunta que tenga 3 rtas.


node script.js

-> me insertó en la db


*/
const db = require("./db");
const questions = require('./questions');

const createDatabaseSchema = async () => {
  try {
    await db.query(
      `CREATE TABLE questions (id SERIAL PRIMARY KEY, label TEXT NOT NULL, topic TEXT NOT NULL)`
    );
    await db.query(
      `CREATE TABLE answers (
        id SERIAL PRIMARY KEY,
        question_id INTEGER,
        label TEXT NOT NULL,
        is_correct BOOL DEFAULT false
    )`);
  } catch (e) {
    console.error(e);
  }
};

const addQuestions = async () => {
  try {
    for await (const question of questions) {
      await db.query(
        `
          INSERT INTO questions (label, topic) VALUES ('${question.label}', '${question.topic}')
        `
      )
    }
  } catch (e) {
    console.error(e);
  }
}

const addAnswers = async () => {
  try {
    for await (const question of questions) {
      const response = await db.query(`SELECT id FROM questions WHERE label = '${question.label}'`);
      const questionId = await response.rows[0].id;
      for await (const answer of questions.map((el) => el.answers)) {
        console.log(questionId)
        await db.query(
          `INSERT INTO answers (question_id, label, is_correct) VALUES ('${questionId}', '${answer.label}', ${answer.is_correct});`
        )
      }
    }
  } catch (e) {
    console.error(e);
  }
}

const addDataToDatabase = async () => {
  try {
    await addQuestions();
    await addAnswers();
  } catch (e) {
    console.error(e);
  }
};

createDatabaseSchema()
  .then(async () => {
    const data = await addDataToDatabase();
    process.exit(1);
  })
  .catch((e) => {
    console.error(e);
  });