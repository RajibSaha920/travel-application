import React from 'react'

type Props = {
    heading: string;
    content: string;
}

const SectionHeading = ({heading, content}:Props) => {
  return (
    <div className='w-[80%] mx-auto'>
     <h1 className='text-xl sm:text-3xl text-red-800 font-bold'>{ heading }</h1>
     <p className=' mt-2 text-gray-700 sm:text-base text-sm font-medium'>{ content }</p>
    </div>
  )
}

export default SectionHeading
