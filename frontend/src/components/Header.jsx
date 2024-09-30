import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LogIn } from 'lucide-react'
import { EmployerOrEmployeeBtn } from '.'

const Header = () => {
  return (
    <div className="w-full bg-red-500 
    px-10 flex 
    flex-row justify-between text-white">
      <Link href="/" className="mt-6 mb-6">
        <div className="flex flex-row gap-2">
            <Image src="logo-white.svg" width={180} height={180} />
            <Image src="logo-flag-ukraine.svg" width={20} height={20} />
        </div>
      </Link>
      <EmployerOrEmployeeBtn />
      <Link 
      href="#"
      className="flex flex-row gap-1 
      text-white font-bold 
      hover:bg-red-600 py-5 px-3 mb-2">
        <LogIn size={25} />
        Увійти
      </Link>
    </div>
  )
}

export default Header
