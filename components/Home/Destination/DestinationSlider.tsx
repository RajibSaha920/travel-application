'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import {destinationData} from "@/data/data"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const DestinationSlider = () => {
  return (
    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} keyBoardControl={true}>
     {
     destinationData.map((data)=>{
        return <div key={data.id} className='m-3'>  
            <div className='relative h-100'>
                <div className='absolute inset-0 bg-black opacity-25 rounded-4xl'></div>
                <Image 
                 src={data.image}
                 alt={data.place}
                 width={500}
                 height={500}
                 className="h-full w-full object-cover rounded-lg"
                />
                
            </div>
            <h1 className='text-lg font-samibold mt-4 text-shadow-amber-800'>Place: {data.place}</h1>
            <p className='text-sm text-gray-600'>travelers: {data.travelers}</p>
        </div>
     })
     }
    </Carousel>
  )
}

export default DestinationSlider
