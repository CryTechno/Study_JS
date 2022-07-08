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

P.S. Функции вызывать не обязательно

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
            if(a.trim()==null||a.trim()==''||b.trim()==null||b.trim()==''|| b.length >50 || a.length>50){
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
    for(let i = 1; i <= 3; i++){
        const quest = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = quest; 
    }
}
start();
rememberMyFilms();
writeYourGenres();
showMyDB(personalMovieDB.privat);
*/
/*call-back function

function first(){
    //do something
    setTimeout(function(){
        console.log(1);
    }, 500);
}


function second(){
    //do something
    console.log(2);
}

first();
second();
function down(){
    console.log('Я даун');
}
function learnJS(lang, callback){
    console.log(`Я учу : ${lang}`)
    callback();
}
learnJS('JavaScript', down);
*/

/*-----------Обьекты и тд

const options = {
    name: 'test',
    width: 1024,
    height: 720,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function(){
        console.log("Mame q")
    }
};


for (let key in options){
    if (typeof(options[key]) === 'object'){
        for(let i in options[key]){
            console.log(`Svoistvo ${i} umeet 3na4enie ${options[key][i]}`);
        }
    }else{
    console.log(`Svoistvo ${key} umeet 3na4enie ${options[key]}`);}
}

console.log(Object.keys(options).length);
options.makeTest();

const {border, background} = options.colors;
console.log(border);


let num = 3;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_2 = [];
let j = 0;
const evenNumber = (array,number) => {
    
    for(let i in array){
        if(array[i]%2==0 && number>0){
            arr_2[j] = array[i];
            j++;
        }
    }
    return arr_2.slice(-2);
}

console.log(evenNumber(arr,num));*/
/*-----------Massives and pseudo-massives
const arr = [10,1,54,2,65,73,4];
arr.push(10);
console.log(arr);
for(i in arr){
    console.log(arr[i]);
}
for(let value of arr){
    console.log(arr[value]);
}

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри ${arr}`)

});

const str = "1, 5, 3, 6";
const products = str.split(", ");
products.forEach(function(item, i, products){
    products[i]= parseInt(products[i]);

});
console.log(products);

console.log(typeof(products[1]));*/
/*
let arr = [1,2,2,2,3];
let ass = [];
function arrayDiff(a, b) {
    let result = []
    if(b.length!=0){
        b.forEach(function(it){
            result = a.filter(function(item){
                return item != it;
            });
            a = result;
        });
        return result;
    }else{return a;}
}
console.log(arrayDiff(arr, ass));

let numHigh = 1262347;
function nextSmaller(n) {
    function compareNumeric(a, b){
        return (a - b);
    }
    let arrNum;
    let num;
    let first_ind;
    let second_ind;
    let first_it;
    let second_it;  
    let result = [];  
    num = n.toString();
    arrNum = Array.from(num).reverse();
    console.log(arrNum);
    for(let i = 0; i < arrNum.length; i++){
        if(arrNum[i] > arrNum[i + 1]){
            first_ind = i;
        }
    }
    console.log(arrNum[first_ind]);
    for(let i = first_ind + 1; i < arrNum.length; i++){
        if(typeof second_it === "undefined" || arrNum[i] > second_it && arrNum[i] < arrNum[first_ind]){
            second_it = arrNum [i];
            second_ind = i;
            break;
        }
    }
    console.log(second_it);
    first_it = arrNum[first_ind];
    arrNum[second_ind] = first_it;
    arrNum[first_ind] = second_it;
    console.log(arrNum);
    let res1 = arrNum.slice(0,first_ind+1);
    let resSort = arrNum.slice(first_ind+1);
    console.log(res1);
    resSort.sort(compareNumeric);
    resSort.reverse();
    console.log(resSort);
    console.log(res1.concat(resSort));
    return res1.concat(resSort);
  }
nextSmaller(numHigh);
*/
/*--------------Передача по ссылке--------

const obj = {
    a: 5,
    b: 1,
    c: {
        x:7,
        y:4
    }

};
const copys = obj; // Ссылка на обжект

function copy(mainObj){
    let objCopy = {};
    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
let ObjC = copy(obj);
ObjC.a = 10;
ObjC.c.x = 10;
console.log(ObjC);
console.log(obj);

const add = {
    d:17,
    e:10,
    c:{
        history:20,
        as:30
    }
};
const clone = Object.assign({}, add);
clone.d = 255;
console.log(clone);
console.log(add);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'asdasdaf'; 
console.log(newArray);
console.log(oldArray);

const video = ['Youtube', 'Vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogspot'],
    internet = [...video, ...blogs, 'Sucker', 'VK'];
    console.log(internet);

function log(...c){
    console.log(c);
}

const num = [2, 5, 7, 2, 5];
log(...num);

const array = ["a", "b"];

const newArr = [...array];

*/
/*--------------OOP---------------------

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));
console.log(str);
console.log(strObj);

console.dir([1,2,4,5,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello')
    }
};

const John = {
    health: 100
};

Object.setPrototypeOf(John,soldier);

console.log(John.armor);

const soldier = {
    health: 400,
    armor: 100
};
let john = Object.create(soldier);
  
console.log(john.health);
john.sayHello();



function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}
Ship.prototype.isWorthIt = function(){
   return this.draft-(this.crew*1.5) > 20;
}

   let titanic = new Ship(0,0);
   console.log(titanic.isWorthIt());
*/
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            }
        },
        rememberMyFilms: () => {
            for(let i = 0; i<2; i++){
                const a = prompt('Один из последних просмотренных фильмов?', ''),
                    b = +prompt('На сколько оцените его?', '');
                    if(a==null||a==''||b==null||b==''|| b.length >50 || a.length>50){
                        i--;
                    } else{
                        personalMovieDB.movies[a] = b;
                    }
            }
        },
    detectPersonalLevel: function(){
            if(personalMovieDB.count < 10 && personalMovieDB.count > 0){
                console.log('Просмотрено довольно мало фильмов');
            }else if(personalMovieDB.count >= 10 &&  personalMovieDB.count < 30){
                console.log('Вы классический зритель');    
            }else if(personalMovieDB.count >= 30 ){
                console.log('Вы киноман');    
            }else{
                console.log('Произошла ошибка');
            }
        },
    showMyDB: function(hidden){
            if(!hidden){
                console.log(personalMovieDB);
            }
        },

    toggleVisibleMyDB: () => {
            if(personalMovieDB.privat){
                personalMovieDB.privat = false;
            }else{
                personalMovieDB.privat = true;
            }
        },  
     writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
            const quest = prompt(`Ваш любимый жанр под номером ${i}`);
            if(quest==null||quest==''){
                i--;
                continue;
            }
            personalMovieDB.genres[i-1] = quest; 
        }
        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр #${i+1} - это ${element}`);
        });
    }
};
personalMovieDB.writeYourGenres();

