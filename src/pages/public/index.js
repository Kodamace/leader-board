import React from "react";
import { useHistory } from "react-router-dom";

import { ContestantsDisplay, Header } from "components";

const PublicPage = () => {
  const history = useHistory();

  return (
    <>
      <Header />
      <ContestantsDisplay />
      <br />
      <br />
      <button onClick={() => history.push("/login")}>Login</button>
    </>
  );
};

export default PublicPage;
