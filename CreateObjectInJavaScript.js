const person = {
    name: "Shiv",
    age: 20,
    city: "Agra",
    introduce: function() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old. I'm from ${this.city}.`;
    }
};

console.log(person.introduce());
console.log(person.age);
console.log(person.city);

