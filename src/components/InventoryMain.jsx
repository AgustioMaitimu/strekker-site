import React from "react";
import model3 from "../assets/previews/model-3.png";
import models from "../assets/previews/model-s.png";
import modelx from "../assets/previews/model-x.png";
import modely from "../assets/previews/model-y.jpg";
import gun from "../assets/previews/gun.jpg";
import ricecooker from "../assets/previews/ricecooker.jpg";
import microwave from "../assets/previews/microwave.jpg";

export default function InventoryMain(props) {
  const initialPrice = props.productPrice;
  const [pickedType, setPickedType] = React.useState("");
  const [pickedPrice, setPickedPrice] = React.useState(initialPrice);
  const [additionPrice, setAdditionPrice] = React.useState(0);
  const [recipePrice, setRecipePrice] = React.useState(0);
  const [modesExpand, setModesExpand] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState(initialPrice);
  const [currentItem, setCurrentItem] = React.useState(initialPrice);
  const productPreviews = {
    "Model 3": model3,
    "Model S": models,
    "Model X": modelx,
    "Model Y": modely,
    // prettier-ignore
    "PewPew": gun,
    // prettier-ignore
    "Franku": ricecooker,
    // prettier-ignore
    "James": microwave,
  };
  let productName;
  let productType;

  getProductNameAndType();

  React.useEffect(() => {
    ["Model S", "Model X", "Model 3", "Model Y"].includes(currentItem)
      ? "Blender"
      : currentItem;
  }, []);

  React.useEffect(() => {
    setTotalPrice(pickedPrice + additionPrice + recipePrice);
    props.getTotalPrice(totalPrice);
  }, [totalPrice, pickedPrice, additionPrice, recipePrice]);

  function getProductNameAndType() {
    switch (initialPrice) {
      case 329.99:
        productName = "Model 3";
        productType = "Blender";
        break;
      case 379.49:
        productName = "Model Y";
        productType = "Blender";
        break;
      case 249.99:
        productName = "Model X";
        productType = "Blender";
        break;
      case 160.49:
        productName = "Model S";
        productType = "Blender";
        break;
      case 325.49:
        productName = "Franku";
        productType = "Rice Cooker";
        break;
      case 415.49:
        productName = "James";
        productType = "Microwave";
        break;
      case 360.69:
        productName = "PewPew";
        productType = "Pistol";
        break;
    }
  }

  function expandMode() {
    setModesExpand((prev) => !prev);
  }

  function initialClick() {
    document.getElementById("initial-button").click();
  }

  function recipeHandler(event) {
    if (event.target.classList.contains("clicked")) {
      event.target.classList.remove("clicked");
      event.target.style.backgroundColor = "rgb(37 99 235)";
      event.target.style.color = "white";
      event.target.innerHTML = "Add";
      setRecipePrice((prev) => prev - 19);
    } else {
      event.target.classList.add("clicked");
      event.target.style.backgroundColor = "rgb(229 231 235)";
      event.target.style.color = "rgb(31 41 55)";
      event.target.innerHTML = "Remove";
      setRecipePrice((prev) => prev + 19);
    }
  }

  function additionPick(event) {
    console.log(event.target.innerHTML);
    if (
      event.target.classList.contains("picked") ||
      event.target.parentElement.classList.contains("picked")
    ) {
      if (event.target.classList.contains("price-increase")) {
        event.target.parentElement.classList.remove("picked");
        event.target.parentElement.classList.remove("picked-class");
      } else {
        event.target.classList.remove("picked");
        event.target.classList.remove("picked-class");
        switch (event.target.innerHTML) {
          case 'Cleaning Brushes<span class="price-increase">+$10</span>':
          case "+$10":
            setAdditionPrice((prev) => prev - 10);
            break;
          case '2 Years Extended Warranty<span class="price-increase">+$50</span>':
          case "+$50":
            setAdditionPrice((prev) => prev - 50);
            break;
          default:
            setAdditionPrice((prev) => prev - 20);
            break;
        }
      }
    } else {
      if (event.target.classList.contains("price-increase")) {
        event.target.parentElement.classList.add("picked");
        event.target.parentElement.classList.add("picked-class");
      } else {
        event.target.classList.add("picked");
        event.target.classList.add("picked-class");
        switch (event.target.innerHTML) {
          case 'Cleaning Brushes<span class="price-increase">+$10</span>':
          case "+$10":
            setAdditionPrice((prev) => prev + 10);
            break;
          case '2 Years Extended Warranty<span class="price-increase">+$50</span>':
          case "+$50":
            setAdditionPrice((prev) => prev + 50);
            break;
          default:
            setAdditionPrice((prev) => prev + 20);
            break;
        }
      }
    }
  }

  function typePick(event) {
    switch (event.target.innerHTML) {
      case productName:
        setPickedType("Normal");
        setPickedPrice(initialPrice);
        break;
      case productName + ' Deluxe<span class="price-increase">+$40</span>':
      case "+$40":
        setPickedType("Deluxe");
        setPickedPrice(initialPrice + 40);
        break;
      case productName + ' Luxury<span class="price-increase">+$80</span>':
      case "+$80":
        setPickedType("Luxury");
        setPickedPrice(initialPrice + 80);
        break;
    }
    for (let option of document.getElementById("type-buttons").children) {
      option.classList.remove("picked-class");
    }
    if (!event.target.classList.contains("price-increase")) {
      event.target.classList.add("picked-class");
    } else {
      event.target.parentElement.classList.add("picked-class");
    }
  }

  return (
    <div
      className="flex w-screen flex-col items-center justify-between font-detailsFont md:flex-row"
      onLoad={initialClick}
    >
      <img
        src={productPreviews[productName] || models}
        alt=""
        className="min-w mb-12 mt-[9vh] w-[70%] rounded-2xl md:fixed md:left-[15%] md:max-w-[32%]"
      />
      <div
        id="inventory-content"
        className="ml-auto flex w-screen flex-col items-center md:mr-5 md:mt-[10vh] md:w-[40vw] md:self-start"
      >
        <div className="flex flex-col items-center font-semibold ">
          <h1 className="mb-2 text-4xl">{productName}</h1>
          <p className="mb-10 text-gray-600">Est. Delivery: Jan - Feb 2025</p>
        </div>
        {productType == "Blender" && (
          <div className="mb-10 flex w-full items-start justify-evenly font-semibold">
            <div className="flex flex-col items-center gap-1">
              <p className="text-4xl">
                {pickedType == "Normal"
                  ? "550"
                  : pickedType == "Deluxe"
                    ? "575"
                    : "625"}
                <span className="text-sm">W</span>
              </p>
              <p className="text-gray-500">Wattage</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-4xl">
                {pickedType == "Normal"
                  ? "1"
                  : pickedType == "Deluxe"
                    ? "1.2"
                    : "1.5"}
                <span className="text-sm">L</span>
              </p>
              <p className="text-gray-500">Capacity</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-4xl">
                {pickedType == "Normal"
                  ? "6"
                  : pickedType == "Deluxe"
                    ? "8"
                    : "10"}
              </p>
              <p className="text-gray-500">Modes</p>
            </div>
          </div>
        )}
        <h2 className="mb-4 w-full pl-[5%] text-lg">Types</h2>
        <div
          id="type-buttons"
          className="mb-4 flex w-full flex-col items-center gap-4 font-semibold"
        >
          <button
            id="initial-button"
            onClick={typePick}
            className="h-14 w-[90%] rounded border-[1px] border-gray-400 pl-4 text-start text-lg text-gray-400 transition-all duration-200 active:bg-blue-200"
          >
            {productName}
          </button>
          <button
            onClick={typePick}
            className="flex h-14 w-[90%] items-center justify-between rounded border-[1px] border-gray-400 px-5 text-start text-lg text-gray-400 transition-all duration-200 active:bg-blue-200"
          >
            {productName} Deluxe<span className="price-increase">+$40</span>
          </button>
          <button
            onClick={typePick}
            className="flex h-14 w-[90%] items-center justify-between rounded border-[1px] border-gray-400 px-5 text-start text-lg text-gray-400 transition-all duration-200 active:bg-blue-200"
          >
            {productName} Luxury<span className="price-increase">+$80</span>
          </button>
        </div>
        {productType == "Blender" && (
          <div className="mb-6 w-[89%] text-sm font-semibold text-gray-600">
            <p className="mb-1 flex w-full justify-between">
              Package Contents:{" "}
            </p>
            <ul className="ml-5 list-disc">
              <li>
                Blender Base (
                {pickedType == "Normal"
                  ? "Regular Model"
                  : pickedType == "Deluxe"
                    ? "Deluxe Model"
                    : "Luxury Model"}
                )
              </li>
              <li> 1L Blender Jar </li>
              <li> Lid with Removable Cap for Easy Ingredient Addition </li>
              <li> Stainless Steel Blades </li>
              <li> User Manual and Recipe Booklet </li>
              <li> Power Cord </li>
              <li> Quick Start Guide </li>
              <li> Warranty Information </li>
              <li> Complimentary Blender Bottle Set</li>
              {pickedType == "Deluxe" && (
                <>
                  <li> Mini Food Processor Attachment </li>
                  <li>Complimentary Stainless Steel Travel Mug Set</li>
                </>
              )}
              {pickedType == "Luxury" && (
                <>
                  <li> Vacuum Sealer Starter Kit </li>
                  <li>Complimentary Premium Smoothie Ingredients Bundle</li>
                </>
              )}
            </ul>
          </div>
        )}
        {productType == "Rice Cooker" && (
          <div className="mb-6 w-[89%] text-sm font-semibold text-gray-600">
            <p className="mb-1 flex w-full justify-between">
              Package Contents:{" "}
            </p>
            <ul className="ml-5 list-disc">
              {pickedType == "Normal" && (
                <>
                  <li>Base Model Franku</li>
                  <li>Simple one-touch operation</li>
                  <li>Automatic keep-warm function</li>
                  <li>Non-stick inner pot</li>
                  <li>Measuring cup and rice paddle included</li>
                </>
              )}
              {pickedType == "Deluxe" && (
                <>
                  <li>Deluxe Model Franku</li>
                  <li>Digital control panel with multiple cooking presets</li>
                  <li>Fuzzy logic technology for precise cooking</li>
                  <li>Steamer basket for versatile cooking options</li>
                  <li>Stainless steel exterior</li>
                  <li>Delay timer for flexible meal planning</li>
                </>
              )}
              {pickedType == "Luxury" && (
                <>
                  <li>Luxury Model Franku</li>
                  <li>Touchscreen control panel with customizable settings</li>
                  <li>Multifunctional features for cooking different grains</li>
                  <li>Automated cleaning cycle for easy maintenance</li>
                  <li>Detachable inner lid for thorough cleaning</li>
                </>
              )}
            </ul>
          </div>
        )}
        {productType == "Microwave" && (
          <div className="mb-6 w-[89%] text-sm font-semibold text-gray-600">
            <p className="mb-1 flex w-full justify-between">
              Package Contents:{" "}
            </p>
            <ul className="ml-5 list-disc">
              {pickedType == "Normal" && (
                <>
                  <li>Base Model James</li>
                  <li>Turntable for even cooking</li>
                  <li>Basic control panel with timer and power settings</li>
                  <li>Interior light</li>
                </>
              )}
              {pickedType == "Deluxe" && (
                <>
                  <li>Deluxe Model James for faster cooking</li>
                  <li>Advanced control panel with preset cooking options</li>
                  <li>Sensor cooking technology for automatic adjustments</li>
                  <li>Express cooking feature</li>
                  <li>Stainless steel exterior</li>
                  <li>Child lock safety feature</li>
                </>
              )}
              {pickedType == "Luxury" && (
                <>
                  <li>Luxury Model James with convection and grill features</li>
                  <li>
                    Smart technology for remote control and monitoring via a
                    mobile app
                  </li>
                  <li>Multi-stage cooking for complex recipes</li>
                  <li>Touchscreen control panel with customizable settings</li>
                  <li>Interior ceramic coating for easy cleaning</li>
                  <li>Built-in exhaust fan for ventilation</li>
                </>
              )}
            </ul>
          </div>
        )}
        {productType == "Pistol" && (
          <div className="mb-6 w-[89%] text-sm font-semibold text-gray-600">
            <p className="mb-1 flex w-full justify-between">
              Package Contents:{" "}
            </p>
            <ul className="ml-5 list-disc">
              {pickedType == "Normal" && (
                <>
                  <li>Base Model PewPew</li>
                  <li>Non-stick frying pan</li>
                  <li>Stainless steel cooking utensil set</li>
                  <li>Set of chef's knives</li>
                  <li>Pistol-shaped bottle opener</li>
                </>
              )}
              {pickedType == "Deluxe" && (
                <>
                  <li>Deluxe Model PewPew</li>
                  <li>Premium non-stick cookware set</li>
                  <li>High-quality chef's knife set with a knife block</li>
                  <li>Stainless steel mixing bowls</li>
                  <li>Pistol-shaped pizza cutter </li>
                </>
              )}
              {pickedType == "Luxury" && (
                <>
                  <li>Luxury Model PewPew</li>
                  <li>Luxury copper cookware set</li>
                  <li>
                    Professional-grade chef's knife collection with magnetic
                    strip
                  </li>
                  <li>Precision kitchen scale</li>
                  <li>Pistol-shaped barbecue grill lighter</li>
                </>
              )}
            </ul>
          </div>
        )}
        {productType == "Blender" && (
          <div className="mb-8 w-[89%] text-sm font-semibold text-gray-600">
            <p className="mb-1 flex w-full justify-between">
              Modes:
              <span className="cursor-pointer underline" onClick={expandMode}>
                Expand
              </span>
            </p>
            {modesExpand && (
              <ul className="m-4 list-disc">
                <li>Blend: Standard blending for smoothies and beverages</li>
                <li>Grind: Suitable for grinding coffee beans or spices</li>
                <li>Puree: Perfect for creating smooth sauces and soups</li>
                <li>Chop: Ideal for chopping vegetables and fruits</li>
                <li>Mix: Gentle mixing for batters and doughs</li>
                <li>Pulse: Quick bursts of power for precise control</li>
                {(pickedType == "Deluxe" || pickedType == "Luxury") && (
                  <>
                    <li>Shred: Shredding for cheese, vegetables, etc.</li>
                    <li>Whip: Whipping for creams and sauces</li>
                  </>
                )}
                {pickedType == "Luxury" && (
                  <>
                    <li>Knead: Dough kneading for bread and pastry</li>
                    <li>Liquefy: Intense liquefying for smooth beverages</li>
                  </>
                )}
              </ul>
            )}
          </div>
        )}
        <h2 className="mb-4 w-full pl-[5%] text-lg">Add-Ons</h2>
        <div
          id="addons-buttons"
          className="mb-12 flex w-full flex-col items-center gap-4 font-semibold"
        >
          <button
            onClick={additionPick}
            className="flex h-14 w-[90%] items-center justify-between rounded border-[1px] border-gray-400 px-5 text-start text-lg text-gray-400 transition-all duration-200 active:bg-blue-200"
          >
            Cleaning Brushes<span className="price-increase">+$10</span>
          </button>
          <button
            onClick={additionPick}
            className="flex h-14 w-[90%] items-center justify-between rounded border-[1px] border-gray-400 px-5 text-start text-lg text-gray-400 transition-all duration-200 active:bg-blue-200"
          >
            {productType == "Blender"
              ? "2L Blender Jar"
              : productType == "Rice Cooker"
                ? "Smart Scale"
                : productType == "Microwave"
                  ? "Microwave Popcorn Kit"
                  : "Tactical Flashlight"}
            <span className="price-increase">+$20</span>
          </button>
          <button
            onClick={additionPick}
            className="flex h-14 w-[90%] items-center justify-between rounded border-[1px] border-gray-400 px-5 text-start text-lg text-gray-400 transition-all duration-200 active:bg-blue-200"
          >
            2 Years Extended Warranty
            <span className="price-increase">+$50</span>
          </button>
        </div>
        <div className="mb-12 flex w-[87%] flex-col items-center">
          <h1 className="text-xl font-semibold">
            {productType == "Blender"
              ? "Blender Masterclass Recipe Book"
              : productType == "Rice Cooker"
                ? "Rice Cooker Culinary Companion"
                : productType == "Microwave"
                  ? "Microwave Mastermind Cookbook"
                  : "Firearm Safety Masterclass"}
          </h1>
          <p className="mb-6 text-sm font-semibold italic text-gray-600">
            $19 (discounted from $29)
          </p>
          <p className="mb-2 w-full text-gray-600">
            {productType == "Blender"
              ? "Unlock the full potential of your Blender with our exclusive Blender Masterclass Recipe Book designed to elevate your culinary experience."
              : productType == "Rice Cooker"
                ? "Elevate your rice cooking skills with our exclusive Rice Cooker Culinary Companion. Unlock the secrets of gourmet rice dishes and broaden your culinary repertoire."
                : productType == "Microwave"
                  ? "Maximize the potential of your microwave with our Microwave Mastermind Cookbook. Transform simple ingredients into culinary delights with a collection of quick and innovative recipes."
                  : "Ensure responsible firearm ownership with our Firearm Safety Masterclass. Learn essential safety practices, responsible handling, and legal guidelines for firearm ownership."}
          </p>
          <ul className="mb-6 flex w-full list-disc flex-col gap-2 px-6 text-start text-base text-gray-600">
            {productType == "Blender" && (
              <>
                <li>Smoothie Sensations</li>
                <li>Gourmet Blends</li>
                <li>Healthy Creations</li>
              </>
            )}
            {productType == "Rice Cooker" && (
              <>
                <li>Exquisite Risottos</li>
                <li>International Rice Delights</li>
                <li>Creative Grain Bowls</li>
              </>
            )}
            {productType == "Microwave" && (
              <>
                <li>Rapid Breakfasts</li>
                <li>Speedy Snacks</li>
                <li>Express Entrees</li>
              </>
            )}
            {productType == "Pistol" && (
              <>
                <li>Safe Storage Practices</li>
                <li>Responsible Handling Techniques</li>
                <li>Legal Compliance and Awareness</li>
              </>
            )}
          </ul>
          <div className="flex w-full justify-between">
            <button
              onClick={recipeHandler}
              className="flex h-11 w-[40%] items-center justify-center rounded-md bg-blue-600 px-12 py-1 text-sm text-white transition-all duration-200"
            >
              Add
            </button>
            <button className="flex h-11 w-[40%] items-center justify-center rounded-md bg-gray-200 px-12 py-1 text-sm text-gray-800">
              Details
            </button>
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <h1 className="mb-3 text-2xl font-semibold">
            Order Your {productName}
          </h1>
          <p className="mb-6 text-sm  font-semibold text-gray-600">
            Est. Delivery: Jan - Feb 2025
          </p>
          <button className="mb-28 flex w-[60%] flex-col items-center gap-2 rounded-lg bg-gray-200 py-3 font-semibold">
            <span className="text-lg text-gray-500 line-through">
              Continue To Payment
            </span>
            <span className="text-sm text-gray-700">Out Of Stock</span>
          </button>
        </div>
      </div>
    </div>
  );
}
