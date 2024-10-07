import React, { forwardRef } from 'react';
import Link from "next/link";
import { useDefaultLanguageStore, useLanguageOpen } from '../../store';

export const ChooseLanguagePopup = forwardRef((props, ref) => {
    
    const { language, setLanguage } = useDefaultLanguageStore();
    const { closeChooseLanguageOpen } = useLanguageOpen();
    
    const handleClick = (language) => {
        setLanguage(language);
        closeChooseLanguageOpen()
    }
    
    return (
        <div 
            className="bg-white py-3 rounded-md 
            shadow-lg border border-gray-400 
            flex flex-col absolute w-[18.5%] top-[55%]"
            ref={ref}
        >
            <Link href="#"
            className={`px-4 py-2 hover:bg-gray-100 
            ${ language === "Українська" ? "bg-gray-300": "" }`}
            onClick={() => handleClick("Українська")}>
                Українська
            </Link>
            <Link href="#" 
            className={`px-4 py-2 hover:bg-gray-100 
            ${language === "російська" ? "bg-gray-300": ""}
            `}
            onClick={() => handleClick("російська")}>
                російська
            </Link>
        </div>
    )
});

export default ChooseLanguagePopup;
