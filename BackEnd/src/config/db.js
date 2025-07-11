import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Teste de conexão:
db.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar no banco:', err);
  } else {
    console.log('Conexão com banco MySQL estabelecida com sucesso!');
    connection.release(); 
  }
});

export default db;