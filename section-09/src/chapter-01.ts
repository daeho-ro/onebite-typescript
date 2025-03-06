/*
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

/*
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | number | boolean, string>;
// 1단계
// Exclude<string, string> |
// Exclude<number, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | number | boolean, string>;
// 1단계
// Extract<string, string> |
// Extract<number, string> |
// Extract<boolean, string>

// 2단계
// string |
// never |
// never

// 결과
// string
