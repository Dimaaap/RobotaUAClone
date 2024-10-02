import React from 'react'
import Link from "next/link";
import Image from "next/image"

export const RobotaPartnersLink = ({ imageSrc, descText, 
    href="#" }) => {
  return (
    <Link 
        href={ href }
        className="flex flex-col gap-3 mt-6">
            <Image src={imageSrc} 
            width={100} height={100}/>
            <small className="text-[0.7rem]">
                { descText }
            </small>
    </Link>
  )
}

