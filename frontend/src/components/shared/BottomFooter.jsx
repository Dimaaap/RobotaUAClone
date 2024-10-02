import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { RobotaPartnersLink, RotateSquare } from '.'

export const BottomFooter = () => {
  return (
    <div className="flex flex-row justify-between
        border-t border-gray-300 pt-5 mt-3">
            <div className="text-[0.6rem] flex flex-col 
            gap-3 max-w-[35%]">
                <p>
                    ТОВ "Робота Інернешнл" © 2024
                </p>
                <p>
                    Усі права захищені та охороняються діючим 
                    законодавством України. Використання 
                    матеріалів з даного сайту можливе тільки 
                    з письмового дозволу компанії ТОВ 
                    "Робота Інернешнл". Адміністрація сайту 
                    не несе відповідальності за зміст 
                    розміщених оголошень 
                </p>
                <div className="flex flex-row gap-2 
                text-gray-700">
                    <Link href="#">
                        Конфіденційність
                    </Link>
                    <RotateSquare />
                    <Link href="#">
                        Умови користування
                    </Link>
                    <RotateSquare />
                    <Link href="#">
                        Договір публічної оферти
                    </Link>
                </div>
            </div>

            <RobotaPartnersLink 
                imageSrc="/helper-logo.svg"
                descText={ "Помічник з управління рекрутингом" }
            />

            <RobotaPartnersLink 
                imageSrc="/budni-logo.svg"
                descText={ "Медіаплатформа про роботу та життя" }
            />

            <RobotaPartnersLink 
                imageSrc="/grupa-pracuj-logo.svg"
                descText={ "robota.ua входить в Grupa Pracuj" }
            />

            <RobotaPartnersLink 
                imageSrc="the-network-logo.svg"
                descText={ "robota.ua - учасник The Network" }
            />
        </div>
  )
}

