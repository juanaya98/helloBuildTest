import axios from "axios";

const BASE_URL = "https://api.github.com";

const ApiService = {
  getRepositories: async (username) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
      console.log(response);
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener los repositorios");
    }
  },
};

export default ApiService;
