/*kullanıcı girmis oldugu metin uzunlugu 2 ile 50 arasında ise "merhaba " yazan
 degilse hata veren bir program yapınız */

const isim = prompt("isminizi giriniz");
if (isim.length >= 2 && isim.length <= 50) {
    alert("merhaba" + isim);
} else {
    alert("gecerli isim giriniz");
}
const isim1 = prompt("isminizi giriniz");
if (isim1.length >= 2 || isim1.length <= 50) {
    alert("merhaba" + isim1);
} else {
    alert("gecerli isim giriniz");
}