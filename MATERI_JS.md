**Materi JavaScript:**

### 1. Variable (Variabel)
Variabel digunakan untuk menyimpan data. Di JavaScript, Anda dapat mendeklarasikan variabel dengan menggunakan kata kunci `let`.

Contoh:
```javascript
let name = "John";
let age = 30;
const PI = 3.14;
let isStudent = true;
let fruits = ["apple", "banana"];
let point = [10, 20];
```

### 2. IF Statement (Pernyataan IF)
Pernyataan `if` digunakan untuk menguji kondisi dan melakukan tindakan berdasarkan hasilnya.

Contoh:
```javascript
let age = 18;
if (age >= 18) {
  console.log("Anda dewasa");
} else {
  console.log("Anda anak-anak");
}
```

### 3. Array (Array)
Array digunakan untuk menyimpan kumpulan nilai dalam satu variabel.

Contoh:
```javascript
let fruits = ["apple", "banana", "cherry"];
let numbers = [1, 2, 3, 4, 5];
let colors = ["red", "green", "blue"];
let emptyArray = [];
```

### 4. Object (Objek)
Objek adalah kumpulan pasangan properti dan nilai yang dapat digunakan untuk menyimpan data yang lebih terstruktur.

Contoh:
```javascript
let person = { name: "John", age: 30 };
let car = { make: "Toyota", model: "Camry", year: 2020 };
```

### 5. Looping (Perulangan)
Looping digunakan untuk mengulangi tindakan tertentu berulang kali.

Contoh For Loop:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Contoh While Loop:
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### 6. Function (Fungsi)
Fungsi adalah blok kode yang dapat dipanggil berulang kali.

Contoh:
```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice");
```

### 7. Function (Named Argument)
Fungsi dengan argumen bernama memungkinkan Anda untuk mengirimkan argumen dengan menggunakan nama mereka, sehingga Anda dapat mengubah urutan argumen.

Contoh:
```javascript
function calculateArea({ width, height }) {
  return width * height;
}
console.log(calculateArea({ height: 10, width: 5 }));
```

### 8. Class, Object, Constructor (Kelas, Objek, Konstruktor)
Kelas adalah cetak biru untuk objek. Objek adalah instansi dari kelas. Konstruktor adalah metode khusus yang digunakan untuk menginisialisasi objek.

Contoh:
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let person1 = new Person("John", 30);
let person2 = new Person("Alice", 25);
```

### 9. Inheritance (Pewarisan)
Pewarisan memungkinkan kelas untuk mewarisi sifat dan metode dari kelas lain.

Contoh:
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    console.log("Animal makes a sound");
  }
}
class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}
let dog = new Dog("Buddy");
dog.sound(); // Output: "Dog barks"
```

### 10. Encapsulation (Enkapsulasi)
Encapsulation adalah konsep mengemas data (properti) dan metode (fungsi) dalam satu unit yang disebut objek.

Contoh:
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}
let person = new Person("John", 30);
console.log(person.getAge());
```

### 11. Polymorphism (Polimorfisme)
Polymorphism memungkinkan objek dari kelas yang berbeda untuk merespons dengan cara yang berbeda terhadap panggilan metode yang sama.

Contoh:
```javascript
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}
let myDog = new Dog();
let myCat = new Cat();
myDog.speak(); // Output: "Dog barks"
myCat.speak(); // Output: "Cat meows"
```

### 12. Static (Statis)
Static memungkinkan Anda mengakses metode atau properti kelas tanpa harus membuat instansi objek dari kelas tersebut.

Contoh:
```javascript
class MathUtil {
  static PI = 3.14;
  static add(x, y) {
    return x + y;
  }
}
console.log(MathUtil.PI); // Output: 3.14
console.log(MathUtil.add(2, 3)); // Output: 5
```

Ini adalah dasar-dasar JavaScript yang penting untuk dipahami. Anda dapat menggali lebih dalam ke setiap topik ini untuk memahaminya lebih baik.