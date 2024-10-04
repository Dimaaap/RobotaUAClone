"use client";

import React, { useState } from 'react'
import { SearchInput } from './shared/SearchInput'
import Image from "next/image";
import { SearchLocationModal } from './modals';
import { useChooseLocationOpen } from '@/store';

export const WelcomeSection = () => {

  const { chooseLocationOpen, toggleChooseLocationOpen } = useChooseLocationOpen();

  return (
    <div className="w-full bg-red-500 text-white 
    text-center justify-center py-10 px-10 relative">
      <h1 className="text-5xl font-extrabold">
        robota.ua - працює на тебе
      </h1>
      <Image src="desktop-home-dog.svg" 
        width={200} height={250}
        className="absolute top-2"
      />
      <SearchInput />

      {
        chooseLocationOpen && <SearchLocationModal />
      }

      <div className="flex justify-between 
      text-xl mt-10 px-24 gap-2">
        <p>
            <b className="font-extrabold">
                109 844 {" "}
            </b> 
            актуальних вакансій від {" "}
            <b className="font-extrabold">
                38 790 {" "}
            </b>
            компаній
        </p>
        <div className="bg-white w-[10px] 
        h-[10px] rotate-45" />
        <p>
            <b className="font-extrabold">
                5 588 028 {" "}
            </b>
            кандидатів довірили нам власне резюме
        </p>
      </div>
    </div>
  )
}

