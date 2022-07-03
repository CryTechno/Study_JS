"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false

};
const lastMovies_1 = prompt("Последний просмотренный фильм?", ""),
    gradeMovies_1 = prompt("Оцени его до 10", ""),
    lastMovies_2 = prompt("Последний просмотренный фильм?", ""),
    gradeMovies_2 = prompt("Оцени его до 10", "");

personalMovieDB.movies[lastMovies_1] = gradeMovies_1;
personalMovieDB.movies[lastMovies_2] = gradeMovies_2;

console.log(personalMovieDB);