import React from "react";
import { Link } from "react-router-dom";

export default function InventoryHeader() {
  return (
    <div className="fixed flex h-[7vh] w-full items-start bg-gray-200 bg-opacity-95 pl-[2vh] pt-[1.4vh] md:bg-transparent">
      <Link
        to="/strekker-site/"
        className="h-fit font-logoFont text-2xl md:text-4xl"
      >
        Strekker
      </Link>
    </div>
  );
}
