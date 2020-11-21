import React from 'react';
import PropTypes from "prop-types";
export const noop = () => {};

export const promoFilm = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#000000`,
  genre: `Drama`,
  released: 2014,
  isFavorite: false,
};

export const filmCard = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  previewImage: `the-grand-budapest-hotel.jpg`,
  previewVideoLink: `https://trailers.apple.com/movies/universal/krampus/krampus-tlr1_h480p.mov`,
};

export const film = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#000000`,
  genre: `Drama`,
  released: 2014,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
  Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  rating: 8.9,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  runTime: 99,
  isFavorite: true,
};

export const reviews = [
  {
    id: 1,
    user: {
      id: 4,
      name: `Kate Muir`,
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`,
  },
  {
    id: 2,
    user: {
      id: 5,
      name: `Matthew Lickona`,
    },
    rating: 7.2,
    comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    date: `2019-05-18T14:13:56.569Z`,
  }
];

export const genres = [`All genres`, `Drama`, `Music`, `Biography`, `Survival`, `Thriller`, `Crime`];

export const defaultState = {
  DATA: {
    films: [filmCard, filmCard, filmCard, filmCard, filmCard, filmCard, filmCard],
    promo: promoFilm,
    currentFilm: film,
    currentReviews: reviews,
  },
  FILTER: {
    genre: `Drama`,
    cardsCount: 8,
  },
  USER: {
    status: `NOT_AUTHORIZED`,
    name: `userName`,
    avatar: `avatar.jpg`,
    reviewStatus: `NOT_SAVING`,
  },
};

export const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export const SimpleMockComponent = () => <div />;
