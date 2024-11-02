import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductsSlice from "./admin/product-slice";
import adminOrderSlice from "./admin/order-slice";
import shoppingProductsSlice from "./shop/product-slice";
import shoppingCartSlice from "./shop/cart-slice";
import shoppingAddressSlice from "./shop/address-slice";
import shoppingOrderSlice from "./shop/order-slice";
import shoppingSearchSlice from "./shop/search-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,

    adminProducts: adminProductsSlice,
    adminOrder: adminOrderSlice,

    shopProducts: shoppingProductsSlice,
    shopCart: shoppingCartSlice,
    shopAddress: shoppingAddressSlice,
    shopOrder: shoppingOrderSlice,
    shopSearch: shoppingSearchSlice,
  },
});

export default store;
