import React from 'react'
import { FaViber, FaTelegram } from "react-icons/fa";

export const MessangersBtn = ({ messanger, href="#" }) => {
  return (
    <a 
    href={href}
    className={`rounded-md bg-transparent 
    px-5 py-4 border-2 font-extrabold text-lg flex flex-row 
    gap-2 text-center justify-center group
    hover:text-white
    ${messanger === "viber" ? 
    "border-purple-500 text-purple-500 hover:bg-purple-500"
    : "border-blue-500 text-blue-500 hover:bg-blue-500"}`
    }>
        { messanger == "viber" ? 
        <>
            <FaViber size={20} className="
            text-purple-500 mt-1 group-hover:text-white" />
            Отримувати у Viber    
        </>: 
        <>
            <FaTelegram size={20} className="text-blue-500 mt-1 
            group-hover:text-white" />
            Отримувати в Telegram
        </> }
    </a>
  )
}

