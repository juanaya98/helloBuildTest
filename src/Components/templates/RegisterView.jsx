import React, { useState } from "react";
import Register from "../collections/Register";
import "./Styles.css";
import { useNavigate } from "react-router";

const RegisterView = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="registerView">
        <h1 className="title">Register</h1>
        <Register handleGoBack={handleGoBack} />
      </div>
    </>
  );
};

export default RegisterView;
