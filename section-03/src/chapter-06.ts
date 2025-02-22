/*
 * 타입 단언 assertion
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = 'kim';
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: 'dog',
  color: 'white',
  breed: 'poodle',
} as Dog;

console.log(dog);
// { name: 'dog', color: 'white', breed: 'poodle' }

/*
 * 타입 단언의 규칙
 * A as B
 * A가 B의 수퍼 타입이거나 서브 타입이어야 함 - 가족은 가능, 사촌은 불가
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;
let num3 = 10 as unknown as string;

/*
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: 'cat',
  color: 'black',
} as const;

// cat.name = '';

/*
 * Non null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '1',
  author: 'kim',
};

const len: number = post.author!.length;
// author가 없으면 오류
