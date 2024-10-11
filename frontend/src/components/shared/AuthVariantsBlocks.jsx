import React from 'react'
import Link from "next/link";
import Image from "next/image";

export const AuthVariantsBlock = ({ blockTitle, 
    paragraphText, imageSrc
 }) => {
  return (
    <Link className="ml-8 flex flex-col gap-24 bg-white 
       rounded-md px-8" href="/auth/registration/jobseeker">
            <div className='flex flex-row justify-between 
            py-10 max-w-[100%]'>
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl 
                    text-red-500 font-extrabold">
                        { blockTitle }
                    </h1>
                    { paragraphText }
                </div>
                <Image src={ imageSrc }
                alt="" width={200} height={200} 
                className="-mt-10 -mb-10 ml-10"/>
            </div>
       </Link>
  )
}
