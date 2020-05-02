const removeContestant = (state, name) => {
  if (window.confirm('Are you sure you want to remove this contestant ?')) {
    const contestants = state.contestants.filter(
      (contestant) => contestant.name !== name
    )
    return { ...state, contestants }
  }
  return state
}

export default removeContestant
