'use strict';
/* Практическое задание № 2 на урок :

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами while и do*/

// Код возьмите из предыдущего домашнего задания



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ""),
        b = prompt('На сколько оцените его?', "");

    if (a != "" && b != "" && a != null && b != null && a.length <= 10 && b.length <= 10) {
        personalMovieDB.movies[a] = b;
    } else { i-- };           // нужны ли здесь круглые скобки??    
}

if (personalMovieDB.count < 10) {                                           // Я ВПИСАЛ ВНУТРЬ FOR ???
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {  // <= 30 ошибка
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {  // < 30 ошибка
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);


// способ 01 через for

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ""),
//         b = prompt('На сколько оцените его?', "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log("error");
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов"); // задача 03
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);



// способ 02 через while

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ""),
//         b = prompt('На сколько оцените его?', "");

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     console.log(i);
//     i++;
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('error');
// }

// console.log(personalMovieDB);


// способ 03 через do

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// let i = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ""),
//         b = prompt('На сколько оцените его?', "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log("error");
//         i--;
//     }
//     i++;
// }
// while (i < 2);


// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов"); // задача 03
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);

