"use client";
import React from "react";
import Banner from "./Banner";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaGlobeAmericas } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import Reviews from "../Home/Reviews/Reviews";

export default function AboutUs() {
  React.useEffect(() => {
    const initAOS = async () => {
      await import("aos/dist/aos.css");

      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        easing: "ease", // Easing function for the animation
        once: true, // Whether animation should happen only once
        anchorPlacement: "top-bottom", // Defines which position of the element regarding to window should trigger the animation
      });
    };
    initAOS();
  }, []);

  return (
    <>
      <section className=" ">
        <Banner />
      </section>
      <section className="mx-auto w-[90%] max-w-7xl py-12">
      {/* Top Section: Image + Feature Cards */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        
        {/* Image Container */}
        <div data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000" className="relative shrink-0 w-64 h-64 -mt-40 sm:w-72 sm:h-72 lg:w-80 lg:h-80 shadow-lg rounded-xl overflow-hidden border-8 border-white">
          <Image
            
            src="/images/photograph.jpg"
            alt="About Us"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
          />
        </div>

        {/* Feature Cards Container */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full">
          {/* Card 1 */}
          <div
            className="flex flex-1 min-w-70 max-w-125 items-center space-x-4 p-4 rounded-xl shadow-md bg-white border border-gray-100"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div className="shrink-0 w-12 h-12 flex justify-center items-center bg-[#b31212] hover:bg-black transition-colors duration-200 cursor-pointer rounded-lg">
              <FaGlobeAmericas className="text-white text-2xl" />
            </div>
            <div className="pl-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                Best Destination
              </h3>
              <p className="text-sm text-gray-600">
                Bhutan is the best destination for tourists
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="flex flex-1 min-w-70 max-w-125 items-center space-x-4 p-4 rounded-xl shadow-md bg-white border border-gray-100"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <div className="shrink-0 w-12 h-12 flex justify-center items-center bg-[#b31212] hover:bg-black transition-colors duration-200 cursor-pointer rounded-lg">
              <IoIosPricetags className="text-white text-2xl" />
            </div>
            <div className="pl-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                Affordable Prices
              </h3>
              <p className="text-sm text-gray-600">
                Get your dream vacation at affordable prices
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description Content */}
      <div className="mt-8 space-y-2 text-gray-700">
        <p className="font-semibold text-lg sm:text-xl text-gray-900">
          Explore Bhutan with your friends and family.
        </p>
        <div>
          <p className="text-sm sm:text-base leading-relaxed text-gray-600">
          Our commitment to lend due attention to the personal wishes of every individual guests ensure that quality override quality. 
          Wanting to not only visit Bhutan but also take unlimited memories and experience Bhutan from its depth.
        </p>
        <p>We offer a variety of tour packages. Most of our guest goes for photography tours, cultural tours, festival tours, honeymoon tour, trekking, 
          river rafting, bicycling tour and bird watching tours. And we also give you special offer upon your requests and interest, and always feel 
          free to suggest and request your additional trips.</p>
        </div>

        <div className="overflow-hidden">
  {/* Image: Floated right on medium+ screens so paragraphs wrap around it */}
  <div
    className="float-none sm:float-right mx-auto sm:ml-6 mb-6 relative shrink-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 shadow-lg rounded-xl overflow-hidden border-8 border-white"
    data-aos="zoom-in"
    data-aos-delay="400"
    data-aos-duration="1000"
  >
    <Image
      src="/images/photograph_another.jpg"
      alt="About Us"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
    />
  </div>

  {/* Text Content */}
  <p className="text-gray-700 leading-relaxed mb-4">
    Photography tours and treks is a private tour company, license no. 1034049,
    was licensed by the Ministry of Economic Affairs, Royal Government of
    Bhutan. We have a set of highly experienced staffs, good English-speaking
    guides to meet the quality standard of tour and trek services that you may
    wish to experience.
  </p>

  <p className="text-gray-700 leading-relaxed">
    The company has always been able to handle the complexities and unpredictable
    demands of the guest in any fields, efficiently and successfully satisfying
    our clients. We take immense pride in being able to provide introductions
    observatory or interactive into various aspects of Bhutan and Bhutanese
    life, be by music, arts architecture, culture or nature. We readily
    customize specially on photography tour, cultural tour, festival tour,
    trekking, river rafting, bicycling tour, bird watching tour, and honeymoon
    tours.
  </p>
</div>


      </div>

      
    </section>
    <Reviews/>
    </>
  );
}
