// Exercise 1
console.log("__Exercise 1");

// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

let dog = {
    name : "Kenny",
    age : 11,
    color : "White",
    isRandom : false,
    isGoodBoy : true
}
console.log(dog);

let human = {
    name : "Kelly",
    familyName : "Roll",
    age : 22,
    realAge : 29,
    isRandom : false
}
console.log(human);

let car = {
    name : "Mazda",
    fuelSource : "Gasoline",
    age : 2,
    model : "RX8",
    isRandom : false
}
console.log(car);

let apartment = {
    name : "Gallant",
    area : 62,
    builded : 2005,
    street : "Washington",
    isRandom : false
}
console.log(apartment);

let book = {
    name : "Harry Potter",
    author : "Rolling",
    written : 1997,
    genre : "Fantasy",
    isRandom : false
}
console.log(book);


// Exercise 2
console.log("__Exercise 2");

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

let dogArray = [];
for (let i = 0; i < 5; i++) {
    dogArray[i] = dog;
}
console.log(dogArray);

let humanArray = [];
for (let i = 0; i < 5; i++) {
    humanArray[i] = human;
}
console.log(humanArray);

let carArray = [];
for (let i = 0; i < 5; i++) {
    carArray[i] = car;
}
console.log(carArray);


// Exercise 3
console.log("__Exercise 3");

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка


let building = {
    name : "Sallivan Apartment",
    architector : {
        name : "John",
        familyName : "Cram"
    },
    builded : 2001,
    residents : ["Merose", "Grey", "Blake"],
    isRandom : false
}
console.log(building);

let driver = {
    name : "Ingram Carol",
    license : {
        status : true,
        obtained : 2005
    },
    isMarried : false,
    cars : ["Volvo Global", "Mazda MX7"],
    isRandom : false
}
console.log(driver);

let toy = {
    name : "Lego Stormworks",
    production : {
        company : "LEGO",
        year : 2019
    },
    isXXX : false,
    components : ["300 different blocks", "Exclusive storm skin"],
    isDangerous : true
}
console.log(toy);

let table = {
    name : "Loreal",
    production : {
        company : "Millenium",
        year : 2009
    },
    isXXX : false,
    materials : ["Oak", "Metallicus", "Plastic"],
    isWooden : true
}
console.log(table);

let bag = {
    name : "Kobayashi PACK!",
    production : {
        company : "Fujioshi Concern",
        year : 2020
    },
    isOtaku : true,
    materials : ["Cotton", "Metallicus", "Plastic"],
    isJoJoReference : false
}
console.log(bag);


// Exercise 4
console.log("__Exercise 4");

// Дан массив:
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// - статус Андрія
console.log(users[7].status);
// - статус Максима
console.log(users[10].status);
// - ім'я передостаннього об'єкту
console.log(users[users.length - 2].name);
// - ім'я третього об'єкта
console.log(users[2].name);
// - вік Олега
console.log(users[6].age);
// - вік Олі
console.log(users[9].age);
// - вік + ім'я 5го об'єкта
console.log(users[4].name + " " + users[4].age);
// - вік + сатус Анни
console.log(users[5].age + " " + users[5].status);









