"use strict";

//пример 01 передаётся по значению (приммитивы, строки, логич.знач.)

// let a = 5,
//     b = a;

// b = b + 5; передаётся по значению 5+5=10

// console.log(b); // = 10
// console.log(a); // = 5

//пример 02 при работе с объект. передаётся по ссылке (массивы, функц итд)

// const obj = { 
//     a: 5,
//     b: 1
// };

// const copy = obj // это не копия, а ссылка, 

// copy.a = 10;     // изменяя в ссыле, мы меняем в оригинале

// console.log(copy); //  получится {a: 10, b: 1}
// console.log(obj);  //  получится {a: 10, b: 1}


//          Способы поверхностной копии объектов и массивов

//   Способ 01 копирование ОБЪЕКТОВ при помощи (использование цикла, перебирающ. конструнция for...in)

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
        console.log(mainObj[key]);
    }

    return objCopy; // возращает то, что мы передали в кач-ве параметра.
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
// newNumbers.c.x = 10; // меняется в копии и в ориге, тк это поверхн. копия она меняет вложные объекты как по ссылке те и в ориге.

console.log(newNumbers); // { a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbers);    //{ a: 2, b: 5, c: { x: 7, y: 4 } }


//   Способ 02 (использование Object.assign) соединяем несколько ОБЪЕКТОВ


// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//         console.log(mainObj[key]);
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers); // { a: 10, b: 5, c: { x: 7, y: 4 } }
// console.log(numbers);    //{ a: 2, b: 5, c: { x: 7, y: 4 } }

// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add)); // соединяем объекты add и numbers
// // первый аргум - тот в который мы хотим поместить, второй- тот объект, который помещаем.
// // { a: 2, b: 5, c: { x: 7, y: 4 } }


// Такой же пример, только с пустым объектом

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//         console.log(mainObj[key]);
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = (Object.assign({}, add));

// clone.d = 20;

// console.log(add); // { d: 17, e: 20 }
// console.log(clone); // { d: 20, e: 20 }


//   Способ 03 Метод поверхн. копии МАССИВА при помощи slice


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); // при помощи slice мы создаём копию

// // const newArray = oldArray; если оставить так, то это будет ссылка на массив, не копия, те изменяя newArray мы будем менять и oldArray.

// newArray[1] = 'abracadabra';

// console.log(newArray); //  [ 'a', 'abracadabra', 'c' ]
// console.log(oldArray); // [ 'a', 'b', 'c' ]


//   Способ 04 Метод поверхн. копии МАССИВА при помощи (оператор разворота или ...Spread оператор - разворачивает стуктуру и превразает её в набор данных) Стандарты ES6, ES8

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['worldpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet); // ...Spread оператор развернул структуры на отдельные элементы

// ещё пример, но чуть сложнее

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };

// const num = [2, 5, 7];

// log(...num); // вместо аргументов передаём через ...Spread  и теперь массив разложится на три отдельных элемента


//   Способ 05 Метод поверхн. копии ОБЪЕКТА при помощи (оператор разворота или ...Spread оператор - разворачивает стуктуру и превразает её в набор данных) Стандарты ES6, ES8
//   работает как с МАССИВАМИ так и с ОБЪЕКТАМИ

// ...Spread оператор, способ для МАССИВА

// const array = ["a", "b"];

// const newAarray = [...array];

// newAarray[1] = 'gegege';

// console.log(array);  // [ 'a', 'b' ]
// console.log(newAarray); // [ 'a', 'gegege' ]

// ...Spread оператор, способ  для ОБЪЕКТА

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};
// newObj.one = 555

// console.log(q); // { one: 1, two: 2 }
// console.log(newObj); // { one: 555, two: 2 }