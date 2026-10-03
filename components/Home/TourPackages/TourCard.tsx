import React from 'react'
import { FaHeart } from 'react-icons/fa';
import Image from "next/image";
type Props = {
    tour: {
        id: number;
        title: string;
        duration: string;
        location: string;
        image: string;
        rating: number;
        category: string;
        reviews:string;
}
}

const TourCard = ({tour}:Props) => {
  return (
    <div>
      <div className='relative h=[300px] w-full rounded-lg cursor-pointer group overflow-hidden '>
        <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col'>
            <FaHeart className='w-3 h-3'/>
        </div>
        <div className='absolute inset-0 bg-black opacity-20 z-10 '></div>
        <Image src={tour.image} alt={tour.title} width={500} height={500} className='overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-x-110' />
      </div>
      <div >
        <h1 className='mt-3 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-400'>{tour.title}</h1>
        <p className=' text-sm text-gray-600 mt-3 font-medium mb-6'><span className='font-bold'>Location :</span>  {tour.location}</p>
      </div>
      
      <div className='flex items-center space-x-2'>
        <div className='px-2 py-2 bg-blue-800 rounded-md font-bold text-white text-xs'>{tour.rating}</div>
        <p className='text-sm text-gray-800'>Exceptional </p>
        <p className='text-sm font-bold text-gray-800'>{tour.reviews}</p> 
      </div>
      
    </div>
  )
}

export default TourCard
