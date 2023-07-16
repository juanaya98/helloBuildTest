import React, { useState } from "react";
import LocalStorageService from "../../Services/LocalStorage";
import InputBasic from "../basics/InputBasic.js";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Aquí puedes realizar las validaciones necesarias antes de almacenar los datos en el almacenamiento local
    LocalStorageService.setUserCredentials(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Register</h2>
      <InputBasic
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputBasic
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
