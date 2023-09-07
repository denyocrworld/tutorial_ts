Tentu, berikut adalah materi tentang Dart yang mencakup topik-topik yang Anda sebutkan, dengan penggunaan `let`:

## Variable
Variabel adalah tempat untuk menyimpan data. Di Dart, Anda dapat mendefinisikan variabel menggunakan `let` dan menentukan tipe datanya jika diperlukan. Berikut adalah beberapa contoh:

```dart
let name = "John";
let age = 30;
let isStudent = true;
let salary = 5000.0;
```

## IF Statement
Pernyataan `if` digunakan untuk mengontrol alur program berdasarkan kondisi tertentu. Berikut contoh-contoh penggunaannya:

```dart
let isRaining = true;

if (isRaining) {
  print("Bawa payung!");
} else {
  print("Cuaca cerah.");
}
```

## List
List adalah kumpulan elemen yang dapat diubah-ubah. Dart memiliki dua jenis list: `List` dan `List<dynamic>`. Berikut contoh-contoh penggunaannya:

```dart
let fruits = ["apple", "banana", "cherry"];
let numbers = [1, 2, 3, 4, 5];
```

## Map
Map adalah kumpulan pasangan kunci-nilai. Setiap kunci hanya dapat muncul sekali dalam map. Berikut contoh-contoh penggunaannya:

```dart
let person = {
  "name": "Alice",
  "age": 25,
  "city": "New York"
};

let grades = {
  "math": 90,
  "history": 80,
  "science": 95
};
```

## Looping
Dart memiliki berbagai jenis loop, termasuk `for`, `while`, dan `do-while`. Berikut contoh-contoh penggunaannya:

```dart
for (let i = 0; i < 5; i++) {
  print("Iterasi ke-${i + 1}");
}

let count = 0;
while (count < 3) {
  print("Perulangan ke-${count + 1}");
  count++;
}
```

## Function
Fungsi digunakan untuk mengelompokkan kode yang dapat digunakan kembali. Berikut contoh-contoh penggunaannya:

```dart
let add = (int a, int b) {
  return a + b;
};

let greet = (String name) {
  print("Hello, $name!");
};
```

## Function (Named Argument)
Anda dapat menggunakan argumen bernama dalam fungsi untuk memberikan nilai ke parameter tertentu. Berikut contoh-contoh penggunaannya:

```dart
let printInfo = ({String name, int age, String city}) {
  print("Name: $name, Age: $age, City: $city");
};

printInfo(name: "Bob", age: 30, city: "Chicago");
```

## Class, Object, Constructor
Dart mendukung pemrograman berorientasi objek. Anda dapat membuat class, objek, dan konstruktor. Berikut contoh-contoh penggunaannya:

```dart
class Person {
  String name;
  int age;

  Person(this.name, this.age);
}

let person1 = Person("Alice", 25);
let person2 = Person("Bob", 30);
```

## Inheritance
Dart mendukung pewarisan antar kelas. Kelas anak dapat mewarisi properti dan metode dari kelas induk. Berikut contoh-contoh penggunaannya:

```dart
class Animal {
  String name;

  Animal(this.name);

  void speak() {
    print("$name makes a sound.");
  }
}

class Dog extends Animal {
  Dog(String name) : super(name);

  @override
  void speak() {
    print("$name barks!");
  }
}
```

## Encapsulation
Encapsulation adalah konsep menyembunyikan detail implementasi dari luar kelas. Anda dapat menggunakan getter dan setter dalam Dart. Berikut contoh-contoh penggunaannya:

```dart
class Person {
  String _name;

  String get name => _name;

  set name(String newName) {
    if (newName.isNotEmpty) {
      _name = newName;
    }
  }

  Person(this._name);
}
```

## Polymorphism
Polymorphism memungkinkan objek dari kelas yang berbeda untuk digunakan dengan cara yang serupa. Berikut contoh-contoh penggunaannya:

```dart
class Animal {
  void speak() {
    print("Animal makes a sound.");
  }
}

class Dog extends Animal {
  @override
  void speak() {
    print("Dog barks!");
  }
}

void makeAnimalSpeak(Animal animal) {
  animal.speak();
}
```

## Static
Variabel atau metode statis milik kelas, bukan objek. Mereka dapat diakses tanpa membuat objek. Berikut contoh-contoh penggunaannya:

```dart
class MathUtils {
  static int add(int a, int b) {
    return a + b;
  }
}

let result = MathUtils.add(5, 3);
```

Semoga materi ini membantu Anda memahami dasar-dasar Dart!