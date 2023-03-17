/* Klavyeden girilen bir sayının 
3 ve 5’e tam bölünebilme durumunu gösteren
 programı yazınız
*/
const sayi = Number(prompt("Sayı giriniz"));
const kalan3 = sayi % 3;
const kalan5 = sayi % 5;
if (kalan3 === 0 && kalan5 === 0) {
    alert("Sayı 3'e ve 5'e tam bölünür");
}
else if (kalan3 === 0) {
    alert("Sayı sadece 3'e tam bölünür");
}
else if (kalan5 === 0) {
    alert("Sayı sadece 5'e tam bölünür")
}
else {
    alert("Sayı 3'e ve 5'e tam bölünüemez");
}
