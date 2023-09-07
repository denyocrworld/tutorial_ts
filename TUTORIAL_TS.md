**Materi TypeScript:**

### 1. Variable (Variabel)
Variabel digunakan untuk menyimpan data. Di TypeScript, Anda dapat mendeklarasikan variabel dengan menggunakan kata kunci `let` atau `const`. TypeScript juga mendukung tipe data yang kuat.

Contoh:
```typescript
let name: string = "John";
let age: number = 30;
const PI: number = 3.14;
let isStudent: boolean = true;
let fruits: string[] = ["apple", "banana"];
let point: [number, number] = [10, 20];
```

### 2. IF Statement (Pernyataan IF)
Pernyataan `if` digunakan untuk menguji kondisi dan melakukan tindakan berdasarkan hasilnya.

Contoh:
```typescript
let age: number = 18;
if (age >= 18) {
  console.log("Anda dewasa");
} else {
  console.log("Anda anak-anak");
}
```

### 3. Array (Array)
Array digunakan untuk menyimpan kumpulan nilai dalam satu variabel. Anda dapat mendefinisikan tipe elemen array dalam TypeScript.

Contoh:
```typescript
let fruits: string[] = ["apple", "banana", "cherry"];
let numbers: number[] = [1, 2, 3, 4, 5];
let colors: Array<string> = ["red", "green", "blue"];
let emptyArray: any[] = [];
```

### 4. Object (Objek)
Objek adalah kumpulan pasangan properti dan nilai yang dapat digunakan untuk menyimpan data yang lebih terstruktur. Anda juga dapat mendefinisikan tipe objek dalam TypeScript.

Contoh:
```typescript
let person: { name: string, age: number } = {
  name: "John",
  age: 30
};
let car: { make: string, model: string, year: number } = {
  make: "Toyota",
  model: "Camry",
  year: 2020
};
```

### 5. Looping (Perulangan)
Looping digunakan untuk mengulangi tindakan tertentu berulang kali.

Contoh For Loop:
```typescript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Contoh While Loop:
```typescript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### 6. Function (Fungsi)
Fungsi adalah blok kode yang dapat dipanggil berulang kali. Anda dapat mendefinisikan tipe parameter dan tipe kembalian fungsi dalam TypeScript.

Contoh:
```typescript
function greet(name: string): void {
  console.log("Hello, " + name + "!");
}
greet("Alice");
```

### 7. Function (Named Argument)
Fungsi dengan argumen bernama memungkinkan Anda untuk mengirimkan argumen dengan menggunakan nama mereka, sehingga Anda dapat mengubah urutan argumen.

Contoh:
```typescript
function calculateArea({ width, height }: { width: number, height: number }): number {
  return width * height;
}
console.log(calculateArea({ height: 10, width: 5 }));
```

### 8. Class, Object, Constructor (Kelas, Objek, Konstruktor)
Kelas adalah cetak biru untuk objek. Objek adalah instansi dari kelas. Konstruktor adalah metode khusus yang digunakan untuk menginisialisasi objek. Anda dapat mendefinisikan tipe kelas dan tipe objek dalam TypeScript.

Contoh:
```typescript
class Person {
  constructor(public name: string, public age: number) {}
}
let person1: Person = new Person("John", 30);
let person2: Person = new Person("Alice", 25);
```

### 9. Inheritance (Pewarisan)
Pewarisan memungkinkan kelas untuk mewarisi sifat dan metode dari kelas lain. Anda dapat mendefinisikan kelas turunan dalam TypeScript.

Contoh:
```typescript
class Animal {
  constructor(public name: string) {}
  sound(): void {
    console.log("Animal makes a sound");
  }
}
class Dog extends Animal {
  sound(): void {
    console.log("Dog barks");
  }
}
let dog: Dog = new Dog("Buddy");
dog.sound(); // Output: "Dog barks"
```

### 10. Encapsulation (Enkapsulasi)
Encapsulation adalah konsep mengemas data (properti) dan metode (fungsi) dalam satu unit yang disebut objek. Anda dapat menggunakan tingkat akses (public, private, protected) dalam TypeScript untuk mengontrol akses ke properti dan metode.

Contoh:
```typescript
class Person {
  private age: number; // Variabel privat
  constructor(public name: string, age: number) {
    this.age = age;
  }
  getAge(): number {
    return this.age;
  }
}
let person: Person = new Person("John", 30);
console.log(person.getAge()); // Mengakses variabel privat
```

### 11. Polymorphism (Polimorfisme)
Polymorphism memungkinkan objek dari kelas yang berbeda untuk merespons dengan cara yang berbeda terhadap panggilan metode yang sama.

Contoh:
```typescript
class Animal {
  speak(): void {
    console.log("Animal speaks");
  }
}
class Dog extends Animal {
  speak(): void {
    console.log("Dog barks");
  }
}
class Cat extends Animal {
  speak(): void {
    console.log("Cat meows");
  }
}
let myDog: Animal = new Dog();
let myCat: Animal = new Cat();
myDog.speak(); // Output: "Dog barks"
myCat.speak(); // Output: "Cat meows"
```

### 12. Static (Statis)
Static memungkinkan Anda mengakses metode atau properti kelas tanpa harus membuat instansi objek dari kelas tersebut.

Contoh:
```typescript
class MathUtil {
  static PI: number = 3.14;
  static add(x: number, y: number): number {
    return x + y;
  }
}
console.log(MathUtil.PI); // Output: 3.14
console.log(MathUtil.add(2, 3)); // Output: 5
```

Ini adalah dasar-dasar TypeScript yang penting untuk dipahami. Anda dapat menggali lebih dalam ke setiap topik ini untuk memahaminya lebih baik.