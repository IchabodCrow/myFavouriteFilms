const InsteadServer = function () {
  this.userLoggedIn = (user) => {
    const checkLocalStorage = localStorage.getItem("user");
    if (checkLocalStorage === null) {
      const user = { email : "fof@fof.ru", password: "123"}
      localStorage.setItem("user", JSON.stringify(user))
    } else {
      return user
    }
  }
}

const insteadServer = new InsteadServer();

export default insteadServer