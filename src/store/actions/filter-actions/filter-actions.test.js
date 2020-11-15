import {changeGenre, showMoreCards, resetCards} from "./filter-actions";
import {ActionType, FILM_CARDS_COUNT_TO_SHOW} from "../../../const";
import {genres} from "../../../test-data";

const mockGenre = genres[1];

const {CHANGE_GENRE, SHOW_MORE_CARDS, RESET_CARDS} = ActionType;

describe(`Action creators work correctly`, () => {

  it(`Action creator for change genre returns correct action`, () => {
    expect(changeGenre(mockGenre)).toEqual({
      type: CHANGE_GENRE,
      payload: mockGenre,
    });
  });

  it(`Action creator for show more cards returns action with cards count payload when it less than default count`, () => {
    expect(showMoreCards(7)).toEqual({
      type: SHOW_MORE_CARDS,
      payload: 7,
    });
  });

  it(`Action creator for show more cards returns action with default count payload when passed count more than it`, () => {
    expect(showMoreCards(11)).toEqual({
      type: SHOW_MORE_CARDS,
      payload: FILM_CARDS_COUNT_TO_SHOW,
    });
  });

  it(`Action creator for reset cards returns action with undefined payload`, () => {
    expect(resetCards()).toEqual({
      type: RESET_CARDS,
    });
  });
});
