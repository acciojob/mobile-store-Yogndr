import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({products}) => {
  
  return (
    <div>
      <div className='product-grid'>
       {products.map((product)=>(
        <div className="col-12" key={product.id}>
          <img src={product.image} alt={product.name} width="150" />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <Link to={`/products/${product.id}`}>Buy</Link>

          </div>

       ))
       
       }

      </div>
   

    </div>
  )
}

export default ProductList