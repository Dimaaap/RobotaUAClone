import React from 'react'
import Link from "next/link"
import { BriefcaseBusiness } from "lucide-react"

export const NoticeInfo = () => {
  return (
    <div className="bg-white text-center justify-center
    pt-10 w-full -mb-10 -mt-5">
        <p className="text-[0.9rem] w-[50%] ml-[25%] mb-3">
            Натискаючи "Зареєструватись", ви підтверджуєте 
            свою згоду з {" "}
            <Link href="https://images.cf-rabota.com.ua/alliance/terms_of_use_seeker.pdf"
            className="text-red-500 hover:text-red-600">
                Умовами користування
            </Link> {" "}
            сайтом robota.ua та {" "}
            <Link href="https://images.cf-rabota.com.ua/alliance/privacy_offer.pdf"
            className="text-red-500 hover:text-red-600">
                Політикою конфіденційності
            </Link>
        </p>
        <Link className="text-red-500 mt-3"
        href="#">
            Увійти в існуючий акаунт
        </Link>
        <Link className="flex flex-row gap-1 text-red-500 
        font-extrabold text-xl ml-[38%] mt-5 items-center"
        href="#">
            <BriefcaseBusiness size={20} />
            Створити акаунт роботодавця
        </Link>
    </div>
  )
}

