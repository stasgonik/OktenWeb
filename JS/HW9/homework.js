// Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

// ITS////////......      CALLBACK TIME

// function wakeUpCb(flag, cb) {
//   console.log("Trying to wake up!");
//   setTimeout(() => {
//     if (!flag) {
//       cb("No... I dont have enough sleep!", null);
//       return;
//     }
//     cb(null, "Okay, waking up!");
//   }, 1000);
// }

// function goToBathCb(isWater, cb) {
//   console.log("Lets go to bathroom!");
//   setTimeout(() => {
//     if (!isWater) {
//       cb("There is no water... F*** this world!", null);
//       return;
//     }
//     cb(null, "Ahh, cold water is bliss...");
//   }, 500);
// }

// function eatBreakfastCb(isFood, cb) {
//   console.log("Time to eat!");
//   setTimeout(() => {
//     if (!isFood) {
//       cb("There is no food... IM GONNA DIE!", null);
//       return;
//     }
//     cb(null, "Okay, stomach is ready to work!");
//   }, 1500);
// }

// function coffeeTimeCb(isCoffee, cb) {
//   console.log("Time to drink coffee!");
//   setTimeout(() => {
//     if (!isCoffee) {
//       cb("There is no coffee... Did I waked up in the HELL?", null);
//       return;
//     }
//     cb(null, "Ah, the drink of gods!");
//   }, 3000);
// }

// function coffeeTimeRound2Cb(isMoreCoffee, cb) {
//   console.log("Time to drink MORE coffee!");
//   setTimeout(() => {
//     if (!isMoreCoffee) {
//       cb(
//         "WHAT do you mean that there is no more coffee! No work today! Time to buy MORE coffee!",
//         null
//       );
//       return;
//     }
//     cb(null, "Ressurection procedure is completed... But that is temporary!");
//   }, 5000);
// }

// function workTimeCb(isThereWork, cb) {
//   console.log("Well, its work time!");
//   setTimeout(() => {
//     if (!isThereWork) {
//       cb("You are lying! There are always some work! So stop b***** and proceed!", null);
//     }
//     cb(null, "Work for the God of Work!");
//   }, 3000);
// }

// function coffeeTimeRound3Cb(isMoreMORECoffee, cb) {
//   console.log("You think this was OVER? HA-HA, NO! DRINK! MORE! COFFEE!");
//   setTimeout(() => {
//     if (!isMoreMORECoffee) {
//       cb("AAARGH!!! WHERE ****** COFFEE!!!", null);
//       return;
//     }
//     cb(null, "Ahhh, what a beautiful day!");
//   }, 6000);
// }

// function bugTimeCb(check, cb) {
//   console.log("Why this is not working?");
//   console.log("Time to roll D20!");
//   setTimeout(() => {
//     if (Math.floor(Math.random() * 20 + 1) < check) {
//       cb("Why did i decided that i can code... Im gonna kill myself.", null);
//       return;
//     }
//     cb(null, "Oh, I found you, what a ***** mistake! Silly me...");
//   }, 8000);
// }

// wakeUpCb(true, (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);

//   goToBathCb(true, (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(result);

//     eatBreakfastCb(true, (err, result) => {
//       if (err) {
//         console.log(err);
//         console.log(
//           "Time to raid some stores! Maybe we can use this sledgehammer for emergency food requisition!"
//         );
//         return;
//       }
//       console.log(result);

//       coffeeTimeCb(true, (err, result) => {
//         if (err) {
//           console.log(err);
//           console.log("Where was those silly rope! This world is HORRIBLE!");
//           return;
//         }
//         console.log(result);

//         coffeeTimeRound2Cb(true, (err, result) => {
//           if (err) {
//             console.log(err);
//             console.log(
//               "OKAY! Here is plan! You go to this coffee store and proceed to buy ALL THE COFFEE!"
//             );
//             return;
//           }
//           console.log(result);
//           workTimeCb(true, (err, result) => {
//             if (err) {
//               console.log(err)
//               console.log("LIAR! Go buy more coffee!");
//             }
//             console.log(result);

//             coffeeTimeRound3Cb(true, (err, result) => {
//               if (err) {
//                 console.log(err);
//                 console.log(
//                   "OKAY! No having coffee is bad... But maybe you sholdnt have to kill all those peoples... "
//                 );
//                 console.log(
//                   "Its not their fault that you didnt buy more coffee, right? Or maybe actully NOT! - ThEy aRe AlL gUiLTy!& TH EY DE SE RV ED TH IS!"
//                 );
//                 return;
//               }
//               console.log(result);

