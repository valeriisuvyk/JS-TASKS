"use strict";
//
// const countSymbols = (string, letter, boolean = false) => {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//       if (boolean) {
//         if (string[i].toLowerCase() == letter.toLowerCase()) {
//           count += 1;
//         }
//       } else {
//         if (string[i] == letter) {
//           count += 1;
//         }
//       }
//     }
//     return count;
//   };

//   console.log(countSymbols("Antony Smith", "s", true)); // 1
//   console.log(countSymbols("Antony Smith", "s", false)); // 0
//   console.log(countSymbols("Antony Smith", "s")); // 0

// antiSpy

// const text =
//   "If you agree with that, just let me know to obama@mail.us or newpower@gmail.com and I'll reach out as soon as possible.";
// let antiSpy = (text, concealed = "HIDDEN_DATA") => {
//   let arrayText = text.split(" ").map((item) => {
//     if (item.includes("@")) {
//       return concealed;
//     } else {
//       return item;
//     }
//   });
//   return arrayText.join(" ");
// };
// console.log(antiSpy(text)); // "If you agree with that, just let me know to HIDDEN_DATA or HIDDEN_DATA and I'll reach out as soon as possible."
// console.log(antiSpy(text, "MY_MAIL")); // "If you agree with that, just let me know to MY_MAIL or MY_MAIL and I'll reach out as soon as possible."
// console.log(antiSpy(text, "XXXX")); // "If you agree with that, just let me know to XXXX or XXXX and I'll reach out as soon as possible."

// Text builder

// const template =
//   "%TEAM_A% vs %TEAM_B% game score is %SCORE%. Fans of %WINNER% already started celebrating on the streets of the %GAME_CITY%, %GAME_COUNTRY%";
// let postBuilder = (text, objectValues) => {
//   let arrayText = text.split(" ").map((el) => {
//     if (el === "%TEAM_A%") {
//       return objectValues.teamA;
//     } else if (el === "%TEAM_B%") {
//       return objectValues.teamB;
//     } else if (el === "%SCORE%.") {
//       return `${objectValues.teamAGameScore} : ${objectValues.teamBGameScore}`;
//     } else if (el === "%WINNER%") {
//       if (objectValues.teamAGameScore > objectValues.teamBGameScore) {
//         return objectValues.teamA;
//       } else if (objectValues.teamAGameScore < objectValues.teamBGameScore) {
//         return objectValues.teamB;
//       } else {
//         return "both teams";
//       }
//     } else if (el === "%GAME_CITY%,") {
//       return objectValues.city;
//     } else if (el === "%GAME_COUNTRY%") {
//       return objectValues.country;
//     } else return el;
//   });
//   return arrayText;
// };
// console.log(
//   postBuilder(template, {
//     teamAGameScore: 2,
//     teamBGameScore: 0,
//     teamA: "Barcelona FC",
//     teamB: "Inter Milan",
//     city: "Milan",
//     country: "Italy",
//   })
// ); // "Barcelona FC vs Inter Milan game score is 2:0. Fans of Barcelona FC are already started celebrating on the streets of the Milan, Italy."

// Sorting

// const students = [
//   { name: "Alex", age: 27 },
//   { name: "Deny", age: 25 },
//   { name: "Max", age: 20 },
// ];
// const teachers = [
//   { name: "Tommy", age: 33, experience: 10, skillsId: 1 },
//   { name: "Lora", age: 44, experience: 12, skillsId: 2 },
//   { name: "Rafat", age: 35, experience: 3, skillsId: 3 },
// ];
// const sortByAge = (array) => {
//   const sortCallBack = (array) => {
//     return (a, b) => (a[array] > b[array] ? 1 : -1);
//   };
//   array.sort(sortCallBack("age"));
//   return array.map((el) => el.name).join(", ");
// };
// const sortBy = (string, key) => {
//   return string
//     .sort((a, b) => a[key] - b[key])
//     .map((el) => el.name)
//     .join(", ");
// };
// const sortBySkills = (teachers, skills) => {
//   let sortSkills = {};
//   skills.map((el) => {
//     sortSkills[el.id] = el.items.length;
//   });
//   // return teachers.sort(
//   //   (a, b) => sortSkills[b.skillsId] - sortSkills[a.skillsId]
//   const sortText = teachers.sort(
//     (a, b) => sortSkills[b.skillsId] - sortSkills[a.skillsId]

//   );
//   return sortText.map( (el) => el.name ).join(", ")
// };
// const skillsInfo = [
//   {
//     id: 1,
//     items: ["math", "english"],
//   },
//   {
//     id: 2,
//     items: ["chemistry", "physics", "math", "english"],
//   },
//   {
//     id: 3,
//     items: ["chemistry"],
//   },
// ];

// // console.log(sortByAge(students)); // order: Max, Deny, Alex
// // console.log(sortByAge(teachers)); // order: Tommy, Rafat, Lora
// // console.log(sortBy(students, "age")); // order: Max, Deny, Alex
// // console.log(sortBy(teachers, "experience")); // order: Rafat, Tommy, Lora
// console.log(sortBySkills(teachers, skillsInfo)); // order: Lora, Tommy, Rafat

