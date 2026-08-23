import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { WishlistProvider } from "./context/WishlistContext";
import App from "./App";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});
ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            <App />

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 2500,
              }}
            />
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>
</React.StrictMode>
);