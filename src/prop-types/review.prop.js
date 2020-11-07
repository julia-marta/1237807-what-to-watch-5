import PropTypes from "prop-types";

const {shape, number, string} = PropTypes;

export default shape({
  id: number.isRequired,
  user: shape({
    id: number.isRequired,
    name: string.isRequired,
  }),
  rating: number.isRequired,
  comment: string.isRequired,
  date: string.isRequired,
});
