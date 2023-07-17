class LocalStorage {
  static setUserCredentials(user) {
    let users = [];
    if (localStorage.getItem("user")) {
      users = [...JSON.parse(localStorage.getItem("user"))];
    }
    users.push(user);
    console.log("user", user);
    localStorage.setItem("user", JSON.stringify(users));
  }

  static validateUserCredentials(user) {
    const users = JSON.parse(localStorage.getItem("user")) || [];
    const validationCredencitials = users?.find(
      (e) => e.username == user.username && e.password == user.password
    );
    console.log(validationCredencitials, users, user);
    return !!validationCredencitials;
  }
}

export default LocalStorage;
