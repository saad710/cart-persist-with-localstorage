import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import {
  StorageToCart,
  addToCart,
  FirstItemToCart,
  
} from "./../redux/action/cartAction";
import { fetchRecord } from "../redux/action/productAction";

function ProductList() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRecord());
  }, [dispatch]);
  const productData = useSelector((state) => state.ProductReducer?.productData);
  console.log(productData)
  const cartData = useSelector((state) => state.CartReducer?.cartData);
  console.log(cartData);

  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);

  useEffect(() => {
    let prev_items = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch(StorageToCart(prev_items));
    setIsInitiallyFetched(true);
  }, []);

  useEffect(() => {
    console.log(cartData);
    if (isInitiallyFetched) {
      localStorage.setItem("cart", JSON.stringify(cartData));
    }
  }, [cartData]);

  const handleCart = (product) => {
    console.log(cartData);
    const isVal = cartData.every((info) => info.id !== product.id);
    console.log(isVal);
    let quantity = 0;
    if (isVal === true) {
      quantity = quantity + 1;
      product.quantity = quantity;
      const newItem = [...cartData, product];
      dispatch(FirstItemToCart(newItem));
    } else {
      dispatch(addToCart(product.id));
    }
  };
  console.log(cartData);

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "50%" }}>
        {productData?.map((product, index) => (
          <div
            key={product.id}
            style={{ border: "1px solid red", margin: "1vh", padding: "1vh" }}
          >
            <h3>name:{product.name}</h3>
            <p>price:{product.price}</p>
            <button
              onClick={() => handleCart(product)}
              style={{ backgroundColor: "grey", color: "white" }}
            >
              {" "}
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Cart cartData={cartData} />
    </div>
  );
}

export default ProductList;
