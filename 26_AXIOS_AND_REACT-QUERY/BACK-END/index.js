import express from "express";
import { config } from "dotenv";
config();
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "all good",
  });
});

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Wooden table",
      price: "400",
      image: "https://via.placeholder.com/150/0000FF/808080?text=Product+1",
    },
    {
      id: 2,
      name: "Product 2",
      price: "500",
      image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Product+2",
    },
    {
      id: 3,
      name: "Product 3",
      price: "600",
      image: "https://via.placeholder.com/150/00FF00/000000?text=Product+3",
    },
    {
      id: 4,
      name: "Product 4",
      price: "700",
      image: "https://via.placeholder.com/150/FFFF00/000000?text=Product+4",
    },
    {
      id: 5,
      name: "Product 5",
      price: "800",
      image: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Product+5",
    },
    {
      id: 6,
      name: "Product 6",
      price: "900",
      image: "https://via.placeholder.com/150/00FFFF/000000?text=Product+6",
    },
    {
      id: 7,
      name: "Product 7",
      price: "1000",
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=Product+7",
    },
    {
      id: 8,
      name: "Product 8",
      price: "1100",
      image: "https://via.placeholder.com/150/FFFFFF/000000?text=Product+8",
    },
    {
      id: 9,
      name: "Product 9",
      price: "1200",
      image: "https://via.placeholder.com/150/808080/000000?text=Product+9",
    },
    {
      id: 10,
      name: "Tenth product",
      price: "1300",
      image: "https://via.placeholder.com/150/800000/FFFFFF?text=Product+10",
    },
  ];
  console.log(`params received: ${req.query.search}`);
  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(req.query.search.toLowerCase())
    );
    res.send(filteredProducts);
    return;
  }
  setTimeout(() => {
    res.json(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`);
});
