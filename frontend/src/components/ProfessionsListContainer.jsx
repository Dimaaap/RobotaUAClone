"use client";

import React, { useState, useEffect } from 'react'
import Link from "next/link"

import { getAllProfessions } from '../fetchers';
import { groupCitiesByLetter, getRandomNumber } from '../utils';

export const ProfessionsListContainer = () => {

    const [allProfessions, setAllProfessions] = useState([]);

    useEffect(() => {
        const fetchAllProfessions = async() => {
            try {
                const cachedProfessions = localStorage.getItem("allProfessions");
                if(cachedProfessions){
                    setAllProfessions(JSON.parse(cachedProfessions));
                } else {
                    const fetchedProfessions = await getAllProfessions();
                    setAllProfessions(fetchAllProfessions);
                    localStorage.setItem("allProfessions", JSON.stringify(fetchedProfessions))
                }
            } catch(error){
                console.error("Failed to fetch data", error)
            }
        }
        fetchAllProfessions();
    }, [])

    const groupProfessionsByLetter = (professions) => {
        return professions.reduce((acc, profession) => {
            const firstLetter = profession.title[0].toUpperCase();
    
            if(!acc[firstLetter]){
                acc[firstLetter] = [];
            } 
            acc[firstLetter].push(profession)
            return acc
        }, {});
    }

    const groupProfessions = groupProfessionsByLetter(allProfessions);

  return (
    <div className="p-10">
        <div className="bg-white rounded-md p-12">
            
            <div className="flex flex-row gap-1">
                <Link className="p-2 rounded-md 
                bg-gray-100 text-black"
                href="/jobsearch/professions">
                    За алфавітом
                </Link>
                <Link className="p-2 rounded-md 
                bg-transparent text-red-500" 
                href="#">
                    По містах
                </Link>
            </div>

            <div className="">
                { Object.keys(groupProfessions).map((letter) => (
                    <div key={letter} className="mt-5">
                        <h2 className="text-black font-extrabold text-xl 
                        mb-5">
                            { letter }
                        </h2>
                        <div className="grid grid-cols-3 gap-5">
                            { groupProfessions[letter].map((profession, index) => (
                                <Link className="text-red-500 
                                font-semibold flex flex-row gap-2" 
                                href={profession.slug}
                                key={index}>
                                    { profession.title }
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
    </div>
    
  )
}

