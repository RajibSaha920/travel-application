import React from 'react'
import Image from "next/image";
const Footer = () => {
  return (
  
<div
  className="relative bg-cover bg-center bg-fixed bg-no-repeat text-white"
  style={{
    backgroundImage: "url('/images/footer-pattern.jpg')",
  }}
>
  {/* Background overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Footer Content */}
  <div className="relative z-10 py-12 sm:py-16">

    {/* Main Footer Grid */}
    <div
      className="
        mx-auto grid w-[90%] max-w-7xl
        grid-cols-1
        gap-10
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-4
        lg:gap-12
      "
    >

      {/* About */}
      <div className="space-y-5 text-center sm:text-left">
        <div className="flex h-16 items-center justify-center sm:justify-start">
          <Image
            src="/images/logo.png"
            alt="Photography Tours and Travel"
            width={180}
            height={65}
            priority
            className="sm:w-55 sm:h-auto"
          />
        </div>

        <p className="text-sm font-medium leading-6 text-white/80">
          Capture stunning Himalayan landscapes and vibrant culture.
        </p>
      </div>

      {/* Support */}
      <div className="space-y-4 text-center sm:text-left">
        <h2 className="text-lg font-bold text-white">
          Support
        </h2>

        <p className="cursor-pointer text-sm text-white/80 hover:text-white">
          Contact
        </p>

        <p className="cursor-pointer text-sm text-white/80 hover:text-white">
          Legal Notice
        </p>

        <p className="cursor-pointer text-sm text-white/80 hover:text-white">
          Privacy Policy
        </p>

        <p className="cursor-pointer text-sm text-white/80 hover:text-white">
          Terms & Conditions
        </p>

        <p className="cursor-pointer text-sm text-white/80 hover:text-white">
          Site Map
        </p>
      </div>

      {/* Services */}
      <div className="space-y-4 text-center sm:text-left">
        <h2 className="text-lg font-bold text-white">
          Our Services
        </h2>

        <p className="cursor-pointer text-sm text-white/80 hover:text-white">
          About Us
        </p>

        <p className="cursor-pointer text-sm text-white/80 hover:text-white">
          About Bhutan
        </p>

        <p className="cursor-pointer text-sm text-white/80 hover:text-white">
          Travel Trip
        </p>

        <p className="cursor-pointer text-sm text-white/80 hover:text-white">
          Tour Package
        </p>

        <p className="cursor-pointer text-sm text-white/80 hover:text-white">
          Contact
        </p>
      </div>

      {/* Connect */}
      <div className="space-y-4 text-center sm:text-left">
        <h2 className="text-lg font-bold text-white">
          Connect Us
        </h2>

        <p className="cursor-pointer text-sm text-white/80 hover:text-white">
          Contact Us
        </p>

        <div className="mt-6 space-y-3">
          <p className="text-sm text-white/80">
            +97 5773280041
          </p>

          <p className="cursor-pointer text-sm text-white/80 hover:text-white">
            Telegram
          </p>

          <p className="cursor-pointer text-sm text-white/80 hover:text-white">
            LinkedIn
          </p>

          <p className="cursor-pointer text-sm text-white/80 hover:text-white">
            WhatsApp
          </p>

          <p className="cursor-pointer text-sm text-white/80 hover:text-white">
            WeChat
          </p>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="mx-auto mt-10 w-[90%] max-w-7xl border-t border-white/30 pt-6">
      <p className="text-center text-sm text-white/70">
        © 2026 Photography Tours and Travel. All rights reserved.
      </p>
    </div>

  </div>
</div>




  )
}

export default Footer
