class User {
  userName() {
    return localStorage.getItem("userInSession").split('"')[1].split("@")[0];
  }

  logout() {
    localStorage.removeItem("token");
  }
}

export const user = new User();
