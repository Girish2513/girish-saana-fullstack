function greet(name: string) {
  return `hello ${name}`;
}

console.log(greet("Namaste"));

console.log(greet("hi"));

// const arr = ["a", "b"];
// console.log(arr[2].toUpperCase());

setTimeout(() => {
  console.log("Delayed");
}, 3000);
