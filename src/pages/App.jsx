import React from "react";
import AppHeader from "../components/AppHeader";
import ProductSect from "../components/ProductSect";

export default function App() {
  return (
    <div id="app" className="relative">
      <AppHeader />
      <ProductSect productName="Model 3" productPrice="$329.99" />
      <ProductSect productName="Model Y" productPrice="$379.49" />
      <ProductSect productName="Model X" productPrice="$249.99" />
      <ProductSect productName="Model S" productPrice="$160.49" />
      <ProductSect productName="Franku" productPrice="$325.49" />
      <ProductSect productName="James" productPrice="$415.49" />
      <ProductSect productName="PewPew" productPrice="$360.69" />
    </div>
  );
}
