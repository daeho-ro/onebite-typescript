// 객체 타입의 호환성
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
};

animal = dog;
// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 30000,
  skill: 'reactjs',
};

book = programmingBook;
// programmingBook = book;

/*
 * 초과 프로퍼티 검사
 * 초기화 시에만 엄격한 타입 검사
 */
let book2: Book = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 30000,
  //   skill: 'reactjs',
};

let boo3: Book = programmingBook;

function func(book: Book) {}
func({
  name: '한 입 크기로 잘라먹는 리액트',
  price: 30000,
  //   skill: 'reactjs',
});

func(programmingBook);
