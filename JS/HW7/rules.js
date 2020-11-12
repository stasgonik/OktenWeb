// ______ 11
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте


const arrayH2 = document.getElementsByTagName("h2");
const content = document.getElementById('content');
const wrap = document.getElementById('wrap');
const ul = document.createElement('ul');

for (let i = 0; i < arrayH2.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    let anchor = "anchor" + i;
    a.href = "#" + anchor;
    a.innerText = arrayH2[i].innerText;
    arrayH2[i].setAttribute("id", anchor);
    li.appendChild(a);
    ul.appendChild(li);
}

content.appendChild(ul);
content.style.width = "25%";
wrap.style.width = "75%";
content.style.float = "left";
wrap.style.float = "left";

