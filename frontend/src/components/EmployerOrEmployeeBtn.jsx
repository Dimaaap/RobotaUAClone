import React from 'react'
import Link from "next/link";

export const EmployerOrEmployeeBtn = () => {
  return (
    <div className="flex flex-row rounded-md 
      border-2 border-red-600 text-[0.9rem] mt-[19px] 
      mb-6 -ml-[10%]">
        <Link href="#" className="bg-red-600 text-white 
        text-center px-3 py-1 w-[120px]">
          Пошукачу
        </Link>
        <Link href="#" className="bg-red-500 text-white 
        text-center px-3 py-1 w-[120px]
        hover:bg-white hover:text-red-500">
          Роботодавцю
        </Link>
      </div>
  )
}
