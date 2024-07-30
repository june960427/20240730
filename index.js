const me = [1, 2, 3, 4, 5];
// console.log(Array.isArray(me), typeof me, me);
// console.log(Array(7).fill(7));

let carSales = [
  300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450,
];

let carSales2 = new Array(
  300,
  350,
  400,
  450,
  500,
  600,
  650,
  620,
  580,
  620,
  580,
  620,
  500,
  450
);

let copy = Array.from(carSales);
let concat = [0, ...carSales, 300, 500];
let str = [..."0123456789"];

// console.log(copy, concat, str);

let jan, fab, mar, rest;
[jan, fab, mar, ...rest] = carSales;

let sum = 0;
for (let [index, sale] of carSales.entries()) {
  if (index % 2 === 0) sum += sale;
}

let average = sum / (carSales.length / 2);
// console.log(average);

// for (let sale of carSales) {
//   sum += sale;
// }
// let average = sum / carSales.length;
// console.log(
//   Math.ceil(average),
//   Math.trunc(average),
//   Math.floor(average),
//   Number(average.toFixed(2))
// );

let list = [4, 5, 6];
// for (let i in list) {
//   console.log(i);
// }
// for (let i of list) {
//   console.log(i);
// }

const car = {
  maker: "bmw",
  color: "red",
  year: "2012",
};

// for (let prop in car) {
//   console.log(prop);
// }

// for (let prop of car) {
//   console.log(prop);
// }

let sum2 = 0;
carSales.forEach((v, i, arr) => (sum2 += v));
carSales.forEach((v, i, arr) => (arr[i] = v + 50));
// console.log(sum2);
// console.log(carSales);
// let filtered = carSales.filter((v, i) => v > 400);
// console.log(filtered);

let evenSales = carSales.filter((v, i) => i % 2 === 1);
// console.log(evenSales);

let allSaleSix = carSales.every((sale) => sale > 600);
let anySaleSix = carSales.some((sale) => sale > 600);
let sum3 = carSales.reduce((t1, t2) => t1 + 2, 0);

let highestSales = carSales.reduce((t1, t2) => (t1 > t2 ? t1 : t2), 0);
// console.log(highestSales);

// let flat = [1, [2, 3]].flat();
// console.log(flat);

// let message = ["오늘 날씨가", "좋습니다."].flatMap((el) => el.split(" "));
// console.log(message); => 오늘 TIL

// const arr1 = ["a", "b", "c"];
// const arr2 = ["d", "e", "f"];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

let origin = [1, 2, 3];
let newArray;
// newArray = origin.concat(4, 5);
newArray = origin.concat([4, 5], [6, 7]);
// console.log(newArray);

// let stack = [];
// stack.push(1);
// console.log(stack);
// stack.pop();
// console.log(stack);
// stack.unshift(1);
// console.log(stack);
// stack.shift();
// console.log(stack);

// let numbers = [20, 37, -21, 32, -2];
// document.write(`${numbers[1]}, ${numbers[3]}`);

// let a = [1, 2, 3, 45];
// a.splice(0,2)
// a.splice(2);
// a.splice(0, 2, 10, 20);
// let b = a.slice(0, 2);
// let c = a.slice(1, -1);
// console.log(c);

let a = new Array(5).fill(0);
a.fill(1, 1, -1);
console.log(a);

let scores = [1, 2, 3, 4, 5, 6, 7];
// for (let i = 0; i < scores.length; i++) {
//   console.log(scores[i]);
// }

// for (let score of scores) {
//   console.log(score);
// }

// let tel = ["010", "1234", "5678"].join("-");
// console.log(tel);

// let colors = ["빨강", "노랑", "파랑", "주황"];
// console.log(colors);

// let arr = new Array(2);
// for (let i = 0; i < arr.length; ++i) {
//   arr[i] = new Array(3);
// }
// let arr = Array.from(new Array(2), () => new Array(3));
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     arr[i][j] = j;
//   }
// }

// console.log(arr);

// let arr = [7, -24, -1, 4, 5].find((i) => i < 0);

let a1 = [12, 0, 2, 5, 4];
let a2 = [12, 0, 2, 5, 8];
let a3 = a1.filter((v) => a2.includes(v));

let numbers = [1, 2, 3];
numbers.map((v) => v * 10);
