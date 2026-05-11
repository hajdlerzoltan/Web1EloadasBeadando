class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} hangot ad ki.`;
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  bark() {
    return `${this.name} ugat.`;
  }
}

const dog = new Dog("Morzsi", 3);

const div = document.createElement("div");
div.innerHTML = `
  <h2>${dog.name}</h2>
  <p>${dog.speak()}</p>
  <p>${dog.bark()}</p>
`;

document.body.appendChild(div);