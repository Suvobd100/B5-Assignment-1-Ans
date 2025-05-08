import { formatString } from "./1"
import { filterByRating } from "./2";
import { concatenateArrays } from "./3";
import { Car } from "./4";
import { processValue } from "./5";
import { getMostExpensiveProduct } from "./6";
import { Day, getDayType } from "./7";
import { squareAsync } from "./8";

// 1 const res = formatString('dhaka', true)
// 2 const res = filterByRating([
//     { title: "Book A", rating: 4.5 },
//     { title: "Book B", rating: 3.2 },
//     { title: "Book C", rating: 5.0 }
//   ])

// 3 const res= concatenateArrays([1, 2], [3, 4], [5])
// console.log(res);

//4 Example usage
// const myCar = new Car("Toyota", 2020, "Corolla");

// console.log(myCar.getInfo());
// console.log(myCar.getModel());


// 5 example

// const res= processValue(2)
// const res= processValue('hello')
// console.log(res);

// 6 example
// const products = [
//     { name: "Pen", price: 10 },
//     { name: "Notebook", price: 25 },
//     { name: "Bag", price: 50 }
//   ];
  
//   const res= getMostExpensiveProduct(products);  
//   // Output: { name: "Bag", price: 50 }.
//   console.log(res);


// 7 example
// const res1= getDayType(Day.Monday)
// const res2= getDayType(Day.Sunday)
// console.log(res1,res2);

// 8 example
// const result = squareAsync(-3)
const result = squareAsync(4)
.then(result => console.log(result))  // Output after 1s: 16
    .catch(err => console.error(err));
