import axios from "axios";

export const fetchRecord = () => {
    return async (dispatch) => {
    //   dispatch(setLodading());
    //   const data = await axios.get( `https://jsonplaceholder.typicode.com/users`);
    //   const res = await data.data;
    //   console.log(res)
    const res = [
        { id: 1, name: "dell", price: 60 },
        { id: 2, name: "hp", price: 70 },
        { id: 3, name: "acer", price: 40 },
        { id: 4, name: "asus", price: 50 },
        { id: 5, name: "lenovo", price: 45 },
      ];
      dispatch(setCartState(res));
    };
  };
//   console.log(fetchRecord)

export const setCartState = (cartData) => {
    console.log(cartData)
    // debugger
    return {
      type: "fetchCartData",
      payload: cartData
    };
  };

  export const addToCart = (id) => {
    return (dispatch) => {
        // axios.delete(`/users/${id}.json`).then(() => {
          dispatch(AddCart(id));
        // });
      };
  }
  export const AddCart = (id) => {
      return {
          type: "addCartQuantity",
          payload : id 
      }
  }

  export const RemoveFromCart = (id) => {
    return (dispatch) => {
        // axios.delete(`/users/${id}.json`).then(() => {
          dispatch(RemoveCart(id));
        // });
      };
  }
  export const RemoveCart = (id) => {
      return {
          type: "reduceQuantity",
          payload : id 
      }
  }

  export const StorageToCart = (item) => {
      return {
          type : "getLocalStorageData",
          payload : item
      }
  }

  export const FirstItemToCart = (item) => {
    return {
        type : "FirstItemData",
        payload : item
    }
}



