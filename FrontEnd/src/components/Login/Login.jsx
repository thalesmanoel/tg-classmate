import React from 'react';
import './style.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
      </div>
    </div>
  );
}

export default Login;
