'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // посмотреть что такое селектор
console.log(hearts);

hearts.forEach(item => {  // посмотреть кол бэк
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // выводит только один элемент, тот кто стоял первым
console.log(oneHeart);