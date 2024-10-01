import React from 'react'
import { MessangersBtn } from './shared'
import Image from 'next/image'

export const MessangerBanner = () => {
  return (
    <div className="bg-gray-100 w-[90%] ml-[5%] 
    rounded-md flex flex-row justify-between mt-10 
    mb-10 p-5 relative">
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-extrabold">
                Свіжі вакансії миттєво з'являються 
                в месенджерах!
            </h1>
            <div className="flex flex-row gap-3">
                <MessangersBtn messanger="viber" />
                <MessangersBtn messanger="telegram" />
            </div>
        </div>
        <div className="absolute -right-2 z-50 -top-6">
            <Image src="/home-social-desktop.png" 
            className="" width={200} height={200} />
        </div>
    </div>
  )
}

