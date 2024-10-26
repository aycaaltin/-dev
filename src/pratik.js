function pratik () {

    const numbers = [
        12, 5, 8, 20, 7, 13, 18
    ];

    const ciftSayilar = numbers.filter(num => num % 2 ===0);
    console.log(ciftSayilar);
    const karesi = [
        3, 7, 12, 5, 6, 11, 8
    ];
    const tekSayilar = karesi.filter(number => number % 2 !==0).map(number => number**2);
    console.log(tekSayilar);
    const kucuk = [
        15, 3, 9, 24, 7, 30, 1
    ];
    const kucukSayi = Math.min(...kucuk);
    console.log(kucukSayi);
    const ters = [
        45, 32, 11, 90, 23, 18
    ];
    const tersSayi = ters.reverse();
    console.log(tersSayi);
    const buyuk = [
        4, 12, 25, 8, 16, 9
    ];
    const buyukSayi = buyuk.filter(n => n>10);
    console.log("10'dan büyük sayılar", buyukSayi);
    const toplam = [
        10, 20, 30, 40, 50
    ];
    const toplamSayi = toplam.reduce((deger, toplam) => deger + toplam, 0);
    console.log(toplamSayi);
    const enBuyuk = [
        22, 56, 33, 78, 95, 44
    ];
    const enBuyukSayi = Math.max(...enBuyuk);
    console.log(enBuyukSayi);
    const ortalama = [
        15, 25, 35, 45, 55
    ];
    const top = ortalama.reduce((toplam, deger) => toplam + deger, 0);

    const ort = top / ortalama.length;

    console.log(ort);
    const numberss = [
        3, 8, 12, 18, 5, 14, 25
    ];
    const nu = numberss.filter(num => num >= 5 && num <= 15);

    console.log(nu);

    const  num = [-3, 5, -8, 12, -2, 7 ];

    const positive = num.map(n => Math.abs(n));

    console.log(positive);

    
}

export default pratik;