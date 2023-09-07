class Animal {
  constructor(name) {
    this.name = name;
  }

  berlari() {
    console.log("Hewan ini berlari");
  }
}

class Dog extends Animal {
 
}
let dog = new Dog("Buddy");
dog.berlari(); // Output: "Dog barks"
