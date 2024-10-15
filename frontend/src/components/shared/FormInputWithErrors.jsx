import React from 'react'

export const FormInputWithErrors = ({ placeholder, errors, register, inputType, name }) => {
  return (
    <input className={`h-[60px] w-full 
        border border-black rounded-md px-12 
         ${errors[name] ? "border-red-500 outline-none placeholder-red-500": 
        "border-black"}`}
        placeholder={placeholder}
        type={inputType}
        {...register({name})}/>
  )
}
