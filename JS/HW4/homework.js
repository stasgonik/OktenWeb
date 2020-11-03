// Exercise 1
console.log("__Exercise 1");
// - створити функцію яка виводить масив

let ex1Array = [0, 1, 1, 2, 5, 8, 13, 21, 34, 55];
function displayArray(array) {
  for (let variable of array) {
    console.log(variable);
  }
}
displayArray(ex1Array);

// Exercise 2
console.log("__Exercise 2");
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

let ex2Array = [];
function ex2(array) {
  for (let i = 0; i < 20; i++) {
    array[i] = Math.round(Math.random() * 100);
  }
  displayArray(array);
}
ex2(ex2Array);

// Exercise 3
console.log("__Exercise 3");
// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function ex3(num1, num2, num3) {
  let sorter = [];
  sorter.push(num1, num2, num3);
  sorter.sort((a, b) => a - b);
  console.log(sorter[0]);
  return sorter[0];
}
ex3(24, -5, 10);

// Exercise 4
console.log("__Exercise 4");
// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function ex4(num1, num2, num3) {
  let sorter = [];
  sorter.push(num1, num2, num3);
  sorter.sort((a, b) => a - b);
  console.log(sorter[2]);
  return sorter[2];
}
ex4(24, 67, 10);

// Exercise 5
console.log("__Exercise 5");
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function ex5() {
  let sorter = [];
  for (let variable of arguments) {
    sorter.push(variable);
  }
  sorter.sort((a, b) => a - b);
  console.log(sorter[sorter.length - 1]);
  return sorter[sorter.length - 1];
}
ex5(24, -5, 10, 33, 24, 94, 12, -90, 5);

// Exercise 6
console.log("__Exercise 6");
// - створити функцію яка виводить масив ????? EXERCISE 1!

// Exercise 7
console.log("__Exercise 7");
// - створити функцію яка повертає найбільше число з масиву

let ex7Array = [24, -5, 10, 33, 24, 94, 12, -90, 50, 5];
function ex7(array) {
  let sorter = [];
  for (let variable of array) {
    sorter.push(variable);
  }
  sorter.sort((a, b) => a - b);
  return sorter[sorter.length - 1];
}
console.log(ex7(ex7Array));

// Exercise 8
console.log("__Exercise 8");
// - створити функцію яка повертає найменьше число з масиву

function ex8(array) {
  let sorter = [];
  for (let variable of array) {
    sorter.push(variable);
  }
  sorter.sort((a, b) => a - b);
  return sorter[0];
}
console.log(ex8(ex7Array));

// Exercise 9
console.log("__Exercise 9");
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function ex9(array) {
  let sum = 0;
  for (let variable of array) {
    sum += variable;
  }
  return sum;
}
console.log(ex9(ex7Array));

// Exercise 10
console.log("__Exercise 10");
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let ex10Array = [24, -5, 10, 33, 24, 94, 12, -90, 50, 5];
function ex10(array) {
  let sum = 0;
  let divider = 0;
  for (let variable of array) {
    sum += variable;
    divider++;
  }
  if (divider === 0) {
    console.log("ERROR! Preventing divide by Zero!");
    return;
  }
  return sum / divider;
}
console.log(ex10(ex10Array));

// Exercise 11
console.log("__Exercise 11");
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

let users = [
  {
    name: "vasya",
    age: 31,
    status: false,
    address: {
      city: "Lviv",
      country: "Ukraine",
      street: "Shevchenko",
      houseNumber: 1,
    },
  },
  {
    name: "petya",
    age: 30,
    status: true,
    address: {
      city: "New York",
      country: "USA",
      street: "East str",
      houseNumber: 21,
    },
  },
  {
    name: "kolya",
    age: 29,
    status: true,
    address: {
      city: "Budapest",
      country: "Hungary",
      street: "Kuraku",
      houseNumber: 78,
    },
  },
  {
    name: "olya",
    age: 28,
    status: false,
    address: {
      city: "Prague",
      country: "Czech",
      street: "Paster",
      houseNumber: 56,
    },
  },
  {
    name: "max",
    age: 30,
    status: true,
    address: {
      city: "Istanbul",
      country: "Turkey",
      street: "Mikar",
      houseNumber: 39,
    },
  },
  {
    name: "anya",
    age: 31,
    status: false,
    address: {
      city: "Rio",
      country: "Brasil",
      street: "Ronaldi",
      houseNumber: 5,
    },
  },
  {
    name: "oleg",
    age: 28,
    status: false,
    address: {
      city: "Montreal",
      country: "Canada",
      street: "Acusto",
      houseNumber: 90,
    },
  },
  {
    name: "andrey",
    age: 29,
    status: true,
    address: {
      city: "Quebeck",
      country: "Canada",
      street: "Binaro",
      houseNumber: 33,
    },
  },
  {
    name: "masha",
    age: 30,
    status: true,
    address: {
      city: "Moscow",
      country: "Russia",
      street: "Gogolia",
      houseNumber: 1,
    },
  },
  {
    name: "olya",
    age: 31,
    status: false,
    address: {
      city: "Portland",
      country: "USA",
      street: "Forest str",
      houseNumber: 4,
    },
  },
  {
    name: "max",
    age: 31,
    status: true,
    address: {
      city: "Cairo",
      country: "Egypt",
      street: "Seashore",
      houseNumber: 45,
    },
  },
];
let ex11Array = [
  24,
  -5,
  { random: 24 },
  33,
  24,
  94,
  12,
  -90,
  { name: "vasya", tracker: 1, random: true },
  5,
];

