const InsteadServer = function () {
  this.prepareInitialData = () => {
    const user = { email : "fof@fof.ru", password: "123"}
    const checkLocalStorage = localStorage.getItem("user");
    if (checkLocalStorage === null) {
      localStorage.setItem("user", JSON.stringify(user))
    } 
  }
}

const insteadServer = new InsteadServer();

export default insteadServer