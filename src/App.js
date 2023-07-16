import React, { useState } from "react";
import Register from "./Components/collections/Register";
import Login from "./Components/collections/Login";
import Repos from "./Components/collections/Repos";
import ReposFavorites from "./Components/collections/ReposFavorites";
import "./App.css";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("");

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser("");
  };

  return (
    <div className="AppClass">
      {!loggedInUser ? (
        <div className="loginView">
          <h1 className="title">HelloBuild Test</h1>
          <Register />
          <Login onLogin={handleLogin} />
        </div>
      ) : (
        <>
          <h1>Bienvenido, {loggedInUser}!</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <Repos username={loggedInUser} />
          <ReposFavorites username={loggedInUser} />
        </>
      )}
    </div>
  );
};

export default App;
