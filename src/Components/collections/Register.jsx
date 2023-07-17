import React, { useState } from "react";
import LocalStorageService from "../../Services/LocalStorage";
import InputBasic from "../basics/InputBasic.js";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const history = useHistory();

  const handleRegister = () => {
    LocalStorageService.setUserCredentials(user);
    setUser({ username: "", password: "" });
    alert("user added");
    history.replace("./login");
  };

  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
