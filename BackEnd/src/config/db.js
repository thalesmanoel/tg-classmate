import mysql from 'mysql2';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  database: 'meu_sistema',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default db;