export const checkUserCredentials = (value) => {
  const users = JSON.parse(localStorage.getItem("users"));

  const findUser = users.findIndex(function (item) {
    return item.email === value.email && item.password === value.password
      ? true
      : false;
  });
  return findUser;
};