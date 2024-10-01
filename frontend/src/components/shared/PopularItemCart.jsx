import React from 'react'
import Link from "next/link"

export const PopularItemCart = ({ title, href="#" }) => {
  return (
    <Link 
    href={href}
    className="border border-gray-300
    rounded-md py-2 px-3 text-center justify-center
    hover:bg-gray-300 transition duration-200 
    text-[1.1rem]">
        { title }
    </Link>
  )
}

