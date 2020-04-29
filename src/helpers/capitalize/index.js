const capitalize = name => {
  const splitStr = name.toLowerCase().split(" ");
  // ["Barry", "Doyle"]
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substr(1);
  }
  return splitStr.join(" ");
};

export default capitalize;
