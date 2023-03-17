const sayi = Number(prompt("Bir sayı giriniz"));
/*
 Javascript te === veya !== ifadelerinde hem değer hem tip kontrolü yapılır
 == veya != ifadelerinde ise sadece değer kontrolü yapılır.
 "0" !== 0   => true
 "0" != 0    => false
 "0" === 0   => false
 "0" == 0    => true
*/
if (sayi != 0) {
    const sonuc = 50 / sayi;
    alert("Sonuç:" + sonuc);
}