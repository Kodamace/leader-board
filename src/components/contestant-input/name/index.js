import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

import { setName } from "reducer/actions";

const Name = ({ name, set }) => {
  // const dispatch = useDispatch();
  // const name = useSelector(state => state.name);

  // const handleNameChange = e => dispatch(setName(e.target.value));
  const handleNameChange = e => set(e.target.value);

  return (
    <input
      onChange={handleNameChange}
      type="text"
      placeholder="Contestant Name"
      value={name}
    />
  );
};

const mapStateToProps = state => ({ name: state.name });
const mapDispatchToProps = dispatch => {
  // Do other stuff to manipulate data
  return {
    set: name => dispatch(setName(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Name);
