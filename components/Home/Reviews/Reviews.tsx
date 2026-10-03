import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlide from './ReviewSlide'

const Reviews = () => {
  return (
    <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b] '>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
            <div>
                <h1 className='text-3xl font-semibold text-white'>What our customers are saying us?</h1>
                <p className='mt-6 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eaque illo fugit deserunt nisi 
                    impedit ipsa quibusdam excepturi sunt sequi quaerat tenetur magni, facere, culpa non laudantium
                     incidunt a perferendis.</p>
                <div className='mt-6 flex items-center space-x-6'>
                    <div>
                        <p className='text-2xl font-bold text-white'>4.90</p>
                        <p className=' text-white mb-3'>Overall Rating</p>
                        <div className='flex items-center'>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ReviewSlide/>
            </div>
        </div>
    </div>
  )
}

export default Reviews
