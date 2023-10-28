// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price
const logReceipt = (...items) => {
  let total = 0;
  items.forEach((item) => {
    total += item.price;
    console.log(item.descr);
    console.log(total);
  });
};

//start at the first item and go through them one by one execute some logic

const obj1 = { descr: "Pad Thai", price: 12.99 };
const obj2 = { descr: "Pizza", price: 20.99 };
const obj3 = { descr: "Tacos", price: 5.99 };
const obj4 = { descr: "Soda", price: 1.99 };
console.log(obj1, obj2, obj3, obj4);
console.log(logReceipt(obj1, obj2, obj3, obj4));

// Check
logReceipt(
  { descr: "Burrito", price: 5.99 },
  { descr: "Chips & Salsa", price: 2.99 },
  { descr: "Sprite", price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
