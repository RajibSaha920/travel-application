import React from 'react'
import Image from "next/image";
type Props = {
    image:string;
    title:string;
}

const WhyChooseCard = ({image,title}:Props) => {
  return (
    <div>
      <Image src={image} width={70} height={70} alt={title} className='mx-auto'/>
      <h1 className='mt-6 text-center text-gray-900 font-medium text-lg'>{title}</h1>
      <p className='mt-2 text-center text-xs font-medium text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, tempora.</p>
    </div>
  )
}

export default WhyChooseCard
