console.log ("______")
// Exercise 1
console.log("__Exercise 1")

// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

function tagFunc (titleOfTag, action, attrs) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;

}
function attrFunc (titleOfAttr, actionOfAttr) {
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr;
}

//a
let a1At = new attrFunc( "accesskey", "Активация ссылки с помощью комбинации клавиш.");
let a2At = new attrFunc( "name", "Устанавливает имя якоря внутри документа.");
let aAttrs = [a1At, a2At];
let aTag = new tagFunc( "a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.", aAttrs);
console.log(aTag);

//div
let div1At = new attrFunc( "align", "Задает выравнивание содержимого тега <div>.");
let div2At = new attrFunc( "title", "Добавляет всплывающую подсказку к содержимому.");
let divAttrs = [div1At, div2At];
let divTag = new tagFunc( "div", "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.", divAttrs);
console.log(divTag);

//h1
let h11At = new attrFunc( "align", "Определяет выравнивание заголовка.");
let h12At = new attrFunc( "spellcheck", "Указывает браузеру проверять или нет правописание и грамматику в тексте.");
let h1Attrs = [h11At, h12At];
let h1Tag = new tagFunc( "h1", "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня.", h1Attrs);
console.log(h1Tag);

//span
let span1At = new attrFunc( "contextmenu", "Устанавливает контекстное меню для элемента.");
let span2At = new attrFunc( "lang", "Браузер использует значение параметра для правильного отображения некоторых национальных символов.");
let spanAttrs = [span1At, span2At];
let spanTag = new tagFunc( "span", "Тег <span> предназначен для определения строчных элементов документа.", spanAttrs);
console.log(spanTag);

