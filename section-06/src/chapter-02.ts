/*
 * 접근 제어자
 * Access Modifier
 *
 * public
 * private
 * protected
 */

class Employee {
  // 생성자
  constructor(private name: string, protected age: number, public position: string) {}

  // 메서드
  work(): void {
    console.log(`${this.name} 일함`);
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

  // 메서드
  func(): void {
    this.age;
    // this.name;
  }
}

const employee = new Employee('John', 27, 'developer');
// employee.name = 'Jane';
// employee.age = 25;
employee.position = 'designer';
