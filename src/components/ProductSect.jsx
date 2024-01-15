import React from "react";
import { Link } from "react-router-dom";
import model3 from "../assets/backgrounds/model-3.jpg";
import models from "../assets/backgrounds/model-s.png";
import modelx from "../assets/backgrounds/model-x.png";
import modely from "../assets/backgrounds/model-y.jpg";
import gun from "../assets/backgrounds/gun.jpg";
import microwave from "../assets/backgrounds/microwave.jpg";
import ricecooker from "../assets/backgrounds/ricecooker.jpg";

const productBackgrounds = {
  "Model 3": model3,
  "Model S": models,
  "Model X": modelx,
  "Model Y": modely,
  // prettier-ignore
  'Franku': ricecooker,
  // prettier-ignore
  'James': microwave,
  // prettier-ignore
  'PewPew': gun,
};

export default function ProductSect({ productName, productPrice }) {
  const background = productBackgrounds[productName] || models;

  return (
    <section
      id="product-section"
      className="flex h-screen w-screen snap-center flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        id="model-price"
        className="flex h-screen flex-col items-center justify-start pt-[150px] tracking-widest text-white md:pt-[100px] 2xl:pt-[150px]"
      >
        <h1 className="text-6xl font-bold md:text-4xl ">{productName}</h1>
        <h3 className="text-2xl md:text-3xl">{productPrice}</h3>
      </div>
      <div
        id="model-buttons"
        className="flex w-screen flex-col gap-4 px-6 pb-20 md:flex-row md:justify-center md:pb-16"
      >
        <Link
          to="/strekker-site/inventory"
          state={{ productPrice }}
          className="flex h-12 items-center justify-center rounded-md bg-gray-300 bg-opacity-[0.7] font-semibold tracking-wider text-gray-800 transition-all duration-200 hover:bg-opacity-[0.9] md:w-80"
        >
          Purchase Now
        </Link>
        <Link
          to="/strekker-site/inventory"
          state={{ productPrice }}
          className="flex h-12 items-center justify-center rounded-md bg-slate-900 bg-opacity-[0.7] font-semibold tracking-wider text-gray-300 transition-all duration-200 hover:bg-opacity-[0.9] md:w-80"
        >
          Check Specifications
        </Link>
      </div>
    </section>
  );
}
