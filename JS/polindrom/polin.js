// console.time("answer time");
let polindrom = [0, 0, 0];
let prNum = [];
for (let i = 10000; i < 100000; i++) {
  let flag = true;
  for (let j = 2; j < Math.sqrt(i) + 1 && flag === true; j++) {
    if (i % j === 0) {
      flag = false;
    }
  }
  if (flag) {
    prNum.push(i);
  }
}
console.log(prNum);

for (let i = 0; i < prNum.length; i++) {
    setTimeout(() => {
        for (let j = 0; j < prNum.length; j++) {
            let check = prNum[i] * prNum[j];
            let string = check.toString();
            let array = Array.from(string);
            array.reverse();
            let temp = array.join("");
            let reverse = parseInt(temp);
      
            if (check === reverse && check > polindrom[0]) {
              polindrom[0] = check;
              polindrom[1] = prNum[i];
              polindrom[2] = prNum[j];
              console.log(polindrom);
              
            }
            // if (i === prNum.length - 1) {
            //     console.timeEnd("answer time");
            // } 41586 ms ()
                  
        }
    })
}
let tim

