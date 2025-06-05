import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import "./Product.css"
export default function Product() {
  const { user } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await axios.get("gcet-node-app-git-main-joel-peters-projects.vercel.app/products/all");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

 return (
    <div>
      <h3>Welcome {user.name}! </h3>
      <div className="App-Product-Row">
        {products &&
          products.map((value) => (
            <div key={value._id}>
              <h3>{value.name}</h3>
              <h4>{value.price}</h4>
              <button>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
}
