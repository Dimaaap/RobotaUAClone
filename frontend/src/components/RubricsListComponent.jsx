"use client";
import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { getAllRubrics } from '../fetchers';
import { getRandomNumber } from '../utils';

export const RubricsListComponent = () => {

    const [allRubrics, setAllRubrics] = useState([])

    useEffect(() => {
        const fetchAllRubrics = async() => {
            try {
                const cachedRubrics = localStorage.getItem("allRubrics");
                if(cachedRubrics){
                    setAllRubrics(JSON.parse(cachedRubrics));
                } else {
                    const fetchedRubrics = await getAllRubrics();
                    setAllRubrics(fetchedRubrics);
                    localStorate.setItem("allRubrics", JSON.stringify(fetchedRubrics))
                }
            } catch(error){
                console.error("Failed to fetch all rubrics", error)
            }
        }
        fetchAllRubrics();
    }, [])
 
  return (
    <div className="flex flex-col gap-5 p-10">
        <h1 className="font-extrabold text-4xl">
            Пошук вакансій за рубриками
        </h1>
        <div className="bg-white rounded-md p-12
        grid grid-cols-2 gap-5 mt-5">
            {
                allRubrics.map((rubric, index) => (
                    <Link href={rubric.slug} 
                    key={index} className="text-red-500 
                    font-semibold flex flex-row gap-2 items-center">
                        { rubric.title }
                        <span className="bg-gray-100 
                        rounded-md p-1 text-black/80">
                            { getRandomNumber(100) }
                        </span>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}
