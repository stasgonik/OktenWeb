// Exercise 1
console.log("__Exercise 1");
// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
let ex1SubArray1 = [2, 3, 543, 12, -24];
let ex1SubArray2 = ["2", "Hello", "true", "Grim Dawn", "COMBO BREAKER!"];
let ex1SubArray3 = [2, 3, "DIABLO", true, false];
let ex1Array = [ex1SubArray1, ex1SubArray2, ex1SubArray3];
for (let i = 0; i < ex1Array.length; i++) {
  console.log(ex1Array[i]);
}

// Exercise 2
console.log("__Exercise 2");
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let ex2Array = [];
ex2Array[2] = -59;
ex2Array[5] = 543;
ex2Array[345] = "54";
ex2Array[29] = "Grom";
ex2Array[78] = true;
console.log(ex2Array);

// Exercise 3
console.log("__Exercise 3");
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
  document.write("<div>BLA div " + i + " BLA</div>");
}

// Exercise 4
console.log("__Exercise 4");
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let ex4Index = 0;
while (ex4Index < 20) {
  document.write("<h1>BLA-BLA h1 " + ex4Index + " BLA_DA-BLA</h1>");
  ex4Index++;
}

// Exercise 5
console.log("__Exercise 5");
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let ex5Array = [5, 35, 23, 865, 32, 76, 12, 45, 32, 43];
for (let i = 0; i < ex5Array.length; i++) {
  console.log(ex5Array[i]);
}

// Exercise 6
console.log("__Exercise 6");
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let ex6Array = [
  "WOW",
  "POM",
  "BOM",
  "WOM",
  "NET",
  "CROM",
  "DA",
  "COM",
  "ROM",
  "DOM",
];
for (let i = 0; i < ex6Array.length; i++) {
  console.log(ex6Array[i]);
}

// Exercise 7
console.log("__Exercise 7");
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let ex7Array = ["WOW", true, -13, "WOM", 32, "32", "DA", "COM", "ROM", false];
for (let i = 0; i < ex7Array.length; i++) {
  console.log(ex7Array[i]);
}

// Exercise 8
console.log("__Exercise 8");
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let ex8Array = ["WOW", true, -13, "WOM", 32, "32", "DA", "COM", "ROM", false];
for (let i = 0; i < ex8Array.length; i++) {
  if (typeof ex8Array[i] === "boolean") {
    console.log(ex8Array[i]);
  }
}

// Exercise 9
console.log("__Exercise 9");
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let ex9Array = ["WOW", true, -13, "WOM", 32, "32", "DA", "COM", "ROM", false];
for (let i = 0; i < ex9Array.length; i++) {
  if (typeof ex9Array[i] === "number") {
    console.log(ex9Array[i]);
  }
}

// Exercise 10
console.log("__Exercise 10");
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let ex10Array = ["WOW", true, -13, "WOM", 32, "32", "DA", "COM", "ROM", false];
for (let i = 0; i < ex10Array.length; i++) {
  if (typeof ex10Array[i] === "string") {
    console.log(ex10Array[i]);
  }
}

// Exercise 11
console.log("__Exercise 11");
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let ex11Array = [];
ex11Array[2] = 45;
ex11Array[3] = false;
ex11Array[5] = "RANDOM";
ex11Array[9] = "45";
ex11Array[15] = -43;
ex11Array[28] = "BREAK";
ex11Array[35] = "DREAM";
ex11Array[46] = true;
ex11Array[77] = 1;
ex11Array[98] = 234;
for (let i = 0; i < ex11Array.length; i++) {
  console.log(ex11Array[i]);
  // Если не нравится появление undefined в выводе

  //if (typeof(ex11Array[i]) !== "undefined") {
  //    console.log(ex11Array[i]);
  //}
}

// Exercise 12
console.log("__Exercise 12");
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
  console.log(i);
  document.write(i);
}
document.write("<br>");

// Exercise 13
console.log("__Exercise 13");
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
  console.log(i);
  document.write(i);
}
document.write("<br>");

// Exercise 14
console.log("__Exercise 14");
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 200; i += 2) {
  console.log(i);
  document.write(i);
}
document.write("<br>");

// Exercise 15
console.log("__Exercise 15");
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
    document.write(i);
  }
}
document.write("<br>");

// Exercise 16
console.log("__Exercise 16");
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write  ????? ПОВТОР ПОПЕРЕДНЬОГО ЗАВДАННЯ?

// Exercise 17
console.log("__Exercise 17");
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
    document.write(i);
  }
}
document.write("<br>");

// Exercise 18
console.log("__Exercise 18");
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
let time = 0;
for (let min = 0; min < 60; min++) {
  for (let sec = 0; sec < 60; sec++) {
    console.log(min + ":" + sec);
    time++;
    if (time >= 121) {
      break;
    }
  }
  if (time >= 121) {
    break;
  }
}

// Exercise 19
console.log("__Exercise 19");
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
time = 0;
for (let hour = 0; hour < 24; hour++) {
  for (min = 0; min < 60; min++) {
    for (sec = 0; sec < 60; sec++) {
      time++;
      if (time >= 8401) {
        break;
      }
    }
    console.log(hour + ":" + min);
    if (time >= 8401) {
      break;
    }
  }
  if (time >= 8401) {
    break;
  }
}


// Exercise 20
console.log("__Exercise 20");
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let ex20Array = ['a', 'b', 'c'];
let ex20string = ""
for (let i = 0; i < ex20Array.length; i++) {
    ex20string += ex20Array[i];
}
console.log(ex20string);


// Exercise 21
console.log("__Exercise 21");
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let ex21Array = ['a', 'b', 'c'];
let ex21string = ""
let ex21Index = 0;
while (ex21Index < ex21Array.length) {
    ex21string += ex21Array[ex21Index];
    ex21Index++;
}
console.log(ex21string);


// Exercise 22
console.log("__Exercise 22");
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let ex22Array = ['a', 'b', 'c'];
let ex22string = ""
for (let char of ex22Array) {
    ex22string += char;
}
console.log(ex22string);


// Exercise 23
console.log("__Exercise 23");
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.  ????? ПОВТОР ПОПЕРЕДНЬОГО ЗАВДАННЯ?
