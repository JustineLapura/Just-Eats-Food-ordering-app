"use client";
import { categories } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";

const Category = () => {
//   console.log(categories);
  return (
    <div className="max-w-[1640px] px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Categories  */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((category) => (
          <div
            className="bg-gray-200 rounded-lg p-4 flex justify-between items-center"
            key={category.id}
          >
            <h2 className="font-bold sm:text-xl">{category.name}</h2>
            <Image
              className="w-20 "
              src={category.image}
              alt={category.name}
              width={200}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
