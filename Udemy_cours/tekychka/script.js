"use strict";
// РЕФАКТОРИНГ КОДА

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ""),
                b = prompt('На сколько оцените его?', "");

            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов"); // задача 03
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) { // hidden-скрытый
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;  // истина поумолчанию (if это отсекатель истины)
        } else {
            personalMovieDB.privat = true;  //  если не истина
        }
    },

    // writeYourGenres: function () { //вариант 01

    //     for (let i = 1; i <= 3; i++) {
    //         let genres = prompt(`Ваш любимый жанр под номером ${i}`); 
    //         if (genres === '' || genres === null) {
    //             console.log('Вы ввели не корректные данные');
    //             i--;
    //         } else {
    //             personalMovieDB.genres[i - 1] = genres;
    //         }
    //     }

    //     personalMovieDB.genres.forEach((item, i,) => {
    //         console.log(`Любимый жанр ${i + 1} - это ${item}`);
    //     });
    // }

    writeYourGenres: function () { //вариант 02

        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase(); //перевод в нижний регистр.

            if (genres === '' || genres === null) {
                console.log('Вы ввели не корректные данные');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', '); // назнаяаем разделитель в строке
                personalMovieDB.genres.sort(); // сортирует по алфавиту
            }
        }

        personalMovieDB.genres.forEach((item, i,) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};