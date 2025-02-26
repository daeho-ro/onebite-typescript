/*
 * 타입스크립트의 클래스
 */

const employee = {
  name: 'John',
  age: 27,
  position: 'developer',
  work() {
    console.log('일함');
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work(): void {
    console.log('일함');
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee('Jane', 25, 'designer');
console.log(employeeB);
employeeB.work();

const employeeC: Employee = {
  name: 'John',
  age: 27,
  position: 'developer',
  work() {
    console.log('일함');
  },
};
