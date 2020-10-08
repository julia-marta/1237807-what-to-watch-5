const Level = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

const {BAD, NORMAL, GOOD, VERY_GOOD, AWESOME} = Level;

const LevelRules = {
  [BAD]: (score) => score < 3,
  [NORMAL]: (score) => score >= 3 && score < 5,
  [GOOD]: (score) => score >= 5 && score < 8,
  [VERY_GOOD]: (score) => score >= 8 && score < 10,
  [AWESOME]: (score) => score === 10
};

const getLevel = (score) => {

  if (LevelRules[BAD](score)) {
    return BAD;
  } else if (LevelRules[NORMAL](score)) {
    return NORMAL;
  } else if (LevelRules[GOOD](score)) {
    return GOOD;
  } else if (LevelRules[VERY_GOOD](score)) {
    return VERY_GOOD;
  } else {
    return AWESOME;
  }
};

export default getLevel;
