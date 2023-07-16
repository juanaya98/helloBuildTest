import React, { useState } from "react";
import LocalStorageService from "../../Services/LocalStorage";
import InputBasic from "../basics/InputBasic";
import "./styles.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí puedes realizar las validaciones necesarias contra el almacenamiento local
    const isValidCredentials = LocalStorageService.validateUserCredentials(
      username,
      password
    );
    if (isValidCredentials) {
      onLogin(username);
      setUsername('');
      setPassword('');
    } else {
      alert("Credenciales inválidas");
    }
  };

  return (
    <div className="login">
      <InputBasic
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputBasic
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="login-button"
        onClick={handleLogin}
        style={{
          width: "400px",
          height: "50px",
          borderRadius: "5px",
          fontFamily: "roboto",
          fontWeight: "500px",
          fontSize: "20px",
          paddingLeft: "15px",
        }}
      >
        Iniciar sesión
      </button>
    </div>
  );
};

export default Login;
