import checkUserCredentails from "./checkUserCredentails";

const InsteadServer = function () {
  this.prepareInitialData = () => {
    const users = [
      { email: "vupsen@fof.ru", password: "plum" },
      { email: "pupsen@fof.ru", password: "cherry" },
    ];
    const checkLocalStorage = localStorage.getItem("users");
    if (checkLocalStorage === null) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  };

  this.setToken = (user) => {
    const checkUserRegister = checkUserCredentails.checkUserRegistred(user);
    if (checkUserRegister !== -1) {
      const authToken = "hi_i_am_a_temporary_token_for_setting_up_routing";
      localStorage.setItem("token", authToken);
    }
  };
};

const insteadServer = new InsteadServer();

export default insteadServer;
