import React, { useState } from "react";
import LoginView from "./LoginView";
import RepositoriosInfo from "./RepositoriosInfo";
import { useNavigate } from "react-router";
import { Navbar } from "../../ui";

export const HelloBuildTestTemplate = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [activeSection, setActiveSection] = useState("login");

  const navigate = useNavigate();

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

  const handleLogin = (username) => {
    setLoggedInUser(username);
    setActiveSection("repositories");
  };

  const handleRegister = () => {
    navigate("./register");
  };
  return (
    <div>
      {!loggedInUser ? (
        <LoginView handleLogin={handleLogin} handleRegister={handleRegister} />
      ) : (
        <>
          <RepositoriosInfo
            loggedInUser={loggedInUser}
            activeSection={activeSection}
            handleLogout={handleLogout}
            handleRepositoriesClick={handleRepositoriesClick}
            handleFavoritesClick={handleFavoritesClick}
          />
        </>
      )}
    </div>
  );
};
