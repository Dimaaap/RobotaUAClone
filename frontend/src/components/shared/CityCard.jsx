import React from 'react'
import Image from "next/image";
import Link from "next/link"

export const CityCard = ({ imageUrl, title }) => {
  return (
    <Link className="rounded-lg mr-5 flex flex-col 
    gap-0 max-w-[250px] bg-white max-h-[110px]
    min-h-[110px]"
    href="#">
        <div className="w-full">
            <Image src={imageUrl} alt="" 
            width={150} height={50} 
            className="w-full rounded-lg" />
        </div>
        <div className='text-center justify-center 
        font-extrabold text-xl py-3'>
            { title }
        </div>
    </Link>
  )
}

