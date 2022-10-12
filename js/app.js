const numberOfFilms = +prompt('Сколько фильмов вы посмотрели ?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genress: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколько оцените его ?', '');

personalMovieDB.movies[a] = b;