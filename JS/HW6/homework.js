//Exercise 1
console.log("__Exercise 1");
// - создать массив с 20 числами.
let array1 = [
  0,
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  400,
  89,
  12,
  -2,
  -9,
  75,
  33,
  -21,
  100,
  4,
];

//Exercise 2
console.log("__Exercise 2");
// -- при помощи метода sort и колбека  отсортировать массив.
array1.sort((a, b) => a - b);
console.log(array1);

//Exercise 3
console.log("__Exercise 3");
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
array1.sort((a, b) => b - a);
console.log(array1);

//Exercise 4
console.log("__Exercise 4");
// -- при помощи filter получить числа кратные 3
let array1F3 = array1.filter((value) => value % 3 === 0);
console.log(array1F3);

//Exercise 5
console.log("__Exercise 5");
// -- при помощи filter получить числа кратные 10
let array1F10 = array1.filter((value) => value % 10 === 0);
console.log(array1F10);

//Exercise 6
console.log("__Exercise 6");
// -- перебрать (проитерировать) массив при помощи foreach()
array1.forEach((value) => console.log(value));

//Exercise 7
console.log("__Exercise 7");
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let mapped1 = array1.map((value) => value * 3);
console.log(mapped1);

//Exercise 8
console.log("__Exercise 8");
// - создать массив со словами на 15-20 элементов.
let arrayW = [
  "Margo",
  "Ann",
  "Hi",
  "Drakaris",
  "Bro",
  "Kirishima",
  "Mina",
  "Quake",
  "Doom",
  "Ingram",
  "Galil",
  "Colt",
  "Lee-Enfield",
  "Heckler",
  "Glock",
  "Arm",
];

//Exercise 9
console.log("__Exercise 9");
// -- отсортировать его по алфавиту в восходящем порядке.
arrayW.sort();
console.log(arrayW);

//Exercise 10
console.log("__Exercise 10");
// -- отсортировать его по алфавиту  в нисходящем порядке.
arrayW.reverse();
console.log(arrayW);

//Exercise 11
console.log("__Exercise 11");
// -- отфильтровать слова длиной менее 4х символов
let arrayWFilter = arrayW.filter((value) => value.length < 4);
console.log(arrayWFilter);

//Exercise 12
console.log("__Exercise 12");
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let mapped2 = arrayW.map((value) => value + "!");
console.log(mapped2);

// Дан масив :
let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];

//Exercise 13
console.log("__Exercise 13");
// - відсортувати його за  віком (зростання , а потім окремо спадання)
users.sort((a, b) => a.age - b.age);
users.forEach((value) => console.log(value));
console.log("_________________");

users.sort((a, b) => b.age - a.age);
users.forEach((value) => console.log(value));
console.log("_________________");

//Exercise 14
console.log("__Exercise 14");
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
users.sort((a, b) => a.name.length - b.name.length);
users.forEach((value) => console.log(value));
console.log("_________________");

users.sort((a, b) => b.name.length - a.name.length);
users.forEach((value) => console.log(value));
console.log("_________________");


//Exercise 15
console.log("__Exercise 15");
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//  та зберегти це в новий масив (первинний масив залишиться без змін)
users.map((value, index) => value["id"] = index);
users.forEach((value) => console.log(value));



//Exercise 16
console.log("__Exercise 16");
// - відсортувати його за індентифікатором

users.sort((a, b) => a.id - b.id);
users.forEach((value) => console.log(value));
console.log("_________________");

users.sort((a, b) => b.id - a.id);
users.forEach((value) => console.log(value));
console.log("_________________");


//Exercise 17
console.log("__Exercise 17");
// -- написать функцию калькулятора с 2мя числами и колбеком

function plus() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
function minus() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result -= arguments[i];
    }
    return result;
}
function multi() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result *= arguments[i];
    }
    return result;
}
function divide() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result /= arguments[i];
    }
    return result;
}

function calc2 (a, b, action) {
    return action(a, b);
}

console.log(calc2(2, 2, plus));
console.log(calc2(2, 2, minus));
console.log(calc2(2, 2, multi));
console.log(calc2(2, 2, divide));




//Exercise 18
console.log("__Exercise 18");
// -- написать функцию калькулятора с 3мя числами и колбеком

function calc3 (a, b, c, action) {
    return action(a, b, c);
}

console.log(calc3(10, 2, 2, plus));
console.log(calc3(10, 2, 2, minus));
console.log(calc3(10, 2, 2, multi));
console.log(calc3(10, 2, 2, divide));