/// GOD-MODE

// function World() {
//   this.species = [];
//   this.creatures = [];
//   this.changePlanetName = (planetName) => {
//     this.planetName = planetName;
//   };
//   this.countPopulation = () => {
//     const hashTable = {};
//     this.creatures.map((creatures) => {
//       const currentSpecie = hashTable[creatures.specie] || 0;
//       const specieCount = currentSpecie + 1;
//       hashTable[creatures.specie] = specieCount;
//     });
//     return hashTable;
//   };
//   this.create = (obj) => {
//     this.creatures.push(obj);
//     if (!this.species.includes(obj.specie)) {
//       this.species.push(obj.specie);
//     }
//   };
// }

// const home = new World();
// home.changePlanetName("Earth");
// console.log(home.planetName); // Earth
// console.log(home.species); // []
// console.log(home.creatures); // []
// console.log(home.countPopulation()); // {}
// home.create({
//   name: "human",
//   specie: "homo sapiens",
// });
// home.create({
//   name: "penguin",
//   specie: "bird",
// });
// home.create({
//   name: "swan",
//   specie: "bird",
// });
// console.log(home.species); // ["homo sapiens", "bird"]
// console.log(home.creatures); // [{ name: "human", specie: "homo sapiens" }, { name: "penguin", ...
// console.log(home.countPopulation()); // { "homo sapiens": 1, bird: 2 }

// Aggregation

// const users = [
//   {
//     id: "8o71g807b09hvd09h1",
//     firstName: "John",
//     lastName: "Smith",
//   },
//   {
//     id: "9we8rn4e98161684s9",
//     firstName: "Marcus",
//     lastName: "Davis",
//   },
//   {
//     id: "78y78t4ygd984y5c16",
//     firstName: "Anna",
//     lastName: "Rogers",
//   },
// ];

// const banks = [
//   {
//     id: "8s7b4s87d4s7e7ee",
//     name: "PrivatBank",
//     country: "Ukraine",
//   },
//   {
//     id: "df87ndre78r7ee13",
//     name: "UniversalBank",
//     country: "Ukraine",
//   },
//   {
//     id: "28741hfhdfddsaaa",
//     name: "Revolut",
//     country: "UK",
//   },
// ];

// const currencies = [
//   {
//     id: "127122v2",
//     short: "UAH",
//     full: "Ukrainian Hryvnya",
//   },
//   {
//     id: "914184g4",
//     short: "USD",
//     full: "United States Dollar",
//   },
//   {
//     id: "1981vgd4",
//     short: "EUR",
//     full: "Euro",
//   },
// ];

// const payments = [
//   {
//     id: 1,
//     sender: {
//       userId: "8o71g807b09hvd09h1",
//       bankId: "df87ndre78r7ee13",
//       currencyId: "1981vgd4",
//     },
//     receiver: {
//       userId: "9we8rn4e98161684s9",
//       bankId: "8s7b4s87d4s7e7ee",
//       currencyId: "127122v2",
//     },
//   },
//   {
//     id: 2,
//     sender: {
//       userId: "78y78t4ygd984y5c16",
//       bankId: "28741hfhdfddsaaa",
//       currencyId: "127122v2",
//     },
//     receiver: {
//       userId: "9we8rn4e98161684s9",
//       bankId: "28741hfhdfddsaaa",
//       currencyId: "127122v2",
//     },
//   },
// ];
// const aggregate = (payments, users, banks, currencies) => {
//   const payment = payments.map((object) => {
//     object.sender["userData"] = users.find(
//       (id) => id.id === object.sender.userId
//     );
//     object.receiver["userData"] = users.find(
//       (id) => id.id === object.receiver.userId
//     );

//     object.sender["bankData"] = banks.find(
//       (id) => id.id === object.sender.bankId
//     );
//     object.receiver["bankData"] = banks.find(
//       (id) => id.id === object.receiver.bankId
//     );

//     object.sender["currencyData"] = currencies.find(
//       (id) => id.id === object.sender.currencyId
//     );
//     object.receiver["currencyData"] = currencies.find(
//       (id) => id.id === object.receiver.currencyId
//     );
//     return object;
//   });
//   return [payment];
// };
// console.log(aggregate(payments, users, banks, currencies));

// Pizzeria

// function pizzaCooking(pizzaName, ovenTime) {
//   return new Promise(resolve => setTimeout(() => resolve(`${pizzaName} is done`), ovenTime));
// }
// pizzaCooking("margarita", 5400).then((message) => console.log(message)); // (should resolve in 5.4s) margarita is done
// pizzaCooking("diabola", 3200).then((message) => console.log(message)); // (should resolve in 3.2s) diabola is done
// console.time('pizzaCooking');
// pizzaCooking("diabola", 3200).then(() => {console.timeEnd('pizzaCooking')})

