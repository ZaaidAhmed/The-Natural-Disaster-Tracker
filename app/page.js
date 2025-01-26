"use client";

import React, { useState, useEffect } from "react";
import Map from "@/components/map";  // here we import Map component

export default function Home() {
  const [disasters, setDisasters] = useState([]); // Here we store the  disasters based on selected category
  const [categories, setCategories] = useState([]); //Here we store the   available categories
  const [category, setCategory] = useState("wildfires"); // here just set the  disaster category

  //Next we go aherad and fetch available categories of disasters
  async function getCategories() {
    const res = await fetch(`https://eonet.gsfc.nasa.gov/api/v3/categories`);
    const data = await res.json();
    setCategories(data.categories); // Store the categories
  }

  // Next we go aherad and fetch the  disasters based on selected disaster category
  async function getDisasters() {
    const res = await fetch(`https://eonet.gsfc.nasa.gov/api/v3/categories/${category}`);
    const data = await res.json();
    setDisasters(data.events); // Store the disasters based on category
    console.log(data.events);
  }

  
  useEffect(() => {
    getCategories();
  }, []);

  
  useEffect(() => {
    getDisasters();
  }, [category]); 
  
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="relative">
      <div className="fixed top-6 left-6 z-[1000] bg-white p-4 shadow-lg rounded-lg">
        <form>
          <label htmlFor="category" className="block text-sm font-semibold text-neutral-800 mb-2">Select Disaster Type</label>
          <select
            name="category"
            id="category"
            className="bg-neutral-200 text-neutral-800 text-sm font-semibold p-2 rounded-lg outline-none border-none focus:ring-2 focus:ring-neutral-600 transition shadow"
            value={category} 
            onChange={handleCategoryChange} 
          >
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id} 
                className="text-neutral-800 text-sm font-semibold"
              >
                {category.title} 
              </option>
            ))}
          </select>
        </form>
      </div>

      <Map disasters={disasters} /> 
    </div>
  );
}















