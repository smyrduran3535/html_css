const sayi1 = Number(prompt("1sayıyı giriniz"));
const sayi2 = Number(prompt("2sayıyı giriniz"));
const sayi3 = Number(prompt("3sayıyı giriniz"));
const ort = (sayi1 + sayi2 + sayi3) / 3;
if (ort > sayi1) {
    alert((ort - sayi1) + " tl Kar ettiniz");
} else {
    alert("Zarar");
}