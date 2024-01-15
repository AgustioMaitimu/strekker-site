import React from "react";
import InventoryHeader from "../components/InventoryHeader";
import InventoryMain from "../components/InventoryMain";
import InventoryFooter from "../components/InventoryFooter";
import { useLocation } from "react-router-dom";

export default function Inventory() {
  const [totalPrice, setTotalPrice] = React.useState(0);

  const location = useLocation();

  const productPrice =
    parseFloat(location.state.productPrice.substring(1)) || "$329.99";

  function getTotalPrice(data) {
    setTotalPrice(data);
  }
  1;

  return (
    <div className="flex max-h-screen">
      <InventoryHeader />
      <InventoryMain
        getTotalPrice={getTotalPrice}
        productPrice={productPrice}
      />
      <InventoryFooter totalPrice={totalPrice} />
    </div>
  );
}
