// In-place function lesson
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   describe() {
//     console.log(`Hi I'm ${this.name} and I'm ${this.age} years old.`);
//     // console.log("Hi I'm " + this.name + " and I'm " + this.age + " years old.")
//   }
//   inplaceAge(years) {
//     this.age += years;
//   }

//   outplaceAge(years) {
//     const newPerson = new Person(this.name, this.age + years);
//     return newPerson;
//   }

//   mixedPlaceAge(years) {
//     this.age += years;
//     return this;
//   }
// }

// const person = new Person("Alice", 1);

// person.inplaceAge(1);
// const aliceClone = person.outplaceAge(1);
// person.describe();
// aliceClone.describe();

// chaining
// person.mixedPlaceAge(1).mixedPlaceAge(1).mixedPlaceAge(1).describe()

/// triple equals lesson
// const a = [1,2,3]
// const b = [1,2,3]
// const c = a

// console.log(a === c)
// console.log(age === 12)

const stuff = ["e", "f", "z", "g", "h", "u", "a", "d", "z", "c"];

const moreThings = [
  { name: "Jane", age: 12 },
  { name: "Martin", age: 19 },
  { name: "Melissa", age: 27 },
  { name: "Mary", age: 31 },
  { name: "Finn", age: 21 },
  { name: "Jake", age: 46 },
  { name: "Lisa", age: 37 }
];

// const sortedStuff = Array.from(stuff).sort();
// console.log(stuff === sortedStuff);
// console.log(sortedStuff);

// console.log(stuff)
console.log(
  Array.from(moreThings).sort((a, b) => {
    return a.age - b.age;
  })
);

// const peoplesAges = moreThings.sort(moreThings.age)

// console.log(peoplesAges)
const contestantData = [
  {
    name: "Kevin",
    points: 5
  },
  {
    name: "Meghan",
    points: 28
  },
  {
    name: "Matt",
    points: 12
  },
  {
    name: "Mom",
    points: 20
  },
  {
    name: "Roy",
    points: 15
  },
  {
    name: "Jones",
    points: 500
  }
];

console.log(contestantData);

// function sort(a, b) {
//   return b.points - a.points
// }

// let sortedData = contestantData.sort(sort)

let sortedData = contestantData.sort((a, b) => {
  return b.points - a.points;
});
console.log(sortedData);
