class LocalStorage {
  static setUserCredentials(user) {
    let users = [];
    if (localStorage.getItem("user")) {
      users = [...JSON.parse(localStorage.getItem("user"))];
    }
    const userExist = users?.some((e) => e.username === user.username);
    if (!userExist) {
      users.push(user);
      localStorage.setItem("user", JSON.stringify(users));
      console.log("user don´t Exist");
    }else{
      console.log("user Exist")
      
    }
  }

  static validateUserCredentials(user) {
    const users = JSON.parse(localStorage.getItem("user")) || [];
    const validationCredencitials = users?.find(
      (e) => e.username === user.username && e.password === user.password
    );
    console.log(validationCredencitials, users, user);
    return !!validationCredencitials;
  }
}

export default LocalStorage;
