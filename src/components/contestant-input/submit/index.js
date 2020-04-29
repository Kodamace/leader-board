import React from "react";
import { useDispatch } from "react-redux";

import { submitContestant } from "reducer/actions";

const Submit = () => {
  const dispatch = useDispatch();

  const handleSubmitClick = () => {
    dispatch(submitContestant());
  };

  return <button onClick={handleSubmitClick}>Submit</button>;
};

export default Submit;
