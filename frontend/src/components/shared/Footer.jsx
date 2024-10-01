"use client";

import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { FaFacebook, FaYoutube, 
    FaLinkedin, FaTelegram, 
    FaGooglePlay, FaApple } from "react-icons/fa";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { SiHuawei } from "react-icons/si";

export const Footer = () => {

    const [instagramHover, setInstagramHover] = useState(false)

  return (
    <div className="border-t border-gray-300 
    w-full py-7 px-14 flex flex-col gap-3">
        <div className="flex flex-row 
        justify-between relative">
            <div className="flex flex-col gap-3">
                <Link href="/" className='text-black'>
                    <Image src="/logo-black.svg" 
                    className="text-black" width={200}
                    height={150} />
                </Link>
                <input className="h-[45px] pl-12
                border border-black rounded-md relative" 
                readOnly value="Українська" /> 
                <Image src="/ukraine-flag-select.svg" 
                width={25} height={25} 
                className="rounded-md absolute top-[55px] left-4" />
                <ChevronDown size={20} 
                className="text-gray-400 absolute 
                top-[60px] left-[200px] cursor-pointer" />
                
                <div className="flex flex-row gap-2">
                    <small>Дякуємо, що обрали українську</small>
                    <Image src="/ukraine-flag-select.svg"
                    width={25} height={25} 
                    className="rounded-lg -mt-1" />
                </div>

                <div className='flex flex-row gap-4 mt-1'>
                    <Link href="#">
                        <FaFacebook size={20} 
                        className="hover:text-blue-600 
                        transition-all duration-100"/>
                    </Link>
                    <Link href="#" 
                    onMouseEnter={() => setInstagramHover(true)}
                    onMouseLeave={() => setInstagramHover(false)}>
                        { instagramHover ? 
                        <Image src="/social/icon-instagram-colored.svg" 
                        width={23} height={23}
                        className="-mt-0.5" />
                        : (
                            <AiFillInstagram size={23}
                            className="-mt-0.5" />
                        )  
                        }
                    </Link>
                    <Link href="#">
                        <AiFillTikTok size={23} 
                        className="-mt-0.5" />
                    </Link>
                    <Link href="#">
                        <FaYoutube size={23} 
                        className="-mt-0.5 
                        hover:text-red-600" />
                    </Link>
                    <Link href="#">
                        <FaLinkedin size={23} 
                        className="-mt-0.5 
                        rounded-sm
                        hover:text-blue-600" />
                    </Link>
                    <Link href="#">
                        <FaTelegram size={23} 
                        className="-mt-0.5 
                        hover:text-blue-600" />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-3
            text-center justify-center">
                <h1 className="font-extrabold
                text-lg text-left">
                    Пошукачу
                </h1>
                <Link 
                href="#"
                className="flex flex-row gap-3 
                text-right hover:text-red-500 
                group">
                    <div className="w-[5px] 
                    h-[5px] bg-black rotate-45
                    mt-2 group-hover:bg-red-500" />
                    Знайти роботу
                </Link>
                <Link 
                href="#"
                className="flex flex-row gap-3 
                text-right hover:text-red-500 
                group">
                    <div className="w-[5px] 
                    h-[5px] bg-black rotate-45
                    mt-2 group-hover:bg-red-500" />
                    Розмістити резюме
                </Link>
                <Link 
                href="#"
                className="flex flex-row gap-3 
                text-right hover:text-red-500 
                group">
                    <div className="w-[5px] 
                    h-[5px] bg-black rotate-45
                    mt-2 group-hover:bg-red-500 " />
                    Як скласти резюме
                </Link>
            </div>
            <div className="flex flex-col gap-3
            text-center justify-center">
                <h1 className="font-extrabold
                text-lg text-left">
                    Роботодавцю
                </h1>
                <Link 
                href="#"
                className="flex flex-row gap-3 
                text-right hover:text-red-500 
                group">
                    <div className="w-[5px] 
                    h-[5px] bg-black rotate-45
                    mt-2 group-hover:bg-red-500" />
                    Додати вакансію
                </Link>
                <Link 
                href="#"
                className="flex flex-row gap-3 
                text-right hover:text-red-500 
                group">
                    <div className="w-[5px] 
                    h-[5px] bg-black rotate-45
                    mt-2 group-hover:bg-red-500" />
                    Знайти резюме
                </Link>
                <Link 
                href="#"
                className="flex flex-row gap-3 
                text-right hover:text-red-500 
                group">
                    <div className="w-[5px] 
                    h-[5px] bg-black rotate-45
                    mt-2 group-hover:bg-red-500 " />
                    Наші послуги
                </Link>
            </div>
            <div className="flex flex-col gap-3
            text-center justify-center">
                <h1 className="font-extrabold
                text-lg text-left">
                    robota.ua
                </h1>
                <Link 
                href="#"
                className="flex flex-row gap-3 
                text-right hover:text-red-500 
                group">
                    <div className="w-[5px] 
                    h-[5px] bg-black rotate-45
                    mt-2 group-hover:bg-red-500" />
                    Про компанію
                </Link>
                <Link 
                href="#"
                className="flex flex-row gap-3 
                text-right hover:text-red-500 
                group">
                    <div className="w-[5px] 
                    h-[5px] bg-black rotate-45
                    mt-2 group-hover:bg-red-500" />
                    Брендова документація
                </Link>
                <Link 
                href="#"
                className="flex flex-row gap-3 
                text-right hover:text-red-500 
                group">
                    <div className="w-[5px] 
                    h-[5px] bg-black rotate-45
                    mt-2 group-hover:bg-red-500 " />
                    Написати в техпідтримку
                </Link>
            </div>

            <div className="flex flex-col gap-2">
                <Link 
                className="flex flex-row gap-2
                border border-black rounded-md 
                px-5 py-1 hover:bg-black 
                hover:text-white transition-all duration-300" 
                href="#">
                    <FaGooglePlay size={25} 
                    className="mt-1" />
                    <div className="flex flex-col gap-0">
                        <small className="text-[0.7rem]">
                            Завантажити з 
                        </small>
                        <small className="text-[0.9rem]">
                            GooglePlay
                        </small>
                    </div>
                </Link>

                <Link 
                className="flex flex-row gap-2
                border border-black rounded-md 
                px-5 py-1 hover:bg-black 
                hover:text-white transition-all duration-300" 
                href="#">
                    <FaApple size={25} 
                    className="mt-1" />
                    <div className="flex flex-col gap-0">
                        <small className="text-[0.7rem]">
                            Завантажити з 
                        </small>
                        <small className="text-[0.9rem]">
                            AppStore
                        </small>
                    </div>
                </Link>

                <Link 
                className="flex flex-row gap-2
                border border-black rounded-md 
                px-6 py-1 hover:bg-black 
                hover:text-white transition-all duration-300" 
                href="#">
                    <SiHuawei size={25} 
                    className="mt-2" />
                    <div className="flex flex-col gap-0">
                        <small className="text-[0.7rem]">
                            Завантажити з 
                        </small>
                        <small className="text-[0.9rem]">
                            AppGalery
                        </small>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
