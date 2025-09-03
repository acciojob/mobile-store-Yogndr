import React, { useState } from "react";
import EditProduct from "./EditProduct";

function Admin({ products, setProducts }) {
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    image: "",
    price: ""
  });

  // Delete product
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Save edited product
  const handleEdit = (updatedProduct) => {
    setProducts(
      products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditingProduct(null);
  };

  // Add new product
  const handleAdd = (e) => {
    e.preventDefault();
    const productToAdd = {
      ...newProduct,
      id: products.length ? products[products.length - 1].id + 1 : 1,
      price: parseFloat(newProduct.price)
    };
    setProducts([...products, productToAdd]);
    setNewProduct({ name: "", description: "", image: "", price: "" });
  };

  return (
    <div >
      <h2>Admin Panel</h2>

      {/* Add product form */}
      <form onSubmit={handleAdd}>
        <input
          className="form-control"
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <input
          className="form-control"
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>

      {/* List of products */}
      <div className="col-12">
        {products.map((product) => (
          <div key={product.id}>
            <a href={`/admin/product/${product.id}`}>{product.name} - ${product.price}</a>
            <button className="float-right" onClick={() => setEditingProduct(product)}>
              Edit
            </button>
            <button className="float-right" onClick={() => handleDelete(product.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Edit product form */}
      {editingProduct && (
        <EditProduct product={editingProduct} onSave={handleEdit} />
      )}
    </div>
  );
}

export default Admin;
