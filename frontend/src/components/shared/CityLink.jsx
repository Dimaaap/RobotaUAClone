import React from 'react'
import Link from "next/link";

export const CityLink = ({ index, city }) => {
  return (
    <Link key={ index }
        href={city.slug}
        className="px-6 py-3 hover:bg-gray-100 
        font-semibold">
        { city.city_title }
    </Link>
  )
}

