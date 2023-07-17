import React, { useState } from "react";
import LocalStorageService from "../../Services/LocalStorage";
import InputBasic from "../basics/InputBasic";
import "./styles.css";
import ApiService from "../../Services/ApiService";

const Login = ({ onLogin, handleRegister }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleLogin = () => {
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
        placeholder="Username"
        value={user.username}
        onChangeInput={(e) =>
          setUser((prev) => ({ ...prev, username: e.target.value }))
        }
      />
      <InputBasic
        type="password"
        placeholder="Password"
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
        Log in
      </button>
      <div>
        <b1>You do not have an account?</b1>
        <button
          className=""
          onClick={() => handleRegister()}
          style={{
            width: "100px",
            height: "30px",
            borderRadius: "5px",
            fontFamily: "roboto",
            fontWeight: "200px",
            fontSize: "25px",
            color: "#0F3EEA",
            border: "none",
            backgroundColor: "#7C92E5",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
