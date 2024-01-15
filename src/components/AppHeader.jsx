import React from "react";
import TopMenu from "./TopMenu";
import x from "../assets/x.png";
import { Link } from "react-router-dom";
import model3 from "../assets/items/model-3.png";
import models from "../assets/items/model-s.png";
import modelx from "../assets/items/model-x.png";
import modely from "../assets/items/model-y.png";
import gun from "../assets/items/pistol.png";
import microwave from "../assets/items/microwave.png";
import ricecooker from "../assets/items/ricecooker.png";

export default function AppHeader() {
  const [sideMenuOpened, setSideMenuOpened] = React.useState(false);
  const [focusedMenu, setFocusedMenu] = React.useState("");
  const [productPrice, setProductPrice] = React.useState("");
  const sendButton = document.getElementById("send-button");

  function getProductPriceAndSend(event) {
    switch (event.target.innerHTML) {
      case "Model 3":
        setProductPrice("$329.99");
        break;
      case "Model Y":
        setProductPrice("$379.49");
        break;
      case "Model X":
        setProductPrice("$249.99");
        break;
      case "Model S":
        setProductPrice("$160.49");
        break;
      case "Franku":
        setProductPrice("$325.49");
        break;
      case "James":
        setProductPrice("$415.49");
        break;
      case "PewPew":
        setProductPrice("$360.69");
        break;
    }
    setTimeout(function () {
      sendButton.click();
    }, 500);
  }

  function menuClick() {
    setSideMenuOpened((prev) => !prev);
  }

  function menuHover(event) {
    for (let option of document.querySelectorAll(".header-middle-option")) {
      option.style.backgroundColor = "transparent";
    }
    event.target.style.backgroundColor = "rgb(200, 200, 200)";
    document.getElementById("top-menu").style.top = "0";
    document.getElementById("top-menu").style.opacity = "100";
    document.getElementById("header-middle-options").style.color = "black";
    document.getElementById("header-title").style.color = "black";
    setFocusedMenu(event.target.innerHTML);
  }

  function menuUnhover() {
    setFocusedMenu("");
  }

  return (
    <nav id="header" className="flex justify-center">
      <TopMenu focusedMenu={focusedMenu} menuUnhover={menuUnhover} />
      <div
        id="header-click-menu"
        className={`${
          sideMenuOpened ? "right-0" : "-right-[8000px]"
        } fixed h-full w-full bg-white transition-all duration-300`}
      >
        <ul className="mx-10 mt-20 flex h-screen flex-col justify-start items-center gap-8 text-2xl">
          <li className="flex flex-col gap-1 w-screen items-center">
            <a href="#" className="flex items-center justify-center">
              Blenders
            </a>
            <div className="flex flex-col gap-2 text-base">
              <div onClick={getProductPriceAndSend} className="underline">
                Model S
              </div>
              <div onClick={getProductPriceAndSend} className="underline">
                Model 3
              </div>
              <div onClick={getProductPriceAndSend} className="underline">
                Model X
              </div>
              <div onClick={getProductPriceAndSend} className="underline">
                Model Y
              </div>
            </div>
          </li>
          <li className="flex flex-col gap-1 w-screen items-center">
            <a href="#" className="flex items-center justify-center">
              Rice Cookers
            </a>
            <div className="flex flex-col gap-2 text-base">
              <div onClick={getProductPriceAndSend} className="underline">
                Franku
              </div>
            </div>
          </li>
          <li className="flex flex-col gap-1 w-screen items-center">
            <a href="#" className="flex items-center justify-center">
              Microwaves
            </a>
            <div className="flex flex-col gap-2 text-base">
              <div onClick={getProductPriceAndSend} className="underline">
                James
              </div>
            </div>
          </li>
          <li className="flex flex-col gap-1 w-screen items-center">
            <a href="#" className="flex items-center justify-center">
              Pistols
            </a>
            <div className="flex flex-col gap-2 text-base">
              <div onClick={getProductPriceAndSend} className="underline">
                PewPew
              </div>
            </div>
          </li>
        </ul>
      </div>
      <h1
        id="header-title"
        className={`fixed left-4 top-3 h-12 cursor-pointer font-logoFont text-3xl text-white outline-black transition-colors duration-300 md:text-4xl`}
      >
        Strekker
      </h1>
      <div
        id="header-middle-options"
        className={`fixed mt-7 hidden items-center justify-center font-bold tracking-widest text-white transition-all duration-300 hover:text-black lg:flex `}
      >
        <a
          href="#"
          onMouseEnter={menuHover}
          className="header-middle-option rounded-md px-6 py-2"
        >
          Blenders
        </a>
        <a
          href="#"
          onMouseEnter={menuHover}
          className="header-middle-option rounded-md px-6 py-2"
        >
          Rice Cookers
        </a>
        <a
          href="#"
          onMouseEnter={menuHover}
          className="header-middle-option rounded-md px-6 py-2"
        >
          Microwaves
        </a>
        <a
          href="#"
          onMouseEnter={menuHover}
          className="header-middle-option rounded-md px-6 py-2"
        >
          Pistols
        </a>
      </div>
      <button
        id="header-menu"
        className={`${
          sideMenuOpened ? "opacity-0" : "opacity-100"
        } fixed right-4 top-4 h-8 w-20 rounded-lg bg-gray-800 bg-opacity-[0.9] font-semibold tracking-wider text-white transition-all duration-300 ease-in-out lg:hidden`}
        onClick={menuClick}
      >
        Menu
      </button>
      <img
        src={x}
        className={`${
          sideMenuOpened ? "right-10" : "-right-[450px]"
        } fixed top-6 w-7 text-3xl transition-all duration-300 ease-out`}
        onClick={menuClick}
      />
      <Link
        id="send-button"
        className="h-full w-full"
        to="/strekker-site/inventory"
        state={{ productPrice }}
      ></Link>
    </nav>
  );
}
