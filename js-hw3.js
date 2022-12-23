// 1 // https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// 2 // https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

const circleCircumference = (circle) => 2 * Math.PI * circle.radius;

// 3 // https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
function giveMeFive(obj) {
  const arr = [];
  for (const key in obj) {
    if (key.length === 5) {
      arr.push(key);
      console.log(key);
    }
  }
  for (const key in obj) {
    if (obj[key].length === 5) {
      arr.push(obj[key]);
      console.log(obj[key]);
    }
  }
  return arr;
}

// 4 // https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n) {
  var res = [];

  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }
  return res;
}

// 5 // https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 0;
    this.species = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "cat";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, status);
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "dog";
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
