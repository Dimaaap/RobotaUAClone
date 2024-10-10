"use client";

import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { getAllCities } from '../fetchers';
import { getRandomNumber, formatCityName, groupCitiesByLetter } from "../utils"
import { CityOrRegionChoise } from './shared';

export const CitiesByTitleContainer = () => {

    const [allCities, setAllCities] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchAllCities = async () => {
            setLoading(true)
            try {
                const cachedCities = localStorage.getItem("allCities");
                if (cachedCities) {
                    setAllCities(JSON.parse(cachedCities));
                } else {
                    const fetchedCities = await getAllCities();
                    setAllCities(fetchedCities)
                    localStorage.setItem("allCities", JSON.stringify(fetchedCities))
                }
            } catch(error) {
                console.error("Failed to fetch all cities", error)
            } finally {
                setLoading(false);
            }
        }
        fetchAllCities()
    }, [])

    const groupedCities = groupCitiesByLetter(allCities);

  return (
    <div className="bg-white w-[94%] ml-[2.5%]
    mt-10 flex flex-col gap-2
    rounded-md p-10">
      <CityOrRegionChoise />
      <div className="">
        { Object.keys(groupedCities).map((letter) => (
            <div key={letter} className="mt-5">
                <h2 className="text-black font-extrabold text-xl 
                mb-5">
                    { letter }
                </h2>
                <div className="grid grid-cols-3 gap-5">
                    { groupedCities[letter].map((city, index) => (
                        <Link className="text-red-500 
                        font-semibold flex flex-row gap-2" 
                        href={city.slug}
                        key={index}>
                            { formatCityName(allCities, city) }
                            <span className="bg-gray-100 rounded-md 
                            p-1 text-black text-[0.9rem] font-light">
                                { getRandomNumber(100) }
                            </span>
                        </Link>
                    )) }
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

