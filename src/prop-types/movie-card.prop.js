import PropTypes from "prop-types";

const {shape, number, string} = PropTypes;

export default shape({
  id: number.isRequired,
  name: string.isRequired,
  previewImage: string.isRequired,
  previewVideoLink: string.isRequired,
});
