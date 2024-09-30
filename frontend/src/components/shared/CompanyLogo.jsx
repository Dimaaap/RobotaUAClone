import React from 'react'
import Image from "next/image";

export const CompanyLogo = ({ 
    imageSrc, imageAlt, href="#"
 }) => {
  return (
    <Link href={ href }>
        <Image src={ imageSrc } alt={ imageAlt } 
        width={150} height={150}
        />
    </Link>
  )
}

