import React from "react";
import AppHeader from "../components/AppHeader";
import ProductSect from "../components/ProductSect";

export default function App() {
  return (
    <div id="app" className="relative">
      <AppHeader />
      <ProductSect
        productBG="url('/model-3.jpg')"
        productName="Model 3"
        productPrice="$329.99"
      />
      <ProductSect
        productBG="url('/model-y.jpg')"
        productName="Model Y"
        productPrice="$379.49"
      />
      <ProductSect
        productBG="url('/model-x.png')"
        productName="Model X"
        productPrice="$249.99"
      />
      <ProductSect
        productBG="url('/model-s.png')"
        productName="Model S"
        productPrice="$160.49"
      />
      <ProductSect
        productBG="url('/ricecooker.jpg')"
        productName="Franku"
        productPrice="$325.49"
      />
      <ProductSect
        productBG="url('/microwave.jpg')"
        productName="James"
        productPrice="$415.49"
      />
      <ProductSect
        productBG="url('/gun.jpg')"
        productName="PewPew"
        productPrice="$360.69"
      />
    </div>
  );
}
