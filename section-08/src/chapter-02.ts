/*
 * keyof 연산자
 */

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person = {
  name: 'John',
  age: 27,
};

getPropertyKey(person, 'name'); // 'John'
