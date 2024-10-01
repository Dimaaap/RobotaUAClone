import React from 'react'
import Link from "next/link";
import { PopularItemCart } from '.';

export const PopularItem = ({ sectionTitle, 
    linkTitle,
    iterableObject,
    sectionLink="#"
 }) => {
  return (
    <div className="my-5 flex flex-col
     gap-3 px-16">
        <div className="flex flex-row justify-between">
            <h1 className="text-2xl font-extrabold">
                { sectionTitle }
            </h1>
            <Link href={sectionLink} className="font-extrabold text-lg
            text-red-500 hover:text-red-600">
                { linkTitle }
            </Link>
        </div>
        <div className="flex flex-row gap-3 mt-2">
            {
                iterableObject.map((object) => (
                    <PopularItemCart 
                        key={object.id}
                        title={object.title}
                        href={object.href}
                    />
                ))
            }
        </div>
     </div>
  )
}

