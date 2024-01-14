import React from 'react';
import TopMenu from './TopMenu';
import x from '../assets/x.png';
import arrow from '../assets/arrow.png';

export default function AppHeader() {
  const [sideMenuOpened, setSideMenuOpened] = React.useState(false);
  const [focusedMenu, setFocusedMenu] = React.useState('');

  function menuClick() {
    setSideMenuOpened((prev) => !prev);
  }

  function menuHover(event) {
    for (let option of document.querySelectorAll('.header-middle-option')) {
      option.style.backgroundColor = 'transparent';
    }
    event.target.style.backgroundColor = 'rgb(200, 200, 200)';
    document.getElementById('top-menu').style.top = '0';
    document.getElementById('top-menu').style.opacity = '100';
    document.getElementById('header-middle-options').style.color = 'black';
    document.getElementById('header-title').style.color = 'black';
    setFocusedMenu(event.target.innerHTML);
  }

  function menuUnhover() {
    setFocusedMenu('');
  }

  return (
    <nav id="header" className="flex justify-center">
      <TopMenu focusedMenu={focusedMenu} menuUnhover={menuUnhover} />
      <div
        id="header-click-menu"
        className={`${
          sideMenuOpened ? 'right-0' : '-right-[8000px]'
        } fixed h-full w-full bg-white transition-all duration-300`}
      >
        <ul className="mx-10 mt-28 flex h-screen flex-col justify-start gap-8 text-2xl">
          <li>
            <a href="#" className="flex items-center justify-between">
              Blenders <img src={arrow} alt="" className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-between">
              Rice Cookers <img src={arrow} alt="" className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-between">
              Microwaves <img src={arrow} alt="" className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-between">
              Pistols <img src={arrow} alt="" className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
      <h1
        id="header-title"
        className={`fixed left-4 top-3 h-12 cursor-pointer font-logoFont text-3xl text-white outline-black transition-colors duration-300 hover:text-black md:text-4xl`}
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
          sideMenuOpened ? 'opacity-0' : 'opacity-100'
        } fixed right-4 top-4 h-8 w-20 rounded-lg bg-gray-800 bg-opacity-[0.9] font-semibold tracking-wider text-white transition-all duration-300 ease-in-out lg:hidden`}
        onClick={menuClick}
      >
        Menu
      </button>
      <img
        src={x}
        className={`${
          sideMenuOpened ? 'right-8' : '-right-[450px]'
        } fixed top-4 w-7 text-3xl transition-all duration-300 ease-out`}
        onClick={menuClick}
      />
    </nav>
  );
}
