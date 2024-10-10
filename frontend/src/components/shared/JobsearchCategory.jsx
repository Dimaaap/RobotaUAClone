"use client"

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation';
import Link from "next/link";

export const JobsearchCategory = () => {

    const path = usePathname();
    const [curPath, setCurPath] = useState("")

    useEffect(() => {
        const lastPart = path.split("/")[2];
        setCurPath(lastPart)
    }, [])
    

  return (
    <div className="flex flex-row gap-5 border-b 
    border-gray-500 font-semibold bg-white -mt-5">
        <Link href="/jobsearch/rubrics" className={
        `py-5 px-28 hover:text-red-500 
        ${curPath === "rubrics" ? 
        "border-b-4 border-red-500 text-red-500 rounded-sm" : 
        "text-black"}`}>
            За рубриками
        </Link>
        <Link href="/jobsearch/professions" className={
        `py-5 px-28 hover:text-red-500 
        ${curPath === "professions" ? 
        "border-b-4 border-red-500 text-red-500 rounded-sm" : 
        "text-black"}`}>
            За професіями
        </Link>
        <Link href="/jobsearch/cities" className={
        `py-5 px-28 hover:text-red-500 
        ${curPath === "cities" || curPath === "regions" ? 
        "border-b-4 border-red-500 text-red-500 rounded-sm" : 
        "text-black"}`}>
            По містах
        </Link>
        <Link href="#" className={
        `py-5 px-28 hover:text-red-500 
        ${curPath === "companies" ? 
        "border-b-4 border-red-500 text-red-500 rounded-sm" : 
        "text-black"}`}>
            По компаніях
        </Link>
    </div>
  )
}

