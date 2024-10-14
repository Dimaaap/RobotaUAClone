"use client";

import React from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRound } from 'lucide-react'
import { FaSquareFacebook } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc";
import { jobseekerSchema } from '../../schemas'

export const JobseekerRegistrationForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(jobseekerSchema),
    });

    const onSubmit = async(data) => {
        const response = await fetch("api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await response.json();
    }

  return (
    <form className="bg-white py-7 px-5 
    rounded-md flex flex-col gap-4 mt-[8%] w-[50%] 
    ml-[30%]"
    onSubmit={handleSubmit(onSubmit)}
    method='post'>
        <h1 className="font-extrabold text-2xl 
        text-center">
            Створіть акаунт пошукача
        </h1>
        <div className='flex flex-row gap-4 w-[80%] 
        ml-[10%] mt-2'>
            <button type="button" 
            className="flex flex-row gap-1 items-center 
            bg-blue-800/80 rounded-md text-center 
            justify-center p-2  text-white font-extrabold 
            w-1/2">
                <FaSquareFacebook size={20} />
                Facebook
            </button>
            <button type="button" 
            className="flex flex-row gap-1 items-center 
            bg-blue-600/80 rounded-md text-center 
            justify-center p-2 text-white 
            font-extrabold w-1/2">
                <FcGoogle size={20} className="bg-white" />
                Google
            </button>
        </div>

        <div className="w-[80%] ml-[10%] flex flex-row gap-2
        items-center">
            <div className="bg-gray-300 h-[0.5px] w-1/4" />
            <p className="text-gray-500 text-[0.9rem]">
                або зареєструйстесь з Email та паролем
            </p>
            <div className="bg-gray-300 h-[0.5px] w-[85px]" />
        </div>

        <div className="relative w-full px-10">
            <input className="h-[60px] w-full 
            border border-black rounded-md px-12" 
            placeholder="Ім'я та прізвище"
            {...register("fullName")}/>
            {
                errors.fullName && 
                <p>
                    { errors.fullName.message }
                </p>
            }
            <UserRound className="absolute 
            text-gray-400 top-5 left-14" />
        </div>

        <div className="relative w-full px-10 mt-1">
            <input className="h-[60px] w-full 
            border border-black rounded-md px-12" 
            placeholder="Email або номер телефону"
            type="email"
            {...register("email")}/>
            {errors.email && <p>
                { errors.email.message }
            </p>}
            <UserRound className="absolute 
            text-gray-400 top-5 left-14" />
        </div>

        <button type="submit" className="w-[88%] ml-[6%]
        bg-red-500 text-white font-bold mt-1
        hover:bg-red-600 p-5 rounded-md text-lg">
            Зареєструватись
        </button>
    </form>
  )
}

