/*
 * 타입 추론
 */

let a = 10;
let b = 'hello';
let c = {
  id: 1,
  name: 'lamanus',
  profile: {
    nickname: 'lamanus',
  },
  urls: ['https://blog.lamanus.kr'],
};

let { id, name, profile } = c;

let [one, two, three] = [1, 'string', true];

function func(message = 'hello') {
  return 'hello';
}

let d; // 암묵적 추론
d = 10;
d.toFixed();

d = 'hello';
d.toUpperCase();
// d.toFixed();

d = true;
d.toString();

let dd: any;

dd = 'hello';
dd.toUpperCase();
dd.toFixed();

const num = 10;
const str = 'hello';

let arr = [1, 'string'];
