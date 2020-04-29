import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPoints } from "reducer/actions";

const Points = () => {
  const dispatch = useDispatch();
  const points = useSelector(state => state.points);

  const handlePointsChange = e => dispatch(setPoints(e.target.value));

  return (
    <input
      onChange={handlePointsChange}
      type="number"
      placeholder="Contestant Points"
      value={points}
    />
  );
};

export default Points;
