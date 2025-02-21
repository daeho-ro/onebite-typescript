/*
 * Unknown
 */

function unknownExam() {
  let a: unknown = 123;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
  //   let nullVar: null = unknownVar;
  //   let undefinedVar: undefined = unknownVar;
}

/*
 * Never
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
  let nullVar: null = neverFunc();
  let undefinedVar: undefined = neverFunc();

  //   let a: never = 123;
  //   let b: never = 'hello';
  //   let c: never = true;
  //   let d: never = null;
  //   let e: never = undefined;
}

/*
 * Void
 */

function voidExam() {
  function voidFunc(): void {
    console.log('void');
  }

  let a: void = undefined;

  //   let undefinedVar: undefined = voidFunc();
}

/*
 * Any
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  unknownVar = anyVar;

  anyVar = undefinedVar;
  undefinedVar = anyVar;

  //   anyVar = neverVar;
  //   neverVar = anyVar;
}
