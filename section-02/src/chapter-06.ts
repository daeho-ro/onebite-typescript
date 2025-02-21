// any

let anyVar: any = 1;
// anyVar = 'hello';

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
// unknownVar = '';
// unknownVar = 1;
// unknownVar = () => {};

// unknownVar.toUpperCase();

// num = unknownVar;

if (typeof unknownVar === 'number') {
  num = unknownVar;
}
