function ödev () {
// SORU 1
// JavaScript kodunu ayrı bir dosyada yazıp HTML sayfasına nasıl bağlarım ?
// Cevap : <script> etiketiyle bağlanır.
// Örnek :
// <script>script.js</script>

// SORU 2
// console.log , document.write farkı nedir ?
// console.log = Koddaki değerleri, sonuçları konsolda yazdırır.
// document.write = İçerikleri HTML sayfasına yazdırır.

// SORU 3
// window.location.port nedir nereyi gösterir ?
// Cevap : URL deki port numarasını döndürür.

// SORU 4
// document.getelementById nedir ? Örnek ver.
// Belirli bir id değeri ile tanımlanmış öğeye erişmek için kullanılır.
// let element = document.getelementById("myId");

// SORU 5
//<div class = "test">deneme<div> bu html'e javascript ile erişip içindeki değeri konsola yazdırın.
// <script>
// let element = document.getElementsByClassName("test");
// console.log(elements[0].textContent); // Koleksiyondaki ilk elemana erişir (eğer sadece 1 tane varsa 0 indeksiyle ulaşırız). Bu kodla ilk elemanın içeriğini alır.
// </script>

// SORU 6
// Javascriptte scope nedir ? Örnek ver.
// Bir değişkenin veya fonksiyonun erişilebilir olduğu kod bloğu anlamına gelir. Javascriptte 3 temel scope türü vardır.
// Global Scope: Kodun her yerinden erişilebilen değişkenlerin kapsamıdır.
// Örnek : let global = "Değişken";
// function globalScope () {
// console.log(global);
//}
// globalScope ();
// console.log(global);
// Function Scope: Sadece tanımlandığı fonksiyon içinde geçerli olan değişkenlerin kapsamıdır.
// Örnek : 
// function functionScope () {
// var local = "Bu fonksiyonel değişkendir."
// console.log(local);
//}
// Block Scope: Sadece tanımlandığı blok içinde geçerli olan değişkenlerin kapsamıdır.
// Örnek : if (true) {
// let block = "Bu blok içindeki bir değişkendir";
// console.log(block);
//}

// SORU 7
// Değişken tanımlamada var, let , const arasındaki farklar nelerdir ?
// var : Fonksiyon kapsamına sahiptir.Fonksiyon içinde tanımlandığında sadece o fonksiyon içinde geçerlidir. 
// let : let blok kapsamına sahiptir. Süslü parantezler arasındaki alanlarda geçerlidir. Farklı bloklarda yeniden tanımlama yapılabilir.
// const : const da let gibi blok kapsamına sahiptir ve sadece tanımlandığı blok içinde geçerlidir. Const ile tanımlanan bir değişken aynı isimle tekrar tanımlanamaz.

// SORU 8
// JavaScriptte hangi veri türleri vardır. Tek tek açıkla.
// Number : Sayılar(tamsayı ve ondalıklı)
// BigInt : Çok büyük tam sayılar
// String : Metin veya karakter dizisi
// Boolean : Mantıksal değer ( true veya false)
// Undefined : Değer atanmamış
// Null : Bilinmeyen veya değer boş
// Symbol : Benzersiz kimlikler
// Object : Karmaşık veri yapısı, anahtar-değer çiftleri

// SORU 9
// İki sayının örneğin 50 60 bu sayıları toplayıp 10 ile çıkardıktan sonra 20 ile çarpıp 5'e bölerek bir değişkene atayınız.
let x = 50;
let y = 60;

let sonuc = ( ((x + y) -10) * 20) / 5;
console.log(sonuc);

// SORU 10
// Bir sayıyı örneğin 1 tek tek nasıl arttırırız veya bir sayıyı örneğin 10 tek tek nasıl azaltırız ? Örnek veriniz.
let number = 2;
for ( let i = 2; i<10; i++) {
    number++;
    console.log(number);

}

for ( let num =100; num > 0; num -= 10 ) {
    console.log(num);
}

// SORU 11
// Atama operatörleri nelerdir 5 tanesini açıklayınız
// = : normal atama
// += : toplayarak atama. a+=6 a = a+6 ya denk.
// -= : çıkararak atama.  a-=6 a = a-6 ya denk.
// *= : çarparak atama. a*=6  a= a*6 ya denk.
// /= : bölerek atama. a/=6 a=a/6 ya denk.
// %= : mod alarak atama. a%=6 a = a%6 ya denk.

// SORU 12
// Mantıksal operatörlere örnek verirmisin
// && = and operatörü kullanım: (8<10) && (6>5) sonuc: true
// || = or operatörü kullanım: (5==5) || (6==5) sonuc: true
// ! = değil operatörü kullanım: !(5==5) sonuc: false

// string isim = "ayça";
// soyisim = "altın";
// if ( isim == "ayça" || soyisim == "tok") {
//} else {

//} burda if mi çalışır else mi ? 
// if çalışır çünkü veya operatörü kullanılmış. veya da tek bir doğru olması yeterli.

// SORU 13
// number sayi1 = 20;
// number sayi2 = 20;
// if (sayi1>=sayi2) {
// bu durumda burası çalışır. Çünkü sayi1 sayi2 ye eşit ve büyükse dediği için if çalışır.
//} else {
// sadece sayi1>sayi2 olsaydı if false olcaktı ve else bloğu çalışacaktı.
//} if mi çalışır else mi ? if çalışıyorsa else, else çalışıyorsa if nasıl yapmamız gerekir ? 


// SORU 14
// let x = 5; 
// let y = 2; bu iki değişkeni toplayarak yeni bir değişkene atayınız.

let x2 = 5;
let y2 = 2;

let toplam = (x2 + y2);
console.log(toplam);

// SORU 15
// debugger nasıl kullanılır ? 
// debugger kodun nerede hataya düştüğünü ve hangi sırayla çalıştığını görmek için kullanılır.Debugger kodun durmasını istediğimiz yere ekleyip kodun durumunu inceleyebiliriz.

// SORU 16
// javasacriptte for, foreach, do-while, while döngüleri var. for ile while , while ile do-while arasındaki fark nedir? for ile yapacağımı while ile de yapabilirmiyim?
// for döngüsünde döngünün başlangıç değeri, koşulu ve her döngü sonunda yapılacak işlemleri tek satırda yaparız.while döngüsünü ise koşulun sürekli kontrol edilmesi gereken ve döngü sayısının baştan bilinmediği durumlarda daha çok tercih edilir.
// while ile do-while farkı : while döngüsünde koşul başta kontrol edilir. koşul true ise çalışır false ise hiç çalışmaz. do-while döngüsünde döngü en az bir kez çalıştırılır sonra koşul kontrol ediliir. Koşul false bile olsa en az bir kez çalışır.
// for döngüsü ile yapılacak olan while ile de yapılabilir. sadece ek kodlar eklemek gerekebilir.

// SORU 17
// Bir sayının tersini bulan bir javascript fonksiyonu yazmak istiyoruz. Bu fonksiyon pozitif bir tam sayı alacak ve while döngüsü kullanarak bu sayının rakamlarını tersine çevirip yeni bir sayı olarak döndürecek.
// örneğin sayı 1234 ise fonksiyon 4321 döndürecek.
// fonksiyon iskeleti :
// function reverseNumber(number) {
// Bu fonksiyon while döngüsü ile sayıyı tersine çevirmeli
//}
// Bu fonksiyonu yazarken while döngüsünü nasıl kullanırız? number parametresini alıp her basamağını ters sırayla elde etmek için hangi adımları izleriz ? 
 function reverseNumber (nu) {
    let reversed = 0 ; // Ters sayıyı tutacak değişken
    let isNegative = nu < 0 ; // Sayının negatif olup olmadığını kontrol eder

    number = Math.abs(number); // Sayıyı pozitif hale getir

    while ( nu> 0) {
        let digit = nu %10; // Son basamağı al
        reversed = (reversed * 10) + digit; // Ters sayıyı güncelle
        nu = Math.floor(nu/10); // Son basamağı çıkart
    }
    return isNegative ? -reversed : reversed; // Negatifse - işaretini ekler
 }

 console.log(reverseNumber(1234)); // çıktı: 4321 

}

export default ödev;