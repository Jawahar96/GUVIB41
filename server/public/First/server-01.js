//1. Create an express server
const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.get('/products', getProducts);

app.listen(port, () => console.log(`Server listening on port ${port}`));

async function getProducts(req, res) {
  const productsFile = path.join(__dirname, '../products.json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const data = await fs.readFile(productsFile)
    res.json(JSON.parse(data))
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
const url='http://localhost:3000/products'
.fetch(url).then((res)=res.json()).then(products=>console.log(products))
