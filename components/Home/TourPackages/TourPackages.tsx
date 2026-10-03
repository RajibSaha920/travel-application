import SectionHeading from '@/components/Helper/SectionHeading'
import { tourPackagesData } from "@/data/tourPackagesData"
import React from 'react'
import TourCard from './TourCard'

const TourPackages = () => {
  return (
    <div className='pb-20 pt-10'>
      <SectionHeading heading='Recommended Tour Packages' />
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16'>
        {
            tourPackagesData.map((data, index)=>{
                return (
                    <div key={data.id} data-aos="fade-right"
                    data-aos-duration="1000" data-aos-anchor-placement="top-center"
                     data-aos-delay={index * 150}
                    >
                        <TourCard tour = {data} />
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default TourPackages
