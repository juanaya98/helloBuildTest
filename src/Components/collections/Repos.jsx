import React, { useState, useEffect } from 'react';
import ApiService from '../../Services/ApiService';

const Repos = ({ username }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const repos = await ApiService.getRepositories(username);
        setRepositories(repos);
      } catch (error) {
        console.error('Error al obtener los repositorios:', error);
      }
    };

    fetchRepositories();
  }, [username]);

  return (
    <div>
      <h2>Repositorios de {username}</h2>
      {repositories.map((repo) => (
        <div key={repo.id}>{repo.name}</div>
      ))}
    </div>
  );
};

export default Repos;