class ApiService {
  static async getRepositories(username) {
    // Llama a la API backend para obtener los repositorios del usuario
    // Puedes utilizar fetch o cualquier otra biblioteca para hacer la solicitud
    try {
      // Realiza la solicitud a la API backend para obtener los repositorios del usuario
      const response = await fetch(`/api/repositories?username=${username}`);
      const data = await response.json();
      return data.repositories;
    } catch (error) {
      throw new Error('Error al obtener los repositorios');
    }
  }

  static async getFavoriteRepositories(username) {
    // Llama a la API backend para obtener los repositorios favoritos del usuario
    // Puedes utilizar fetch o cualquier otra biblioteca para hacer la solicitud
    try {
      // Realiza la solicitud a la API backend para obtener los repositorios favoritos del usuario
      const response = await fetch(`/api/favorites?username=${username}`);
      const data = await response.json();
      return data.favorites;
    } catch (error) {
      throw new Error('Error al obtener los repositorios favoritos');
    }
  }
}

export default ApiService;
