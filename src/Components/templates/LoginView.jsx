import React, { useState } from "react";
import Login from "../collections/Login";
import "./Styles.css";

const LoginView = ({ handleLogin, handleRegister }) => {
  return (
    <>
      <div>
        <div className="loginView">
          <h1 className="title">HelloBuild Test</h1>
          <Login onLogin={handleLogin} handleRegister={handleRegister} />
        </div>
      </div>
    </>
  );
};

export default LoginView;
