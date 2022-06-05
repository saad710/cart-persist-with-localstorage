import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StorageToCart, addToCart,RemoveFromCart } from './../redux/action/cartAction';

function Cart(props) {
  const dispatch = useDispatch();
  const { cartData} = props;
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

  const handleAddQuantity = (cartProduct) => {
    console.log(cartProduct)
    // const quantityValue = cartProduct.quantity + 1;
    // setCartData(cartData?.map(cart => {
    //   if(cartProduct.id === cart.id){
    //     return {...cart, quantity: quantityValue }
    //   }
    //   else{
    //     return {...cart}
    //   }
    // }))
    dispatch(addToCart(cartProduct.id))
  }
  const handleReduceQuantity = (cartProduct) => {
    // const quantityValue = cartProduct.quantity - 1;
    // setCartData(cartData?.map(cart => {
    //   if(cartProduct.id === cart.id){
    //     return {...cart, quantity: Math.sign(quantityValue) === 1 ? quantityValue : 0  }
    //   }
    //   else{
    //     return {...cart}
    //   }
    // }))
    dispatch(RemoveFromCart(cartProduct.id))

  }
  return (
    <div style={{ width: "50%" }}>
      <h1 style={{color:"red"}}>cart : {cartData?.length}</h1>
      {
        cartData?.map((cartProduct,index) => (
          <div key={cartProduct.id}>
              <h5>Product Name : {cartProduct.name}</h5>
              <h5>Quantity : {cartProduct.quantity}</h5>
              <h5>Price : {cartProduct.quantity * cartProduct.price}</h5>
              <button onClick={() => handleAddQuantity(cartProduct)}>+</button> 
              <button onClick={() => handleReduceQuantity(cartProduct)}>-</button>
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
