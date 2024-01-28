"use strict";

/* Обязательное задание.

Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не
стирать, код с решением задачи пишем под комментарием.

```
<a href="#" class="card-link">Card link</a>
<a href="#" class="card-link">Another link</a>

<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title" data-number="100">Card title</h5>
<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
<p class="card-text" data-number="50">
Some quick example text to build on the card title and make up the bulk of the card's
content.
</p>
<a href="#" id="super_link" class="card-link">Card link</a>
<a href="#" class="card-link" data-number="50">Another link</a>
</div>
</div>

<script>*/


// []()
// []()
//  1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()
const superLink = document.getElementById("super_link");
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()
const cardLink = document.querySelectorAll('.card-link');
cardLink.textContent = "ссылка";
console.log(cardLink);

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()
const cardBody = document.querySelector('.card-body').querySelectorAll('.card-link');
console.log(cardBody);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()
const dataNumber = document.querySelectorAll('[data-number="50"]');
console.log(dataNumber[0]);

// 5. Выведите содержимое тега title в консоль.
// []()
const title = document.querySelector('.title');
console.log(document.title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()
const cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentNode);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const cardContent = document.querySelector(".card");
const headingElement = document.createElement('h1');
headingElement.textContent = 'Привет';
cardContent.prepend(headingElement);
console.log(cardContent);

// 8. Удалите тег h6 на странице.
const removeh6 = document.querySelector('h6');
console.log(removeh6);
removeh6.remove();
