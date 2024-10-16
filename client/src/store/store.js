import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductsSlice from "./admin/product-slice";
import shoppingProductsSlice from "./shop/product-slice";
import shoppingCartSlice from "./shop/cart-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice,
    shopProducts: shoppingProductsSlice,
    shopCart: shoppingCartSlice,
  },
});

export default store;
