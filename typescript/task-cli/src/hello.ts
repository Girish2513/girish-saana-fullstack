console.log("Hello, typescript");

function greet(name: string, age?: number) {
  console.log("Hello, ", name);
}

greet("Girish");

greet("Girish", 23);
greet("Girish");
greet(23);
greet("Girish", "hi");

function processId(id: string | number): string {
  if (typeof id === "boolean") {
    return `boolean Id: ${id ? "True" : "False"}`;
  }
  if (typeof id === "string") {
    return `String ID: ${id.toUpperCase()}`;
  } else {
    return `Numeric ID: ${id.toFixed(2)}`;
  }
}

console.log(processId("abc"));
console.log(processId(42));