// Pizzeria 2

// const orders = [
//   { name: "margarita", ovenTime: 5400 },
//   { name: "diabola", ovenTime: 3200 },
//   { name: "peperoni", ovenTime: 2500 },
// ];
// function idealKitchen(orders) {
//   function pizzaCooking(pizza) {
//     return new Promise(resolve => setTimeout(() => resolve(`${pizza.name} is done`), pizza.ovenTime));
//   }
//   let oven = orders.map(pizza => new Promise(resolve => setTimeout(() => resolve(`${pizza.name} is done`), pizza.ovenTime)));
//   return Promise.all(oven);
// }
// // should resolve in 5.4s, because all pizzas bakes in parallel, and time shouldn't add up
// // oven1: margarita ======> 5.4
// // oven2: diabola   ===> 3.2
// // oven3: peperoni  ==> 2.5
// idealKitchen(orders).then((messages) => console.log(messages)); // ['margarita is done', 'diabola is done', 'peperoni is done']

// Pizzeria 3

// const orders = [
//     { name: "margarita", ovenTime: 5400 },
//     { name: "bbq", ovenTime: 1800 },
//     { name: "bbq", ovenTime: 1800 },
//     { name: "margarita", ovenTime: 5400 },
//     { name: "diabola", ovenTime: 3200 },
//     { name: "peperoni", ovenTime: 2500 },
//     { name: "margarita", ovenTime: 5400 },
//     { name: "hawaiian", ovenTime: 2000 },
//     { name: "bbq", ovenTime: 1800 },
//     { name: "seafood", ovenTime: 2100 },
//     { name: "peperoni", ovenTime: 2500 },
//   ];

//   async function realKitchen(ordersList, ovensNumber) {
//     function pizzaCooking(pizza) {
//       return new Promise(resolve => setTimeout(() => resolve(`${pizza.name} is done`), pizza.ovenTime));
//     }
//     const arrToMap = []
//     let startPos = 0;
//     let restLength = ordersList.length;
//     for (let i = ovensNumber; i >= 1; i--) {
//       let orderPart = ordersList.slice(startPos, Math.floor(startPos + restLength / i))
//       arrToMap.push(orderPart)
//       startPos = Math.floor(startPos + restLength / i)
//       restLength = 11 - startPos
//     }
//     console.log(arrToMap)
//     async function oneByOne1(arr) {
//       const orderPromisesArr = [];
//       for (let item of arr) {
//         const promis = await pizzaCooking(item);
//         orderPromisesArr.push(promis);
//       }
//       return orderPromisesArr;
//     }
//     const subProcesses = arrToMap.map(async item => await oneByOne1(item))
//     const subResults = await Promise.all(subProcesses);
//     return subResults.flat();
//   }
//   console.time("realKitchen");
//   realKitchen(orders, 2)
//   .then((messages) => console.log(messages))
//   .then(() => { console.timeEnd("realKitchen") });

// Pizzeria 4

const orders = [
  { name: "margarita1", ovenTime: 5400 },
  { name: "bbq1", ovenTime: 1800 },
  { name: "bbq2", ovenTime: 1800 },
  { name: "margarita2", ovenTime: 5400 },
  { name: "diabola1", ovenTime: 3200 },
  { name: "peperoni1", ovenTime: 2500 },
  { name: "margarita3", ovenTime: 5400 },
  { name: "hawaiian1", ovenTime: 2000 },
  { name: "bbq3", ovenTime: 1800 },
  { name: "seafood1", ovenTime: 2100 },
  { name: "peperoni2", ovenTime: 2500 },
];

async function chiefKitchen(ordersList, ovensNumber) {
  function pizzaCooking(pizza) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(`${pizza.name} is done`), pizza.ovenTime)
    );
  }
  const arrToMap = [];
  ordersList.sort((a, b) => a.ovenTime - b.ovenTime);

  for (let i = ovensNumber; i >= 1; i--) {
    const amountPizza = Math.floor(ordersList.length / i);
    const subArr = [];

    for (let n = 0; n < amountPizza; n++) {
      if (n % 2 === 0) {
        subArr.push(ordersList[0]);
        ordersList.shift();
      } else {
        subArr.push(ordersList[ordersList.length - 1]);
        ordersList.pop();
      }
    }
    arrToMap.push(subArr);
  }

  async function oneByOne1(arr) {
    const orderPromisesArr = [];

    for (let item of arr) {
      const promis = await pizzaCooking(item);
      orderPromisesArr.push(promis);
    }

    return orderPromisesArr;
  }

  const subProcesses = arrToMap.map(async (item) => await oneByOne1(item));

  const subResults = await Promise.all(subProcesses);

  return subResults.flat();
}

console.time("chiefKitchen");
// should resolve in max 16.9s whith 2 ovens (((
chiefKitchen(orders, 2)
  .then((messages) => console.log(messages)) // ['margarita is done', ...]
  .then(() => {
    console.timeEnd("chiefKitchen");
  });
