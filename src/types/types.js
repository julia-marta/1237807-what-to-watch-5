import PropTypes from "prop-types";

const {arrayOf, array, shape, number, string, instanceOf} = PropTypes;

const FilmCardType = shape({
  id: number.isRequired,
  title: string.isRequired,
  preview: string.isRequired,
  trailer: string.isRequired,
});

const FilmHeaderType = shape({
  title: string.isRequired,
  poster: string.isRequired,
  cover: string.isRequired,
  genre: string.isRequired,
  year: number.isRequired,
});

const FilmPageType = shape({
  title: string.isRequired,
  poster: string.isRequired,
  cover: string.isRequired,
  genre: string.isRequired,
  year: number.isRequired,
  overview: shape({
    description: string.isRequired,
    score: string.isRequired,
    ratings: number.isRequired,
    director: string.isRequired,
    starring: string.isRequired,
  }),
  details: shape({
    actors: string.isRequired,
    runtime: string.isRequired,
  }),
  reviews: arrayOf(shape({
    text: string.isRequired,
    rating: string.isRequired,
    name: string.isRequired,
    date: instanceOf(Date)
  }))
});

const FilmTypes = {
  card: FilmCardType,
  header: FilmHeaderType,
  page: FilmPageType,
  list: arrayOf(FilmCardType),
  genres: array
};

export default FilmTypes;
