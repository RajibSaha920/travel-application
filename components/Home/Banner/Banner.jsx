import React from 'react'
import Link from 'next/link'

const Banner = () => {
  return (
    <div
  className="relative flex h-100 items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat text-white"
  style={{
    backgroundImage: "url('/images/banner.jpg')",
  }}
>
  {/* White overlay */}
  <div className="absolute inset-0 bg-black/80"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl px-6 text-center">
    <h1 className="text-4xl font-bold md:text-6xl">
      Explore the Beauty of Bhutan
    </h1>

    <p className="mt-5 text-base md:text-xl">
      Discover breathtaking mountains, peaceful monasteries,
      and unforgettable experiences in Bhutan.
    </p>

     <Link
  href="#"
  className="
    mx-auto 
    w-45
    items-center justify-center
    group relative
    flex overflow-hidden
    rounded
    bg-[#b31212]
    px-10 py-2.5
    mt-5
    text-white
    transition-all duration-300 ease-out
    hover:hover:bg-linear-to-r hover:from-red-500 hover:to-red-700
    hover:ring-2 hover:ring-red-400 hover:ring-offset-2
    md:px-8
  "
>
  {/* Shine effect */}
  <span
    className="
      pointer-events-none
      absolute
      -right-10 top-0
      h-full w-8
      rotate-12
      bg-white
      opacity-10
      transition-transform duration-1000 ease-out
      translate-x-12
      group-hover:-translate-x-40
    "
  />

  {/* Text */}
  <span className="relative z-10">
    Start Planning 
  </span>
</Link>
  </div>
</div>
  )
}

export default Banner

