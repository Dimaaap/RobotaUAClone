"use client";

import React from 'react'
import { TopFooter, BottomFooter } from '.';

export const Footer = () => {
  return (
    <div className="border-t border-gray-300 
    w-full py-7 flex px-14 flex-col gap-3">

        <TopFooter />
        <BottomFooter />
    </div>
  )
}
