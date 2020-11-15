import {filmsFilter} from "./films-filter";
import {ActionType, ALL_GENRES, FILM_CARDS_COUNT_TO_SHOW} from "../../../const";
import {genres} from "../../../test-data";

const {CHANGE_GENRE, SHOW_MORE_CARDS, RESET_CARDS} = ActionType;

const mockInitialState = {
  genre: ALL_GENRES,
  cardsCount: FILM_CARDS_COUNT_TO_SHOW,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(filmsFilter(void 0, {})).toEqual(mockInitialState);
});

it(`Reducer should change genre by a given value`, () => {
  expect(filmsFilter(mockInitialState, {
    type: CHANGE_GENRE,
    payload: genres[2],
  })).toEqual({
    genre: genres[2],
    cardsCount: FILM_CARDS_COUNT_TO_SHOW,
  });
});

it(`Reducer should increment cards count by a given value`, () => {
  expect(filmsFilter(mockInitialState, {
    type: SHOW_MORE_CARDS,
    payload: 7,
  })).toEqual({
    genre: ALL_GENRES,
    cardsCount: 15,
  });
});

it(`Reducer should set default cards count on reset`, () => {
  expect(filmsFilter(mockInitialState, {
    type: RESET_CARDS,
  })).toEqual(mockInitialState);
});
