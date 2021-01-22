const { Client } = require('pg');

const client = new Client({
  user: 'user',
  host: 'localhost',
  database: 'preguntas',
  password: 'pass',
  port: 5736,
});

client.connect();

module.exports = client;
