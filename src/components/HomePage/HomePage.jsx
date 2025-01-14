import React from "react";
import { products } from "../../utils/api"; 
import { useEffect, useState } from "react";
import "./HomePageStyled.css"







const HomePage = () => {
    const [productList, setProductList] = useState([]); 
    const [error, setError] = useState(null)

    useEffect(() => {
        products
          .then((data) => {
            setProductList(data);
          })
          .catch((err) => {
            setError(err.message);
          });
          
      }, []);
      



      return (
        <div>
          <h1>Products List</h1>
          {error ? (
            <p>Error: {error}</p>
          ) : (
            <ul>
              {productList.map((product) => (
                <li key={product.id}>
                  <strong>{product.name}</strong>  ${product.price} 
                  {product.discount > 0 && ( <div className="discount">Discount: {product.discount}$</div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    };
    


export default HomePage