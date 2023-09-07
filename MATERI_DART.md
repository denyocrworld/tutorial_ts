Berikut adalah materi tentang Dart yang mencakup berbagai topik yang telah Anda sebutkan, beserta 6 contoh untuk setiap topik:

### 1. Variable (Variabel)
Variabel adalah tempat untuk menyimpan data. Di Dart, Anda dapat mendeklarasikan variabel menggunakan tipe data tertentu atau menggunakan tipe data dinamis (var).

Contoh:
```dart
// Variabel dengan tipe data eksplisit
int age = 25;
double price = 19.99;
String name = 'John';

// Variabel dengan tipe data dinamis
var score = 95;
var isStudent = true;
var greeting = 'Hello';
```

### 2. IF Statement (Pernyataan IF)
IF statement digunakan untuk mengambil keputusan berdasarkan kondisi tertentu.

Contoh:
```dart
int x = 10;

if (x > 5) {
  print('x lebih besar dari 5');
} else {
  print('x tidak lebih besar dari 5');
}
```

### 3. List (Daftar)
List adalah kumpulan elemen yang dapat diakses secara terurut.

Contoh:
```dart
List<int> numbers = [1, 2, 3, 4, 5];
List<String> fruits = ['apple', 'banana', 'cherry'];
```

### 4. Map (Peta)
Map adalah kumpulan pasangan key-value yang digunakan untuk menyimpan data terstruktur.

Contoh:
```dart
Map<String, int> scores = {
  'John': 95,
  'Alice': 88,
  'Bob': 72,
};

Map<String, String> colors = {
  'red': '#FF0000',
  'blue': '#0000FF',
};
```

### 5. Looping (Perulangan)
Looping digunakan untuk melakukan tugas yang sama berulang kali. Dart mendukung perulangan for dan while.

Contoh for-loop:
```dart
for (int i = 1; i <= 5; i++) {
  print('Iterasi ke-$i');
}
```

### 6. Function (Fungsi)
Fungsi digunakan untuk mengelompokkan kode yang dapat digunakan kembali.

Contoh:
```dart
int add(int a, int b) {
  return a + b;
}

double calculateArea(double radius) {
  return 3.14 * radius * radius;
}
```

### 7. Function (Named Argument)
Named argument memungkinkan Anda untuk memanggil fungsi dengan menyebutkan nama parameter saat memanggilnya.

Contoh:
```dart
void printInfo({String name, int age}) {
  print('Nama: $name, Usia: $age');
}

printInfo(name: 'Alice', age: 30);
```

### 8. Class, Object, Constructor
Class adalah blueprint untuk membuat objek. Objek adalah instansi dari sebuah class. Constructor digunakan untuk menginisialisasi objek.

Contoh:
```dart
class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void introduce() {
    print('Nama: $name, Usia: $age tahun');
  }
}

var person1 = Person('John', 25);
person1.introduce();
```

### 9. Inheritance (Pewarisan)
Inheritance memungkinkan class untuk mewarisi sifat dan perilaku dari class lain.

Contoh:
```dart
class Animal {
  void speak() {
    print('Hewan berbicara');
  }
}

class Dog extends Animal {
  @override
  void speak() {
    print('Anjing menggonggong');
  }
}

var dog = Dog();
dog.speak();
```

### 10. Encapsulation (Enkapsulasi)
Encapsulation adalah konsep yang memungkinkan Anda untuk menyembunyikan detail implementasi dari luar class.

Contoh:
```dart
class BankAccount {
  double _balance = 1000;

  double get balance => _balance;

  void deposit(double amount) {
    if (amount > 0) {
      _balance += amount;
    }
  }

  void withdraw(double amount) {
    if (amount > 0 && amount <= _balance) {
      _balance -= amount;
    }
  }
}
```

### 11. Polymorphism (Polimorfisme)
Polymorphism memungkinkan objek dari class yang berbeda untuk merespons dengan cara yang sama terhadap panggilan metode yang sama.

Contoh:
```dart
class Animal {
  void speak() {
    print('Hewan berbicara');
  }
}

class Dog extends Animal {
  @override
  void speak() {
    print('Anjing menggonggong');
  }
}

class Cat extends Animal {
  @override
  void speak() {
    print('Kucing mengeong');
  }
}

void makeAnimalSpeak(Animal animal) {
  animal.speak();
}

var dog = Dog();
var cat = Cat();

makeAnimalSpeak(dog);
makeAnimalSpeak(cat);
```

### 12. Static (Statis)
Static digunakan untuk mendefinisikan anggota class yang terkait dengan class itu sendiri, bukan dengan instansi objek.

Contoh:
```dart
class MathUtils {
  static int add(int a, int b) {
    return a + b;
  }
}

var result = MathUtils.add(5, 3);
```

Ini adalah materi dasar tentang Dart yang mencakup berbagai konsep dan fitur yang sering digunakan dalam pemrograman dengan Dart. Anda dapat menggali lebih dalam ke masing-masing topik ini untuk memahami mereka dengan lebih baik.