"use client";

import React, { useContext, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { OrderContext } from "@/context/OrderContext";

const Navbar = () => {
  const { mode, toggle } = useContext(ThemeContext);
  const { cartCount, setCartCount } = useContext(OrderContext)
  const [nav, setNav] = useState<boolean>(false);

  const toggleMode = () => {
    setNav((prevNav) => !prevNav);
  };

  return (
    <div
      className={`w-full mx-auto flex justify-between shadow items-center p-4 fixed z-10 duration-300 ${
        mode === "light" ? "bg-white text-[#010101]" : "bg-[#010101] text-white shadow-white"
      }`}
    >
      {/* left side */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={toggleMode}>
          <AiOutlineMenu size={30} />
        </div>
        <Link href="/">
        <h1 className="text-xl sm:text-2xl lg:text-3xl px-2">
          <span className="font-bold">Just Eat</span>
        </h1>
        </Link>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p
            className={`p-2 duration-300 ${
              mode === "light" ? "" : "text-black"
            }`}
          >
            Pickup
          </p>
        </div>
      </div>

      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch
          size={20}
          className={mode === "light" ? "" : "text-[#010101]"}
        />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search foods"
        />
      </div>

      <div className="hidden md:flex flex-col items-center justify-center mx-2 gap-1 sm:mx-4">
        <p className="font-bold text-sm">Mode</p>
        <DarkModeToggle />
      </div>

      {/* Cart button */}
      <Link href="/cart" onClick={() => setCartCount(0)}>
        <button
          className={`${
            mode === "light" ? "bg-black text-white" : "bg-white text-black"
          } flex items-center rounded-full py-2 relative`}
        >
          <BsFillCartFill size={20} className="mr-2" /> 
          Cart
          {cartCount > 0 && <div className="absolute w-5 h-5 top-0 left-1 bg-red-600 text-white rounded-full text-xs">+{cartCount}</div>}
        </button>
      </Link>

      {/* mobile menu */}
      {/* overlat */}
      {nav && (
        <div className="bg-black/40 fixed w-full h-screen z-10 top-0 left-0" />
      )}

      {/* Side Drawer menu  */}
      <div
        className={
          nav && mode === "dark"
            ? "fixed top-0 left-0 w-[300px] h-screen bg-black text-white z-10 duration-300"
            : nav && mode === "light"
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white text-black z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={toggleMode}
          size={30}
          className={`absolute top-4 right-4 cursor-pointer p-1 hover:bg-gray-300 hover:rounded-full duration-300 ${
            mode === "light" ? "text-black" : ""
          }`}
        />
        <h2 className={"text-2xl p-4"}>
          Just <span className="font-bold">Eat</span>
        </h2>
        <nav>
          <ul
            className={`flex flex-col p-4 ${
              mode === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
