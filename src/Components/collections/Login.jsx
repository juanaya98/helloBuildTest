import React, { useState } from "react";
import LocalStorageService from "../../Services/LocalStorage";
import InputBasic from "../basics/InputBasic";
import "./styles.css";

const Login = ({ onLogin }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleLogin = () => {
    // Aquí puedes realizar las validaciones necesarias contra el almacenamiento local
    const isValidCredentials =
      LocalStorageService.validateUserCredentials(user);
    if (isValidCredentials) {
      onLogin(user.username);
      setUser("");
    } else {
      alert("Credenciales inválidas");
    }
  };

  return (
    <div className="login">
      <InputBasic
        type="text"
        placeholder="Nombre de usuario"
        value={user.username}
        onChangeInput={(e) =>
          setUser((prev) => ({ ...prev, username: e.target.value }))
        }
      />
      <InputBasic
        type="password"
        placeholder="Contraseña"
        value={user.password}
        onChangeInput={(e) =>
          setUser((prev) => ({ ...prev, password: e.target.value }))
        }
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
