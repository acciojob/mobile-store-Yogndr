
import React, { useState } from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import ProductList from "./ProductList";
import initialProducts from "../data/Product";
import ProductDetails from "./ProductDetails";

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  return (
    <BrowserRouter>
    <nav>
      <Link to="/" style={{marginLeft:"250px", marginRight:"50px"}}>HOME</Link>
      <Link to="/admin">ADMIN</Link>
      
      </nav>
    
        <Routes>
          <Route path="/" element={<ProductList products={products}/>}/>
          <Route path="/products/:id" element={<ProductDetails products={products}/>}/>
          <Route path="/admin" element={<Admin products={products} setProducts={setProducts}/>}/>
        </Routes>
    
    </BrowserRouter>
  )
}

export default App
