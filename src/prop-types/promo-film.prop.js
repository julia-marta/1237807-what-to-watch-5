import PropTypes from "prop-types";

const {shape, number, string} = PropTypes;

export default shape({
  id: number.isRequired,
  name: string.isRequired,
  posterImage: string.isRequired,
  backgroundImage: string.isRequired,
  backgroundColor: string.isRequired,
  genre: string.isRequired,
  released: number.isRequired,
});
