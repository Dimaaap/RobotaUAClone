import React from 'react'

export const FormError = ({ textError }) => {
  return (
    <div className="bg-red-100 rounded-md w-full 
    text-center justify-center py-3 font-semibold 
    mt-2 text-[0.9rem] text-gray-500">
        { textError }
    </div>
  )
}

