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
let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "delivered";
// orderStatus = "cancelled";
console.log(orderStatus);

let discount: number | string = 20;
console.log(discount);
discount = "20%";
console.log(discount);
discount = 20 + 30;
console.log(discount);
