import React from 'react'
import Image from "next/image"
import Link from "next/link";

import { ThumbsUp } from "lucide-react";

export const AuthUserHeader = () => {
  return (
    <div className="w-full bg-red-500 
    text-white font-bold px-10 flex flex-col">
        <div className="w-full flex flex-row justify-between 
        items-center">
            <div className="flex flex-row gap-10">
                <Link className='flex flex-row gap-3 py-5' href='/'>
                  <Image src="/logo-white.svg"
                  alt="Robota Ua" width={150} height={40}/>
                  <Image src="/logo-flag-ukraine.svg" 
                  alt="Ukraine Flag" width={20} height={20} />
                </Link>
                <Link className="flex flex-row gap-2 
                px-5 items-center text-white 
                hover:bg-red-600"  
                href="/">
                  <ThumbsUp size={20} className="text-white" />
                  <span className="mt-1">Рекомендовані</span>
                </Link>
                <Link className="border-2 border-white
                rounded-md font-extrabold hover:bg-white 
                hover:text-red-500 h-[60%] py-2 mt-3 px-5" 
                href="#">
                  Створити резюме
                </Link>
            </div>
        </div>
    </div>
  )
}
