import { combineReducers } from "redux";
import CartReducer from "./cartReducer/CartReducer"
import ProductReducer from './productReducer/ProductReducer';


const RootReducers = combineReducers({
  CartReducer,
  ProductReducer,
});

export default RootReducers;