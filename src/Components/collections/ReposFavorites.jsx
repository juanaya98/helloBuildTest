import React, { useState, useEffect } from "react";
import ApiService from "../../Services/ApiService";

const ReposFavorites = ({ username }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favs = await ApiService.getFavoriteRepositories(username);
        setFavorites(favs);
      } catch (error) {
        console.error("Error al obtener los repositorios favoritos:", error);
      }
    };

    fetchFavorites();
  }, [username]);

  return (
    <div>
      <h2>Repositorios favoritos de {username}</h2>
      {favorites.map((fav) => (
        <div key={fav.id}>{fav.name}</div>
      ))}
    </div>
  );
};

export default ReposFavorites;
