import db from '../config/db.js';

class UserModel {
  static criarUsuario(nome, email, senha, role) {
    const sql = 'INSERT INTO usuarios (nome, email, senha_hash, role_id) VALUES (?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
      db.query(sql, [nome, email, senha, role], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }

  static buscarUsuarioPorEmail(email) {
    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    return new Promise((resolve, reject) => {
      db.query(sql, [email], (err, result) => {
        if (err) return reject(err);
        resolve(result[0]);
      });
    });
  }
}

export default UserModel;
