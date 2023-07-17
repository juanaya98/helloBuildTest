import React from "react";
import Repos from "../collections/Repos";
import ReposFavorites from "../collections/ReposFavorites";
import "./Styles.css";
import Navbar from "../../ui/components/Navbar";

const RepositoriosInfo = ({
  loggedInUser,
  activeSection,
  handleLogout,
  handleFavoritesClick,
}) => {
  return (
    <>
      <div className="repositorio_body">
        <Navbar loggedInUser={loggedInUser} handleLogout={handleLogout} />
        <div className="repositorio__list">
          {activeSection === "repositories" && (
            <Repos loggedInUser={loggedInUser} />
          )}
          {activeSection === "favorites" && (
            <ReposFavorites loggedInUser={loggedInUser} />
          )}
        </div>
      </div>
    </>
  );
};

export default RepositoriosInfo;
