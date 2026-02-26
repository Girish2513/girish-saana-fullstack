import { log } from "node:console";
import { arrayBuffer } from "node:stream/consumers";

let username: string = "Girish";
let age: number = 23;
let isStudent: boolean = true;

let date: any = "hello";
date = "girish";
date = 12;
date = true;

let data: unknown = "Hello";
data = 3;
console.log(typeof data);

if (typeof data === "string") {
  console.log(data.toUpperCase());
}

let city: string | null = null;
city = null;
city = undefined;

const country = "India";

let country2 = "America";

function add1(a, b) {
  return a + b;
}

let score: number = 10;
score = "high";

let value: unknown = "hello";
console.log(value.length);

let a: string | number;

let x = 42;

x = "hello";
let y;
y = "hello";
y = 42;

let z: number = 22;

let value1: unknown = "hello";
let length1 = (value1 as string).length;
console.log(length1);

let value2: unknown = 43;
let length2 = (value2 as string).length;
console.log(length2);

function printLength(value: unknown) {
  if (typeof value === "string") {
    console.log(value.length);
  } else if (typeof value === "number") {
    console.log(value.toString().length);
  } else {
    console.log("Invalid");
  }
}

printLength(33);
printLength("Hello");
printLength(true);

function handleUnion(value: string | number | Date | null | unknown[]) {
  if (value === null) {
    console.log("null type");
    return;
  }
  if (Array.isArray(value)) {
    console.log(value.length);
    return;
  }
  if (value instanceof Date) {
    console.log("Date", value.toISOString());
    return;
  }
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

handleUnion("hello");
handleUnion(42);
handleUnion(new Date());
handleUnion(null);
handleUnion([1, 2, 3]);

let age1: number;
console.log(age1);

function greet(name: string): string {
  return "Hello " + name;
}

function calc(a, b) {
  return a + b;
}

function double(x: number): number {
  return x * 2;
}

const numbers: number[] = [1, 2, 3];
const names: Array<string> = ["Alice", "Bob"];

const strings: string[] = ["h", "2"];

numbers.push(23);
const mixed: Array<string | number> = ["Alice", 23];
const mixed2: (string | number)[] = [23, "23"];

const nums = [10, 20, 30];
const value3 = nums[5];
console.log(value3);

console.log(nums[10]);

function getElement(arr: number[], index: number): number | undefined {
  return arr[index];
}
const result = getElement([1, 2, 3], 5);

if (result !== undefined) {
  console.log(result.toFixed());
}

//objects
const user: { name: string; age: number; active: boolean } = {
  name: "John",
  age: 30,
  active: true,
};

user.age = "hello";

const mobile: { name: string; price: number; discount?: number } = {
  name: "vivo",
  price: 2000,
};

mobile.discount = 23;

let b: any = 23;
let c: unknown = "hello";

b.toFixed();
c.toUpperCase();
