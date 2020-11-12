// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

function move(targElement) {
    let buttonBlock = document.querySelector("#btns");
    buttonBlock.innerHTML = "";
    let back =document.createElement("button");
    back.innerText = "Back";
    let forward = document.createElement("button");
    forward.innerText = "Forward";

    back.addEventListener("click", () => {
        if (targElement.lastElementChild) {
            console.log(targElement.lastElementChild);
            move(targElement.lastElementChild);
            return;
        }
        if (targElement.previousElementSibling) {
            console.log(targElement.previousElementSibling);
            move(targElement.previousElementSibling);
            return;
        }
        if (targElement.parentElement.previousElementSibling) {
            console.log(targElement.parentElement.previousElementSibling);
            move(targElement.parentElement.previousElementSibling);
            return;
        }
        console.log(targElement.parentElement);
        move(targElement.parentElement);
    })

    forward.addEventListener("click", () => {
        if (targElement.firstElementChild) {
            console.log(targElement.firstElementChild);
            move(targElement.firstElementChild);
            return;
        }
        if (targElement.nextElementSibling) {
            console.log(targElement.nextElementSibling);
            move(targElement.nextElementSibling);
            return;
        }
        if (targElement.parentElement.nextElementSibling) {
            console.log(targElement.parentElement.nextElementSibling);
            move(targElement.parentElement.nextElementSibling);
            return;
        }
        console.log(targElement.parentElement);
        move(targElement.parentElement);
    })

    buttonBlock.appendChild(back);
    buttonBlock.appendChild(forward);

}
let start = document.querySelector("#target");
move(start);