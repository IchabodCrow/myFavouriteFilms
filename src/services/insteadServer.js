import { checkUserCredentials } from "./checkUserCredentails";

export const prepareInitialData = () => {
  const users = [
    { email: "vupsen@fof.ru", password: "plum" },
    { email: "pupsen@fof.ru", password: "cherry" },
  ];
  const checkLocalStorage = localStorage.getItem("users");
  if (checkLocalStorage === null) {
    localStorage.setItem("users", JSON.stringify(users));
  }
};

export const setToken = (user) => {
  const checkUserRegister = checkUserCredentials(user);
  if (checkUserRegister !== -1) {
    const authToken = "hi_i_am_a_temporary_token_for_setting_up_routing";
    localStorage.setItem("token", authToken);
    localStorage.setItem("userInSession", JSON.stringify(user.email));
  }
};
