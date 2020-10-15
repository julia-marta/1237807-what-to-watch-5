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

const getLevel = (score) => {

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

export default getLevel;
