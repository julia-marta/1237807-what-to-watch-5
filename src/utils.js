const RELATED_FILMS_COUNT = 4;

const Level = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

const LevelStep = {
  LOW: 3,
  MIDDLE: 5,
  HIGH: 8,
  TOP: 10
};

const {BAD, NORMAL, GOOD, VERY_GOOD, AWESOME} = Level;
const {LOW, MIDDLE, HIGH, TOP} = LevelStep;

const LevelRules = {
  [BAD]: (score) => score < LOW,
  [NORMAL]: (score) => score >= LOW && score < MIDDLE,
  [GOOD]: (score) => score >= MIDDLE && score < HIGH,
  [VERY_GOOD]: (score) => score >= HIGH && score < TOP,
  [AWESOME]: (score) => score === TOP
};

export const getLevel = (score) => {

  if (LevelRules[BAD](score)) {
    return BAD;
  } else if (LevelRules[NORMAL](score)) {
    return NORMAL;
  } else if (LevelRules[GOOD](score)) {
    return GOOD;
  } else if (LevelRules[VERY_GOOD](score)) {
    return VERY_GOOD;
  } else if (LevelRules[AWESOME](score)) {
    return AWESOME;
  } else {
    return ``;
  }
};

export const getRelatedFilms = (films, currentFilm) => {
  const similarGenreFilms = films.filter((film) => film.genre === currentFilm.genre);

  if (similarGenreFilms.length === 0) {
    return films.slice(0, RELATED_FILMS_COUNT);
  }

  if (similarGenreFilms.length > RELATED_FILMS_COUNT) {
    return similarGenreFilms.slice(0, RELATED_FILMS_COUNT);
  }

  const otherFilms = (films.filter((film) => film.genre !== currentFilm.genre)).slice(0, RELATED_FILMS_COUNT - similarGenreFilms.length);

  return similarGenreFilms.concat(otherFilms);
};
