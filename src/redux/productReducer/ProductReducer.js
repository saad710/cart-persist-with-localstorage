const INIT_STATE = {
    productData: []
}

const ProductReducer = (state =INIT_STATE ,action) => {
    //  console.log(state)
     switch(action.type){
                case 'fetchproductData':
                    const productRecord = action.payload;
                    console.log(productRecord)
                    return {
                        ...state,
                        productData: productRecord ,
                    };
               
                    default: 
                    return state;
            }
 }
 export default ProductReducer;