const s1 = [118,117,120,4,5,6,14,10,11];
function numObj(s){
    let Obj = {}
    let arr = [];
    for(i in s){
        let elementStr = String(s[i]);
        Obj[s[i]] = String.fromCharCode(elementStr);
        arr.push(Obj);
        Obj = {};
    }
    return arr;
}

console.log(numObj(s1));


function mostMoney(students) {
    let array = [];
    if (students.length === 1) {
       return students[0].name;
    }
    students.forEach((value, index) => {
       let total = ((5 * value.fives) + (10 * value.tens) + (20 * value.twenties));
       array.push([total, value.name]);
    });
    array = array.sort((a, b) => b[0] - a[0]);
    if (array.every((el, i, array) => el[0] === array[0][0])) {
      return 'all'; 
    }
    else {
      return array[0][1];
    }
  }
  */

  /*--------------Динамическая Типизация---------------------  
  console.log(typeof(String(4)));
  console.log(String(4));

//To String
console.log(typeof(5 + ""));

const num = 5;

console.log("https://vk.com/catalog" + num);

const fontSize = 26 + 'px';

// To Number

console.log(typeof(Number('4')));
console.log(typeof((+'4')));

console.log(typeof(parseInt("15px",10)));

let answer = +prompt("mame q?", "");

//To Boolean

//0, '', null, undefined, NaN;

let switcher = 1;

if (switcher){
    console.log('Working');
}


console.log(typeof(Boolean('4')));
console.log(Boolean('4'));

console.log(!!"44444");
*/
  /*--------------Замыкание и лексичное окружение--------------------- 

let number = 5;
debugger;
function logNumb() {
    let number = 4;debugger;
    console.log(number);
};

number = 6;
logNumb();debugger;


function createCounter() {
    let counter = 0;

    const myFunction = function(){
        counter = counter + 1;
        return counter;
    }

    return myFunction;

}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(c1,c2,c3);
*/
  /*--------------Задачки---------------------
  •	Какое будет выведено значение: let x = 5; alert(x++); ? 5

•	Чему равно такое выражение: [ ] + false - null + true ? NaN

•	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? 2

•	Чему равна сумма [ ] + 1 + 2? 12

•	Что выведет этот код: alert( "1"[0] )?  1

•	Чему равно 2 && 1 && null && 0 && undefined ? null 

•	Есть ли разница между выражениями? !!( a && b ) и (a && b)? da 

•	Что выведет этот код: alert( null || 2 && 3 || 4 ); ? приоритетнее && 

•	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? false

•	Что выведет этот код: alert( +"Infinity" ); ? Infinity

•	Верно ли сравнение: "Ёжик" > "яблоко"? false

•	Чему равно 0 || "" || 2 || undefined || true || falsе ? 2

 */
  /*--------------РАБОТА СО СТРАНИЧКАМИ---------------------

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button')[1];

console.log(btns);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
hearts.forEach((item,i)=>{
    console.log(item);
})
console.log(hearts);

const heart = document.querySelector('.heart');
console.log(heart);



const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    heart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');
    box.style.backgroundColor = 'blue';
    box.style.width = '500px';

    box.style.cssText = 'background-color: red; width:400px ';

    btns[1].style.borderRadius = '100%';
    circles[0].style.backgroundColor =  'red';

    for(let i = 0; i < hearts.length;i++){
        hearts[i].style.backgroundColor = 'blue';
    }

    hearts.forEach(item => {
        item.style.backgroundColor = 'purple';
    })
    
    const div = document.createElement('div');
    const text = document.createTextNode('Тут был я!');

    div.classList.add('black'); 
    //wrapper.prepend(div);
    hearts[0].after(div);
    hearts[0].replaceWith(circles[0]);

    div.innerHTML = "<h1>Hello World</h1>";

    div.insertAdjacentHTML('beforeend', '<h2>Hellow</h2>');

 */
