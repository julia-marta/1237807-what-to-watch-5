const REVIEWS_COUNT = 6;

const REVIEW_TEXTS = [
  `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
  `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
  `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`
];

const RATINGS = [`8,9`, `7,2`, `8,0`, `7,6`, `8,0`, `7,0`];

const NAMES = [`Kate Muir`, `Matthew Lickona`, `Bill Goodykoontz`, `Paula Fleri-Soler`, `Amanda Greever`, `Paula Fleri-Soler`];

const DATES = [new Date(2016, 11, 24), new Date(2016, 11, 20), new Date(2015, 10, 18), new Date(2016, 11, 20), new Date(2015, 10, 18), new Date(2016, 11, 20)];

const generateReview = (i) => {
  return {
    text: REVIEW_TEXTS[i],
    rating: RATINGS[i],
    name: NAMES[i],
    date: DATES[i]
  };
};

const generateReviews = (count) => {
  return new Array(count).fill().map((item, i) => generateReview(i));
};

export default generateReviews(REVIEWS_COUNT);
