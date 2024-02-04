"use strict";

// Задание №1
// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

// const block = document.querySelector(".block");
// const button = document.createElement("button");
// const divEl = document.createElement("div");
// divEl.classList.add("item");
// divEl.textContent = "Элемент внтури";
// divEl.style.color = "blue";
// divEl.style.border = "1px solid black";
// divEl.style.backgroundColor = "#f8f8f8";
// divEl.style.padding = "16px";
// divEl.setAttribute("class", "item item_1");
// block.appendChild(divEl);

// Задание №2
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const textEl = document.querySelector(".text");
// const h2El = textEl.previousElementSibling;
// console.log(h2El);
// const contentEl = textEl.parentElement;
// console.log(contentEl);
// const imgEl = contentEl.previousElementSibling;
// console.log(imgEl);
// const elemEl = contentEl.parentElement;
// console.log(elemEl);

// Задание №3
// C помощью querySelector найти элемент h2 и вывести в консоль всех его родителей
// const h2Elem = document.querySelector('h2');
// let currentEl = h2Elem;

// while (currentEl.parentElement !== null) {
// currentEl = currentEl.parentElement;
// console.log(currentEl);
// }

// Задание №4
// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь
// нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен
// появиться заголовок h2 с текстом вы не заполнили поле ввода
// У поля ввода должна появиться рамка красного цвета
const formEl = document.querySelector(".form");
const buttonEl = document.querySelector(".btn");
const inputEl = document.querySelector(".textIn");
console.log(inputEl.textContent);

buttonEl.onclick = function () {
  if (inputEl.value === "") {
    const attantionEl = document.createElement("h2");
    attantionEl.textContent = "Вы не заполнили поле ввода!";
    formEl.appendChild(attantionEl);
    inputEl.style.borderColor = "red";
  }
};
