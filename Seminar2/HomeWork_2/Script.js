"use strict";

/* <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Homework 5</title>
</head>

<body>

Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не стирать, код с решением задачи пишем под комментарием.

```
<p class="dropdown">Привет :)</p>
<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Dropdown button
</button>
<div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
</div>
</div>

<script>
    "use strict";
[]()
[]()*/
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown",
// необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// []()
const drItem = document.querySelectorAll(".dropdown-item");
drItem.forEach((element) => {
  element.classList.add("super-dropdown");
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует
// у этого элемента, либо добавить, если такого класса у элемента не было.
// []()
const btnEl = document.querySelector(".btn");
const btnSec = document.querySelector(".btn-secondary");
if (btnSec !== null) {
  btnEl.classList.remove("btn-secondary");
} else {
  btnEl.classList.add("btn-secondary");
}
console.log(btnEl);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// []()
const menuEl = document.querySelector(".menu");
menuEl.classList.remove("dropdown-menu");
console.log(menuEl);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую
// разметку:
// `<a href="#">link</a>`
// []()
const d1 = document.querySelector("div.dropdown");
console.log(d1);
d1.insertAdjacentHTML("afterend", '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// []()
const dropMB = document.querySelector("#dropdownMenuButton");
console.log(dropMB);
dropMB.setAttribute("id", "superDropdown");

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут
// "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// []()
const dataDD = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
dataDD.dataset.dd = "3";

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const dDT = document.querySelector('.dropdown-toggle');
dDT.removeAttribute('type');