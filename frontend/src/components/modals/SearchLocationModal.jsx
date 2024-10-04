"use client";

import React, { useState, useEffect } from 'react'
import { Search } from "lucide-react"
import { getAllCities, getTopCities } from '@/fetchers';
import Link from 'next/link';
import { useAllCitiesStore } from '@/store';

export const SearchLocationModal = () => {

    const [topCities, setTopCities] = useState([])
    const [showAllCities, setShowAllCities] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("")

    const { allCities, setAllCities } = useAllCitiesStore();

    const handleChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
        console.log(allCities)
        const filteredCities = allCities.filter(city => city.city_title.toLowerCase().includes(searchValue.toLowerCase()))
        console.log(filteredCities)
    }

    const fetchAllCities = async () => {
        setLoading(true);
        try {
            const fetchedCities = await getAllCities();
            setAllCities(fetchedCities);
        } catch(error) {
            console.error("Failed to fetch cities", error);
        } finally {
            setLoading(false);
            setShowAllCities(true);
        }
    }

    useEffect(() => {
        const fetchTopCities = async () => {
            try {
                const cities = await getTopCities();
                cities.push({
                    city_title: "Вся Україна",
                    slug: "vsia-ukraina",
                    href: "#"
                })
                cities.push({
                    city_title: "Інші країни",
                    slug: "inshi-krainy"
                })
                setTopCities(cities);
            } catch(error){
                console.error("Failed to fetch top cities: ", error)
            }
        }
        fetchTopCities();
    }, [])


  return (
    <div className="bg-white rounded-md absolute 
    py-3 shadow-md flex flex-col gap-0 w-[300px] 
    right-[21.5%] max-h-[700px] overflow-auto">
        <div className="w-[100%] justify-center 
        text-center relative">
            <input className="border border-black
            text-black 
            rounded-md px-10 max-w-[85%] h-[40px]" 
            placeholder="Почніть вводити місто" 
            type="text" 
            value={ searchValue }
            onChange={(e) => handleChangeSearchValue(e)}/>
            <Search className="absolute 
            text-gray-500 top-2.5 left-8" size={20} />
        </div>
        <div className="mt-4 flex flex-col text-black 
        text-left">
            { topCities.length > 0 ?
                (
                    topCities.map((city, index) => (
                        <Link
                        key={index}
                        href={city.slug} 
                        className="px-6 py-3
                        hover:bg-gray-100 font-semibold">
                            { city.city_title }
                        </Link>
                )) 
             ) : (
                Array(10).fill(0).map((_) => (
                    <div className="w-[90%] ml-[5%] 
                    h-[20px] bg-gray-200 mb-4 rounded-xl" />
                ))
            )}
        </div>

        { 
            showAllCities && allCities.length > 0 ? (
                <div className="border-t-2 border-black/20
                flex flex-col">
                    {allCities.map((city, index) => (
                    <Link key={index} 
                    href={city.slug}
                    className="px-6 py-3 
                    hover:bg-gray-100 font-semibold 
                    text-black text-left">
                        { city.city_title }
                    </Link>
                ))}
                </div>
            ) : (
                <></>
            )
        }

        {
            !showAllCities && (
                <button type="button" 
                className="border-[3px] border-red-500 
                rounded-md bg-white text-red-500 
                py-2 px-5 w-[85%] ml-[8%] font-extrabold 
                mt-5 text-[1.1rem] hover:text-red-600 
                hover:border-red-600"
                onClick={fetchAllCities} disabled={loading}>
                    {loading ? "Завантаження...": "Усі міста України"}
                </button>
            )
        }
    </div>
  )
}

