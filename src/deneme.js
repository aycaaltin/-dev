function Deneme() {
  const products = [
    { id: 1, name: "Laptop", stock: 10, category: "electronics", price: 1000 },
    { id: 2, name: "Mouse", stock: 0, category: "electronicks", price: 50 },
    { id: 3, name: "Apple", stock: 20, category: "grocery", price: 1 },
    { id: 4, name: "TV", stock: 2, category: "electronicks", price: 600 },
    { id: 5, name: "Bread", stock: 15, category: "grocery", price: 2 },
    {
      id: 6,
      name: "Headphones",
      stock: 5,
      category: "electronicks",
      price: 200,
    },
  ];
  const productss = products.filter((h) => h.price > 200);
  console.log(productss);

  for (i = 0; i <= products.length; i++) {
    const product = products[i];

    if (product.stock > 0) {
      console.log("ın stock");
    } else {
      console.log("OUT OF STOCK");
    }
  }

  products.forEach((product) => {
    if (product.stock > 0) {
      console.log("ın stock");
    } else {
      console.log("out of stock");
    }
  });
  //
  const inStock = products.map((product) => product.stock > 0); //stoğu  olanları filtreliyoruz
  console.log(inStock);

  const outOfstock = products.map((product) => product.stock == 0);
  console.log(outOfstock);

  const elektronik = products.map(
    (product) => product.category == "electronics"
  );
  const gida = products.map((product) => product.category == "grocery");

  const categoryProduct = {
    electronicks: [],
    grocery: [],
    other: [],
  };

  products.forEach((element) => {
    switch (element.category) {
      case "electronics":
        categoryProduct.electronicks.push(element);
        break;
      case "grocery":
        categoryProduct.grocery.push(element);
        break;
        default:
            categoryProduct.other.push(element);
            break;
    }
  });


  const kategori =products.filter(product => product.category=="electronics")

  kategori.forEach(element => {
    console.log(element.name);
  });

  return <div>deneme</div>;
}
