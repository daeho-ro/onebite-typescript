// array
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'world'];
let boolArr: Array<boolean> = [true, false, true];

// array with different types
let multiArr: (number | string)[] = [1, 'hello'];

// multi-dimensional array
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// tuple
// tuple is an array with a fixed number of elements and types
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, '2', true];

const users: [string, number][] = [
  ['John', 10],
  ['Jane', 20],
  ['Jim', 30],
];