//               bugTimeCb(2, (err, result) => {
//                 if (err) {
//                   console.log(err);
//                   console.log(
//                     "Here is a plan - we need DRUGS... OR MaYbe MORE COOFFEEEE, thats even BETTER!"
//                   );
//                   return;
//                 }
//                 console.log(result);
//                 console.log("Well, that was good day - lets go back to sleep!")
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// ITS////////.......           PROMISE TIME

// function wakeUpPr(flag) {
//   return new Promise((resolve, reject) => {
//     console.log("Trying to wake up!");
//     setTimeout(() => {
//       if (!flag) {
//         reject("No... I dont have enough sleep!");
//       }
//       resolve("Okay, waking up!");
//     }, 1000);
//   });
// }

// function goToBathPr(isWater) {
//   return new Promise((resolve, reject) => {
//     console.log("Lets go to bathroom!");
//     setTimeout(() => {
//       if (!isWater) {
//         reject("There is no water... F*** this world!");
//       }
//       resolve("Ahh, cold water is bliss...");
//     }, 500);
//   });
// }

// function eatBreakfastPr(isFood) {
//   return new Promise((resolve, reject) => {
//     console.log("Time to eat!");
//     setTimeout(() => {
//       if (!isFood) {
//         reject("There is no food... IM GONNA DIE!");
//       }
//       resolve("Okay, stomach is ready to work!");
//     }, 2000);
//   });
// }

// function coffeeTimePr(isCoffee) {
//   return new Promise((resolve, reject) => {
//     console.log("Time to drink coffee!");
//     setTimeout(() => {
//       if (!isCoffee) {
//         reject("There is no coffee... Did I waked up in the HELL?");
//       }
//       resolve("Ah, the drink of gods!");
//     }, 3000);
//   });
// }

// function coffeeTimeRound2Pr(isMoreCoffee) {
//   return new Promise((resolve, reject) => {
//     console.log("Time to drink MORE coffee!");
//     setTimeout(() => {
//       if (!isMoreCoffee) {
//         reject(
//           "WHAT do you mean that there is no more coffee! No work today! Time to buy MORE coffee!"
//         );
//       }
//       resolve("Ressurection procedure is completed... But that is temporary!");
//     }, 5000);
//   });
// }

// function workTimePr(isThereWork) {
//   return new Promise((resolve, reject) => {
//     console.log("Well, its work time!");
//     setTimeout(() => {
//       if (!isThereWork) {
//         reject(
//           "You are lying! There are always some work! So stop b***** and proceed!"
//         );
//       }
//       resolve("Work for the God of Work!");
//     }, 3000);
//   });
// }

// function coffeeTimeRound3Pr(isMoreMORECoffee) {
//   return new Promise((resolve, reject) => {
//     console.log("You think this was OVER? HA-HA, NO! DRINK! MORE! COFFEE!");
//     setTimeout(() => {
//       if (!isMoreMORECoffee) {
//         reject("AAARGH!!! WHERE ****** COFFEE!!!");
//       }
//       resolve("Ahhh, what a beautiful day!");
//     }, 6000);
//   });
// }

// function bugTimePr(check) {
//   return new Promise((resolve, reject) => {
//     console.log("Why this is not working?");
//     console.log("Time to roll D20!");
//     setTimeout(() => {
//       if (Math.floor(Math.random() * 20 + 1) < check) {
//         reject(
//           "Why did i decided that i can code... Im gonna kill myself. OR maybe im need more coffee!"
//         );
//       }
//       resolve("Oh, I found you, what a ***** mistake! Silly me...");
//     }, 8000);
//   });
// }

// wakeUpPr(true)
//   .then((resolve) => {
//     console.log(resolve);

//     return goToBathPr(true);
//   })
//   .then((resolve) => {
//     console.log(resolve);

//     return eatBreakfastPr(true);
//   })
//   .then((resolve) => {
//     console.log(resolve);

//     return coffeeTimePr(true);
//   })
//   .then((resolve) => {
//     console.log(resolve);

//     return coffeeTimeRound2Pr(true);
//   })
//   .then((resolve) => {
//     console.log(resolve);

//     return workTimePr(true);
//   })
//   .then((resolve) => {
//     console.log(resolve);

//     return coffeeTimeRound3Pr(true);
//   })
//   .then((resolve) => {
//     console.log(resolve);

