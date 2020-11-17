// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let textArea = document.getElementById("target");
// textArea.innerText = localStorage.getItem("ex1");

// textArea.addEventListener("input", () => {
//     localStorage.setItem("ex1", textArea.value);
// })



// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let targetForm = document.getElementById("target");
// getForm(targetForm);

// function saveForm (tag) {
//     setForm (tag);
// }

// function setForm (tag) {
//     for (let index = 0; index < tag.length; index++) {
//         let elem = tag[index];
//         if (elem.type === "checkbox" || elem.type === "radio") {
//             if (elem.checked) {
//                 elem.value = true;
//             } else {
//                 elem.value = false;
//             }
//         }
//         localStorage.setItem(elem.id, elem.value);
//     }
// }

// function getForm (tag) {
//     for (let index = 0; index < localStorage.length; index++) {
//         if (localStorage.hasOwnProperty(tag.children[index].id)) {
//             tag.children[index].value = localStorage.getItem(tag.children[index].id);
//             if (tag.children[index].value === "true") {
//                 tag.children[index].setAttribute('checked', true);
//             }
//         }
        
//     }
// }




// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let textArea = document.getElementById("target");
// let leftBtn = document.getElementById("left");
// let rightBtn = document.getElementById("right");
// let submit = document.getElementById("save");

// submit.addEventListener("click", () => {
//     localStorage.setItem(localStorage.length + 1, textArea.value)
// })

// leftBtn.onclick = () => {
//     rightBtn.style.display = 'inline-block';
//     let index;
//     for (let key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === textArea.value) {
//                 index = key;
//             }
//         }
//     }
//     if (index === "1") {
//         leftBtn.style.display = 'none';
//         return;
//     }
//     textArea.value = localStorage.getItem(parseInt(index) - 1);
// }

// rightBtn.onclick = () => {
//     leftBtn.style.display = 'inline-block';
//     let index;
//     for (let key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === textArea.value) {
//                 index = key;
//             }
//         }
//     }
//     if (index === localStorage.length.toString()) {
//         rightBtn.style.display = 'none';
//         return;
//     }
//     textArea.value = localStorage.getItem(parseInt(index) + 1);
// }




// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта


let formTarget = document.forms.target;
let tempUser = {};
const keyWord = "USERS";

formTarget.save.onclick = () => {
    let person = {};
    for (let index = 0; index < formTarget.children.length; index++) {
        let elem = formTarget.children[index];
        if (elem.name && elem.type !== 'submit') {
            person[elem.name] = elem.value;
        }
    }   
    person.id = new Date().getTime();
    saveUser(person);
}

function saveUser(user) {
    if (localStorage.hasOwnProperty(keyWord)) {
        const users = JSON.parse(localStorage.getItem(keyWord));
        // Предположим что такой user в базе уже может быть, проверка по ИД
        const find = users.find(value => value.id === user.id);
        if (find) {
            const filter = users.filter(value => value.id !== user.id);
            filter.push(user);
            localStorage.setItem(keyWord, JSON.stringify(filter));

        } else {
            users.push(user)
            localStorage.setItem(keyWord, JSON.stringify(users));
        }

    } else {
        localStorage.setItem(keyWord, JSON.stringify([user]));
    }
}


