'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    // hearts = document.querySelectorAll('.heart'),   // вар 01
    hearts = wrapper.querySelectorAll('.heart'),       // вар 02
    // oneHeart = document.querySelector('.heart');   // вар 01
    oneHeart = wrapper.querySelector('.heart');       // вар 02

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
// hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue'; // 9:32 min in video 029 lesson
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я'); // используется редко

div.classList.add('black');

// document.body.append(div); // добавить div в конец body

wrapper.append(div);               //нов. метод (вставить в конец родителя)
// wrapper.appendChild(div);         //устар. метод (вставить в конец родителя)
// wrapper.prepend(div);            //нов. метод (вставить в начало родителя)

// hearts[0].before(div);           //нов. метод (до)
// hearts[0].after(div);            //нов. метод (после)

// wrapper.insertBefore(div, hearts[1]);     //устар. метод (до-после)

// circles[0].remove();                //нов. метод (удалить элемент)
// wrapper.removeChild(hearts[1]);       //устар. метод (удалить элемент)

// hearts[0].replaceWith(circles[0]);           // нов. метод (заменить один элемент- другим)
// wrapper.replaceChild(circles[0], hearts[0]);    // устар. метод (заменить один элемент- другим)


div.innerHTML = "<h1>Hello World</h1>"; // вар 01 html структура
// div.textContent = "Hello"; // вар 02, только текст

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // всавить кусочек html кода перед или после определённых тегов.

