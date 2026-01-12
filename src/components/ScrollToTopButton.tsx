import useScrollSpy from "@/hooks/useScrollSpy";
import React from "react";

export default function ScrollToTopButton() {
  const { isScrolled } = useScrollSpy();

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  if (isScrolled)
    return (
      <React.Fragment>
        <button
          type="button"
          onClick={backToTop}
          className={` ${
            isScrolled ? `hidden md:inline-block` : `hidden`
          } fixed right-12.5 bottom-12.5 z-1000 rounded-full bg-slate-200 p-3 text-xs leading-tight font-medium text-black uppercase shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:text-white focus:shadow-lg focus:ring-0 focus:outline-none active:bg-blue-800 active:text-white active:shadow-lg`}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="h-6 w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </button>
        <button
          id="scrollTopMobile"
          type="button"
          onClick={backToTop}
          className={` ${
            isScrolled ? `inline-block md:hidden` : `hidden`
          } fixed inset-x-0 bottom-0 z-1000 mx-auto h-min w-max rounded-t-full bg-slate-200 px-6 pt-3 pb-2 text-xs leading-tight font-medium text-black uppercase shadow-md transition duration-150 ease-in-out hover:bg-slate-300 hover:shadow-lg focus:bg-slate-300 focus:shadow-lg focus:ring-0 focus:outline-none active:bg-slate-400 active:text-white active:shadow-lg`}
        >
          <div className="align-center flex content-center items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 64 64"
            >
              <linearGradient
                id="Blrct3cvjxPZEWtEgEkuga_48170_gr1"
                x1="45.5"
                x2="45.5"
                y1="47.702"
                y2="53.867"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#Blrct3cvjxPZEWtEgEkuga_48170_gr1)"
                d="M42,54h5c1.1,0,2-0.9,2-2v-5L42,54z"
              ></path>
              <linearGradient
                id="Blrct3cvjxPZEWtEgEkugb_48170_gr2"
                x1="30.216"
                x2="30.216"
                y1="6.617"
                y2="57.697"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#Blrct3cvjxPZEWtEgEkugb_48170_gr2)"
                d="M48.7,24L48.7,24c-1.2-0.1-2.4,0.4-3.3,1.2c-0.1,0.1-0.3,0.3-0.4,0.4c-0.8-1-2.1-1.7-3.5-1.7 s-2.7,0.7-3.5,1.7c-0.8-1-2.1-1.7-3.5-1.7c-0.9,0-1.8,0.3-2.5,0.8V10.5C32,8,30,6,27.5,6c-1.2,0-2.3,0.5-3.2,1.3 c-0.8,0.9-1.3,2-1.3,3.2l0,26.8c0,0.6-0.5,0.9-0.6,0.9c-0.1,0.1-0.7,0.2-1.1-0.2L17,33.7c-2.1-2.1-5.4-2.3-7.5-0.5 c-1.2,1-1.9,2.4-2,4c-0.1,1.5,0.5,3.1,1.6,4.1l14.1,15.1c0.9,1,2.3,1.6,3.7,1.6H48c2.8,0,5-2.2,5-5V28.7 C53,26.2,51.1,24.1,48.7,24z M51,53c0,1.7-1.3,3-3,3H26.7c-0.8,0-1.6-0.3-2.2-1L10.5,39.9c-0.7-0.7-1.1-1.7-1-2.6 c0-1,0.5-1.9,1.3-2.5c0.6-0.5,1.4-0.8,2.1-0.8c1,0,1.9,0.4,2.7,1.1l4.4,4.4c0.9,0.9,2.1,1.1,3.3,0.7c1.1-0.5,1.9-1.5,1.9-2.8 l0-26.8c0-0.7,0.3-1.3,0.7-1.8C26.2,8.3,26.8,8,27.5,8c1.4,0,2.5,1.1,2.5,2.5v18h2c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5h2 c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5h2c0-0.7,0.3-1.3,0.8-1.8c0.5-0.5,1.2-0.7,1.9-0.7c1.3,0.1,2.4,1.3,2.4,2.7V53z"
              ></path>
              <linearGradient
                id="Blrct3cvjxPZEWtEgEkugc_48170_gr3"
                x1="35"
                x2="35"
                y1="6.617"
                y2="57.697"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <rect
                width="4"
                height="2"
                x="33"
                y="31"
                fill="url(#Blrct3cvjxPZEWtEgEkugc_48170_gr3)"
              ></rect>
              <linearGradient
                id="Blrct3cvjxPZEWtEgEkugd_48170_gr4"
                x1="41"
                x2="41"
                y1="6.617"
                y2="57.697"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <rect
                width="4"
                height="2"
                x="39"
                y="31"
                fill="url(#Blrct3cvjxPZEWtEgEkugd_48170_gr4)"
              ></rect>
              <linearGradient
                id="Blrct3cvjxPZEWtEgEkuge_48170_gr5"
                x1="47"
                x2="47"
                y1="6.617"
                y2="57.697"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <rect
                width="4"
                height="2"
                x="45"
                y="31"
                fill="url(#Blrct3cvjxPZEWtEgEkuge_48170_gr5)"
              ></rect>
            </svg>
            nach oben
          </div>
        </button>
      </React.Fragment>
    );
}
