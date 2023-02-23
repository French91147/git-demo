"use strict";

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) { // фун. compareNum сортирует числа по порядку (Этот "алгор. быстрой сортировки" находится внутри метода sort)
    return a - b;
}
// arr.forEach(function (item, i, arr) {  // функция callback - forEach (посмотреть в инете подробней) Нельзя использовать break,continue
//     console.log(`${i}: ${item}: внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) { // Перебор массива
//     console.log(arr[i]);
// }

// for (let value of arr) { // Метод for of - хорош только в массиве. Можно использовать break,continue.
//     console.log(value);
// }

// const str = prompt("", ""); // .split переводит строку в массив и существует внутри браузера, те в vscode запустить не можем.
// const products = str.split(", ");
// products.sort(); // .sort метод сортировки (СОРТИРУЕТ МАССИВ КАК СТРОКИ)
// // console.log(products);
// console.log(products.join('; ')); // .join переводит стоку из массива в строку.