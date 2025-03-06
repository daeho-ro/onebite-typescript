/*
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
  a: string;
};

type ObjB = {
  a: string;
  b: string;
};

type B = ObjB extends ObjA ? number : string;

/*
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}

let result = removeSpaces('hello world');
result.toLowerCase();

let result2 = removeSpaces(undefined);
