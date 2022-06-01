import React, { useEffect, useState } from "react";

function Cart(props) {
  const { cartData } = props;
  const [Subtotal,setSubtotal] = useState(0)
  console.log(cartData)
  useEffect(() => {
    let subTotalData = 0
    cartData?.forEach(cart => {
      subTotalData = subTotalData + (cart.price * cart.quantity);
    })
    console.log(subTotalData)
    setSubtotal(subTotalData)
  },[cartData])
  return (
    <div style={{ width: "50%" }}>
      <h1 style={{color:"red"}}>cart : {cartData?.length}</h1>
      {
        cartData?.map((cartProduct,index) => (
          <div key={cartProduct.id}>
              <h5>Product Name : {cartProduct.name}</h5>
              <h5>Quantity : {cartProduct.quantity}</h5>
              <h5>Price : {cartProduct.quantity * cartProduct.price}</h5>
          </div>
        ))
      }
      <h3>Subtotal : {Subtotal}</h3>
      <h3>vat : {(Subtotal/100) * 5}</h3>
      <h1>Total : {Subtotal + ((Subtotal/100) * 5)} </h1>
    </div>
  );
}

export default Cart;
