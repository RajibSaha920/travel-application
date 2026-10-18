'use client'
import React from 'react'
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



const Banner = () => {
     React.useEffect(() => {
        const initAOS = async () => {
          await import('aos/dist/aos.css');
       
          AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease', // Easing function for the animation
          once: true, // Whether animation should happen only once
          anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
        });
      };
      initAOS()
      }, []);
  return (
    <section 
      className="relative flex h-[50vh] min-h-125    w-full items-center justify-center bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/images/about.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl px-6 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <h1 className="text-4xl font-bold md:text-6xl">
          About Us
        </h1>

        <p className="mt-5 text-base md:text-xl" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          Discover the beauty, culture, and traditions of Bhutan
          with our photography tours and travel experiences.
        </p>

        <Link
          href="/contact"
          className="group relative mx-auto mt-6 flex w-45 items-center justify-center overflow-hidden rounded bg-[#b31212] px-8 py-3 text-white transition-all duration-300 hover:bg-red-700 hover:ring-2 hover:ring-red-400 hover:ring-offset-2"
        >
          <span className="pointer-events-none absolute -right-10 top-0 h-full w-8 rotate-12 bg-white opacity-20 transition-transform duration-1000 translate-x-12 group-hover:-translate-x-40" />
          <span className="relative z-10">Contact Us</span>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
