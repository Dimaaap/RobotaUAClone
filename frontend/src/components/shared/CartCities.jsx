"use client"

import React, { useEffect, useState } from 'react'

import { getCartCities } from "../../fetchers"
import { CityCard } from "../../components"

export const CartCities = () => {

    const [cartCities, setCartCities] = useState([]);

    useEffect(() => {
        const fetchCartCities = async() => {
            try {
                const cachedCities = localStorage.getItem("cartCities");
                if (cachedCities){
                    setCartCities(JSON.parse(cachedCities));
                } else {
                    const fetchedCities = await getCartCities();
                    setCartCities(fetchedCities);
                    localStorage.setItem("cartCities", JSON.stringify(fetchedCities));
                }
            } catch(error) {
                console.error(error)
            }
        }
    fetchCartCities()
    }, [])

  return (
    <div className="mt-16 w-full px-7 grid grid-cols-5
    gap-3">
        { cartCities.map((city, index) => (
            <CityCard imageUrl={city.city_image} 
            title={city.city_title} key={index} />
        )) }
    </div>
  )
}

