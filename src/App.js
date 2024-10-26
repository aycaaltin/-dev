import './App.css';
import { useEffect} from 'react';
import Pratik from './pratik';
import String from './string';

function App() {
  /*
  debugger;
  const products = [
    { id: 1, name: 'Laptop', stock: 10,
      category: 'electronics', price: 1000 },
    { id: 2, name: 'Mouse', stock: 0, 
      category: 'electronicks', price: 50 },
    { id: 3, name: 'Apple', stock: 20,
      category: 'grocery',  price: 1},
    { id: 4, name: 'TV' , stock: 2, 
      category: 'electronicks', price: 600},
    { id: 5, name: 'Bread', stock: 15,
      category: 'grocery', price: 2},
    { id: 6, name: 'Headphones', stock: 5,
      category: 'electronicks', price: 200},
];
// KATEGORİLERE İNDİRİM UYGULAMA
let discountPrice;

const discountedProducts = products.map(product => {
  switch (product.category) {
    case 'electronics':
    discountPrice = 10;
      break;
      case 'grocery':
        discountPrice = 5;
        break;
  }
  const discountedPrice = (product.price * ( 1 - discountPrice / 100)).toFixed(2);
   
  return {
    ...product,
    discountedPrice
  };
});

discountedProducts.forEach(product => {
  console.log(`${product.name}: Orijinal Fiyat : ${product.price} TL, İndirimli Fiyat : ${product.discountedPrice} TL`);

});
//KATEGORİLERDE TOPLAM ÜRÜN SAYISI
let grocery = 0;
let electronik = 0;

products.forEach (product => {
  switch(product.category) {
    case 'electronicks':
      electronik++;
      break;
      case 'grocery':
        grocery++
        break;
       
  }
});

console.log("Elektronik Ürünler: " + electronik);
console.log("Gıda: " + grocery);

//STOKTA OLMAYAN TOPLAM ÜRÜN SAYISI
const outofstockproducts = products.filter(product => product.stock === 0);
console.log(" Stokta olmayan ürün sayısı " +  outofstockproducts .length);

//FİYATI 500'DEN FAZLA OLAN ÜRÜNLER
const productss = products.filter(product => product.price > 500);
console.log("Fiyatı 500'den fazla olan ürünler: " , productss);

// STOK KONTROL
/*const categoryProduct = {
  electronicks: [],
  grocery: [],
  other: [],
};
const stockControl = (product)=> {  
  console.log(`Ürün: ${product.name}`); 

if (product.stock>0) {
  console.log("Durum: InStock");
} else {
  console.log("Durum: Out of Stock");
};
}
useEffect(() => {
  products.forEach(product => {
    switch (product.category) {
      case "electronicks":
        categoryProduct.electronicks.push(product);
        break;
      case "grocery":
        categoryProduct.grocery.push(product);
        break;
      default:
        categoryProduct.other.push(product);
  
  
    }



  
  console.log(`Ürün adı: ${product.name}`);
  console.log(`Ürün kategorisi: ${product.category}`);
  console.log(`Ürün fiyatı: ${product.price}`);

  stockControl(product);

  });

  
  
 
  //100 tl den fazla olan ürünleri listeleme
  const expensiveProducts = products.filter(product => product.price > 100);
  
    expensiveProducts.forEach((product) => {
      console.log(`Ürün adı: ${product.name}`);
      console.log(`Ürün kategorisi: ${product.category}`);
      console.log(`Ürün fiyatı: ${product.price}`);
      // foreachle tüm ürünleri listeleme
      products.forEach((product) => {
        console.log(`Ürün adı: ${product.name}`);
        console.log(`Ürün kategorisi: ${product.category}`);
        console.log(`Ürün fiyatı: ${product.price}`);
  
      })
  
    console.log(`Ürün adı: ${product.name}`);
    console.log(`Ürün kategorisi: ${product.category}`);
    console.log(`Ürün fiyatı: ${product.price}`);
  
      
  }
  , [products]); */



  return (
    <div className="App">
      <Pratik/>
      <String/>
      
    </div>
  );
}; 



export default App;
