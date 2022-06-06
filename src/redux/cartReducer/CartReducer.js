const INIT_STATE = {
    cartData: []
}

const CartReducer = (state =INIT_STATE ,action) => {
    //  console.log(state)
     switch(action.type){
                case 'fetchCartData':
                    const userRecord = action.payload;
                    console.log(userRecord)
                    return {
                        ...state,
                        userData: userRecord ,
                    };
                case 'addCartQuantity': 
                    const productId = action.payload
                    return {
                        cartData : state.cartData.map((cart) => {
                            if (cart.id === productId) {
                                return { ...cart, quantity: cart.quantity + 1 };
                              } else {
                                return { ...cart };
                              }
                        })
                    }
                case "reduceQuantity": 
                    const cartProductId = action.payload;
                    return {
                        cartData : state.cartData.map((cart) => {
                            if(cartProductId === cart.id){
                                return {...cart, quantity: Math.sign(cart.quantity -1) === 1 ? cart.quantity - 1 : 0  }
                              }
                              else{
                                return {...cart}
                              }
                        })
                    }
                case "getLocalStorageData": 
                    // const cartItem = JSON.parse(localStorage.getItem("cart")) || [];
                    const cartItem = action.payload
                    return {
                        ...state,
                        cartData:cartItem
                    }
                    case "FirstItemData": 
                    // const cartItem = JSON.parse(localStorage.getItem("cart")) || [];
                    const Item = action.payload
                    return {
                        ...state,
                        cartData:Item
                    }
                    default: 
                    return state;
            }
 }
 export default CartReducer;