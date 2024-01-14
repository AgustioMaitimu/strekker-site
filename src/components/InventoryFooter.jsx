import React from 'react';
import up from '../assets/items/up.png';

export default function InventoryFooter(props) {
  const mybutton = document.getElementById('myButton');

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div
      onLoad={() => {
        window.scrollTo({ top: 1, behavior: 'smooth' });
      }}
      className="fixed bottom-0 flex h-[73px] w-full items-center justify-center gap-0 rounded-t-3xl bg-gray-100 font-detailsFont font-semibold"
    >
      <img
        id="myButton"
        onClick={scrollToTop}
        src={up}
        className="fixed left-4 my-auto w-8 cursor-pointer rounded-lg bg-gray-300 p-2 md:left-8 md:w-10"
        alt=""
      />
      <div className="flex flex-col items-center justify-center">
        <p className="mx-auto text-base">${props.totalPrice} Total Price</p>
        <p className="mx-auto text-sm text-gray-600">
          ${Math.round(props.totalPrice / 3) + 5.99} x 3 months installment
          option!
        </p>
      </div>
    </div>
  );
}
