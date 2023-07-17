import React, { useState } from "react";
import LocalStorageService from "../../Services/LocalStorage";
import InputBasic from "../basics/InputBasic.js";
import "./styles.css";
import { useNavigate } from "react-router";

const Register = ({ handleGoBack }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = () => {
    LocalStorageService.setUserCredentials(user);
    setUser({ username: "", password: "" });
    alert("user added");
    navigate("./*");
  };

  return (
    <div className="register">
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
      <div className="register__button">
        <button
          className=""
          onClick={handleGoBack}
          style={{
            width: "200px",
            height: "50px",
            borderRadius: "5px",
            fontFamily: "roboto",
            fontWeight: "500px",
            fontSize: "20px",
            paddingLeft: "15px",
          }}
        >
          Go back
        </button>
        <button
          className="register-button"
          onClick={handleRegister}
          style={{
            width: "200px",
            height: "50px",
            borderRadius: "5px",
            fontFamily: "roboto",
            fontWeight: "500px",
            fontSize: "20px",
            paddingLeft: "15px",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
