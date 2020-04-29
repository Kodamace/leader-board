import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logIn } from "reducer/actions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const username = useSelector(state => state.username);
  // const password = useSelector(state => state.password);

  function handleUsernameChange(e) {
    setUsername(e.target.value);
    // dispatch(setUsername(e.target.value));
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    // dispatch(setPassword(e.target.value));
  }

  function handleLoginClick() {
    dispatch(logIn(username, password));
    history.push("/admin");
  }

  return (
    <>
      <h1>Login</h1>
      <input
        onChange={handleUsernameChange}
        placeholder="username"
        value={username}
      />
      <input
        onChange={handlePasswordChange}
        placeholder="password"
        type="password"
        value={password}
      />
      <button onClick={handleLoginClick}>Login</button>
      <br />
      <br />
      <button onClick={() => history.push("/")}>Back</button>
    </>
  );
};

export default LoginPage;
