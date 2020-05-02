// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { refreshContestants } from "reducer/actions";

// const RefreshContestantsButton = () => {
//   const dispatch = useDispatch();
//   const contestants = useSelector(state => state.contestants);

//   const handleClick = () => {
//     if (window.confirm("You are about to reset all contestants! Continue?"))
//       if (window.confirm("Are you sure?")) dispatch(refreshContestants());
//   };

//   if (contestants.length === 0) return null;

//   return <button onClick={handleClick}>Refresh Contestants</button>;
// };

// export default RefreshContestantsButton;
