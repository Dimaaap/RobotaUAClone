"use client";

import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image"

import { FaFacebook, FaYoutube, 
    FaLinkedin, FaTelegram } from "react-icons/fa";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";

export const SocialMediaContainer = () => {

    const [instagramHover, setInstagramHover] = useState(false)

  return (
    <div className='flex flex-row gap-4 mt-1'>
        <Link href="#">
            <FaFacebook size={20} 
            className="hover:text-blue-600 
            transition-all duration-100"/>
        </Link>
        <Link href="#" 
            onMouseEnter={() => setInstagramHover(true)}
            onMouseLeave={() => setInstagramHover(false)}>
            { instagramHover ? 
                <Image src="/social/icon-instagram-colored.svg" 
                width={23} height={23}
                className="-mt-0.5" />
                : (
                <AiFillInstagram size={23}
                className="-mt-0.5" />
                )  
            }
        </Link>
        <Link href="#">
            <AiFillTikTok size={23} 
            className="-mt-0.5" />
        </Link>
        <Link href="#">
            <FaYoutube size={23} 
            className="-mt-0.5 hover:text-red-600" 
            />
        </Link>
        <Link href="#">
            <FaLinkedin size={23} 
            className="-mt-0.5 
            rounded-sm hover:text-blue-600" />
        </Link>
        <Link href="#">
            <FaTelegram size={23} 
            className="-mt-0.5 hover:text-blue-600" 
            />
        </Link>
    </div>
  )
}

