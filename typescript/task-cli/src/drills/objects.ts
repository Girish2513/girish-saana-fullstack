type person = {
  name: string;
  age: number;
  readonly id: string;
  middlename?: string;
};

let person1: person = {
  name: "girish",
  age: 23,
  id: "hello",
};

console.log(person1.middlename?.toUpperCase());

person1.id = "hxhe";

interface Car {
  make: string;
  model: string;
}
type Bike = {
  make: string;
  gears: number;
};

interface ElectricCar extends Car {
  batterycapacity: number;
}

type ElectricBike = Bike & {
  batterycapacity: number;
};

interface Dictionary {
  [key: string]: string | number;
}

const dict: Dictionary = {
  en: "Hello",
  fn: "bonjour",
  hindi: 23,
};

type partialPerson = Partial<person>;

type picknamePerson = Pick<person, "name">;
type omitagePerson = Omit<person, "age">;
type partialomitageperson = Partial<Omit<person, "age">>;

interface Employee extends person {
  role: string;
  department?: string;
}

const Employee1: Employee = {
  name: "Girish",
  age: 23,
  role: "SDE",
  id: "A6",
};

function printPerson(p: person) {
  console.log(p.name, p.age);
}

printPerson({
  name: "Girish",
  age: 23,
  id: "A6",
  work: "Hyd",
});
const obj = {
  name: "Girish",
  age: 22,
  city: "Hyderabad",
  id: "23",
};
printPerson(obj);

const prices: Record<string, number> = {
  apple: 100,
  banana: 50,
};

console.log(prices["apple"]);

const people = new Map<string, person>();
people.set("User1", { name: "Girish", age: 23, id: "A6" });
people.set("User2", { name: "random", age: 23, id: "random" });
console.log(people.get("User1"));
