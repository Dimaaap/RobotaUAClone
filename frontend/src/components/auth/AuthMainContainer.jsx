import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { AuthVariantsBlock } from '../shared';

export const AuthMainContainer = () => {
  return (
    <div className="flex flex-row justify-between 
    mt-32 px-10">
       <div className="text-4xl font-extrabold 
       max-w-[50%] leading-10">
            <h1>
                <b className="text-red-500">
                    robota.ua
                </b>
                {" "}
                працює на вас! Для чого ви наймаєте 
                нас сьогодні?
            </h1>
       </div> 
       <div className="flex flex-col gap-6">

            <AuthVariantsBlock blockTitle="Знайти роботу"
            paragraphText={
            <p className="text-lg font-semibold 
            leading-6">
                На вас чекає {" "}
                <b className="font-extrabold">
                    112 017
                </b> {" "} актуальних вакансій від {" "} 
                <b className="font-extrabold">
                    38 309
                </b> {" "} компаній
            </p>} imageSrc="/jobseeker-registration.svg"/>

            <AuthVariantsBlock 
            blockTitle="Знайти співробітників"
            paragraphText={
                <p className="text-lg font-semibold 
                    leading-6">
                        На вас чекають {" "}
                        <b className="font-extrabold">
                            5 600 238
                        </b> {" "} 
                        кандидатів, які довірили 
                        нам власне резюме
                    </p>
            } imageSrc="/employer-registration.svg"
            />
       </div>
    </div>
  )
}

