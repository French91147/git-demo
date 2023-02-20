"use strict"

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {  // метод созданный самостоятельно, а не встроенный в прогу, как // console.log(Object.keys(options).length); что ниже
        console.log("Test");
    }
};

options.makeTest();

const { border, bg } = options.colors; //диструктуризация

console.log(border);

// console.log(Object.keys(options).length); // подсчёт свойств в объекте, не через counter

// console.log(options["colors"]["border"]); //пример объяснения работы for..in, что ниже

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {  // " for..in  перебор свойств внутри объекта" пройти ещё раз, не всё очевидно.
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter ++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter ++;
//     }
// }
// console.log(counter);