/*---------------------------------События в ЖС PRAC_3----------------------*/

/*---------------------------------Навигация DOM----------------------*/
//console.log(document.head);

//console.log(document.documentElement);
//
//console.log(document.body.childNodes);
//console.log(document.body.firstChild);
//console.log(document.body.lastChild);

//console.log(document.querySelector('#btns').parentNode. parentNode);

//console.log(document.querySelector('[data-btn]').nextElementSibling);

//console.log(document.querySelector('#btns').parentElement);
//console.log(document.body.firstElementChild);

//for(let node of document.body.childNodes){
//    if (node.nodeName == "#text"){
//        continue;
//    }
//    console(node);
//}
/*---------------------------------Рекурсия----------------------

function pow (x,y) {
    if(y === 1){
        return x;
    }else{
        return x * pow(x,y-1);
    }
}

console.log(pow(2,3));

function getTotalProgressByIteration(data){
    let totalProgress = 0,
    students = 0;
    for(let course of Object.values(data)){
        if(Array.isArray(course)){
            students += course.length;
            for(let i = 0; i< course.length; i++){
                totalProgress += course[i].progress;
            }
        }
        else{
            for(let subCourse of Object.values(course)){
                students += subCourse.length;
                for(let i = 0; i< subCourse.length; i++){
                    totalProgress += subCourse[i].progress;
                }

            }

        }
    }
    return totalProgress/students;
}
let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Anna',
            progress: 18
        }],
        
        pro: [{
            name: 'Sam',
            progress: 10
        }],

    }
};


function getTotalProgressByRecursion(data){
    if(Array.isArray(data)){
        let totalProgress = 0;  
        for(let i = 0; i< data.length; i++){
            totalProgress += data[i].progress;
        }
        return [totalProgress, data.length];
    }else{
        let totalProgress = [0, 0];
        for(let subData of Object.values(data)){
            const subDataArr = getTotalProgressByRecursion(subData); 
            totalProgress[0] += subDataArr[0];
            totalProgress[1] += subDataArr[1];
        }
        return totalProgress;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);

*/

const p = document.querySelectorAll('.circle');
console.log(p);

function loadScript(src){
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}
loadScript("js/test.js");
loadScript("js/some.js");