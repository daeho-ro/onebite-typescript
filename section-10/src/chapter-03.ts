/*
 * Exclude<T, U>
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | number | boolean, string>;

/*
 * Extract<T, U>
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

/*
 * ReturnType<T>
 */

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

function funcA() {
  return 'hello';
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;

type ReturnB = ReturnType<typeof funcB>;
