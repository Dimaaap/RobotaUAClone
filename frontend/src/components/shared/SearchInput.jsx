import React from 'react'
import { Search, MapPin, ChevronDown, ChevronUp } from 'lucide-react'
import { useChooseLocationOpen } from '../../store'

export const SearchInput = () => {

  const { chooseLocationOpen, toggleChooseLocationOpen } = useChooseLocationOpen()

  return (
    <div className={`flex flex-row jusrify-between 
      relative mt-10 gap-5`}>
        <Search size={20} className="text-gray-400 
        absolute top-5 left-6" />
        <input 
        className="h-[60px] w-[80%] rounded-md 
        px-16 font-semibold text-black pr-44" 
        placeholder="Ким або в якій команії хочете працювати?"/>
        <div className={`flex flex-row gap-1 
        absolute right-72 top-5 text-black 
        border-black z-50 cursor-pointer 
        select-none`}
        onClick={ () => toggleChooseLocationOpen() }>
            <MapPin size={20} />
            Вся Україна
            {
              chooseLocationOpen ? (
                <ChevronUp size={20}
                className="mt-0.5" />
              ): (
                <ChevronDown size={20} 
                className="mt-0.5"/>
              )
            }
        </div>
        <button type="submit"
        className="border-2 border-white 
        rounded-md px-8 py-2 flex flex-row gap-1 
        text-white font-extrabold text-center 
        justify-center hover:bg-white hover:text-red-500">
            <Search size={25} className="mt-2" />
            <span className="mt-2">
                Знайти роботу
            </span>
        </button>
      </div>
  )
}

