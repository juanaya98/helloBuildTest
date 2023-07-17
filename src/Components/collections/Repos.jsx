import React, { useState, useEffect } from "react";
import ApiService from "../../Services/ApiService";
import CardRepo from "../basics/CardRepo";
import "./styles.css";

const Repos = ({ loggedInUser }) => {
  const [repositories, setRepositories] = useState([]);
  const [isFavorite, setIsFavorite] = useState([]);
  const [reposlist, setReposList] = useState(0);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const repos = await ApiService.getRepositories(loggedInUser);
        setRepositories(repos);
      } catch (error) {
        console.error("Error al obtener los repositorios:", error);
      }
    };
    fetchRepositories();
  }, [loggedInUser]);

  return (
    <div className="repoBody">
      <h2>Hi, {loggedInUser}</h2>
      <h2>you can watch your all your repositories or list your favorites:</h2>
      <div className="repoBodyButtons">
        <button
          onClick={() => setReposList(1)}
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
          View your repos
        </button>
        <button
          onClick={() => setReposList(2)}
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
          View your favorites
        </button>
      </div>
      {reposlist === 1 && (
        <>
          <div className="repoChild">
            {repositories.map((repo) => (
              <CardRepo
                key={repo.id}
                id={repo.id}
                name={repo.name}
                privacy={repo.private}
                url={repo.html_url}
                description={repo.description}
                isFavorite={!!isFavorite.find((fav) => fav === repo.id)}
                setIsFavorite={setIsFavorite}
                disableFavorite={false}
              />
            ))}
          </div>
        </>
      )}
      {reposlist === 2 && (
        <>
          <div className="repoChild">
            {isFavorite.map((repofav) => (
              <CardRepo
                key={repofav.id}
                id={repofav.id}
                name={repofav.name}
                privacy={repofav.private}
                url={repofav.html_url}
                description={repofav.description}
                isFavorite={true}
                setIsFavorite={setIsFavorite}
                disableFavorite={true}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Repos;
