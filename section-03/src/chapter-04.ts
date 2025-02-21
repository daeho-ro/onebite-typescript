/*
 * 대수 타입
 * 두 개 이상의 타입을 합성해서 새로운 타입을 만드는 것
 */

/*
 * 합집합 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = 'hello';
a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union = Dog | Person;

let union1: Union = {
  name: '',
  color: '',
};

let union2: Union = {
  name: '',
  language: '',
};

let union3: Union = {
  name: '',
  color: '',
  language: '',
};

// let union4: Union1 = {
//   name: '',
// };

/*
 * 교집합 타입 - Interaction 타입
 */

let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: '',
  color: '',
  language: '',
};
