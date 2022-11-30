import React from "react";
import {telescopios} from "../Assets/TelescopiosAPI";

export default React.createContext({
  products: telescopios,
  cart: [],

  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});
