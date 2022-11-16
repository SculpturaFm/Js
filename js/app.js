const numberOfFilms = +prompt('Сколько фильмов вы посмотрели ?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genress: [],
  privat: false
};


for (let i = 0; i < 2; i++) {
  	const	a = prompt('Один из последних просмотренных фильмов', ''),
      		b = prompt('На сколько оцените его ?', '');

					if (a != null && b != null && a!= '' && b!= '' && a.length < 50){
						personalMovieDB.movies[a] = b;
					} else {
						i--;
					}
}

if (personalMovieDB.count < 10) {
	console.log('Просмотренно довольно мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
	console.log('Вы классический зритель');
} else if (numberOfFilms >= 30) {
	console.log('Вы киноман');
} else {
	console.log('не бывает такого');
}

console.log(personalMovieDB);