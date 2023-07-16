class LocalStorage {
  static setUserCredentials(username, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  }

  static getUserCredentials() {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    return { username, password };
  }

  static validateUserCredentials(username, password) {
    const { username: storedUsername, password: storedPassword } =
      this.getUserCredentials();
    return username === storedUsername && password === storedPassword;
  }
}

export default LocalStorage;
