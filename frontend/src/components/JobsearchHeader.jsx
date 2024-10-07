import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { ThumbsUp, LogIn, Briefcase, Search, MapPin, ChevronDown } from 'lucide-react';

export const JobsearchHeader = () => {
  return (
    <div className="w-full bg-red-500 flex flex-col gap-5 ">
        <div className="flex flex-row justify-between 
        items-center my-3 pr-7">
            <div className="flex flex-row gap-7">
                <Link className="flex flex-row gap-2 
                ml-10" 
                href="/">
                    <Image src="/logo-white.svg" 
                    alt="" width={150} height={150} />
                    <Image src="/logo-flag-ukraine.svg" 
                    alt="" width={20} height={20}
                    />
                </Link>
                <Link className="flex flex-row gap-2
                -mt-4 -mb-3 max-h-[150px] transition-all duration-300 
                px-5 pt-3 -pb-5 hover:bg-red-600 text-white 
                font-extrabold"
                href="#">
                    <ThumbsUp size={20} className="mt-3" />
                    <span className="mt-3" >Рекомендовані</span>
                </Link>
                <Link className="border-2 border-white 
                rounded-md text-white font-extrabold 
                bg-transparent px-3 py-2 hover:bg-white 
                hover:text-red-500" 
                href="#">
                    Створити резюме
                </Link>
            </div>
            <div className="flex flex-row gap-7">
                <Link className="flex flex-row gap-2
                -mt-4 -mb-3 max-h-[150px] transition-all duration-300 
                px-5 py-5 hover:bg-red-600 text-white 
                font-extrabold"
                href="#">
                    <LogIn size={20} className="" />
                    <span className="">Увійти</span>
                </Link>
                <Link className="flex flex-row gap-2
                -mt-4 -mb-3 max-h-[150px] transition-all duration-300 
                px-5 py-5 hover:bg-red-600 text-white 
                font-extrabold"
                href="#">
                    <Briefcase size={20} />
                    <span>Сайт для роботодавця</span>
                </Link>
            </div>
        </div>
        <div className="flex flex-row gap-3">
            <div className="w-10/12">
                <input className="rounded-md
                px-12 h-[40px] w-full mb-5 ml-10 relative" 
                placeholder="Пошук за професією, компанією, навичкою"
                maxLength={100}/>
                <Search size={20} className="absolute top-[15.5%] left-[3.8%] 
                text-gray-500"/>
            </div>

            <div className="absolute flex 
                flex-row gap-2 top-[14%] right-[15%] 
                cursor-pointer px-1 py-2">
                    <MapPin size={20} />
                    <span>Луцьк</span>
                    <ChevronDown size={20} 
                    className="text-gray-400 mt-1" />
                </div>
            <button className="ml-20 border-2 
            border-white rounded-md px-1 py-0
            w-[40px] h-[40px] text-white hover:bg-white 
            hover:text-red-500">
                <Search size={20} className="ml-1" />
            </button>
        </div>
    </div>
  )
}

