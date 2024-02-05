"use strict";

// Задание №1
// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

const buttonEl = document.querySelector('.button');

// document.addEventListener('DOMContentLoaded', function (e) {
// console.log('страница загрузилась');
// });


window.addEventListener('load', function (e) {
console.log('страница загрузилась');
});

buttonEl.onclick = () => {
console.log('событие onclick');
};

buttonEl.addEventListener('click', function(e) {
console.log('событие addEventListener');
});

buttonEl.onclick = () => {
console.log('событие onclick2');
};

buttonEl.addEventListener('click', function (e) {
console.log('событие addEventListener2');
});

// Задание №2
// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество
// нажатий на эту кнопку выводит в консоль. Создать кнопку button с текстом 5, При клике
// на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

const btnDiv = document.querySelector(".buttons");

btnDiv.addEventListener("click", function (e) {
console.log(e.target);
});

const btn4 = document.querySelector(".btn4");
let cnt = 1;
btn4.addEventListener("click", function (e) {
if (cnt === 2 || cnt === 3 || cnt === 4) {
console.log(`вы нажали ${cnt} раза`);
} else {
console.log(`вы нажали ${cnt} раз`);
}
cnt++;
});
const btn5 = document.querySelector(".btn5");
btn5.addEventListener("click", function (e) {
btn5.textContent = "Вы нажали на эту кнопку";
});

// Задание №3
// Создать кнопку, которая добавляет заголовок h1 с текстом, “Новый заголовок,
// данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст
// “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли
// должен появиться текст “Наведения на кнопку больше нет”

// 1. Создать кнопку, которая добавляет заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
const h1ButtonEl = document.createElement('button')
h1ButtonEl.textContent = 'Add title';
fiveButtonEl.parentElement.appendChild(h1ButtonEl);

const h1El = document.createElement('h1');
h1El.textContent = 'Новый заголовок';

h1ButtonEl.addEventListener('click', function (e) {
h1ButtonEl.parentElement.appendChild(h1El);
});

// 2. Создать вторую кнопку, которая будет удалять созданный заголовок h1
const h1DelButtonEl = document.createElement('button')
h1DelButtonEl.textContent = 'Delete title';
fiveButtonEl.parentElement.appendChild(h1DelButtonEl);

h1DelButtonEl.addEventListener('click', function (e) {
if (h1DelButtonEl.parentElement.contains(h1El)) {
h1DelButtonEl.parentElement.removeChild(h1El);
}
});

// 3. Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”
const hoverButtonEl = document.createElement('button')
hoverButtonEl.textContent = 'Hover button';
fiveButtonEl.parentElement.appendChild(hoverButtonEl);

hoverButtonEl.addEventListener('mouseover', function (e) {
console.log('вы навели на данную кнопку');
});

hoverButtonEl.addEventListener('mouseleave', function (e) {
console.log('Наведения на кнопку больше нет');
});

// Задание №4
// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”
const listEls = document.querySelector('.list');
const buttonEl10 = document.querySelector('.button10');
const buttonEl11 = document.querySelector('.button11');
const buttonEl12 = document.querySelector('.button12');

buttonEl10.addEventListener('click', function (e) {
const newLi = document.createElement('li');
newLi.textContent ='новый элемент списка';
listEls.append(newLi);
newLi.classList.add('item');
});

buttonEl11.addEventListener('click', function (e) {
const listEl = document.querySelector('.item');
listEl.remove();
})

buttonEl12.addEventListener('click', function (e) {
buttonEl12.classList.add('click');
})
