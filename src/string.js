function string () {
const fruits = [
    "apple", "banana", "cherry", "date"
];

const meyve = fruits.map(eleman => eleman.toUpperCase());
console.log(meyve);

const words = [
    "hello", "world","javascript", "practice"
];

const uzunluk = words.map(kelime => kelime.length);
console.log(uzunluk);

const names = [
    "Alice", "Bob", "Adam", "Eve"
];

const a = names.filter(harf => harf.startsWith("A"));
console.log(a);

const cities = [
    "Berlin", "London", "Paris", "Roma"
];
cities.sort();
console.log(cities);

const animals = [
    "dog", "cat", "bird", "fish"
];

const sonuc = animals.join(" , ");
console.log(sonuc);

const countries = [
    "Germany",  "USA", "Brazil", "India", "China"
];

const uzunEleman = countries.filter(uzun => uzun.length>5);
console.log(uzunEleman);

const colors = [
    "red", "green", "blue", "yellow", "black"
];

colors.reverse();
console.log(colors);

const items = [
    "apple", "banana", "apricot", "blueberry", "avocado", "blackberry"
];

const gruplar = items.reduce((grup, eleman) => {
    (grup[eleman[0]] ||= []).push(eleman);
    return grup;
}, {});
console.log(gruplar);

const greetings = [
    "hi", "hello", "hey", "howdy"
];

const yeniDizi = greetings.map(dizi => dizi + "!");
console.log(yeniDizi);

const desserts = [
    "cake", "pie", "cookie", "donut", "eclair"

];

const eIceren = desserts.filter(e => e.includes("e"));
console.log(eIceren);


}

export default string;