//     return bugTimePr(1);
//   })
//   .then((resolve) => {
//     console.log(resolve);
//     console.log("Well, that was good day - time to go back to sleep!")
//   })
//   .catch((reject) => {
//       console.log("____________");
//       console.log(reject);
//       console.log("____________");
//   })
//   .finally(() => {
//       console.log("Well, this day is finally over.")
//   })

// ITS///////........     ASYNC TIME

// async function wakeUpAs(flag) {
//   console.log("Trying to wake up!");
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!flag) {
//         reject("No... I dont have enough sleep!");
//       }
//       resolve("Okay, waking up!");
//     }, 1500);
//   });

//   let result = await promise;

//   return result;
// }

// async function goToBathAs(isWater) {
//   console.log("Lets go to bathroom!");
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!isWater) {
//         reject("There is no water... F*** this world!");
//       }
//       resolve("Ahh, cold water is bliss...");
//     }, 3000);
//   });

//   let result = await promise;

//   return result;
// }

// async function eatBreakfastAs(isFood) {
//   console.log("Time to eat!");
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!isFood) {
//         reject("There is no food... IM GONNA DIE!");
//       }
//       resolve("Okay, stomach is ready to work!");
//     }, 2000);
//   });

//   let result = await promise;

//   return result;
// }

// async function coffeeTimeAs(isCoffee) {
//   console.log("Time to drink coffee!");
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!isCoffee) {
//         reject("There is no coffee... Did I waked up in the HELL?");
//       }
//       resolve("Ah, the drink of gods!");
//     }, 3000);
//   });

//   let result = await promise;

//   return result;
// }

// async function coffeeTimeRound2As(isMoreCoffee) {
//   console.log("Time to drink MORE coffee!");
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!isMoreCoffee) {
//         reject(
//           "WHAT do you mean that there is no more coffee! No work today! Time to buy MORE coffee!"
//         );
//       }
//       resolve("Ressurection procedure is completed... But that is temporary!");
//     }, 5000);
//   });

//   let result = await promise;

//   return result;
// }

// async function workTimeAs(isThereWork) {
//   console.log("Well, its work time!");
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!isThereWork) {
//         reject(
//           "You are lying! There are always some work! So stop b***** and proceed!"
//         );
//       }
//       resolve("Work for the God of Work!");
//     }, 3000);
//   });

//   let result = await promise;

//   return result;
// }

// async function coffeeTimeRound3As(isMoreMORECoffee) {
//   console.log("You think this was OVER? HA-HA, NO! DRINK! MORE! COFFEE!");
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!isMoreMORECoffee) {
//         reject("AAARGH!!! WHERE ****** COFFEE!!!");
//       }
//       resolve("Ahhh, what a beautiful day!");
//     }, 6000);
//   });

//   let result = await promise;

//   return result;
// }

// async function bugTimeAs(check) {
//   console.log("Why this is not working?");
//   console.log("Time to roll D20!");
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.floor(Math.random() * 20 + 1) < check) {
//         reject(
//           "Why did i decided that i can code... Im gonna kill myself. OR maybe im need more coffee!"
//         );
//       }
//       resolve("Oh, I found you, what a ***** mistake! Silly me...");
//     }, 8000);
//   });

//   let result = await promise;

//   return result;
// }

// wakeUpAs(true)
//   .then((resolve) => {
//     console.log(resolve);

//     return goToBathAs(true);
//   })
//   .then((resolve) => {
//     console.log(resolve);

//     return eatBreakfastAs(true);
//   })
//   .then((resolve) => {
//     console.log(resolve);

//     return coffeeTimeAs(true);
//   })
//   .then((resolve) => {
//     console.log(resolve);

//     return coffeeTimeRound2As(true);
//   })
//   .then((resolve) => {
//     console.log(resolve);

//     return workTimeAs(true);
//   })
//   .then((resolve) => {
//     console.log(resolve);

//     return coffeeTimeRound3As(true);
//   })
//   .then((resolve) => {
//     console.log(resolve);

//     return bugTimeAs(1);
//   })
//   .then((resolve) => {
//     console.log(resolve);
//     console.log("Well, that was good day - time to go back to sleep!");
//   })
//   .catch((reject) => {
//     console.log("____________");
//     console.log(reject);
//     console.log("____________");
//   })
//   .finally(() => {
//     console.log("Well, this day is finally over.");
//   });
