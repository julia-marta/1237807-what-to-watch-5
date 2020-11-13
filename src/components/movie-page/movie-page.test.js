import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {MoviePage} from "./movie-page";
import {noop, film, reviews, defaultState} from "../../test-data";
import {AuthorizationStatus} from "../../const";

const {AUTHORIZED, NOT_AUTHORIZED} = AuthorizationStatus;
const mockRelatedFilms = defaultState.DATA.films;

jest.mock(`../header/Header`, () => `Header`);

describe(`should MoviePage render correctly`, () => {
  it(`with add review button when user is authorized`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MoviePage id={`1`} film={film} reviews={reviews} relatedFilms={mockRelatedFilms}
              userStatus={AUTHORIZED} onPlayClick={noop} onMyListClick={noop} />
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
              userStatus={NOT_AUTHORIZED} onPlayClick={noop} onMyListClick={noop} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
