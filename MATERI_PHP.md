Berikut adalah materi tentang PHP yang mencakup berbagai topik yang telah Anda sebutkan, beserta 6 contoh untuk setiap topik:

### 1. Variable (Variabel)
Variabel adalah tempat untuk menyimpan data.

Contoh:
```php
$nama = "John";
$usia = 30;
$harga = 19.99;
```

### 2. IF Statement (Pernyataan IF)
IF statement digunakan untuk mengambil keputusan berdasarkan kondisi tertentu.

Contoh:
```php
$nilai = 85;

if ($nilai >= 70) {
    echo "Lulus";
} else {
    echo "Tidak Lulus";
}
```

### 3. Array
Array adalah struktur data yang digunakan untuk menyimpan sejumlah nilai dalam satu variabel.

Contoh:
```php
$buah = array("apel", "mangga", "pisang");
$angka = array(1, 2, 3, 4, 5);
```

### 4. Associative Array (Array Asosiatif)
Associative array adalah array yang menggunakan nama kunci (key) untuk mengakses nilai.

Contoh:
```php
$siswa = array("nama" => "Alice", "usia" => 18, "kelas" => "XII");
$alamat = array("jalan" => "Jl. Merdeka", "kota" => "Jakarta");
```

### 5. Looping (Perulangan)
Looping digunakan untuk melakukan tugas yang sama berulang kali.

Contoh for-loop:
```php
for ($i = 1; $i <= 5; $i++) {
    echo "Iterasi ke-$i <br>";
}
```

### 6. Function (Fungsi)
Fungsi digunakan untuk mengelompokkan kode yang dapat digunakan kembali.

Contoh:
```php
function tambah($a, $b) {
    return $a + $b;
}

function luasPersegiPanjang($panjang, $lebar) {
    return $panjang * $lebar;
}
```

### 7. Function (Named Argument)
PHP tidak memiliki dukungan langsung untuk named argument seperti Dart, namun Anda dapat mencapainya dengan menggunakan associative array sebagai parameter.

Contoh:
```php
function printInfo($info) {
    echo "Nama: " . $info["nama"] . ", Usia: " . $info["usia"];
}

$info = array("nama" => "Bob", "usia" => 25);
printInfo($info);
```

### 8. Class, Object, Constructor
Class adalah blueprint untuk membuat objek. Objek adalah instansi dari sebuah class. Constructor digunakan untuk menginisialisasi objek.

Contoh:
```php
class Person {
    public $nama;
    public $usia;

    function __construct($nama, $usia) {
        $this->nama = $nama;
        $this->usia = $usia;
    }

    function introduce() {
        echo "Nama: " . $this->nama . ", Usia: " . $this->usia . " tahun";
    }
}

$person1 = new Person("John", 30);
$person1->introduce();
```

### 9. Inheritance (Pewarisan)
Inheritance memungkinkan class untuk mewarisi sifat dan perilaku dari class lain.

Contoh:
```php
class Animal {
    function speak() {
        echo "Hewan berbicara";
    }
}

class Dog extends Animal {
    function speak() {
        echo "Anjing menggonggong";
    }
}

$dog = new Dog();
$dog->speak();
```

### 10. Encapsulation (Enkapsulasi)
Encapsulation adalah konsep yang memungkinkan Anda untuk menyembunyikan detail implementasi dari luar class.

Contoh:
```php
class BankAccount {
    private $saldo = 1000;

    public function deposit($jumlah) {
        if ($jumlah > 0) {
            $this->saldo += $jumlah;
        }
    }

    public function withdraw($jumlah) {
        if ($jumlah > 0 && $jumlah <= $this->saldo) {
            $this->saldo -= $jumlah;
        }
    }
}
```

### 11. Polymorphism (Polimorfisme)
Polymorphism memungkinkan objek dari class yang berbeda untuk merespons dengan cara yang sama terhadap panggilan metode yang sama.

Contoh:
```php
class Animal {
    function speak() {
        echo "Hewan berbicara";
    }
}

class Dog extends Animal {
    function speak() {
        echo "Anjing menggonggong";
    }
}

class Cat extends Animal {
    function speak() {
        echo "Kucing mengeong";
    }
}

function makeAnimalSpeak($animal) {
    $animal->speak();
}

$dog = new Dog();
$cat = new Cat();

makeAnimalSpeak($dog);
makeAnimalSpeak($cat);
```

### 12. Static (Statis)
Static digunakan untuk mendefinisikan anggota class yang terkait dengan class itu sendiri, bukan dengan instansi objek.

Contoh:
```php
class MathUtils {
    public static function add($a, $b) {
        return $a + $b;
    }
}

$result = MathUtils::add(5, 3);
```

Ini adalah materi dasar tentang PHP yang mencakup berbagai konsep dan fitur yang sering digunakan dalam pemrograman dengan PHP. Anda dapat menggali lebih dalam ke masing-masing topik ini untuk memahaminya dengan lebih baik.