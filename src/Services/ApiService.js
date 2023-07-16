class ApiService {
  static async getRepositories(username) {
    // Llama a la API backend para obtener los repositorios del usuario
    // Puedes utilizar fetch o cualquier otra biblioteca para hacer la solicitud
    const response = await fetch(`api/repositories?username=${username}`);
    const data = await response.json();
    return data.repositories;
  }

  static async getFavoriteRepositories(username) {
    // Llama a la API backend para obtener los repositorios favoritos del usuario
    // Puedes utilizar fetch o cualquier otra biblioteca para hacer la solicitud
    const response = await fetch(`api/favorites?username=${username}`);
    const data = await response.json();
    return data.favorites;
  }
}

export default ApiService;
