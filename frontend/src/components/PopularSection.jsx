"use client";

import React from 'react'
import { popularCities } from '../data/popular-cities'
import { PopularItem } from './shared'
import { popularProfessions } from '../data/popular-professions';

export const PopularSection = () => {


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
        sectionLink='jobsearch/cities'
        />   
    </>
  )
}

