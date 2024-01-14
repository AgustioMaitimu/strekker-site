import React from 'react';
import model3 from '../assets/previews/model-3.png';

export default function InventoryMain(props) {
  const [pickedType, setPickedType] = React.useState('');
  const [pickedPrice, setPickedPrice] = React.useState('');
  const [additionPrice, setAdditionPrice] = React.useState(0);
  const [recipePrice, setRecipePrice] = React.useState(0);
  const [modesExpand, setModesExpand] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    setTotalPrice(pickedPrice + additionPrice + recipePrice);
    props.getTotalPrice(totalPrice);
  }, [totalPrice, pickedPrice, additionPrice, recipePrice]);

  function expandMode() {
    setModesExpand((prev) => !prev);
  }

  function initialClick() {
    document.getElementById('initial-button').click();
  }

  function recipeHandler(event) {
    if (event.target.classList.contains('clicked')) {
      event.target.classList.remove('clicked');
      event.target.style.backgroundColor = 'rgb(37 99 235)';
      event.target.style.color = 'white';
      event.target.innerHTML = 'Add';
      setRecipePrice((prev) => prev - 19);
    } else {
      event.target.classList.add('clicked');
      event.target.style.backgroundColor = 'rgb(229 231 235)';
      event.target.style.color = 'rgb(31 41 55)';
      event.target.innerHTML = 'Remove';
      setRecipePrice((prev) => prev + 19);
    }
  }

  function additionPick(event) {
    if (
      event.target.classList.contains('picked') ||
      event.target.parentElement.classList.contains('picked')
    ) {
      if (event.target.classList.contains('price-increase')) {
        event.target.parentElement.classList.remove('picked');
        event.target.parentElement.classList.remove('picked-class');
      } else {
        event.target.classList.remove('picked');
        event.target.classList.remove('picked-class');
        switch (event.target.innerHTML) {
          case 'Cleaning Brushes<span class="price-increase">+$10</span>':
          case '+$10':
            setAdditionPrice((prev) => prev - 10);
            break;
          case '2L Blender Jar<span class="price-increase">+$20</span>':
          case '+$20':
            setAdditionPrice((prev) => prev - 20);
            break;
          case '2 Years Extended Warranty<span class="price-increase">+$50</span>':
          case '+$50':
            setAdditionPrice((prev) => prev - 50);
            break;
        }
      }
    } else {
      if (event.target.classList.contains('price-increase')) {
        event.target.parentElement.classList.add('picked');
        event.target.parentElement.classList.add('picked-class');
      } else {
        event.target.classList.add('picked');
        event.target.classList.add('picked-class');
        switch (event.target.innerHTML) {
          case 'Cleaning Brushes<span class="price-increase">+$10</span>':
          case '+$10':
            setAdditionPrice((prev) => prev + 10);
            break;
          case '2L Blender Jar<span class="price-increase">+$20</span>':
          case '+$20':
            setAdditionPrice((prev) => prev + 20);
            break;
          case '2 Years Extended Warranty<span class="price-increase">+$50</span>':
          case '+$50':
            setAdditionPrice((prev) => prev + 50);
            break;
        }
      }
    }
  }

  function typePick(event) {
    switch (event.target.innerHTML) {
      case 'Model 3':
        setPickedType('Normal');
        setPickedPrice(329.99);
        break;
      case 'Model 3 Deluxe<span class="price-increase">+$40</span>':
      case '+$40':
        setPickedType('Deluxe');
        setPickedPrice(369.99);
        break;
      case 'Model 3 Luxury<span class="price-increase">+$80</span>':
      case '+$80':
        setPickedType('Luxury');
        setPickedPrice(409.99);
        break;
    }
    for (let option of document.getElementById('type-buttons').children) {
      option.classList.remove('picked-class');
    }
    if (!event.target.classList.contains('price-increase')) {
      event.target.classList.add('picked-class');
    } else {
      event.target.parentElement.classList.add('picked-class');
    }
  }

  return (
    <div
      className="flex w-screen flex-col items-center justify-between font-detailsFont md:flex-row"
      onLoad={initialClick}
    >
      <img
        src={model3}
        alt=""
        className="min-w mb-12 mt-[9vh] w-[70%] rounded-2xl md:fixed md:left-[15%] md:max-w-[32%]"
      />
      <div
        id="inventory-content"
        className="ml-auto flex w-screen flex-col items-center md:mr-5 md:mt-[10vh] md:w-[40vw] md:self-start"
      >
        <div className="flex flex-col items-center font-semibold ">
          <h1 className="mb-2 text-4xl">Model 3</h1>
          <p className="mb-10 text-gray-600">Est. Delivery: Jan - Feb 2025</p>
        </div>
        <div className="mb-10 flex w-full items-start justify-evenly font-semibold">
          <div className="flex flex-col items-center gap-1">
            <p className="text-4xl">
              {pickedType == 'Normal'
                ? '550'
                : pickedType == 'Deluxe'
                  ? '575'
                  : '625'}
              <span className="text-sm">W</span>
            </p>
            <p className="text-gray-500">Wattage</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-4xl">
              {pickedType == 'Normal'
                ? '1'
                : pickedType == 'Deluxe'
                  ? '1.2'
                  : '1.5'}
              <span className="text-sm">L</span>
            </p>
            <p className="text-gray-500">Capacity</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-4xl">
              {pickedType == 'Normal'
                ? '6'
                : pickedType == 'Deluxe'
                  ? '8'
                  : '10'}
            </p>
            <p className="text-gray-500">Modes</p>
          </div>
        </div>
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
            Model 3
          </button>
          <button
            onClick={typePick}
            className="flex h-14 w-[90%] items-center justify-between rounded border-[1px] border-gray-400 px-5 text-start text-lg text-gray-400 transition-all duration-200 active:bg-blue-200"
          >
            Model 3 Deluxe<span className="price-increase">+$40</span>
          </button>
          <button
            onClick={typePick}
            className="flex h-14 w-[90%] items-center justify-between rounded border-[1px] border-gray-400 px-5 text-start text-lg text-gray-400 transition-all duration-200 active:bg-blue-200"
          >
            Model 3 Luxury<span className="price-increase">+$80</span>
          </button>
        </div>
        <div className="mb-6 w-[89%] text-sm font-semibold text-gray-600">
          <p className="mb-1 flex w-full justify-between">Package Contents: </p>
          <ul className="ml-5 list-disc">
            <li>
              Blender Base (
              {pickedType == 'Normal'
                ? 'Regular Model'
                : pickedType == 'Deluxe'
                  ? 'Deluxe Model'
                  : 'Luxury Model'}
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
            {pickedType == 'Deluxe' && (
              <>
                <li> Mini Food Processor Attachment </li>
                <li>Complimentary Stainless Steel Travel Mug Set</li>
              </>
            )}
            {pickedType == 'Luxury' && (
              <>
                <li> Vacuum Sealer Starter Kit </li>
                <li>Complimentary Premium Smoothie Ingredients Bundle</li>
              </>
            )}
          </ul>
        </div>
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
              {(pickedType == 'Deluxe' || pickedType == 'Luxury') && (
                <>
                  <li>Shred: Shredding for cheese, vegetables, etc.</li>
                  <li>Whip: Whipping for creams and sauces</li>
                </>
              )}
              {pickedType == 'Luxury' && (
                <>
                  <li>Knead: Dough kneading for bread and pastry</li>
                  <li>Liquefy: Intense liquefying for smooth beverages</li>
                </>
              )}
            </ul>
          )}
        </div>
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
            2L Blender Jar<span className="price-increase">+$20</span>
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
            Blender Masterclass Recipe Book
          </h1>
          <p className="mb-6 text-sm font-semibold italic text-gray-600">
            $19 (discounted from $29)
          </p>
          <p className="mb-2 w-full text-gray-600">
            Unlock the full potential of your Blender with our exclusive Blender
            Masterclass Recipe Book designed to elevate your culinary
            experience.
          </p>
          <ul className="mb-6 flex w-full list-disc flex-col gap-2 px-6 text-start text-base text-gray-600">
            <li>Smoothie Sensations</li>
            <li>Gourmet Blends</li>
            <li>Healthy Creations</li>
          </ul>
          <div className="flex w-full justify-between">
            <button
              onClick={recipeHandler}
              className="flex h-11 w-[40%] items-center justify-center rounded-md bg-blue-600 px-14 py-1 text-sm text-white transition-all duration-200"
            >
              Add
            </button>
            <button className="flex h-11 w-[40%] items-center justify-center rounded-md bg-gray-200 px-14 py-1 text-sm text-gray-800">
              Details
            </button>
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <h1 className="mb-3 text-2xl font-semibold">Order Your Model X</h1>
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
