const refreshPoints = state => {
  const contestants = state.contestants.map(contestant => ({
    ...contestant,
    points: 0
  }));
  return { ...state, contestants };
};

export default refreshPoints;
