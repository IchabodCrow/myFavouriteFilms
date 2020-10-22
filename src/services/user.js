export const currentgUserName = ( text ) => {
  const user = JSON.parse(localStorage.getItem('userInSession'))
  return user?.email
    ? user?.email.replace(/@[^@]+$/, "")
    : text;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userInSession");
};