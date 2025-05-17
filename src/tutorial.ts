//union type
// const books=['1954','math','science']
// let foundBook:string | undefined;

// for(let book of books){
//     if(book==='1954'){
//         foundBook=book
//     }
// }

// console.log(foundBook?.length);

//challenge 2
// let orderStatus: "processing" | "shipped" | "delivered" = "processing";
// orderStatus = "delivered";
// orderStatus = "cancelled";
// console.log(orderStatus);

// let discount: number | string = 20;
// console.log(discount);
// discount = "20%";
// console.log(discount);
// discount = 20 + 30;
// console.log(discount);

//Array type
// let temperatures: number[] = [20, 30, 40];
// temperatures.push(50);

// temperatures.push('20')

// let names: string[] = ["dipesh", "karan", "sahil"];
// names.push("d");

// let mixed: (number | string)[] = ["dipesh", 20];
// mixed.push("ram");
// mixed.push(true)

//objects
// let car: {
//   brand: string;
//   year: number;
//   isElectric: boolean;
// } = {
//   brand: "BMW",
//   year: 2020,
//   isElectric: true,
// };
// console.log(car.brand);

// let book: { title: string; cost: number } = {
//   title: "1984",
//   cost: 10,
// };
// let notebook = {
//   title: "notebook",
// };

// let pen: { title: string; cost: number } = {
//   title: "pen",
//   cost: 5,
// };
// let stationary: { title: string; cost?: number }[] = [book, notebook, pen];
// console.log(stationary);

// stationary.push({ title: "pencil", cost: 2 });
// console.log(stationary);

// const projects: {
//   readonly title: string;
//   description: string;
//   status: string;
// } = {
//   title: "jobify app",
//   description: "jobify app description",
//   status: "active",
// };
// projects.title="my app"
// projects.status = "completed";

//challenge 3

// const bike: {
//   brand: string;
//   year: number;
// } = {
//   brand: "yamaha",
//   year: 2020,
// };

// bike.year = '2023';

// const laptop: {
//   brand: string;
//   year: number;
// } = {
//   brand: "apple",
//   year: 2020,
// };

// const juice: {
//   name: string;
//   cost: number | string;
// } = {
//   name: "orange",
//   cost: 10,
// };
// juice.cost = "high price";

//-----function -----

// const names: string[] = ["dipesh", "karan", "sahil", "suman", "sakshi"];

// function nameInLists(name: string): boolean {
//   return names.includes(name);
// }

// let checkName = "sudip";
// if (nameInLists(checkName)) {
//   console.log(`${checkName} is present in the list`);
// } else {
//   console.log(`${checkName} is not present in the list`);
// }

// const processInput = (input: string | number): void => {
//   if (typeof input === "number") {
//     console.log(input * 2);
//   } else {
//     console.log(input.toUpperCase());
//   }
// };

// processInput("dipesh");
// processInput(2);

const processedData = (
  input: string | number,
  config: { reversed: boolean } = {
    reversed: false,
  }
): string | number => {
  if (typeof input === "number") {
    return input ** 2;
  }
  if (typeof input === "string" && config.reversed) {
    return input.split("").reverse().join("").toUpperCase();
  }
  return input.toUpperCase();
};

console.log(processedData(2));
console.log(processedData("dipesh", { reversed: true }));
console.log(processedData("1234", { reversed: true }));
console.log(typeof processedData("1234"));

function createUsername(name: string): { id: number; username: string } {
  return {
    id: Date.now(),
    username: name.toLowerCase(),
  };
}

const user = createUsername("dipesh");
const user2 = createUsername("karan");
const user3 = createUsername("sahil");

console.log(user);
console.log(user2);
console.log(user3);

// function createStudent(student: { id: number; name: string; email?: string }) {
//   console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
// }

// const newStudent = {
//   id: 5,
//   name: "anna",
//   email: "anna@gmail.com",
// };

// createStudent(newStudent);
// createStudent({ id: 1, name: "bob", email: "bob@gmail.com" });

//type alias

// type User = {
//   id: number;
//   name: string;
//   isActive: boolean;
// };

// const john: User = {
//   id: 1,
//   name: "john",
//   isActive: true,
// };
// const susan: User = {
//   id: 1,
//   name: "susan",
//   isActive: false,
// };

// function createUser(user: User): User {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);

//   return user;
// }

// type Theme = "light" | "dark";
// let theme: Theme;
// theme = "light";

// function setTheme(t: Theme) {
//   theme = t;
// }
// setTheme("dark");

//challenge

// type Employee = {
//   id: number;
//   name: string;
//   department: string;
// };

// type Manager = {
//   id: number;
//   name: string;
//   department: string;
//   employees: Employee[];
// };

// type Staff = Employee | Manager;

