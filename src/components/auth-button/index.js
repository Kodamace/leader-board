import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { toggleLoggedIn } from "reducer/actions";

const AuthButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoggedIn = useSelector(state => state.isLoggedIn);

  function handleClick() {
    dispatch(toggleLoggedIn());
    history.push("/admin");
  }

  return (
    <button onClick={handleClick}>{isLoggedIn ? "Log Out" : "Log In"}</button>
  );
};

export default AuthButton;
