import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { ChooseRole } from '../shared';
import { X } from 'lucide-react';

export const UserAuthHeader = () => {
  return (
    <div className="flex flex-row 
    justify-between px-2 items-center">
        <Link href="/">
            <Image src="/logo-full.svg" alt="" 
            width={200} height={200} />
        </Link>
        
        <ChooseRole />

        <Link href="/">
            <X className='text-red-500 
            hover:text-red-600' size={40} />
        </Link>
    </div>
  )
}

