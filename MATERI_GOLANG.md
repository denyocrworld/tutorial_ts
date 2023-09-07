Berikut adalah materi tentang Go (Golang) yang mencakup berbagai topik yang telah Anda sebutkan, beserta 6 contoh untuk setiap topik:

### 1. Variable (Variabel)
Variabel adalah tempat untuk menyimpan data.

Contoh:
```go
var name string = "John"
var age int = 30
var price float64 = 19.99
```

### 2. IF Statement (Pernyataan IF)
IF statement digunakan untuk mengambil keputusan berdasarkan kondisi tertentu.

Contoh:
```go
x := 10

if x > 5 {
    fmt.Println("x lebih besar dari 5")
} else {
    fmt.Println("x tidak lebih besar dari 5")
}
```

### 3. List (Slice)
List di Go disebut sebagai "slice," dan digunakan untuk menyimpan sejumlah nilai dalam satu variabel.

Contoh:
```go
fruits := []string{"apel", "mangga", "pisang"}
numbers := []int{1, 2, 3, 4, 5}
```

### 4. Map (Peta)
Map adalah kumpulan pasangan key-value yang digunakan untuk menyimpan data terstruktur.

Contoh:
```go
scores := map[string]int{
    "John": 95,
    "Alice": 88,
    "Bob": 72,
}

colors := map[string]string{
    "red": "#FF0000",
    "blue": "#0000FF",
}
```

### 5. Looping (Perulangan)
Go mendukung perulangan dengan menggunakan `for` sebagai satu-satunya bentuk perulangan.

Contoh for-loop:
```go
for i := 1; i <= 5; i++ {
    fmt.Printf("Iterasi ke-%d\n", i)
}
```

### 6. Function (Fungsi)
Fungsi digunakan untuk mengelompokkan kode yang dapat digunakan kembali.

Contoh:
```go
func add(a, b int) int {
    return a + b
}

func calculateArea(radius float64) float64 {
    return 3.14 * radius * radius
}
```

### 7. Function (Named Argument)
Go tidak mendukung named argument seperti Dart atau beberapa bahasa lain. Fungsi biasanya menggunakan urutan parameter.

### 8. Struct, Object, Constructor
Dalam Go, objek biasanya direpresentasikan dengan menggunakan "struct" sebagai tipe data kustom.

Contoh:
```go
type Person struct {
    Name string
    Age  int
}

func main() {
    person1 := Person{Name: "John", Age: 30}
    fmt.Printf("Nama: %s, Usia: %d tahun\n", person1.Name, person1.Age)
}
```

### 9. Inheritance (Pewarisan)
Go tidak mendukung konsep pewarisan seperti beberapa bahasa pemrograman lainnya. Sebaliknya, Go menggunakan komposisi dan antarmuka (interface) untuk mencapai abstraksi dan polimorfisme.

### 10. Encapsulation (Enkapsulasi)
Go tidak memiliki kata kunci seperti "private" atau "public" untuk mengatur akses ke anggota struct. Aksesibilitas ditentukan oleh huruf besar atau kecil pada nama anggota (huruf besar membuatnya publik).

### 11. Polymorphism (Polimorfisme)
Go mendukung polimorfisme melalui penggunaan interface, yang memungkinkan berbagai jenis struct untuk mengimplementasikan metode yang sama.

Contoh:
```go
type Animal interface {
    Speak() string
}

type Dog struct{}

func (d Dog) Speak() string {
    return "Anjing menggonggong"
}

type Cat struct{}

func (c Cat) Speak() string {
    return "Kucing mengeong"
}

func main() {
    animals := []Animal{Dog{}, Cat{}}
    for _, animal := range animals {
        fmt.Println(animal.Speak())
    }
}
```

### 12. Static (Statis)
Go tidak memiliki konsep "static" seperti beberapa bahasa pemrograman lainnya. Namun, Anda dapat menggunakan package-level variables dan functions untuk mencapai efek yang mirip.

Contoh:
```go
package math

var Pi = 3.14

func Add(a, b int) int {
    return a + b
}
```

Ini adalah materi dasar tentang Go (Golang) yang mencakup berbagai konsep dan fitur yang sering digunakan dalam pemrograman dengan Go. Anda dapat menggali lebih dalam ke masing-masing topik ini untuk memahaminya dengan lebih baik.