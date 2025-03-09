"use strict";
// 1. let, const, var Arasındaki Farklar
function varExample() {
    // var örneği: Fonksiyonel scope
    if (true) {
        var x = 10;
    }
    console.log("var x:", x); // 10, çünkü var fonksiyonel scope kullanır
}
function letExample() {
    // let örneği: Blok scope
    if (true) {
        let y = 20;
        console.log("let y:", y); // 20
    }
    // console.log(y); // Error: y is not defined, çünkü let blok scope kullanır
}
function constExample() {
    // const örneği: Sabit (değiştirilemez) değer
    const z = 30;
    console.log("const z:", z); // 30
    // z = 40; // Error: Assignment to constant variable
}
console.log("1. let, const, var Farkları");
varExample();
letExample();
constExample();
// 2. Değişken Türlerini Yazdırma
console.log("\n2. Değişken Türleri");
// String
let str = "Merhaba, Dünya!";
console.log("String:", typeof str); // string
// Number
let num = 123;
console.log("Number:", typeof num); // number
// Boolean
let bool = true;
console.log("Boolean:", typeof bool); // boolean
// Undefined
let und = undefined;
console.log("Undefined:", typeof und); // undefined
// Null
let nul = null;
console.log("Null:", typeof nul); // object (JavaScript'teki bir özellik, aslında null'dur ama object olarak döner)
// Object
let obj = { name: "Ahmet", age: 25 };
console.log("Object:", typeof obj); // object
// Array
let arr = [1, 2, 3, 4];
console.log("Array:", typeof arr); // object (JavaScript'te array'ler de object türüdür)
// Function
let func = () => { console.log("Fonksiyon çalışıyor!"); };
console.log("Function:", typeof func); // function
// 3. Kullanıcıdan Prompt ile Sayı Alıp Toplama İşlemi
function toplamaIslemi() {
    // Kullanıcıdan iki sayı alıyoruz
    let sayi1 = parseFloat(prompt("Birinci sayıyı girin:") || "0");
    let sayi2 = parseFloat(prompt("İkinci sayıyı girin:") || "0");
    // Toplam hesaplayıp alert ile gösteriyoruz
    let toplam = sayi1 + sayi2;
    alert(`Toplam: ${toplam}`);
}
// Bu fonksiyon tarayıcıda çalışacaktır. Node.js'te çalışmaz.
