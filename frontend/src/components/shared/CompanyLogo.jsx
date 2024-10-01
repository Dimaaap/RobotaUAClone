import React from 'react'
import Image from "next/image";
import Link from "next/link";

export const CompanyLogo = ({ 
    imageSrc, imageAlt, href="#"
 }) => {
  return (
    <Link href={ href } className="text-center 
    justify-center px-5 py-5">
        <Image src={ imageSrc } alt={ imageAlt } 
        width={150} height={150} 
        className="max-w-[120px] max-h-[130px]
        transition duration-300 
        hover:opacity-50 object-contain aspect-square"
        />
    </Link>
  )
}

