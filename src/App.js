import React, { useState } from "react";
import Register from "./Components/collections/Register";
import Login from "./Components/collections/Login";
import Repos from "./Components/collections/Repos";
import ReposFavorites from "./Components/collections/ReposFavorites";
import "./App.css";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [activeSection, setActiveSection] = useState("login");

  const handleLogin = (username) => {
    setLoggedInUser(username);
    setActiveSection("repositories");
  };

  const handleLogout = () => {
    setLoggedInUser("");
    setActiveSection("login");
  };

  const handleRepositoriesClick = () => {
    setActiveSection("repositories");
  };

  const handleFavoritesClick = () => {
    setActiveSection("favorites");
  };

  return (
    <div className="App_body">
      {!loggedInUser ? (
        <div className="loginView">
          <h1 className="title">HelloBuild Test</h1>
          {/* <Register /> */}
          <Login onLogin={handleLogin} />
        </div>
      ) : (
        <>
          <h1>Bienvenido, {loggedInUser}!</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <button onClick={handleRepositoriesClick}>Repositorios</button>
          <button onClick={handleFavoritesClick}>Favoritos</button>
          {activeSection === "repositories" && (
            <Repos username={loggedInUser} />
          )}
          {activeSection === "favorites" && (
            <ReposFavorites username={loggedInUser} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
