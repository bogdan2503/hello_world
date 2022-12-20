// 1
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

// 2
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
// with loop
function DNAtoRNA(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna += dna[i].replace("T", "U");
    } else {
      rna += dna[i];
    }
  }
  return rna;
}

// // with  RegExp
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// 3
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  list.sort((b, a) => b - a);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

// 4
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  let smallestValue = arr.sort((b, a) => b - a);
  if (toReturn === "value") {
    return smallestValue[0];
  } else {
    return arr.indexOf(smallestValue[0]);
  }
}

// Поглиблені задачки (робити за бажанням):

// 5
// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  for (let i = 0; i < queue.length; i++) {
    if (queue[queue.length - 1] === "wolf") {
      return "Pls go away and stop eating my sheep";
    }
  }
  let wolfIndex = queue.reverse();
  return `Oi! Sheep number ${wolfIndex.indexOf(
    "wolf"
  )}! You are about to be eaten by a wolf!`;
}

// 6
//www.codewars.com/kata/beginner-lost-without-a-map
function maps(x) {
  let arr = x.map((x) => x * 2);
  return arr;
}

// 7
// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) return arr[i];
  }
  return null;
}

// 8
// Double Integer
// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  i = i * 2;
  return i;
}

// 9
// Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function century(year) {
  return Math.floor((year + 99) / 100);
}

// 10
// Multyply two numbers
// https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
function multiply(x, y) {
  return x * y;
}

// 11
// Volume of Cuboid
// www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// 12
// Make negative
// www.codewars.com / kata / 55685cd7ad70877c23000102 / train / javascript
function makeNegative(num) {
  return num < 0 ? num : (num = -num);
}

// 13
// Cockroach speed
//www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
function cockroachSpeed(s) {
  return Math.floor(s * 27.7777777778);
}

// 14
// Angle of triangle
//www.codewars.com/kata/5a023c426975981341000014/train/javascript
function otherAngle(a, b) {
  return 180 - a - b;
}

// 15
// Twice as old
//www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// 16
// Return n - th even number
// www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
// did not understand the conditions of the task

// 17
// What's the real floor
//www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  if (n <= 12 && n > 0) {
    return n - 1;
  } else if (n >= 13) {
    return n - 2;
  } else if (n <= 0) {
    return n;
  }
}

// 18
// Clock
//www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

// 19
// Is n divisible by x and y
//www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