// function printStaffDetails(staff: Staff): void {
//   if ("employees" in staff) {
//     console.log(
//       `${staff.name} is a manager and they manage ${staff.employees.length} employees`
//     );
//   } else {
//     console.log(
//       `${staff.name} is an employee and belongs to ${staff.department} department`
//     );
//   }
// }

// printStaffDetails({
//   id: 1,
//   name: "dipesh",
//   department: "IT",
//   employees: [{ id: 2, name: "karan", department: "IT" }],
// });

// const employee1: Employee = {
//   id: 100,
//   name: "Ramesh",
//   department: "science",
// };
// const employee2: Employee = {
//   id: 100,
//   name: "Sudip",
//   department: "Math",
// };

// const manager: Manager = {
//   id: 1000,
//   name: "Rajesh",
//   department: "science",
//   employees: [employee1, employee2],
// };

// printStaffDetails(manager);
// printStaffDetails(employee1);
// printStaffDetails(employee2);

// interface
//

// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface Dogowner {
//   dogName: string;
//   getDogDetails(): string;
// }

// const john: Person = {
//   name: "John",
//   getDetails() {
//     return `Name: ${this.name}`;
//   },
// };
// interface Employee extends Person {
//   employeeId: number;
// }
// const jane: Employee = {
//   name: "Jane",
//   employeeId: 1234,
//   getDetails() {
//     return `Name: ${this.name} and Employee ID: ${this.employeeId}`;
//   },
// };

// interface Manager extends Person, Dogowner {
//   manageEmployee(): void;
// }

// const bob: Manager = {
//   name: "Bob",
//   dogName: "Rex",
//   getDogDetails() {
//     return `Name: ${this.dogName}`;
//   },
//   getDetails() {
//     return `Name: ${this.name}`;
//   },
//   manageEmployee() {
//     console.log(`${this.name} is managing employees`);
//   },
// };

// console.log(bob.getDetails());
// bob.manageEmployee();

//challenge
// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogName: string;
// }

// interface Employee extends Person {
//   managePeople(): void;
//   delegateTasks(): void;
// }

// function getEmployee(): Person | DogOwner | Employee {
//   const randomNumber: number = Math.random();
//   if (randomNumber < 0.33) {
//     return {
//       name: "John",
//     };
//   }
//   if (randomNumber < 0.66) {
//     return {
//       name: "Jane",
//       dogName: "Rex",
//     };
//   }
//   return {
//     name: "John",
//     managePeople: () => {
//       console.log("Managing people");
//     },
//     delegateTasks: () => {
//       console.log("Delegating tasks");
//     },
//   };
// }
// const employee = getEmployee();
// console.log(employee);

// function isManager(person: Person | DogOwner | Employee): person is Employee {
//   return "managePeople" in person;
// }

// if (isManager(employee)) {
//   employee.delegateTasks();
// } else {
//   console.log("Not a manager");
// }

// tupules and enums

// enum UserRole {
//   ADMIN,
//   USER,
//   EMPLOYEE,
// }

// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   contact: [string, string];
// };

// const user1: User = {
//   id: 1,
//   name: "John",
//   role: UserRole.ADMIN,
//   contact: ["1234567890", "9876543210"],
// };

// function createUser(user: User): User {
//   return user;
// }

// const result = createUser(user1);

// console.log(result);

// let person: [string, number] = ["john", 25];
// console.log(person[0]); // Outputs: john
// console.log(person[1]); // Outputs: 25

// let john: [string, number?] = ["john"];

// function getPerson(): [string, number] {
//   return ["john", 25];
// }

// enum ServerResponse {
//   SUCCESS = 200,
//   ERROR = 404,
//   FORBIDDEN = 403,
//   NOT_FOUND = 404,
//   INTERNAL_SERVER_ERROR = 500,
// }

// console.log(ServerResponse);
// type ServerResponseData = {
//   status: ServerResponse;
//   data: string[];
// };

// function getResponseData(): ServerResponseData {
//   return {
//     status: ServerResponse.SUCCESS,
//     data: ["data1", "data2", "data3"],
//   };
// }

// const response = getResponseData();
// console.log(response);

//

// enum Color {
//   RED,
//   GREEN,
//   BLUE,
//   YELLOW,
// }
// function getColors(color: Color) {
//   switch (color) {
//     case Color.RED:
//       return "red";
//     case Color.GREEN:
//       return "green";
//     case Color.BLUE:
//       return "blue";
//     case Color.YELLOW:
//       return "yellow";
//     default:
//       let unexpected: never = color;
//       return unexpected;
//   }
// }

// const result = getColors(Color.RED);

// console.log(result);

// let unknownValue: unknown;
// unknownValue = "Hello";

