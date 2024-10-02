import React from 'react'
import Link from "next/link"

export const UploadAppBtn = ({ uploadApp, uploadImage }) => {
  return (
    <Link 
    className="flex flex-row gap-2
    border border-black rounded-md 
    px-5 py-1 hover:bg-black 
    hover:text-white transition-all duration-300" 
    href="#">
        { uploadImage }
        <div className="flex flex-col gap-0">
            <small className="text-[0.7rem]">
                Завантажити з 
            </small>
            <small className="text-[0.9rem]">
                { uploadApp }
            </small>
        </div>
    </Link>
  )
}
