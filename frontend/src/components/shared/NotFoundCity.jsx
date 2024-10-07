import Image from 'next/image'
import React from 'react'

export const NotFoundCity = () => {
  return (
    <div className="flex flex-col gap-2 text-center 
    justify-center px-5 py-4">
        <Image src="/empty-search.svg" 
        alt="" width={100} height={100} 
        className="ml-[30%]"
        />
        <h1 className="text-xl font-extrabold">
            Ми не знайшли таке місто
        </h1>
        <p className="text-lg">
            Спробуйте перевірити, чи ви все правильно 
            ввели.
        </p>
    </div>
  )
}
