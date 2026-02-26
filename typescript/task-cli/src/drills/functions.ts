import { error, log } from "node:console";
import { arrayBuffer } from "node:stream/consumers";

function add(a: number, b: number) {
  return a + b;
}

console.log(add(3, 4));

function dummy(): void {
  console.log(23);
  return 23;
}

dummy();

function greet(name: string, age: number = 18): void {
  if (typeof age === "number") {
    console.log(`hello, my name is ${name}, and i am ${age} years old`);
  } else {
    console.log(`hello, my name is ${name}`);
  }
}

greet("girish");
greet("girish", 23);

function sumAll(...nums: (number | string)[]): number {
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "number") {
      total += nums[i];
    }
  }

  return total;
}

console.log(sumAll(2));

console.log(sumAll(1, 3, "2"));

function toArray(x: string): string[];
function toArray(x: number): number[];

function toArray(x: string | number): string[] | number[] {
  if (typeof x === "string") {
    return [x];
  } else if (typeof x === "number") {
    return [x];
  }
}

let a = toArray("hello");
let b = toArray(23);
console.log(a, b);
console.log(toArray(true));

function parse(value: string): number;
function parse(value: number): string;

function parse(value: string | number): string | number {
  if (typeof value === "string") {
    const a = Number(value);
    return a;
  } else {
    return String(value);
  }
}

console.log(parse(23));
console.log(parse("44"));

function format(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toFixed(2);
  }
  return value ? "True" : "False";
}

function isEven(value: number): boolean {
  if (value % 2 === 0) {
    return true;
  }
  return false;
}

let i = 5;
let res = 0;
while (i > 0) {
  if (isEven(i) === true) {
    res += i;
  }
  i -= 1;
}
console.log(res);

type Action = "stop" | "start";
function controlAction(action: Action) {
  switch (action) {
    case "start":
      console.log("action started");
      break;
    // case "stop":
    //   console.log("action stopped");
    //   break;
    default:
      const exhaustive: never = action;
      return exhaustive;
  }
}

function applyTwice(fn: (x: number) => number, val: number): number {
  return fn(fn(val));
}

// function double(x: number): number {
//   return x * 2;
// }

const double = (x: number) => x * 2; //lambda function

console.log(applyTwice(double, 2));

function applyTwice1<T>(fn: (x: T) => T, val: T): T {
  return fn(fn(val));
}

console.log(applyTwice1<string>((n) => n + "Hello", "Girish"));
console.log(applyTwice1<number>((n) => n ** 2, 3));

const square = (val: number): number => val * 2;

const nums = [1, 2, 3];
const mapping = nums.map((n) => n * 3);
const filtering = nums.filter((n) => n !== 2);
const reducing = nums.reduce((sum, n) => sum + n, 0);
console.log(mapping, filtering, reducing);

const mapping1 = nums.map((n: number): number => n ** 2);

type Calculator = (a: number, b: number) => number;
type Validator = (input: string) => boolean;

const add1: Calculator = (a, b) => a + b;
const isLong: Validator = (input) => input.length > 5;

console.log(isLong("Girish"));

function add2(fn: Calculator, x: number, y: number) {
  return fn(5, fn(x, y));
}

console.log(add2(add1, 5, 7));

function processData(data: unknown): string {
  if (typeof data === "string") return data.toUpperCase();
  if (typeof data === "number") return data.toFixed(2);
  if (typeof data === "boolean") return data ? "TRUE" : "FALSE";
  return "unsupported";
}

function log(msg: string): void {
  console.log(msg);
}

function fail(msg: string): never {
  throw new Error(msg);
}

function check(value: string): string | null {
  if (typeof value === null) {
    fail("error");
  }
  return value.toUpperCase();
}

//callback
type transform<T> = (x: T) => T;

function applyToAll<T>(arr: T[], fn: transform<T>): T[] {
  return arr.map(fn);
}

const double2 = (x: number) => x * 2;
const upper = (x: string) => x.toUpperCase();

console.log(applyToAll([1, 2, 3], double2));
console.log(applyToAll(["jcejc", "vecjh", "girish"], upper));

//practical scenario

type User = {
  name: string;
  age: number;
  email: string;
};

function userValidate(user: User) {
  if (user.name.length < 3) return false;
  if (user.age < 23) return false;
  if (!user.email.includes("@")) return false;
  return true;
}

function combine(...value: string[]): string {
  return value.join(" ");
}

console.log(combine("hi", "im", "girish"));

function createConfig(
  name: string,
  port: number = 3000,
  debug: boolean = false,
) {
  return { name, port, debug };
}
