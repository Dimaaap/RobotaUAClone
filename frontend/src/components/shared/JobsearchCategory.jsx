import React from 'react'
import Link from "next/link";

export const JobsearchCategory = () => {
  return (
    <div className="flex flex-row gap-5 border-b 
    border-gray-500 font-semibold">
        <Link href="#" className="py-5
        px-28
        hover:text-red-500">
            За рубриками
        </Link>
        <Link href="#" className="py-5 
        hover:text-red-500 px-28">
            За професіями
        </Link>
        <Link href="#" className="p-5 
        hover:text-red-500 px-28 
        border-b-4 border-red-500 
        rounded-sm text-red-500">
            По містах
        </Link>
        <Link href="#" className="p-5 
        hover:text-red-500 px-28">
            По компаніях
        </Link>
    </div>
  )
}

