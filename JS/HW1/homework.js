// Exercise 1
console.log("__Exercise 1");
// В подальшому alert закоментовано для прискорення перегляду результату в браузері

let variableA = "hello";
console.log(variableA);
// alert(variableA);
document.write(variableA);

let variableB = "owu";
console.log(variableB);
// alert(variableB);
document.write(variableB);

let variableC = "com";
console.log(variableC);
// alert(variableC);
document.write(variableC);

let variableD = "ua";
console.log(variableD);
// alert(variableD);
document.write(variableD);

let variableE = 1;
console.log(variableE);
// alert(variableE);
document.write(variableE);

let variableF = 10;
console.log(variableF);
// alert(variableF);
document.write(variableF);

let variableG = -999;
console.log(variableG);
// alert(variableG);
document.write(variableG);

let variableH = 123;
console.log(variableH);
// alert(variableH);
document.write(variableH);

let variableI = 3.14;
console.log(variableI);
// alert(variableI);
document.write(variableI);

let variableK = 2.7;
console.log(variableK);
// alert(variableK);
document.write(variableK);

let variableL = 16;
console.log(variableL);
// alert(variableL);
document.write(variableL);

let variableM = true;
console.log(variableM);
// alert(variableM);
document.write(variableM);

let variableN = false;
console.log(variableN);
// alert(variableN);
document.write(variableN);

document.write("<br>");




// Exercise 2
console.log("__Exercise 2");

variableA = "Hi!";
console.log(variableA);
// alert(variableA);
document.write(variableA);

variableB = "epam";
console.log(variableB);
// alert(variableB);
document.write(variableB);

variableC = "net";
console.log(variableC);
// alert(variableC);
document.write(variableC);

variableD = "ru";
console.log(variableD);
// alert(variableD);
document.write(variableD);

variableE = 2;
console.log(variableE);
// alert(variableE);
document.write(variableE);

variableF = 40;
console.log(variableF);
// alert(variableF);
document.write(variableF);

variableG = -457;
console.log(variableG);
// alert(variableG);
document.write(variableG);

variableH = 321;
console.log(variableH);
// alert(variableH);
document.write(variableH);

variableI = 2.71;
console.log(variableI);
// alert(variableI);
document.write(variableI);

variableK = 1.2;
console.log(variableK);
// alert(variableK);
document.write(variableK);

variableL = 64;
console.log(variableL);
// alert(variableL);
document.write(variableL);

variableM = 'false';
console.log(variableM);
// alert(variableM);
document.write(variableM);

variableN = 'true';
console.log(variableN);
// alert(variableN);
document.write(variableN);

document.write("<br>");




// Exercise 3
console.log("__Exercise 3");

const constNumber1 = 3.14159
console.log(constNumber1);
// alert(constNumber1);
document.write(constNumber1);

const constNumber2 = 1.61803;
console.log(constNumber2);
// alert(constNumber2);
document.write(constNumber2);

const constNumber3 = 2.71828;
console.log(constNumber3);
// alert(constNumber3);
document.write(constNumber3);

document.write("<br>");




// Exercise 4 + 5 + 6
console.log("__Exercise 4 + 5 + 6");

let nameFirst = prompt("__Exercise 4 + 5: Please, set your first name", "John");
let nameSecond = prompt("__Exercise 4 + 5: Please, set your second name", "Richard");
let nameFamily = prompt("__Exercise 4 + 5: Please, set your family name", "Doe");

console.log(nameFirst);
// alert(nameFirst);
document.write(nameFirst);

console.log(nameSecond);
// alert(nameSecond);
document.write(nameSecond);

console.log(nameFamily);
// alert(nameFamily);
document.write(nameFamily);

let person = nameFirst + " " + nameSecond + " " + nameFamily;
console.log("Person: " + person);

document.write("<br>");



// Exercise 7
console.log("__Exercise 7");

let ex7prompt1 = +prompt("__Exercise 7: Please, set first number", 12);
let ex7prompt2 = +prompt("__Exercise 7: Please, set second number", 34);
let ex7prompt3 = +prompt("__Exercise 7: Please, set third number", 66);
console.log(ex7prompt1);
console.log(ex7prompt2);
console.log(ex7prompt3);

document.write("<br>");




// Exercise 8
console.log("__Exercise 8");

let ex8prompt1 = parseInt(prompt("__Exercise 8: Please, set first number", 12));
let ex8prompt2 = parseInt(prompt("__Exercise 8: Please, set second number", 34)); 
let ex8prompt3 = parseInt(prompt("__Exercise 8: Please, set third number", 66));
let ex8prompt4 = parseInt(prompt("__Exercise 8: Please, set fourth number", 24));
let ex8Result = ex8prompt1 + ex8prompt2 + ex8prompt3 + ex8prompt4;
console.log(ex8Result);



// Exercise 9
console.log("__Exercise 9");

let ex9prompt1 = parseFloat(prompt("__Exercise 9: Please, set first float", 12.34));
let ex9prompt2 = parseFloat(prompt("__Exercise 9: Please, set second float", 34.24)); 
let ex9prompt3 = parseFloat(prompt("__Exercise 9: Please, set third float", 66.81));
let ex9Result = ex9prompt1 + ex9prompt2 + ex9prompt3;
console.log(ex9Result);



// Exercise 10
console.log("__Exercise 10");

let ex10prompt1 = Math.round(parseFloat(prompt("__Exercise 10: Please, set first float", 22.546)));
let ex10prompt2 = Math.round(parseFloat(prompt("__Exercise 10: Please, set second float", 23.32))); 
let ex10prompt3 = Math.round(parseFloat(prompt("__Exercise 10: Please, set third float", 77.81)));
let ex10Result = ex10prompt1 + ex10prompt2 + ex10prompt3;
console.log(ex10Result);



// Exercise 11
console.log("__Exercise 11");

let ex11prompt1 = parseInt(prompt("__Exercise 11: Please, set first number", 5)); 
let ex11prompt2 = parseInt(prompt("__Exercise 11: Please, set second number", 3));
let ex11Result = Math.pow(ex11prompt1, ex11prompt2);
console.log(ex11Result);




// Exercise 12
console.log("__Exercise 12");

let a = 100; let b = '100'; let c = true; let d = undefined;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));



// Exercise 13
console.log("__Exercise 13");

let ex13var1 = 5 < 6;
console.log(ex13var1);
let ex13var2 = 5 > 6;
console.log(ex13var2);
let ex13var3 = 5 == 6;
console.log(ex13var3);
let ex13var4 = 5 === 6;
console.log(ex13var4);
let ex13var5 = 10 == 10;
console.log(ex13var5);
let ex13var6 = 10 === 10;
console.log(ex13var6);
let ex13var7 = 10 != 10;
console.log(ex13var7);
let ex13var8 = 10 > 10;
console.log(ex13var8);
let ex13var9 = 10 < 10;
console.log(ex13var9);
let ex13var10 = 123 === '123';
console.log(ex13var10);
let ex13var11 = 123 == '123';
console.log(ex13var11);






