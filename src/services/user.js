export const currentgUserName = ( text ) => {
  const user = JSON.parse(localStorage.getItem('userInSession'))
  return user
    ? user.replace(/@[^@]+$/, "")
    : text;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userInSession");
};