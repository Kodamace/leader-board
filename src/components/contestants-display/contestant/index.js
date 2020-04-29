import React from "react";
import { useSelector } from "react-redux";

import "styles.css";

import { DispatchButton } from "components";
import { removeContestant } from "reducer/actions";

const Contestant = ({ index, name, points }) => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <div className="dataDisplay">
      <div className="ranker">{index + 1}</div>
      <div className="name">{name}</div>
      <div className="points">{points}</div>
      {isLoggedIn && (
        <DispatchButton
          action={() => removeContestant(name)}
          text="Remove Contestant"
        />
      )}
      <hr />
      <br />
    </div>
  );
};

export default Contestant;
