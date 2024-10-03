"use client";

import React, { useEffect } from 'react'
import { popularProfessions } from '@/data/popular-professions'
import { popularCities } from '@/data/popular-cities'
import { PopularItem } from './shared'
import { getTopCities } from '@/fetchers'

export const PopularSection = () => {

  const fetchTopCities = async () => {
    const cities = await getTopCities();
    return cities
  }

  useEffect(() => {
    console.log(fetchTopCities())
  })

  return (
    <>
        <PopularItem 
        sectionTitle="Популярні професії" 
        linkTitle="Подивитись всі професії" 
        iterableObject={popularProfessions}
        sectionLink='#'/>

        <PopularItem 
        sectionTitle="Популярні міста"
        linkTitle="Подивитись всі міста"
        iterableObject={popularCities}
        sectionLink='#'
        />   
    </>
  )
}

