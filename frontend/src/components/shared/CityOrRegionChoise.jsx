"use client";

import React, { useState, useEffect } from 'react'
import { usePathname } from "next/navigation";
import Link from "next/link"

export const CityOrRegionChoise = () => {

    const [lastPath, setLastPath] = useState("")
    const pathname = usePathname()
    const lastPathPart = pathname.split('/')[2];

    useEffect(() => {
        setLastPath(lastPathPart);
    }, [lastPath])


  return (
    <div className="flex flex-row gap-2">
            {  }
            { console.log(lastPath) }
            <Link className={`p-2
            ${lastPath === "cities" ? 
                "bg-gray-200 rounded-md text-black" 
                : "text-red-500"}
            `
            }
            href="/jobsearch/cities">
                Міста
            </Link>
            <Link className={`p-2
            ${lastPath === "regions" ? 
                "bg-gray-200 rounded-md text-black" : 
                "text-red-500"}` }
            href="/jobsearch/regions">
                Області
            </Link>
      </div>
  )
}

