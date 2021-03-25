const db = require("./db");

const getQuestion = async (id) => {
  let question = await db.query(
    `
        SELECT * FROM questions WHERE id = ${id};
      `
  );
  return question.rows[0];
}

const getQuestionAnswers = async (id) => {
  const answers = await db.query(
    `
        SELECT * FROM answers WHERE question_id = ${id};
      `
  )
  return answers.rows;
}

const getQuestionsCount = async () => {
  // TODO: resolver via query SQL
}

const getQuestionTopics = async () => {
  // TODO
  /*
    SELECT DISTINCT topic from questions;
   */
}
const getQuestionsForTopic = async (topic) => {
  // TODO
}

module.exports = { getQuestion, getQuestionAnswers, getQuestionsCount, getQuestionTopics, getQuestionsForTopic };