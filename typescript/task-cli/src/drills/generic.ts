function identity<T>(arg: T): T {
  return arg;
}
const a = identity(5);
const b = identity("hello");
const c = identity({ x: 1 });

const s = identity<string>("hello");

function identity1(arg: any): any {
  return arg;
}
const x = identity(5);
// x.toUpperCase();

function first<T>(arr: T[]): T | undefined {
  return arr[0];
}
first([1, 2, 3]);
first(["a", "b"]);
first([1, "two"]);

function lengthOf<T extends { length: number }>(x: T): number {
  return x.length;
}

lengthOf("hello");
lengthOf([1, 2, 3]);
lengthOf({ length: 10 });
// lengthOf(123);

interface HasId {
  id: string;
}

interface HasName {
  name: string;
}
function printEntity<T extends HasId & HasName>(obj: T): void {
  console.log(obj.id, obj.name);
}
printEntity({ id: "1", name: "Girish" });
// printEntity({ id: "12" });

//default type parameters
type ApiResponse<T = unknown> = {
  status: number;
  data: T;
};
const res1: ApiResponse<string> = {
  status: 200,
  data: "Success",
};
const res2: ApiResponse = {
  status: 200,
  data: "Something",
};

//keyof
type Keys<T> = keyof T;

interface User {
  id: string;
  age: number;
}

type userkeys = Keys<User>;

//lookup type
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: "abc", age: 25 };
const id = getProp(user, "age");
const age = getProp(user, "id");
console.log(id, age);

//mapped types
type ReadOnly<T> = { readonly [K in keyof T]: T[K] };
type ReadonlyUser = Readonly<User>;
const u: ReadonlyUser = { id: "1", age: 20 };

u.id = "2";

//partial type
type Partial1<T> = {
  [K in keyof T]?: T[K];
};
type PartialUser = Partial1<User>;
const u1: PartialUser = { id: "1", age: 20 };

//conditional type
type IsString<T> = T extends string ? true : false;
type A = IsString<string>;
type B = IsString<number>;

type ElementType<T> = T extends (infer U)[] ? U : T;
type A1 = ElementType<string[]>;
type B1 = ElementType<number[]>;
type C1 = ElementType<boolean>;

//Record in dict

const scores1: Record<string, number> = {
  math: 90,
  science: 85,
};

//pick and omit
type User1 = {
  id: string;
  name: string;
  age: number;
};

type OnlyId = Pick<User1, "id">;
type NoAge = Omit<User1, "age">;

//combine with generics
function pluck<T, K extends keyof T>(objs: T[], key: K): T[K][] {
  return objs.map((o) => o[key]);
}
const users = [
  { id: "1", age: 20 },
  { id: "2", age: 25 },
];

pluck(users, "id");
pluck(users, "age");
