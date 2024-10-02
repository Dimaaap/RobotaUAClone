"use client";

import React, { useRef } from 'react'
import { useDefaultLanguageStore, useLanguageOpen } from '@/store';
import Image from "next/image";
import Link from "next/link";

import { useClickAway } from 'react-use';

import { ChevronDown, ChevronUp } from "lucide-react"
import {FaGooglePlay, FaApple } from "react-icons/fa";
import { SiHuawei } from "react-icons/si";
import { ChooseLanguagePopup } from '../modals/ChooseLanguagePopup';
import { SocialMediaContainer, UploadAppBtn } from '.';

export const TopFooter = () => {

    const ref = useRef(null);
    const inputRef = useRef(null);

    const { language } = useDefaultLanguageStore();
    const {chooseLanguageOpen, toggleChooseLanguageOpen, 
        closeChooseLanguageOpen} = useLanguageOpen()


    useClickAway(ref, (e) => {
        if (
          inputRef.current &&
          !inputRef.current.contains(e.target) &&
          ref.current &&
          !ref.current.contains(e.target)
        ) {
          closeChooseLanguageOpen();
        }
      });

    const handleOpenPopup = () => {
        toggleChooseLanguageOpen();
    }

  return (
    <div className="flex flex-row  
        justify-between relative">
            <div className="flex flex-col gap-3">
                <Link href="/" className='text-black'>
                    <Image src="/logo-black.svg" 
                    className="text-black" width={200}
                    height={150} />
                </Link>
                <input className="h-[45px] pl-12
                border border-black rounded-md relative 
                cursor-pointer" 
                ref={inputRef}
                onClick={handleOpenPopup}
                readOnly value={language} />
                {
                    chooseLanguageOpen && 
                    <ChooseLanguagePopup 
                    ref={ref} /> 
                }
                
                {
                    language === "Українська" ? (
                        <Image src="/ukraine-flag-select.svg" 
                    width={25} height={25} 
                    className="rounded-md absolute top-[55px] left-4" />
                    ) : <></>
                }

                {
                    chooseLanguageOpen ? 
                    (<>
                        <ChevronUp size={20} 
                        className="text-gray-400 absolute 
                        top-[60px] left-[200px] cursor-pointer" />
                    </>) : 
                    (
                        <ChevronDown size={20} 
                        className="text-gray-400 absolute 
                        top-[60px] left-[200px] cursor-pointer" />
                    )
                }
                
                { language === "Українська" ? 
                (
                    <div className="flex flex-row gap-2">
                        <small>Дякуємо, що обрали українську</small>
                        <Image src="/ukraine-flag-select.svg"
                        width={25} height={25} 
                        className="rounded-lg -mt-1" />
                    </div>
                ): (
                    <div className="flex flex-row gap-2">
                        <small>Українською краще</small>
                        <Image src="/ukraine-flag-select.svg"
                        width={25} height={25} 
                        className="rounded-lg -mt-1" />
                    </div>
                )
                }

            <SocialMediaContainer />

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

                <UploadAppBtn uploadImage={
                    <FaGooglePlay size={25} 
                    className="mt-1" />}
                    uploadApp="GooglePlay" 
                />

                <UploadAppBtn uploadImage={
                    <FaApple size={25} 
                    className="mt-1" />
                }
                uploadApp="AppStore" 
                />

                <UploadAppBtn uploadImage={
                    <SiHuawei size={25} 
                    className="mt-2" />
                } 
                uploadApp="AppGalery"
                />
            </div>
        </div>
  )
}

