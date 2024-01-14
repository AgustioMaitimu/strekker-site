import React from "react";
import AppHeader from "../components/AppHeader";
import ProductSect from "../components/ProductSect";

export default function App() {
  return (
    <div id="app" className="relative">
      <AppHeader />
      <ProductSect
        productBG="url('/src/assets/backgrounds/model-3.jpg')"
        productName="Model 3"
        productPrice="$329.99"
      />
      <ProductSect
        productBG="url('/src/assets/backgrounds/model-y.jpg')"
        productName="Model Y"
        productPrice="$379.49"
      />
      <ProductSect
        productBG="url('/src/assets/backgrounds/model-x.png')"
        productName="Model X"
        productPrice="$249.99"
      />
      <ProductSect
        productBG="url('/src/assets/backgrounds/model-s.png')"
        productName="Model S"
        productPrice="$160.49"
      />
      <ProductSect
        productBG="url('/src/assets/backgrounds/ricecooker.jpg')"
        productName="Franku"
        productPrice="$325.49"
      />
      <ProductSect
        productBG="url('/src/assets/backgrounds/microwave.jpg')"
        productName="James"
        productPrice="$415.49"
      />
      <ProductSect
        productBG="url('/src/assets/backgrounds/gun.jpg')"
        productName="PewPew"
        productPrice="$360.69"
      />
    </div>
  );
}
