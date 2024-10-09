"use client";

import React, { useState, useEffect } from 'react'
import Link from "next/link";

import { getAllCities } from '../fetchers';
import { CityOrRegionChoise } from './shared';
import { getRandomNumber } from '../utils';

export const CitiesByRegionsContainer = () => {

    const [allCities, setAllCities] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchAllCities = async() => {
            setLoading(true);

            try {
                const cachedCities = localStorage.getItem("allCities");
                if(cachedCities) {
                    setAllCities(JSON.parse(cachedCities));
                } else {
                    const fetchedCities = await getAllCities();
                    setAllCities(fetchedCities);
                    localStorage.setItem("allCities", JSON.stringify(fetchedCities))
                }
            } catch(error) {
                console.error("Failed to fetch all cities", error)
            } finally {
                setLoading(false)
            }
        }
        fetchAllCities()
    }, [])

    const groupCitiesByRegion = (cities) => {
        return cities.reduce((acc, city) => {
            const regionTitle = city.region_title;

            if(!acc[regionTitle]) {
                acc[regionTitle] = [];
            }
            acc[regionTitle].push(city);
            return acc;
        }, {});
    }

    const groupedCities = groupCitiesByRegion(allCities);
    const sortedRegions = Object.keys(groupedCities).sort((a, b) => a.localeCompare(b));

  return (
    <div className="bg-white w-[94%] ml-[2.5%]
    mt-10 flex flex-col gap-5
    rounded-md p-10">
      <CityOrRegionChoise />
      { console.log(groupedCities) }
      <div>
        { sortedRegions.map((regionTitle) => (
            <div key={regionTitle} className="mt-5">
                <h2 className='text-black font-extrabold text-xl mb-5'>
                    { regionTitle === "Автономна Республіка Крим" 
                    ? regionTitle 
                    : `${ regionTitle } область` }
                </h2>
                <div className="grid grid-cols-3 gap-5">
                    { groupedCities[regionTitle].map((city, index) => (
                        <Link className="text-red-500 font-semibold 
                        flex flex-row gap-2"
                        href={city.slug} key={index}>
                            { city.city_title }
                            <span className="bg-gray-100 text-black 
                            rounded-md p-1 text-[0.9rem] font-light">
                                { getRandomNumber(100) }
                            </span>
                        </Link>
                    )) }
                </div>
            </div>
        )) }
      </div>
    </div>
  )
}

