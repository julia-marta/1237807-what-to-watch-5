import PropTypes from "prop-types";

const {arrayOf, shape, number, string, bool} = PropTypes;

export default shape({
  id: number.isRequired,
  name: string.isRequired,
  posterImage: string.isRequired,
  backgroundImage: string.isRequired,
  backgroundColor: string.isRequired,
  genre: string.isRequired,
  released: number.isRequired,
  description: string.isRequired,
  rating: number.isRequired,
  scoresCount: number.isRequired,
  director: string.isRequired,
  starring: arrayOf(string).isRequired,
  runTime: number.isRequired,
  isFavorite: bool.isRequired,
});