function ex11(array) {
  let iterator = 0;
  for (let variable of array) {
    if (typeof variable === "object") {
      iterator++;
    }
  }
  return iterator;
}
console.log(ex11(users));
console.log(ex11(ex11Array));

// Exercise 12
console.log("__Exercise 12");
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function ex12(array) {
  let iterator = 0;
  for (let variable of array) {
    if (typeof variable === "object") {
      for (let field in variable) {
        iterator++;
      }
    }
  }
  return iterator;
}
console.log(ex12(users));
console.log(ex12(ex11Array));

// Exercise 13
console.log("__Exercise 13");
// - створити функцію  яка складає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

let ex13Ar1 = [4, 2, 12, 43, 5, -6];
let ex13Ar2 = [1, -7, 3, 2, 9];
function ex13(array1, array2) {
  let newArray = [];
  if (array1.length <= array2.length) {
    for (let i = 0; i < array1.length; i++) {
      newArray[i] = array1[i] + array2[i];
    }
    for (let i = array1.length; i < array2.length; i++) {
      newArray[i] = array2[i];
    }
  } else {
    for (let i = 0; i < array2.length; i++) {
      newArray[i] = array1[i] + array2[i];
    }
    for (let i = array2.length; i < array1.length; i++) {
      newArray[i] = array1[i];
    }
  }
  return newArray;
}
console.log(ex13(ex13Ar1, ex13Ar2));

// Exercise 14
console.log("__Exercise 14");
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

let ex14Array = [0, 1, 1, 2, 5, 8, 13, 21, 34, 55];
function ex14(array, index) {
  if (index + 1 > array.length) {
    console.log("Index number is too big!");
    return;
  } else {
    let temp1 = array[index];
    let temp2 = array[index + 1];
    array[index] = temp2;
    array[index + 1] = temp1;
  }
  console.log(array);
}
ex14(ex14Array, 6);

// Створити функцію яка :

// Exercise 15
console.log("__Exercise 15");
// - Додає в боді блок з текстом "Hello owu"

function ex15() {
  let helloDiv = document.createElement("div");
  helloDiv.innerText = "Hello OWU";
  document.body.appendChild(helloDiv);
}
ex15();

// Exercise 16
console.log("__Exercise 16");
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function ex16(tag, text) {
  let addElem = document.createElement(tag);
  addElem.innerText = text;
  document.body.appendChild(addElem);
}
ex16("p", "Paragraph test!");

// Exercise 17
console.log("__Exercise 17");
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  ідентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, ідентифікатор якого ви отримали. Всі властивості авто в обному блоці

let carArray = [
  {
    name: "Mazda",
    fuelSource: "Gasoline",
    age: 2,
    model: "RX8",
    color: "Black",
  },
  {
    name: "Opel",
    fuelSource: "Gasoline",
    age: 1,
    model: "X3",
    color: "Grey",
  },
  {
    name: "Volvo",
    fuelSource: "Diesel",
    age: 24,
    model: "Alpha",
    color: "Red",
  },
  {
    name: "Volvo",
    fuelSource: "Gasoline",
    age: 12,
    model: "Beta",
    color: "Black",
  },
  {
    name: "GSI",
    fuelSource: "Gasoline",
    age: 7,
    model: "G1",
    color: "White",
  },
];
function ex17(array, ident) {
  let mainBlock = document.createElement("div");
  mainBlock.id = ident;
  for (let car of array) {
    let subBlock = document.createElement("div");
    let text = "";
    for (let field in car) {
      text += field + ": " + car[field] + "<br>";
    }
    subBlock.innerHTML = text;
    mainBlock.appendChild(subBlock);
  }
  document.body.appendChild(mainBlock);
}

//ex17 (carArray, "Bla");

// Exercise 18
console.log("__Exercise 18");
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  ідентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, ідентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

function ex18(array, ident) {
  let mainBlock = document.createElement("div");
  mainBlock.id = ident;
  for (let car of array) {
    let subBlock = document.createElement("div");
    for (let field in car) {
      let subSubBlock = document.createElement("div");
      subSubBlock.innerText = field + ": " + car[field];
      subBlock.appendChild(subSubBlock);
    }
    mainBlock.appendChild(subBlock);
  }
  document.body.appendChild(mainBlock);
}

//ex18 (carArray, "Bla");



// Exercise 19
console.log("__Exercise 19");
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
let usersWithId = [
  { id: 1, name: "vasya", age: 31, status: false },
  { id: 2, name: "petya", age: 30, status: true },
  { id: 3, name: "kolya", age: 29, status: true },
  { id: 4, name: "olya", age: 28, status: false },
];
let citiesWithId = [
  { user_id: 3, country: "USA", city: "Portland" },
  { user_id: 1, country: "Ukraine", city: "Ternopil" },
  { user_id: 2, country: "Poland", city: "Krakow" },
  { user_id: 4, country: "USA", city: "Miami" },
];

function ex19 (arrayId, arrayUsid) {
    let newArray = [];
    for (let idVar of arrayId) {
        for (let usidVar of arrayUsid) {
            if (idVar["id"] === usidVar["user_id"]) {
                for (let usidField in usidVar) {
                    idVar[usidField] = usidVar[usidField];
                }
                newArray.push(idVar);
            }
        }
    }
    return newArray;
}
console.log(ex19(usersWithId, citiesWithId));



