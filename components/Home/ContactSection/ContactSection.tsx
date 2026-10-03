import React from 'react'
import Image from "next/image";


const ContactSection = () => {
  return (
    <div className= "flex flex-col w-[80%] mx-auto md:flex-row lg:h-screen item-center">
      <div className='flex-1  flex justify-center items-center'>
        <div className="relative h-full w-full" data-aos="fade-right"
                    data-aos-duration="1000" data-aos-anchor-placement="top-center"
                     data-aos-delay="300">
            <Image
                src="/images/ContactImg.jpg"
                alt="Contact Us"
                fill
                className="object-cover"
            />
            </div>
      </div>
      <div className='flex-1 bg-white w-full flex flex-col justify-center px-8 py-12'>
        <h2 className="text-3xl font-bold text-gray-800 mb-6" data-aos="fade-up"
                     data-aos-anchor-placement="top-center"
                     data-aos-delay="100">Get In Touch</h2>
        <form className="space-y-6">
            <div data-aos="fade-left"
                    data-aos-duration="1000" data-aos-anchor-placement="top-center"
                     data-aos-delay="200">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input 
                    type="text"
                    id="name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div data-aos="fade-left"
                     data-aos-anchor-placement="top-center"
                     data-aos-delay="300">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
             <div data-aos="fade-left"
                     data-aos-anchor-placement="top-center"
                     data-aos-delay="400">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                </label>
                <input
                    type="text"
                    id="phone"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div data-aos="fade-left"
                     data-aos-anchor-placement="top-center"
                     data-aos-delay="500">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div data-aos="fade-left"
                     data-aos-anchor-placement="top-center"
                     data-aos-delay="600">
                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#b31212] hover:bg-[#9a0f0f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b31212]"
                >
                    Send Message
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default ContactSection

