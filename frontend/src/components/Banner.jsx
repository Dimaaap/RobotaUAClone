import Link from 'next/link'
import React from 'react'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

export const Banner = () => {
  return (
    <div className="w-[90%] ml-[5%] mt-10 px-7 
    py-3 flex justify-between bg-gray-100">
        <div className="flex flex-col gap-4">
            <h1 className="font-extrabold text-2xl">
                Рекрутинг для захисту України
            </h1>
            <p className="text-lg">
                Обери свою службу вільно та 
                конфіденційно. Будуй кар'єру за своїми 
                правилами!
            </p> 
            <Link href="#"
                className="border-2 border-red-500 
                text-red-500 flex flex-row gap-2
                text-center rounded-md px-3 py-2 
                w-[22%] font-extrabold text-[1.1rem]
                hover:text-red-600 hover:border-red-600"
            >   
                Про проєкт
                <ExternalLink size={15} className="mt-1.5"
                />
            </Link>
        </div>
        <div className="">
            <Image src="home-drone.svg" width={400}
            height={400} />
        </div>
    </div>
  )
}
