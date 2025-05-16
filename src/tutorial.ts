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
let temperatures: number[] = [20, 30, 40];
temperatures.push(50);

// temperatures.push('20')

let names: string[] = ["dipesh", "karan", "sahil"];
names.push("d");

let mixed: (number | string)[] = ["dipesh", 20];
mixed.push("ram");
// mixed.push(true)

//objects
let car: {
  brand: string;
  year: number;
  isElectric: boolean;
} = {
  brand: "BMW",
  year: 2020,
  isElectric: true,
};
console.log(car.brand);

let book: { title: string; cost: number } = {
  title: "1984",
  cost: 10,
};
let notebook = {
  title: "notebook",
};

let pen: { title: string; cost: number } = {
  title: "pen",
  cost: 5,
};
let stationary: { title: string; cost?: number }[] = [book, notebook, pen];
console.log(stationary);

stationary.push({ title: "pencil", cost: 2 });
console.log(stationary);

const projects: {
  readonly title: string;
  description: string;
  status: string;
} = {
  title: "jobify app",
  description: "jobify app description",
  status: "active",
};
// projects.title="my app"
projects.status = "completed";

//challenge 3

const bike: {
  brand: string;
  year: number;
} = {
  brand: "yamaha",
  year: 2020,
};

// bike.year = '2023';

const laptop: {
  brand: string;
  year: number;
} = {
  brand: "apple",
  year: 2020,
};

const juice: {
  name: string;
  cost: number | string;
} = {
  name: "orange",
  cost: 10,
};
juice.cost = "high price";
