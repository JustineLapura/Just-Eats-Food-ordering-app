"use client";

import { data } from "@/data/data";
import { FoodItem } from "@/types/types";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { OrderContext } from "@/context/OrderContext";

type Food = {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
};

const Food = () => {
  const { mode } = useContext(ThemeContext);
  const { orders, addToCart, addCartCount } = useContext(OrderContext);
  const [foods, setFoods] = useState(data);

  const newAddToCart = (id: number) => {
    addToCart(id)
    addCartCount()
  }

  // Filter Foods
  const filterType = (category: string) => {
    setFoods(data.filter((food) => food.category === category));
  };
  // Filter Price
  const filterPrice = (price1: number, price2: number) => {
    setFoods(data.filter((food) => food.price >= price1 && food.price <= price2));
  };
  // console.log(data);
  return (
    <div id="/#foods" className="max-w-[1640px] m-auto px-4 p-12 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter type  */}
        <div className="">
          <p
            className={`font-bold py-4 text-center lg:text-left ${
              mode === "light" ? "text-gray-700" : "text-white"
            }`}
          >
            Filter Type
          </p>
          <div
            className={`flex justify-between flex-wrap font-bold`}
          >
            <button
              onClick={() => setFoods(data)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price  */}
        <div className="text-sm">
          <p
            className={`font-bold py-4 text-center lg:text-left ${
              mode === "light" ? "text-gray-700" : "text-white"
            }`}
          >
            Filter Price
          </p>
          <div
            className={`flex justify-between w-full flex-wrap font-bold`}
          >
            <button
              onClick={() => filterPrice(1, 250)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
            >
              $1-$250
            </button>
            <button
              onClick={() => filterPrice(250, 500)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
            >
              $250-$500
            </button>
            <button
              onClick={() => filterPrice(500, 1000)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
            >
              $500-$1000
            </button>
            <button
              onClick={() => filterPrice(1000, 2000)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50 border-2 m-1"
            >
              $1000+
            </button>
          </div>
        </div>
      </div>

      {/* Display foods  */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((food) => (
          <div
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
            key={food.id}
          >
            <Image
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={food.image}
              width={200}
              height={100}
              alt={food.name}
            />
            <div className="flex justify-between px-2 py-4">
              <p
                className={`font-bold duration-300 ${
                  mode === "light" ? "" : "text-white"
                }`}
              >
                {food.name}
              </p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  ${food.price}
                </span>
              </p>
            </div>
            <div className="flex justify-end gap-2 items-center p-2">
              <button
                className={`${mode === "dark" ? "text-white border border-white" : "" } px-1 flex items-center text-sm hover:bg-orange-600 hover:text-white hover:border-orange-600`}
                onClick={() => newAddToCart(food.id)}
              >
                +<BsFillCartFill /> {orders[food.id] > 0 && <>({orders[food.id]})</>}
              </button>
              <button className="text-sm hover:text-xs bg-orange-600 text-white border-orange-600 duration-300 hover:bg-white hover:text-orange-600 hover:border-orange-600 hover:border-2 hover:font-bold">Buy now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
