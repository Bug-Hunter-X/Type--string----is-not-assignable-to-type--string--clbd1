function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(' ');
}

let user = ["Jane", "Doe"];
let userString = "Jane Doe";

console.log(greeter(userString)); // Works
console.log(greeterArray(user)); // Works