


let numberOfFilms;
function start(){
	numberOfFilms = +prompt('Сколько фильмов вы посмотрели','');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
		numberOfFilms = +prompt('Сколько фильмов вы посмотрели','');
	}

}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genress: [],
  privat: false
};


function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
  	const	a = prompt('Один из последних просмотренных фильмов', ''),
      		b = prompt('На сколько оцените его ?', '');

					if (a != null && b != null && a!= '' && b!= '' && a.length < 50){
						personalMovieDB.movies[a] = b;
					} else {
						i--;
					}
}
}

rememberMyFilms();


function detectPersonalLevel(){
	if (personalMovieDB.count < 10) {
		console.log('Просмотренно довольно мало фильмов');
	} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
		console.log('Вы классический зритель');
	} else if (numberOfFilms >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('не бывает такого');
	}
}

detectPersonalLevel();
  
function showDB (hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
} 

showDB (personalMovieDB.privat);

function writeYourGenres() {
	for ( let i = 1; i <=3; i++ ) {
		personalMovieDB.genress[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();