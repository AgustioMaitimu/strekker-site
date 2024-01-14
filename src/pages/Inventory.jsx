import React from 'react';
import InventoryHeader from '../components/InventoryHeader';
import InventoryMain from '../components/InventoryMain';
import InventoryFooter from '../components/InventoryFooter';

export default function Inventory() {
  const [totalPrice, setTotalPrice] = React.useState(0);

  function getTotalPrice(data) {
    setTotalPrice(data);
  }
  1;

  return (
    <div className="flex max-h-screen">
      <InventoryHeader />
      <InventoryMain getTotalPrice={getTotalPrice} />
      <InventoryFooter totalPrice={totalPrice} />
    </div>
  );
}
