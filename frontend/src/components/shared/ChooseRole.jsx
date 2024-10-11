import React from 'react'
import Link from "next/link"

export const ChooseRole = () => {
  return (
    <div className="flex flex-row gap-2">
        <Link href="/auth/registration/jobsseker"
        className="p-3 rounded-md text-black bg-white">
            пошукачам
        </Link>
        <Link href="#" 
        className="p-3 rounded-md text-red-500">
            роботодавцям
        </Link>
    </div>
  )
}

