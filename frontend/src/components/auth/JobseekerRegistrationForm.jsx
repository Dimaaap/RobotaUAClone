"use client";

import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRound, KeyRound, Eye, EyeOff } from 'lucide-react'
import { FaSquareFacebook } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc";
import { jobseekerSchema } from '../../schemas'
import { createJobseekerHandler } from '../../fetchers';
import { FormError, RequiredStar } from '../shared';

export const JobseekerRegistrationForm = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPasswordInputShow, setIsPasswordInputShow] = useState(false)
    const [isPasswordShow, setIsPasswordShow] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(jobseekerSchema),
    });

   const onSubmit = async(event) => {
        try {
            const response = await createJobseekerHandler(event)
        } catch (error) {
        }
   }

   const handlePasswordShow = () => {
    if(email.includes("@")){
        setIsPasswordInputShow(true);
    } else {
        setIsPasswordInputShow(false);
    }
   }

   useEffect(() => {
    handlePasswordShow()
   }, [email])

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
            <label className={`absolute bg-white px-1 -top-2.5 left-16 
            text-gray-500 text-[0.8rem] flex flex-row gap-1
            ${fullName.length > 0 ? "visible" : "hidden"}`}>
                Ім'я та прізвище 
                <RequiredStar />
            </label>
            <input className={`h-[60px] w-full 
            border rounded-md px-12 
            ${errors.full_name ? "border-red-500 outline-none placeholder-red-500": 
            "border-black"}`}
            placeholder="Ім'я та прізвище"
            {...register("full_name")}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}/>
            {
                errors.full_name && 
                <FormError textError={errors.full_name.message} />
            }
            <UserRound className="absolute 
            text-gray-400 top-4 left-14" />
        </div>

        <div className="relative w-full px-10 mt-1">
            <label className={`absolute bg-white px-1 top-0 left-16 
            text-gray-500 text-[0.8rem] transition-transform ease-in duration-700 
            -translate-y-2 flex flex-row gap-1
            ${email.length > 0 ? "visible": "hidden"}`}>
                Email
                <RequiredStar />
            </label>
            <input className={`h-[60px] w-full 
            border border-black rounded-md px-12 
             ${errors.email ? "border-red-500 outline-none placeholder-red-500": 
            "border-black"}`}
            placeholder="Email"
            type="email"
            {...register("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            {errors.email && <FormError textError={errors.email.message} />}
            <UserRound className="absolute 
            text-gray-400 top-5 left-14" />
        </div>
        {isPasswordInputShow && (
            <div className="relative w-full px-10 mt-1">
            <label className={`absolute bg-white px-1 top-0 left-16 
                text-gray-500 text-[0.8rem] transition-transform ease-in duration-700 
                -translate-y-2 flex flex-row gap-1
                ${password.length > 0 ? "visible": "hidden"}`}>
                    Пароль для входу
                    <RequiredStar />
                </label>
            <input className={`h-[60px] w-full 
                border rounded-md px-12 
                ${errors.password ? "border-red-500 outline-none placeholder-red-500": 
                "border-black"}`}
                placeholder="Пароль для входу"
                {...register("password")}
                value={password}
                type={`${isPasswordShow ? "text" : "password"}`}
                onChange={(e) => setPassword(e.target.value)}/>
                {
                    errors.password && 
                    <FormError textError={errors.password.message} />
                }
                <KeyRound className="absolute 
                text-gray-400 top-5 left-14" />
                {
                    isPasswordShow ? 
                    (
                        <EyeOff className="absolute text-gray-400 top-5 right-14 cursor-pointer " 
                        onClick={() => setIsPasswordShow(false)}/>
                    )
                    :(
                    <Eye className="absolute text-gray-400 top-5 right-14 cursor-pointer" 
                    onClick={() => setIsPasswordShow(true)}/>
                    )
                }
            </div>
        )}

        <button type="submit" className="w-[88%] ml-[6%]
        bg-red-500 text-white font-bold mt-1
        hover:bg-red-600 p-5 rounded-md text-lg">
            Зареєструватись
        </button>
    </form>
  )
}

