import React from "react";
import { useDispatch } from "react-redux";

const DispatchButton = ({ action, text }) => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(action());

  return <button onClick={handleClick}>{text}</button>;
};

export default DispatchButton;
