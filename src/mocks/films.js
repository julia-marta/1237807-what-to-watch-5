import REVIEWS from "./reviews";

const FILMS_COUNT = 16;
const FILM_TITLES = [
  `The Grand Budapest Hotel`,
  `Bohemian Rhapsody`,
  `Aviator`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `War of the Worlds`,
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Macbeth`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `No Country for Old Men`,
  `Snatch`,
  `Seven Years in Tibet`,
  `Midnight Special`
];

const FILM_PREVIEWS = [
  `moonrise-kingdom`,
  `bohemian-rhapsody`,
  `aviator`,
  `revenant`,
  `johnny-english`,
  `shutter-island`,
  `pulp-fiction`,
  `war-of-the-worlds`,
  `fantastic-beasts-the-crimes-of-grindelwald`,
  `macbeth`,
  `we-need-to-talk-about-kevin`,
  `what-we-do-in-the-shadows`,
  `no-country-for-old-men`,
  `snatch`,
  `seven-years-in-tibet`,
  `midnight-special`
];

const GENRES = [
  `Drama`,
  `Music`,
  `Biography`,
  `Survival`,
  `Comedy`,
  `Thriller`,
  `Crime`,
  `Sci-Fi`,
  `Drama`,
  `Music`,
  `Biography`,
  `Survival`,
  `Comedy`,
  `Thriller`,
  `Crime`,
  `Sci-Fi`,
];

const YEARS = [2014, 2018, 2009, 2015, 2003, 2010, 1994, 2005, 2018, 2015, 2011, 2014, 2007, 2000, 1997, 2016];

const generateFilm = (i) => {
  return {
    id: i + 1,
    title: FILM_TITLES[i],
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    genre: GENRES[i],
    year: YEARS[i],
    preview: `${FILM_PREVIEWS[i]}.jpg`,
    trailer: `https://trailers.apple.com/movies/universal/krampus/krampus-tlr1_h480p.mov`,
    overview: {
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
      Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
      score: `8,9`,
      ratings: 240,
      director: `Wes Andreson`,
      starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
    },
    details: {
      actors: `Bill Murray,
      Edward Norton,
      Jude Law,
      Willem Dafoe,
      Saoirse Ronan,
      Tony Revoloru,
      Tilda Swinton,
      Tom Wilkinson,
      Owen Wilkinson,
      Adrien Brody,
      Ralph Fiennes,
      Jeff Goldblum`,
      runtime: `1h 39m`,
    },
    reviews: REVIEWS
  };
};

const generateFilms = (count) => {
  return new Array(count).fill().map((item, i) => generateFilm(i));
};

export default generateFilms(FILMS_COUNT);