//input
let input1At = new attrFunc( "accept", "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.");
let input2At = new attrFunc( "autocomplete", "Включает или отключает автозаполнение.");
let inputAttrs = [input1At, input2At];
let inputTag = new tagFunc( "input", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.", inputAttrs);
console.log(inputTag);

//form
let form1At = new attrFunc( "accept-charset", "Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.");
let form2At = new attrFunc( "enctype", "Способ кодирования данных формы.");
let formAttrs = [form1At, form2At];
let formTag = new tagFunc( "form", "Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.", formAttrs);
console.log(formTag);

//option
let option1At = new attrFunc( "disabled", "Заблокировать для доступа элемент списка.");
let option2At = new attrFunc( "selected", "Заранее устанавливает определенный пункт списка выделенным.");
let optionAttrs = [option1At, option2At];
let optionTag = new tagFunc( "option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.", optionAttrs);
console.log(optionTag);

//select
let select1At = new attrFunc( "form", "Связывает список с формой.");
let select2At = new attrFunc( "multiple", "Позволяет одновременно выбирать сразу несколько элементов списка.");
let selectAttrs = [select1At, select2At];
let selectTag = new tagFunc( "select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.", selectAttrs);
console.log(selectTag);


console.log ("______")
// Exercise 2
console.log("__Exercise 2")

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================  

class tagClass {
    constructor (titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }    
}
class attrClass {
    constructor (titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}

//a
let a1AtC = new attrClass( "accesskey", "Активация ссылки с помощью комбинации клавиш.");
let a2AtC = new attrClass( "name", "Устанавливает имя якоря внутри документа.");
let aAttrsC = [a1AtC, a2AtC];
let aTagC = new tagClass( "a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.", aAttrsC);
console.log(aTagC);

//div
let div1AtC = new attrClass( "align", "Задает выравнивание содержимого тега <div>.");
let div2AtC = new attrClass( "title", "Добавляет всплывающую подсказку к содержимому.");
let divAttrsC = [div1AtC, div2AtC];
let divTagC = new tagClass( "div", "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.", divAttrsC);
console.log(divTagC);

//h1
let h11AtC = new attrClass( "align", "Определяет выравнивание заголовка.");
let h12AtC = new attrClass( "spellcheck", "Указывает браузеру проверять или нет правописание и грамматику в тексте.");
let h1AttrsC = [h11AtC, h12AtC];
let h1TagC = new tagClass( "h1", "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня.", h1AttrsC);
console.log(h1TagC);

//span
let span1AtC = new attrClass( "contextmenu", "Устанавливает контекстное меню для элемента.");
let span2AtC = new attrClass( "lang", "Браузер использует значение параметра для правильного отображения некоторых национальных символов.");
let spanAttrsC = [span1AtC, span2AtC];
let spanTagC = new tagClass( "span", "Тег <span> предназначен для определения строчных элементов документа.", spanAttrsC);
console.log(spanTagC);

//input
let input1AtC = new attrClass( "accept", "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.");
let input2AtC = new attrClass( "autocomplete", "Включает или отключает автозаполнение.");
let inputAttrsC = [input1AtC, input2AtC];
let inputTagC = new tagClass( "input", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.", inputAttrsC);
console.log(inputTagC);

//form
let form1AtC = new attrClass( "accept-charset", "Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.");
let form2AtC = new attrClass( "enctype", "Способ кодирования данных формы.");
let formAttrsC = [form1AtC, form2AtC];
let formTagC = new tagClass( "form", "Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.", formAttrsC);
console.log(formTagC);

//option
let option1AtC = new attrClass( "disabled", "Заблокировать для доступа элемент списка.");
let option2AtC = new attrClass( "selected", "Заранее устанавливает определенный пункт списка выделенным.");
let optionAttrsC = [option1AtC, option2AtC];
let optionTagC = new tagClass( "option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.", optionAttrsC);
console.log(optionTagC);

//select
let select1AtC = new attrClass( "form", "Связывает список с формой.");
let select2AtC = new attrClass( "multiple", "Позволяет одновременно выбирать сразу несколько элементов списка.");
let selectAttrsC = [select1AtC, select2AtC];
let selectTagC = new tagClass( "select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.", selectAttrsC);
console.log(selectTagC);


console.log ("______")
// Exercise 3
console.log("__Exercise 3")

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

let objCar = {
    model : "Mazda RX9",
    creator : "Mazda Company",
    year : 1990,
    maxSpeed : 150,
    engineV : 400,
    driver : null,
    drive : function () {
        console.log(`Їдемо зі швидкістю ${objCar.maxSpeed} на годину`)
    },
    info : function () {
        console.log(`Model - ${objCar.model}`);
        console.log(`Creator - ${objCar.creator}`);
        console.log(`Year of creation - ${objCar.year}`);
        console.log(`Max speed of car - ${objCar.maxSpeed}`);
        console.log(`Volume of engine - ${objCar.engineV}`);
        if (objCar.driver !== null) {
            console.log(`Driver :`);
            for (let field in this.driver) {
                console.log(`${field} - ${this.driver[field]}`);
            }
        }
    },
    increaseMaxSpeed : function (newSpeed) {
        objCar.maxSpeed += newSpeed;
    },
    changeYear : function (newValue) {
        objCar.year = newValue;
    },
    addDriver : function (driver) {
        if (typeof(driver) === "object") {
            objCar.driver = driver;
        }
    }
}
objCar.info();
objCar.drive();
objCar.increaseMaxSpeed(10);
objCar.changeYear(1991);
objCar.addDriver({Name: "Olena"});
objCar.info();



console.log ("______")
// Exercise 4
console.log("__Exercise 4")

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

function carFunc (model, creator, year, maxSpeed, engineVolume) {
    this.model = model;
    this.creator = creator;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.driver = null;
    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function() {
        console.log(`Model - ${this.model}`);
        console.log(`Creator - ${this.creator}`);
        console.log(`Year of creation - ${this.year}`);
        console.log(`Max speed of car - ${this.maxSpeed}`);
        console.log(`Volume of engine - ${this.engineVolume}`);
        if (this.driver !== null) {
            console.log(`Driver :`);
            for (let field in this.driver) {
                console.log(`${field} - ${this.driver[field]}`);
            }
        }
    }
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        if (typeof(driver) === "object") {
            this.driver = driver;
        }
    }
}
let carByFunc = new carFunc("Opel 9", "Ople Concern", 2000, 200, 400);
carByFunc.info();
carByFunc.drive();
carByFunc.increaseMaxSpeed(20);
carByFunc.changeYear(2001);
carByFunc.addDriver({Name : "Kirill"});
carByFunc.info();



console.log ("______")
// Exercise 5
console.log("__Exercise 5")

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

class carClass {
    constuctor (model, creator, year, maxSpeed, engineVolume){
        this.model = model;
        this.creator = creator;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = null;
    }
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info() {
        console.log(`Model - ${this.model}`);
        console.log(`Creator - ${this.creator}`);
        console.log(`Year of creation - ${this.year}`);
        console.log(`Max speed of car - ${this.maxSpeed}`);
        console.log(`Volume of engine - ${this.engineVolume}`);
        if (this.driver !== null) {
            console.log(`Driver :`);
            for (let field in this.driver) {
                console.log(`${field} - ${this.driver[field]}`);
            }
        }
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        if (typeof(driver) === "object") {
            this.driver = driver;
        }
    }
}
let carByClass = new carFunc("Mersedes 2001", "Mersedes Benz Concern", 2001, 240, 600);
carByClass.info();
carByClass.drive();
carByClass.increaseMaxSpeed(20);
carByClass.changeYear(2002);
carByClass.addDriver({Name : "Anton"});
carByClass.info();

console.log ("______")
// Exercise 6
console.log("__Exercise 6")

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

class zolushkaClass {
    constructor (name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot;
    }
}

let zClassArray = [new zolushkaClass("Riana", 24, 32), new zolushkaClass("Lora", 21, 34), new zolushkaClass("Ingrad", 24, 33),
new zolushkaClass("Joya", 7, 41), new zolushkaClass("Gloria", 27, 40), new zolushkaClass("Ulia", 21, 29), new zolushkaClass("Karina", 15, 27),
new zolushkaClass("Reya", 19, 26), new zolushkaClass("Poya", 30, 28), new zolushkaClass("Leya", 22, 35)];
console.log(zClassArray);

class princeClass {
    constructor (name, age, boot) {
        this.name = name;
        this.age = age;
        this.boot = boot;
    }
}

let princeByClass = new princeClass("Richard", 19, 26);

for (let zolushka of zClassArray) {
    if (zolushka.foot === princeByClass.boot) {
        console.log(`Maybe my princess is ${zolushka.name}!`);
    }
}

console.log ("______")
// Exercise 7
console.log("__Exercise 7")

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function zolushkaFunc (name, age, foot){
    this.name = name;
    this.age = age;
    this.foot = foot;

    
}

let zFuncArray = [new zolushkaFunc("Riana", 24, 32), new zolushkaFunc("Lora", 21, 34), new zolushkaFunc("Ingrad", 24, 33),
new zolushkaFunc("Joya", 7, 41), new zolushkaFunc("Gloria", 27, 40), new zolushkaFunc("Ulia", 21, 29), new zolushkaFunc("Karina", 15, 27),
new zolushkaFunc("Reya", 19, 26), new zolushkaFunc("Poya", 30, 28), new zolushkaFunc("Leya", 22, 35)];
console.log(zFuncArray);

function princeFunc(name, age, boot){
    this.name = name;
    this.age = age;
    this.boot = boot;
    this.findZolushka = function(zolushkaArray) {
        for (let zolushka of zolushkaArray) {
            if (zolushka.foot === princeByClass.boot) {
                console.log(`Maybe my princess is ${zolushka.name}!`);
            }
        }
    }
}

let princeByFunc = new princeFunc("Richard", 19, 26);
princeByFunc.findZolushka(zFuncArray);

