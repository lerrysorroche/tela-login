import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const fazerLogin = () => {
    if (email === "eduardo.lino@pucpr.br" && senha === "123456") {
      setMensagem("Acessado com sucesso!");
    } else {
      setMensagem("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      <div className="inputs-container">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />

        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="input-field"
        />
      </div>

      <button onClick={fazerLogin} className="login-button">
        Acessar
      </button>

      {mensagem && <p className="mensagem-status">{mensagem}</p>}
    </div>
  );
}

export default Login;
