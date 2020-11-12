
// ______ 1
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let btn1 = document.getElementById("ex1");
// btn1.addEventListener("click", () => {
//     let target = document.getElementById("text");
//     target.style.display = "none";
// })



// ______ 2
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btn2 = document.getElementById("ex2");
// btn2.addEventListener("click", () => {
//     btn2.style.display = "none";
// })



// ______ 3
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
//  чи меньше він ніж 18, та повідомити про це користувача.

// let btn3 = document.getElementById("ex3");
// btn3.addEventListener("click", () => {
//     let inputValue = document.querySelector(".ageInput").value;
//     if (inputValue < 18) {
//         alert("GET OUT OF HERE, NOOB!");
//     }
// })



// ______ 4
// - Создайте меню, которое раскрывается/сворачивается при клике
// let menu = document.querySelector('.menuNav');
// let menuBtn = document.querySelector('.menuBtn');
// menuBtn.addEventListener('click', function(ev) {
// 	ev.preventDefault();
// 		this.classList.toggle('isActive');
// 		menu.classList.toggle('menuNavActive');		
// 	});




// ______ 5
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'ipsum', body:'lorem ipsum dolo sit ameti'},
//     {title : 'dolo', body:'lorem ipsum dolo sit ameti'},
//     {title : 'sit', body:'lorem ipsum dolo sit ameti'},
//     {title : 'ameti', body:'lorem ipsum dolo sit ameti'},
// ]

// comments.forEach((comment, index) => {
//     let div = document.createElement('div');
//     let subDiv = document.createElement('div');
//     div.innerText = `Title: ${comment.title}`;
//     subDiv.innerText = `Body: ${comment.body}`;
//     subDiv.id = `commentBody${index}`
//     div.style.backgroundColor = 'grey';
//     div.style.margin = '20px';

//     let btn = document.createElement('button');
//     btn.innerText = 'Body click';

//     btn.onclick = (ev) => {
//       let target = document.getElementById(`commentBody${index}`);
//       if (target.style.display !== "none") {
//         target.style.display = "none";
//         return;
//       }
//       target.style.display = 'block'
//     }

//     div.appendChild(subDiv);
//     div.appendChild(btn);
//     document.body.appendChild(div);
//   })



// ______ 6
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let btn = document.querySelector('#ex6btn');
// btn.addEventListener("click", () => {
//   let form1 = document.forms.ex6Form1;
//   let form2 = document.forms.ex6Form2;
//   console.log(`${form1.name.name} : ${form1.name.value}`);
//   console.log(`${form1.sName.name} : ${form1.sName.value}`);
//   console.log(`${form2.random.name} : ${form2.random.value}`);
//   console.log(`${form2.random2.name} : ${form2.random2.value}`);
// })




// ______ 7
// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
// ______ 7_2
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// function createTable(tr, td, targetParent, text) {
//   let table = document.createElement("table");
//   table.style.border = "3px solid black"
//   table.style.padding = "3px";
//   for (let i = 0; i < tr; i++) {
//     let row = document.createElement("tr");
//     for (let m = 0; m < td; m++) {
//       let cell = document.createElement("td");
//       cell.style.border = "1px solid black";
//       cell.innerText = text;
//       row.appendChild(cell);
//     }
//     table.appendChild(row);
//   }
//   targetParent.appendChild(table);
// }

// let target = document.querySelector('#target');
// let btn = document.querySelector('#ex7btn');

// btn.addEventListener('click', () => {
//   let form = document.forms.ex7Form;
//   if (ex7Form.rows.value < 1 || ex7Form.cells.value < 1) {
//     alert("Number of rows or cells must be at least 1!");
//     return;
//   }
//   createTable(Math.floor(ex7Form.rows.value), Math.floor(ex7Form.cells.value), target, ex7Form.someText.value);
// })






// ______ 8
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let target = document.querySelector('#target');
// let imageArray = 
// [
//   {
//     imgURL : "img1.jpg"
//   },
//   {
//     imgURL : "img2.jpg"
//   },
//   {
//     imgURL : "img3.jpg"
//   },
//   {
//     imgURL : "img4.jpg"
//   },
//   {
//     imgURL : "img5.jpg"
//   }
// ]

// let img = document.createElement("img");
// let btn1 = document.createElement("button");
// btn1.innerText = "Go to Left";
// let btn2 = document.createElement("button");
// btn2.innerText = "Go to Right";

// let iterator = 0;
// img.style.width = "600px";
// img.style.height = "400px";
// img.src = imageArray[iterator].imgURL;
// target.appendChild(img);
// target.appendChild(btn1);
// target.appendChild(btn2);
// btn1.addEventListener ('click', () => {
//   if (iterator - 1 < 0) {
//     iterator = imageArray.length - 1;
//   } else {
//     iterator -= 1;
//   }

//   img.src = imageArray[iterator].imgURL;
// });
// btn2.addEventListener ('click', () => {
//   if (iterator +  1 > imageArray.length - 1) {
//     iterator = 0;
//   } else {
//     iterator += 1;
//   }

//   img.src = imageArray[iterator].imgURL;
// });





// ______ 9
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

//// Так як наступне завдання є ускладненною версію цього, приступаю зразу до наступного




// ______ 10
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let arrayCensor = ['fuck', 'shit', 'jerk', 'bastard', 'asshole'];
// let btn = document.querySelector('#censorBtn');

// btn.addEventListener('click', () => {
//   let inputValue = document.querySelector("#censorInput").value;
//   for (let word of arrayCensor) {
//     if (inputValue.toLowerCase().includes(word)) {
//       alert(`WATCH YOUR LANGUAGE! Word ${word} is not good!`);
//       return;
//     }
//   }
// })




// ______ 11
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// дивись інший файл!



// ______ 12
// -- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let target = document.querySelector('#target');
// let btn = document.querySelector('#filterUser');

// btn.addEventListener('click', () => {
//   target.innerHTML = "";
//   let check1 = document.querySelector('#check1');
//   let check2 = document.querySelector('#check2');
//   let check3 = document.querySelector('#check3');
//   let fArray = usersWithAddress;
//   if (check1.checked) {
//     fArray = fArray.filter((value) => !value.status);
//   }
//   if (check2.checked) {
//     fArray = fArray.filter((value) => value.age >= 29);
//   }
//   if (check3.checked) {
//     fArray = fArray.filter((value) => value.address.city === "Kyiv");
//   }
  
//   fArray.forEach((value) => {
//     let div = document.createElement('div');
//     div.innerText = `User id: ${value.id}; Name: ${value.name}, Age: ${value.age}, Status: ${value.status}; Address: city ${value.address.city}, ${value.address.street} street, ${value.address.number}`;
//     target.appendChild(div);
//   })
// })
