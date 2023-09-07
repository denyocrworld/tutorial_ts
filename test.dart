class Person {
  String name;
  int age;
  Person(
    this.name,
    this.age,
  );

  getAge() {
    return age;
  }
}

var person = Person("John", 30);
