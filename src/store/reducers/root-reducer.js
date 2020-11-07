import {combineReducers} from "redux";
import {filmsData} from "./films-data/films-data";
import {filmsFilter} from "./films-filter/films-filter";

export const NameSpace = {
  DATA: `DATA`,
  FILTER: `FILTER`,
};

const {DATA, FILTER} = NameSpace;

export default combineReducers({
  [DATA]: filmsData,
  [FILTER]: filmsFilter,
});
