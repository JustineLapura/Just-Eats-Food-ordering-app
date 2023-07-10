"use client";

import { OrderContext } from "@/context/OrderContext";
import { ThemeContext } from "@/context/ThemeContext";
import { data } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

type OrderType = {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
};

const page = () => {
  const { mode } = useContext(ThemeContext);
  const {
    orders,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  } = useContext(OrderContext);

  const totalAmount = getTotalCartAmount();

  return (
    <div className="w-full min-h-screen pb-10">
      <h1 className="text-2xl md:text-4xl text-orange-600 font-bold pb-8 pt-24 text-center">
        Items added to your cart
      </h1>
      <div className="relative grid lg:grid-cols-2 gap-4">
        <Link className="fixed left-4 top-[100px]" href="/">
          <button className="bg-orange-600 text-white border-none text-sm">Back</button>
        </Link>
        {data.map((order: OrderType) => {
          if (orders[order.id] !== 0) {
            return (
              <div
                className={`h-[200px] w-[300px] md:w-[500px] mx-auto border border-gray-400 shadow-lg p-5 rounded-lg ${
                  mode === "dark" ? "text-white" : ""
                }`}
              >
                <div className="flex gap-4">
                  <Image
                    className="h-full rounded-lg object-cover"
                    src={order.image}
                    width={100}
                    height={100}
                    alt={order.name}
                  />
                  <div className="flex flex-col gap-4 sm:text-xl md:text-2xl">
                    <p className="font-bold">{order.name}</p>
                    <p className="font-bold text-sm">${order.price}</p>
                    <div className="flex">
                      <button
                        className={`${mode === "dark" ? "border-white" : ""} p-0 px-1 rounded-none flex justify-center items-center hover:bg-black hover:text-white`}
                        onClick={() => removeFromCart(order.id)}
                      >
                        -
                      </button>
                      <input
                        className="border text-gray-900 border-gray-400 text-sm w-10 text-center"
                        type="number"
                        value={orders[order.id]}
                        onChange={(e) =>
                          updateCartItemCount(Number(e.target.value), order.id)
                        }
                      />
                      <button
                        className={`${mode === "dark" ? "border-white" : ""} p-0 px-1 rounded-none flex justify-center items-center hover:bg-black hover:text-white`}
                        onClick={() => addToCart(order.id)}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm"><span className="font-bold">Total: </span>${order.price * orders[order.id]}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="flex flex-col items-center gap-8 py-8">
          <p className={`text-2xl ${mode === "dark" ? "text-white" : ""}`}> <span className="font-bold">Subtotal: </span>${totalAmount}</p>
          <div className="flex justify-center gap-4">
            <Link href="/">
              <button className={`${mode === "dark" ? "bg-white text-black": ""} hover:bg-black hover:border-white hover:text-white duration-300`}>Continue Shopping</button>
            </Link>
            <button className="bg-black text-white border-white">Checkout</button>
          </div>
        </div>
      ) : (
        <h1 className="text-2xl font-bold text-center">Your Cart is Empty...</h1>
      )}
    </div>
  );
};

export default page;
