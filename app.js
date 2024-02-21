console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const name = {
  firstName : "Frodo"
};
let lastName = "Baggins";
var age = 50;

console.log("First Name - ", name.firstName);
console.log("Last Name - ", lastName);
console.log("Age - ", age);

// Exercise 2
name.firstName = "Samwise";
lastName = "Gamgee";
age = 39;

console.log("First Name - ", name.firstName);
console.log("Last Name - ", lastName);
console.log("Age - ", age);

// Exercise 3
let language = `"JavaScript"`;
let createdYear = 1995;
let isCaseSensitive = true;

console.log("Language - ", language);
console.log("Year created - ", createdYear);
console.log("Is the language case sensitive - ", isCaseSensitive);

// Exercise 4
let price = 19.99;
let isOnSale = false;
let salePercentage = 15;
let stock = 0;
let inStock = false;
let selectedSize = `"M"`;

console.log("Price of product - ", price);
console.log("Is it on sale - ", isOnSale);
console.log("What is the sale percentage - ", salePercentage);
console.log("What is the stock available - ", stock);
console.log("Is it in stock - ", inStock);
console.log("What is the size - ", selectedSize);

// Exercise 5
let book = {
  title : `"Name of the Wind"`,
  author : "Patrick Rothfuss",
  pageCount : 722,
  bookmark : 456,
  hasRead : true
};

console.log("Book title - ", book.title);
console.log("Author - ", book.author);
console.log("Page count - ", book.pageCount);
console.log("Bookmark - ", book.bookmark);
console.log("Have your read the book - ", book.hasRead);