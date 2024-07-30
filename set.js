// const set = new Set();
// console.log(set);

// const set1 = new Set([1, 2, 3, 3]);
// console.log(set1);

// const uniq = (arr) => [...new Set(arr)];
// console.log(uniq([2, 1, 2, 3, 4, 3, 4]));

// const { size } = new Set([1, 2, 3, 3]);
// console.log(size); set의 size 속성 => 길이

// const set = new Set();
// set.add(1).add(2);
// console.log(set);

// const set = new Set([1, 2, 3]);
// console.log(set.has(2));
// set.delete(2);
// console.log(set);
// set.clear();
// console.log(set);

// let odds = new Set([1, 3, 5, 7, 9]);
// let sum = 0;
// for (let odd of odds) sum += odd;
// console.log(sum);

// let product = 1;
// odds.forEach((o) => (product *= o));
// console.log(product);

// const set = new Set([1, 5, 3]);
// set.forEach((v, i, arr) => console.log(v, i, arr));

const userIDs = [101, 102, 101, 102, 103];
const uniqueUserIDs = new Set(userIDs);
// uniqueUserIDs.forEach((userID) => {
//   console.log(`ID : ${userID}`);
// });

// 스프레드 문법, 배열 디스트럭처링 대상
const set = new Set([1, 2, 3]);
const [a, ...rest] = set;
// console.log(a, rest);

// set 객체는 합집합, 교집합, 차집합 개념을 가질 수 있다.
// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([4, 2, 3]);
// let uniq = new Set([...set1, ...set2]);
// let intersection = new Set([...set1].filter((x) => set2.has(x)));
// let difference = new Set([...set1].filter((x) => !set2.has(x)));

// console.log(uniq, intersection, difference);

let str = new Set("I am a student");
// console.log([..."I am a student"]);
// console.log(str);

// const map1 = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);
// console.log(map1);

// const map2 = new Map([[1, 2]]);
// console.log(map2);

// const map = new Map();
// console.log(map);
// map.set("key1", "value1");
// console.log(map);

const map = new Map();
const lee = { name: "Lee" };
const kim = { name: "Kim" };
map.set(lee, "developer").set(kim, "designer");
map.delete(kim);
console.log(map);
console.log(map.has(lee));
map.clear();
console.log(map);

let map2 = new Map();
map.set(0, "zero");
map.set(1, "one");
map.forEach((v, i) => console.log(v, i));

let quiz1 = new Map();
quiz1.set("국어", 85);
quiz1.set("영어", 90);
quiz1.set("수학", 95);
quiz1.forEach((v, i) => {
  console.log(`${i} : ${v}`);
});

let numbers = new Set([3, 7, 12, 3, 12, 3]);
console.log(numbers);

const dataTransforms = new Map([
  ["name", (value) => value.toUpperCase()],
  ["age", (value) => Number(value)],
]);

console.log(dataTransforms);
