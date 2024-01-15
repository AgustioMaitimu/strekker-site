import React from "react";
import { Link } from "react-router-dom";
import micro1 from "../assets/items/microwave.png";
import ricecooker1 from "../assets/items/ricecooker.png";
import pistol from "../assets/items/pistol.png";
import model3 from "../assets/items/model-3.png";
import models from "../assets/items/model-s.png";
import modelx from "../assets/items/model-x.png";
import modely from "../assets/items/model-y.png";

export default function TopMenu(props) {
  const [productPrice, setProductPrice] = React.useState("");

  function getProductPrice(event) {
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
  }

  function menuUnhovered() {
    document.getElementById("top-menu").style.top = "-300px";
    document.getElementById("top-menu").style.opacity = "0";
    document.getElementById("header-middle-options").style.color = "white";
    document.getElementById("header-title").style.color = "white";
    for (let option of document.querySelectorAll(".header-middle-option")) {
      option.style.backgroundColor = "transparent";
    }
    props.menuUnhover();
  }

  return (
    <div id="top-menu-container">
      <div
        id="top-menu"
        onMouseLeave={menuUnhovered}
        className={`fixed -top-[1000px] left-0 flex h-[75vh] w-screen items-center justify-center gap-32  bg-slate-100 transition-all duration-500 ease-out 2xl:h-[50vh]`}
      >
        <div
          className={`${
            props.focusedMenu == "Blenders" ? "top-[15vh]" : "-top-[300px]"
          } blender fixed left-0 ml-[15vw] flex flex-col items-center justify-center gap-2 transition-all duration-700`}
        >
          <img src={models} className="h-52 rounded-md p-4" alt="" />
          <Link
            onMouseEnter={getProductPrice}
            to="/strekker-site/inventory"
            state={{ productPrice }}
            className="text-lg underline underline-offset-2"
          >
            Model S
          </Link>
        </div>
        <div
          className={`${
            props.focusedMenu == "Blenders"
              ? "top-[15vh] opacity-100"
              : "-top-[300px] opacity-0"
          } fixed left-0 ml-[35vw] flex flex-col items-center justify-center gap-2 transition-all duration-700`}
        >
          <img src={model3} className="h-52 rounded-md p-4" alt="" />
          <Link
            onMouseEnter={getProductPrice}
            to="/strekker-site/inventory"
            state={{ productPrice }}
            className="text-lg underline underline-offset-2"
          >
            Model 3
          </Link>
        </div>
        <div
          className={`${
            props.focusedMenu == "Blenders"
              ? "top-[15vh] opacity-100"
              : "-top-[300px] opacity-0"
          } fixed left-0 ml-[55vw] flex flex-col items-center justify-center gap-2 transition-all duration-700`}
        >
          <img src={modelx} className="h-52 rounded-md p-4" alt="" />
          <Link
            onMouseEnter={getProductPrice}
            to="/strekker-site/inventory"
            state={{ productPrice }}
            className="text-lg underline underline-offset-2"
          >
            Model X
          </Link>
        </div>
        <div
          className={`${
            props.focusedMenu == "Blenders"
              ? "top-[15vh] opacity-100"
              : "-top-[300px] opacity-0"
          } fixed left-0 ml-[75vw] flex flex-col items-center justify-center gap-2 transition-all duration-700`}
        >
          <img src={modely} className="h-52 rounded-md p-4" alt="" />
          <Link
            onMouseEnter={getProductPrice}
            to="/strekker-site/inventory"
            state={{ productPrice }}
            className="text-lg underline underline-offset-2"
          >
            Model Y
          </Link>
        </div>
        <div
          className={`${
            props.focusedMenu == "Rice Cookers"
              ? "top-[15vh] opacity-100"
              : "-top-[300px] opacity-0"
          } fixed left-0 ml-[42vw] flex flex-col items-center justify-center gap-2 transition-all duration-700`}
        >
          <img src={ricecooker1} className="h-56 rounded-md p-4" alt="" />
          <Link
            onMouseEnter={getProductPrice}
            to="/strekker-site/inventory"
            state={{ productPrice }}
            className="text-lg underline underline-offset-2"
          >
            Franku
          </Link>
        </div>
        <div
          className={`${
            props.focusedMenu == "Microwaves"
              ? "top-[15vh] opacity-100"
              : "-top-[300px] opacity-0"
          } fixed left-0 ml-[40vw] flex flex-col items-center justify-center gap-2 transition-all duration-700`}
        >
          <img src={micro1} className="h-52 rounded-md p-4" alt="" />
          <Link
            onMouseEnter={getProductPrice}
            to="/strekker-site/inventory"
            state={{ productPrice }}
            className="text-lg underline underline-offset-2"
          >
            James
          </Link>
        </div>

        <div
          className={`${
            props.focusedMenu == "Pistols"
              ? "top-[15vh] opacity-100"
              : "-top-[300px] opacity-0"
          } fixed left-0 ml-[40vw] flex flex-col items-center justify-center gap-2 transition-all duration-700`}
        >
          <img src={pistol} className="h-52 rounded-md p-4" alt="" />
          <Link
            onMouseEnter={getProductPrice}
            to="/strekker-site/inventory"
            state={{ productPrice }}
            className="text-lg underline underline-offset-2"
          >
            PewPew
          </Link>
        </div>
      </div>
    </div>
  );
}
