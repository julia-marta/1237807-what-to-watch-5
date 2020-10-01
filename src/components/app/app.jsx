import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {film} = props;

  return (
    <Main film={film} />
  );
};

App.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.instanceOf(Date).isRequired
  }).isRequired
};

export default App;
