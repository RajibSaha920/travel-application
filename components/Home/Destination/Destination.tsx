
import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='pt-20 pb-20'>
        <SectionHeading heading='Upcoming Trips' content='Discover our upcoming seasonal departures across the Land of the Thunder Dragon—from vibrant Tsechu festivals to high-altitude Himalayan treks.' />
        <div className='mt-14 w-[80%] mx-auto'>
            <DestinationSlider/>
        </div>
    </div>
  )
}

export default Destination
