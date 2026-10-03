'use client'
import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import TourPackages from './TourPackages/TourPackages'
import WhyChoose from './WhyChoose/WhyChoose'
import Reviews from './Reviews/Reviews'
import Banner from './Banner/Banner'
import ContactSection from './ContactSection/ContactSection'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
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
    <div className='overflow-hidden '>
      <Hero/>
      <Destination/>
      <TourPackages/>
      <WhyChoose/>
      <Reviews/>
      <Banner/>
      <ContactSection/>
      
    </div>
  )
}

export default Home
