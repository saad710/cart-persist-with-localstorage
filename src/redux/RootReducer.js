import { combineReducers } from "redux";
import CartReducer from "./cartReducer/CartReducer"


const RootReducers = combineReducers({
  CartReducer,
});

export default RootReducers;