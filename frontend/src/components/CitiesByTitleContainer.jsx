"use client";

import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { getAllCities } from '../fetchers';

export const CitiesByTitleContainer = () => {

    const [allCities, setAllCities] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchAllCities = async () => {
            setLoading(true)
            try {
                const fetchedCities = await getAllCities(); 
                setAllCities(fetchedCities) 
            } catch(error) {
                console.error("Failed to fetch all cities", error)
            } finally {
                setLoading(false);
            }
        }
        fetchAllCities()
    }, [])

    const groupCitiesByLetter = (cities) => {
        return cities.reduce((acc, city) => {
            const firstLetter = city.city_title[0].toUpperCase();

            if(!acc[firstLetter]){
                acc[firstLetter] = [];
            } 
            acc[firstLetter].push(city)
            return acc
        }, {});
    }

    const formatCityName = (city) => {
        const cityCount = allCities.filter(c => c.city_title === city.city_title).length;
        return cityCount > 1 ? `${city.city_title}, ${city.region}`: city.city_title
    }

    const groupedCities = groupCitiesByLetter(allCities);

  return (
    <div className="bg-white w-[94%] ml-[2.5%]
    mt-10 flex flex-col gap-5
    rounded-md p-10">
      <div className="flex flex-row gap-2">
            <Link className="text-black bg-gray-200 
            rounded-md p-2"
            href="#">
                Міста
            </Link>
            <Link className="text-red-500 p-2"
            href="#">
                Області
            </Link>
      </div>
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
                        font-semibold" 
                        href={city.slug}
                        key={index}>
                            { formatCityName(city) }
                        </Link>
                    )) }
                </div>
            </div>
        )) }
      </div>
    </div>
  )
}

