import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

export const AuthHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="text-center justify-center 
      ml-[40%]">
        <Link href="/" className="">
          <Image src="/logo-full.svg" alt="" 
          width={200} height={200} />
        </Link>
      </div>
      <Link href="/" className="">
          <X className="text-red-500" size={35} />
      </Link>
    </div>
  )
}
