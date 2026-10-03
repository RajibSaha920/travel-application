'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { navLinks } from "@/constant/constant";
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const [nagBg , setNavBg] = useState(false)

    useEffect(()=>{
        const handler = ()=>{
            if(window.scrollY >= 90) setNavBg(true)
            if(window.scrollY < 90) setNavBg(false)
        }
        window.addEventListener('scroll', handler);
        return ()=> window.addEventListener('scroll', handler);
    },[])

    return (
        <div className={` ${ nagBg ? 'bg-[#b31212] text-white shadow-md': 'fixed'} transition-all duration-200 h-[10vh] z-1000 text-white fixed w-full`}>
            <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
                <div className='flex items-center space-x-2'>
                    <div className=' h-10   flex items-center justify-center flex-col '>
                        <Image
                            src="/images/logo.png"
                            alt="Photography Tours and Travel"
                            width={180}
                            height={65}
                            priority
                            className="sm:w-55 sm:h-auto h-auto"
                        />
                    </div>
                </div>
                {/* Navlink */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {navLinks.map((link)=>{
                        return (
                            <Link href={link.url} key={link.id}>
                                <p className='relative block w-fit text-base font-medium  text-black after:absoluteafter:left-0  after:bottom-0 after:block
        after:h-0.75 after:w-full after:origin-left after:scale-x-0 after:bg-[#b31212] after:content-[""] hover:after:scale-x-100 after:transition-transform after:duration-300'>{link.label}</p>
                            </Link>
                        )
                    })}
                </div>
                {/* button */}
                <div className='flex items-center space-x-4'>
                    <button className='md:px-12 md:py-2.5,px-8 py-2 text-black text bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg sm:text-sm xs:text-xl '>Book Now</button>
                </div>
                {/* burger menu */}
                <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
            </div>
        </div>
    )
} 

export default Nav