// let strLength = (unknownValue as string).length;
// console.log(strLength);

// if (typeof unknownValue === "string") {
//   console.log(unknownValue.toUpperCase());
// }

// import student1, { person, type Student } from "./example";
// console.log(student1);
// console.log(person);

// import data from "./data";
// console.log(data);

//type guarding
// type ValueType = string | number | boolean;

// const random = Math.random();

// let result: ValueType = random < 0.3 ? "hello" : random < 0.5 ? 10 : true;
// console.log(result);

// function checkValue(value: ValueType): ValueType {
//   if (typeof result === "string") {
//     return result.toUpperCase();
//   } else if (typeof result === "number") {
//     return result * 10;
//   }
//   return !result;
// }

// console.log(checkValue(result));

// type Student = {
//   name: string;
//   study: () => void;
// };

// type User = {
//   name: string;
//   login: () => void;
// };

// type Person = Student | User;

// const randomPerson = (): Person => {
//   return Math.random() > 0.5
//     ? { name: "john", study: () => console.log("Studying") }
//     : { name: "mary", login: () => console.log("Logging in") };
// };

// // const person = randomPerson();
// const person = {
//   name: "john",
//   login: () => console.log("studying"),
// };

// function isStudent(person: Person): person is Student {
//   return (person as Student).study !== undefined;
// }

// if (isStudent(person)) {
//   person.study();
// } else {
//   person.login();
// }

// type IncrementAction = {
//   type: "increment";
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type DecrementAction = {
//   type: "decrement";
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type Action = IncrementAction | DecrementAction;

// function reducer(state: number, action: Action): number {
//   switch (action.type) {
//     case "increment":
//       return state + action.amount;
//     case "decrement":
//       return state - action.amount;
//     default:
//       let unexpected: never = action;
//       throw new Error(`Unexpected action type: ${unexpected}`);
//   }
// }
// const newState = reducer(10, {
//   type: "increment",
//   amount: 20,
//   timestamp: Date.now(),
//   user: "dipesh",
// });

// console.log(newState);

//generics

function createArray<T>(length: number, value: T): T[] {
  return Array.from({ length }, () => value);
}

const numbers = createArray<number>(5, 1);
console.log(numbers);

const strings = createArray<string>(5, "hello");
console.log(strings);

function genericFunction<T>(arg: T): T {
  return arg;
}
const result = genericFunction<number>(10);
console.log(result);
const result2 = genericFunction<string>("hello");

function getString<T extends string>(arg: T): T {
  return arg;
}

const result3 = getString<string>("hello");
console.log(result3);

// let array1: string[] = ["apple", "banana", "orange"];
// let array2: number[] = [1, 2, 3, 4, 5];
// let array3: boolean[] = [true, false, true];

// let array2: Array<string> = ["apple", "banana", "orange"];

// function createString(arg: string): string {
//   return arg;
// }
// function createNumber(arg: number): number {
//   return arg;
// }

// function createBoolean(arg: boolean): boolean {
//   return arg;
// }

// function genericFunction1<T>(arg: T): T {
//   return arg;
// }

// const result4 = genericFunction1<string>("hello");
// console.log(result4);

// interface GenericValue<T> {
//   value: T;
//   getValue(): T;
// }

// const genericSting: GenericValue<string> = {
//   value: "hello",
//   getValue() {
//     return this.value;
//   },
// };

// //promise function
// async function someFunc(): Promise<string> {
//   return "Hello World";
// }

// const result5 = someFunc();

// function processValue<T extends number | string>(value: T): T {
//   return value;
// }

// processValue("hello");
// processValue(12);
// // processValue(true);

// type Car = {
//   brand: string;
//   model: string;
// };

// const car: Car = {
//   brand: "ford",
//   model: "mustang",
// };

// type Product = {
//   name: string;
//   price: number;
// };

// const product: Product = {
//   name: "shoes",
//   price: 1.99,
// };

// type Student = {
//   name: string;
//   age: number;
// };

// const student: Student = {
//   name: "peter",
//   age: 20,
// };

// function printName<T extends Student>(input: T): string {
//   return input.name;
// }

// const url = "https://www.course-api.com/react-tours-project";
// type Tour = {
//   id: string;
//   name: string;
//   info: string;
//   image: string;
//   price: string;
// };
// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const response = await fetch(url);

//     // Check if the request was successful.
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     const errMsg =
//       error instanceof Error ? error.message : "there was an error...";
//     console.error(errMsg);
//     // throw error;
//     return [];
//   }
// }
// const tours = fetchData(url);

class Book {
  title: string;
  author: string;
  checkout: boolean;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    this.checkout = false;
  }
}

const book = new Book("The Great Gatsby", "F. Scott Fitzgerald");
console.log(book);
