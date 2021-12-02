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
    is_correct BOOL DEFAULT false
);


ALTER TABLE answers ADD CONSTRAINT fk_answers_question_id FOREIGN KEY (question_id) REFERENCES questions(id);
ALTER TABLE answers ADD CONSTRAINT disallow_two_answers_id_for_same_question UNIQUE (question_id, n);


INSERT INTO questions (label, topic) VALUES ('¿Quién ganó más balones de oro?', 'Deportes');
INSERT INTO questions (label, topic) VALUES ('¿Quién es el presidente de Argentina?', 'Política');
INSERT INTO questions (label, topic) VALUES ('¿Con qué provincias limita Santa Cruz?', 'Geografía');


INSERT INTO answers (question_id, label, n, is_correct)
    (SELECT id, 'Messi', 1, true
    FROM questions
    WHERE label = '¿Quién ganó más balones de oro?');

INSERT INTO answers (question_id, label, n, is_correct)
    (SELECT id, 'Ronaldo', 2, false
    FROM questions
    WHERE label = '¿Quién ganó más balones de oro?');

INSERT INTO answers (question_id, label, n, is_correct)
    (SELECT id, 'Kaka', 3, false
    FROM questions
    WHERE label = '¿Quién ganó más balones de oro?');        

INSERT INTO answers (question_id, label, n, is_correct)
    (SELECT id, 'Cristina', 1, true
    FROM questions
    WHERE label = '¿Quién es el presidente de Argentina?');

INSERT INTO answers (question_id, label, n, is_correct)
    (SELECT id, 'Capitan Beto', 2, false
    FROM questions
    WHERE label = '¿Quién es el presidente de Argentina?');

INSERT INTO answers (question_id, label, n, is_correct)
    (SELECT id, 'El Gato', 3, false
    FROM questions
    WHERE label = '¿Quién es el presidente de Argentina?');        


INSERT INTO answers (question_id, label, n, is_correct)
    (SELECT id, 'Chubut', 1, true
    FROM questions
    WHERE label = '¿Con qué provincias limita Santa Cruz?');

INSERT INTO answers (question_id, label, n, is_correct)
    (SELECT id, 'Buenos Aires', 2, false
    FROM questions
    WHERE label = '¿Con qué provincias limita Santa Cruz?');

INSERT INTO answers (question_id, label, n, is_correct)
    (SELECT id, 'Formosa', 3, false
    FROM questions
    WHERE label = '¿Con qué provincias limita Santa Cruz?');      