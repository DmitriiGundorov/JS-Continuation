"use strict";

//  Задание №2
// 1. Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/

// const linkDev = document.querySelector(".link");
// linkDev.textContent = "link text js";
// linkDev.href = "https://developer.mozilla.org/ru/";

// // 2. Дан тег <img class="photo" src="" alt="">
// // Вам необходимо с помощью js поменять значение src на любое изображение из интернета
// const linkImg = document.querySelector(".photo");
// linkImg.src =  'http://img-fotki.yandex.ru/get/6745/37009792.258/0_b2937_f8e245d8_orig';

//  Задание №3
// 1. Дан тег <div class="content"></div>
// 2. Создайте новый элемент p
// 3. Добавьте в него текст “Новый текстовый элемент”
// 4. Добавьте созданный элемент внутри <div class="content"></div>
// 5. Удалите добавленный узел

// const divContent = document.querySelector(".content");
// const newP = document.createElement("p");

// newP.textContent = "Новый текстовый элемент";

// divContent.appendChild(newP);

// // const removeP = document.querySelector(".content p");
// // console.log(removeP);
// // removeP.remove();
// newP.remove();

// Задание №4
// 1. Создать элемент button, добавить в блок <div class="content"></div>
// 2. При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

// const divContent = document.querySelector(".content");
// const button = document.createElement("button");
// button.textContent = "Кнопка";
// divContent.append(button);
// let count = 0;
// button.onclick = function () {
// //   count++;
//   console.log(++count);
// };

// Задание №5
// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const divContent = document.querySelector(".content");
const button = document.createElement("button");
button.textContent = "Отправить";
divContent.append(button);
button.onclick = () => {
  button.textContent = "Текст отправлен";
}