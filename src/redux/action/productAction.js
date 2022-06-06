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
      dispatch(setProductState(res));
    };
  };
//   console.log(fetchRecord)

export const setProductState = (data) => {
    console.log(data)
    // debugger
    return {
      type: "fetchproductData",
      payload: data
    };
  };