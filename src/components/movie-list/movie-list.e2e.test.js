import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from 'react-router-dom';
import MovieList from "./movie-list";
import {defaultState} from "../../test-data";

const mockFilms = defaultState.DATA.films;

const mockSetState = jest.fn();

jest.mock(`react`, () => Object.assign({},
    jest.requireActual(`react`), {
      useState: (initial) => [initial, mockSetState],
    }));

configure({adapter: new Adapter()});

it(`Mouse away from card should set active card equal -1`, () => {

  const wrapper = mount(
      <BrowserRouter>
        <MovieList films={mockFilms} />
      </BrowserRouter>
  );

  const cardOne = wrapper.find(`.small-movie-card`).at(0);
  cardOne.simulate(`mouseLeave`);
  expect(mockSetState.mock.calls[0][0]).toEqual(-1);

  expect(mockSetState).toHaveBeenCalledTimes(1);
});
