import React, { useEffect, useState } from 'react'


const data = [
    {id: 1,name: "dell", price: 60},
    {id: 2,name: "hp", price: 70},
    {id: 3,name: "acer", price: 40},
    {id: 4,name: "asus", price: 50},
    {id: 5,name: "lenovo", price: 45}
]

function ProductList() {
    const [cartData,setCartData] = useState([])
    const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);

    useEffect(()=>{
        let prev_items = JSON.parse(localStorage.getItem('cart')) || [];
        setCartData(prev_items)
        setIsInitiallyFetched(true)
      },[])

    useEffect(() => {
        console.log(cartData)
        if(isInitiallyFetched){
        localStorage.setItem("cart", JSON.stringify(cartData));
        }
    },[cartData])

    const handleCart = (product) => {
        console.log(cartData)
        const isVal = cartData.every(info => info.id !== product.id)
        console.log(isVal)
        let quantity = 0
        if(isVal === true){
            quantity = quantity + 1
            product.quantity = quantity
            const newItem = [...cartData,product]
            setCartData(newItem)
        }
        else{
            // console.log(product.quantity)
            product.quantity = product.quantity + 1;
           
        }
    }
    console.log(cartData)

   

    // useEffect(()=>{
    //     let prev_items = JSON.parse(localStorage.getItem('cart')) || [];
    //     setCartData(prev_items)
    //     setIsInitiallyFetched(true)
    //   },[])
      
    //   useEffect(() => {
    //     if(isInitiallyFetched){
    //       localStorage.setItem("cart", JSON.stringify(cartData));
    //     }
    //   }, [cartData]);

  return (
 <div style={{width: "100%",display:"flex"}}>
 <div style={{width:"50%"}}>
 {
                data?.map((product,index) => (
                    <div key={product.id} style={{border:"1px solid red", margin:"1vh",padding:"1vh"}}>
                        <h3>name:{product.name}</h3>
                        <p>price:{product.price}</p>
                        <button onClick={() => handleCart(product)} style={{backgroundColor:"grey",color:"white"}}> Add to Cart</button>
                    </div>
                ))
     }
 </div>
     <div style={{width:"50%"}}>
            <h5>cart : {cartData.length}</h5>
     </div>
 </div>
    
  )
}

export default ProductList