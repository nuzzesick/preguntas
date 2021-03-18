const db = require("./db");

export const getQuestion = async (id) => {
  let question = await db.query(
    `
        SELECT * FROM questions WHERE id = ${id};
      `
  );
  return question.rows[0];
}

export const getQuestionAnswers = async (id) => {
  const answers = await db.query(
    `
        SELECT * FROM answers WHERE question_id = ${id};
      `
  )
  return answers.rows;
}

export const getQuestionsCount = async () => {
  // TODO: resolver via query SQL
}

export const getQuestionTopics = async () => {
  // TODO
  /*
    SELECT DISTINCT topic from questions;
   */
}
export const getQuestionsForTopic = async (topic) => {
  // TODO
}
