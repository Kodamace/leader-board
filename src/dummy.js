import React, { createContext, useState, useContext } from "react";

const ContestantsContext = createContext({
  contestants: [],
  setContestants: _ => null
});

const MyComponent = () => {
  const [contestants, setContestants] = useState([]);

  return (
    <ContestantsContext.Provider value={{ contestants, setContestants }}>
      <MyChildComponent />
      <OtherComponent />
    </ContestantsContext.Provider>
  );
};

const MyChildComponent = () => {
  const { contestants, setContestants } = useContext(ContestantsContext);

  return contestants.map(contestant => {
    return contestant;
  });
};

const OtherComponent = () => {
  const { contestants, setContestants } = useContext(ContestantsContext);

  return more;
};

const state = {
  contestData: [
    {
      name: "",
      points: 0
    }
  ]
};

// ContestantInput

// what it does:
//
//  Passes name and points to a handler function

// what it has:
// - name input
// - points input

// what it needs:
// - submit handler that receives a name and points
