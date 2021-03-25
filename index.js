const db = require("./db");
const { prompt } = require("./utils");
const Question = require("./question.model");

/*

Primera tarea: Chequear que este codigo funcione como estaba funcionando pero con más preguntas.

Tener en cuenta:
- Antes de la pregunta, que de a elegir un topic
- Que no haya preguntas repetidas


node index.js

Buenas! ¿A cuántas preguntas querés jugar? 3

Pregunta 1
Qué tópico te gustaría jugar:
1 - deportes
2 - política
3 - historia
4 - naturaleza
>deportes
¿Quién ganó más valones de oro?
1 - Messi
2 - Cristiano
3 - Pele
>3
Incorrecta! Tenés 0 puntos

Pregunta 2

....

Terminó ! Terminaste con X puntos.

 */

const askQuestion = async (questionLabel, answers) => {
  try {
    const question = `${questionLabel}\n${answers.map((e) => `\n${e.n}- ${e.label}\n`).join('')}Ingrese un número: `;
    const userAnswer = await prompt(question);
    const correct = answers.find((e) => e.is_correct && `${e.n}` === userAnswer);
    return correct;
  } catch (error) {
    console.error('el error es: ', error);
  }
}

const main = async (id) => {
  try {
    // const times = await prompt("¿A cuántas preguntas querés jugar? :");
    // let points = 0;

    // for (let i = 0; i < Number(times); i ++) {
      // const nPreguntas = Question.getQuestionsCount();
      // const id = random(1, nPreguntas);
      const id = 1;
      const { label: questionLabel } = await Question.getQuestion(id);
      const answers = await Question.getQuestionAnswers(id);
      const correct = await askQuestion(questionLabel, answers);
      if (correct) {
        console.log("Respuesta correcta!");
      } else {
        console.log("Respuesta incorrecta!");
      }
    // }

    // console.log("Terminaster con ${}")

    db.end();
  } catch (error) {
    console.error(error);
  }
}

main(process.argv[2]);
