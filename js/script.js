"use strict";
/*First_Prac---
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


if (4 == 9) {
    console.log('Ok!');

} else {
    console.log('Error')
}

const num = 50;
if (num < 49) {
    console.log(error_0);
} else if(num > 100){
    console.log(error_1);
} else{
    console.log('ok');
}

(num === 50) ? console.log('Ok!') : console.log('Error!');

const num = 50;

switch (num) {
    case 1:

}
*/

/*--PRAC_2--
let numbers = 50;

while (numbers < 55) {
    numbers++;
    console.log(numbers);
}
numbers = 50;
do {
    numbers++;
    console.log(numbers);
}
while(numbers < 55)

*/
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i<2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = +prompt('На сколько оцените его?', '');
        if(a==null||a==''||b==null||b==''|| b.length >50 || a.length>50){
            i--;
        } else{
            personalMovieDB.movies[a] = b;
        }
}

let i = 0;
do{
    i++;
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = +prompt('На сколько оцените его?', '');
        if(a==null||a==''||b==null||b==''|| b.length >50 || a.length>50){
            i--;
        } else{
            personalMovieDB.movies[a] = b;
        }
}while(i<2);

console.log(personalMovieDB);
if(personalMovieDB.count < 10 && personalMovieDB.count > 0){
    console.log('Просмотрено довольно мало фильмов');
}else if(personalMovieDB.count >= 10 &&  personalMovieDB.count < 30){
    console.log('Вы классический зритель');    
}else if(personalMovieDB.count >= 30 ){
    console.log('Вы киноман');    
}else{
    console.log('Произошла ошибка');
}

*/

/*Функции и тд
let kok = 'Roman';
function showFirstMessage(name){
    console.log(`Имя ${name}`);
}

showFirstMessage(kok);

const logger = function(name){
    console.log(`Имя ${name}`);
};
logger(kok);

const calc = a => a;
*/

/*методы и свойства

const str = "test";
str.toUpperCase();
console.log(str);

const fruit = "Some fruit"
console.log(fruit.indexOf("fruit"));

const logg = "Hello World"
console.log(logg.slice(6)); 

const test = "12.2px";
console.log (parseFloat(test));
*/

/*---------------Практика 3*/
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

function rememberMyFilms(){
    for(let i = 0; i<2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = +prompt('На сколько оцените его?', '');
            if(a==null||a==''||b==null||b==''|| b.length >50 || a.length>50){
                i--;
            } else{
                personalMovieDB.movies[a] = b;
            }
    }
}

function detectPersonalLevel(){
    if(personalMovieDB.count < 10 && personalMovieDB.count > 0){
        console.log('Просмотрено довольно мало фильмов');
    }else if(personalMovieDB.count >= 10 &&  personalMovieDB.count < 30){
        console.log('Вы классический зритель');    
    }else if(personalMovieDB.count >= 30 ){
        console.log('Вы киноман');    
    }else{
        console.log('Произошла ошибка');
    }
}
function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        const quest = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres = quest; 
    }
    
}

start();
rememberMyFilms();

showMyDB(personalMovieDB.privat);