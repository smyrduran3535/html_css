/*
 girilen 2 sayının ortalamasını hesaplayan ve sonucunu 
 prompt:herseyi string olarak algılar
 
 donusumu soyle yaparız integer icin;
 const sayi1 =  Number(prompt("1.sayıyı girinizi"));
 YADA
 sayi1=Number(sayi1);
 */
const sayi1 = prompt("1.sayıyı girinizi");
const sayi2 = prompt("2.sayıyı girinizi");

const sonuc = (sayi1 + sayi2) / 2;

alert("2 sayının ortalaması :" + sonuc);