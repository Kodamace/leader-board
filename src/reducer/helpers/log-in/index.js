const logIn = (state, { password, username }) => {
  if (username !== "admin") {
    alert("Username does not exist!");
    return state;
  }
  if (password !== "admin") {
    alert("Password incorrect!");
    return state;
  }
  return { ...state, isLoggedIn: true };
};

export default logIn;
