import {combineReducers} from "redux";
import {filmsData} from "./films-data/films-data";
import {filmsFilter} from "./films-filter/films-filter";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  FILTER: `FILTER`,
  USER: `USER`,
};

const {DATA, FILTER, USER} = NameSpace;

export default combineReducers({
  [DATA]: filmsData,
  [FILTER]: filmsFilter,
  [USER]: user,
});
