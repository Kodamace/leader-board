import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { refreshPoints } from "reducer/actions";

const RefreshPointsButton = () => {
  const dispatch = useDispatch();
  const contestants = useSelector(state => state.contestants);

  const handleClick = () => {
    if (
      window.confirm(
        "You are about to reset all contestants points to 0! Continue?"
      )
    )
      dispatch(refreshPoints());
  };

  if (contestants.length === 0) return null;

  return <button onClick={handleClick}>Refresh Points</button>;
};

export default RefreshPointsButton;
