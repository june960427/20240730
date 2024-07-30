// let arr = [1, 2, 3, 4, 5];
// let iterator = arr[Symbol.iterator]();
// // console.log(iterator);
// let result = iterator.next();
// // console.log(result);

// while (!result.done) {
//   console.log(result.value, result);
//   result = iterator.next();
// }

// let copy = [...iterator];
// console.log(copy);

// class Sequence {
//   constructor(from = 0, to = Infinity, interval = 1) {
//     this.from = from;
//     this.to = to;
//     this.interval = interval;
//   }
//   [Symbol.iterator]() {
//     let next = this.from;
//     return {
//       next: () => {
//         if (next <= this.to) {
//           let result = { value: next, done: false };
//           next += this.interval;
//           return result;
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   }
// }

// let evenNumbers = new Sequence(2, 10, 2);
// let iterator = evenNumbers[Symbol.iterator]();
// let result = iterator.next();

// while (!result.done) {
//   console.log(result.value);
//   result = iterator.next();
// }

// for (let num of evenNumbers) {
//   console.log(num);
// }

function* generate() {
  console.log("start");
  console.log("1");
  yield 1;
  console.log("2");
  yield 2;
  console.log("3");
  yield 3;
}

let gen = generate();
let result = gen.next();
// while (!result.done) {
//   console.log(result.value);
//   result = gen.next();
// }
// result = gen.next();
// result = gen.next();
// console.log(gen);
// for (let ge of gen) console.log(gen);

// let iterator = gen[Symbol.iterator]();
// console.log(iterator);

function* sequence(from = 0, to = Infinity, interval = 2) {
  let next = from;
  while (next <= to) {
    yield next;
    next += interval;
  }
}

let evenSeq = sequence(1, 10, 2);
for (let seq of evenSeq) {
  console.log(seq);
}
