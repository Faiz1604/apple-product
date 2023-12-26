import Header from "./Header";

import React from 'react';
import "./styles/ProductShowcase.css"
import product from "./../data/product.json"
import Product from "./Product";
import Footer from "./Footer";
const ProductShowcase = () => {
const models = product.iphone15.models;
  return (
    <div>
      <Header/>
      <Product models={models}/>
      <Footer/>
    </div>
  );
};

export default ProductShowcase;

