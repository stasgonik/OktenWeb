// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let string = "Hello World"
async function print(string) {
    let div = document.createElement("div");
    document.body.appendChild(div);
    for (const letter of string) {
        let random = Math.floor(Math.random()*10 + 1)*100;
        let promise = new Promise((resolve) => {
            setTimeout(() => {
                if (letter == " ") {
                    resolve("&nbsp;");
                }
                resolve(letter);
            }, random)
        })
        let result = await promise;
        div.innerHTML += result;
    }
}
print(string);