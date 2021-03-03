CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    label TEXT NOT NULL,
    topic TEXT NOT NULL
);


CREATE TABLE answers (
    id SERIAL PRIMARY KEY,
    question_id INTEGER,
    n INTEGER NOT NULL,
    label TEXT NOT NULL,
    is_correct BOOL DEFAULT false,
    CONSTRAINT fk_question
          FOREIGN KEY(question_id)
    	  REFERENCES questions(id)
);


INSERT INTO questions (label, topic) VALUES ('¿Quién ganó más balones de oro?', 'Deportes');
INSERT INTO questions (label, topic) VALUES ('¿Quién es el presidente de Argentina?', 'Política');
INSERT INTO questions (label, topic) VALUES ('¿Con qué provincias limita Santa Cruz?', 'Geografía');





