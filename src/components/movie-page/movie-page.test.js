import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {MoviePage} from "./movie-page";
import {noop, film, reviews, defaultState} from "../../test-data";
import {AuthorizationStatus} from "../../const";

const {AUTHORIZED, NOT_AUTHORIZED} = AuthorizationStatus;
const mockRelatedFilms = defaultState.DATA.films;

jest.mock(`../header/header.jsx`, () => `Header`);

const mockEffect = jest.fn();

jest.mock(`react`, () => Object.assign({},
    jest.requireActual(`react`), {
      useEffect: () => mockEffect,
    }));

describe(`should MoviePage render correctly`, () => {
  it(`with add review button when user is authorized`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MoviePage id={`1`} film={film} reviews={reviews} relatedFilms={mockRelatedFilms}
              userStatus={AUTHORIZED} loadFilm={noop} loadReviews={noop} addToMyList={noop} onPlayClick={noop} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`without add review button when user is not authorized`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MoviePage id={`1`} film={film} reviews={reviews} relatedFilms={mockRelatedFilms}
              userStatus={NOT_AUTHORIZED} loadFilm={noop} loadReviews={noop} addToMyList={noop} onPlayClick={noop} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
