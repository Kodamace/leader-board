// import { capitalize } from "helpers";

// const submitContestant = state => {
//   // Make sure inputs aren't empty
//   if (state.name.length === 0 || state.points.length === 0) {
//     alert("Both values must be filled in.");
//     return state;
//   }

//   // format inputs
//   const name = capitalize(state.name);
//   const points = Number(state.points);

//   // contestant already exists
//   if (state.contestants.find(contestant => contestant.name === name)) {
//     const contestants = state.contestants.map(contestant => {
//       if (contestant.name === name)
//         return { ...contestant, points: contestant.points + points };
//       return contestant;
//     });
//     contestants.sort((a, b) => b.points - a.points);
//     return { ...state, contestants, name: "", points: "" };
//   }

//   // Add new contesant
//   const contestants = [...state.contestants];
//   contestants.push({ name, points });
//   contestants.sort((a, b) => b.points - a.points);
//   return { ...state, contestants, name: "", points: "" };
// };

// export default submitContestant;
