import React from "react";
import { useSelector } from "react-redux";

import Contestant from "./contestant";

const DisplayData = () => {
  const contestants = useSelector(state => state.contestants);

  return (
    <div>
      {/* we then pass contestant below  */}
      {contestants.length > 0 ? (
        contestants.map((contestant, index) => (
          <Contestant key={contestant.name} index={index} {...contestant} />
        ))
      ) : (
        <h4>No Contestants Yet</h4>
      )}
    </div>
  );
};

export default DisplayData;
