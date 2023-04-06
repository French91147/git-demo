/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adv = document.querySelectorAll('.promo__adv img'), // adv (обращается =) к document итд
    poster = document.querySelector('.promo__bg '), // задача 02 и  задача 03
    genre = poster.querySelector('.promo__genre'),  // задача 02
    movieList = document.querySelector('.promo__interactive-list'); // задача 04

adv.forEach(item => {   // задача 01 удаление рекламы с помощью forEach
    item.remove();
});

// adv.forEach(function (item) {   // задача 01 удаление рекламы вар 02
//     item.remove();
// });

genre.textContent = 'ДРАМА'; // задача 02

poster.style.backgroundImage = 'url("img/bg.jpg")'; // задача 03

movieList.innerHTML = ""; // задача 04

movieDB.movies.sort(); // задача 04

movieDB.movies.forEach((film, i) => {   // задача 05
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

