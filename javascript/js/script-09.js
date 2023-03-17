/*kullanıcı girmis oldugu metin uzunlugu 2 ile 50 arasında ise "merhaba " yazan
 degilse hata veren bir program yapınız */

const boy = Number(prompt("boyunuzu giriniz;mt"));
const kilo = Number(prompt("kilonuzu giriniz;kg"));
const vki = kilo / boy ** 2;
if (vki >= 18.5 && vki <= 25) {
    alert("kilonuz ideal");
} else {
    alert("kilonuz ideal degil");
}
