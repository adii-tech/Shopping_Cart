import { createStoreHook } from "react-redux";
import cartReducer from "./reducers/cartReducer";

const store = createStoreHook(cartReducer);

export default store;
