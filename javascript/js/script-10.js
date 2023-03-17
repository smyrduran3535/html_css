/* Girilen maaş ın miktarına göre farklı oranlarda zam yapan 
programı yazınız.
1000-2000: %30
2000-4000: %15
4000+ : %5
*/

const maas = Number(prompt("Maaşınızı giriniz"));
let zam = 0;

if (maas >= 1000 && maas < 2000) {
    zam = 0.3;
}
else if (maas >= 2000 && maas < 4000) {
    zam = 0.15;
}
else if (maas >= 4000) {
    zam = 0.05;
}

const zamliMaas = maas + maas * zam;
alert("Zamlı maaşınız: $" + zamliMaas);