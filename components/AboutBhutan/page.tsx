"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaScroll,
  FaFlag,
  FaLanguage,
  FaUsers,
  FaHandsHelping,
  FaPray,
  FaMapMarkedAlt,
  FaInfoCircle,
  FaCompass,
  FaTree,
  FaSmile,
  FaMountain,
  FaClock,
  FaRoute,
  FaTint,
  FaUserMd,
  FaHospital,
  FaHeartbeat,
  FaGlobe,
  FaCheckCircle,
  FaQuoteLeft,
} from "react-icons/fa";
import Banner from "./Banner";


const travelDistances = [
  { from: "Paro", to: "Thimphu", distance: "55 km", time: "2 hrs" },
  { from: "Paro", to: "Haa", distance: "70 km", time: "3 hrs" },
  { from: "Thimphu", to: "Phuntsholing", distance: "180 km", time: "6 hrs" },
  { from: "Thimphu", to: "Punakha", distance: "70 km", time: "3 hrs" },
  { from: "Thimphu", to: "Wangduephodrang", distance: "76 km", time: "3 hrs" },
  { from: "Punakha", to: "Gangtey", distance: "70 km", time: "3 hrs" },
  { from: "Wangduephodrang", to: "Trongsa", distance: "129 km", time: "5 hrs" },
  { from: "Trongsa", to: "Bumthang", distance: "68 km", time: "3 hrs" },
  { from: "Gangtey", to: "Trongsa", distance: "125 km", time: "4.5 hrs" },
  { from: "Bumthang", to: "Mongar", distance: "198 km", time: "6 hrs" },
  { from: "Mongar", to: "Lhuntse", distance: "76 km", time: "3 hrs" },
  { from: "Mongar", to: "Trashigang", distance: "90 km", time: "3.5 hrs" },
  { from: "Trashigang", to: "Trashiyangtse", distance: "52 km", time: "1.5 hrs" },
  { from: "Trashigang", to: "Samdrup Jongkhar", distance: "180 km", time: "6 hrs" },
];

const elevations = [
  { place: "Punakha", elevation: "1,300 m", note: "Subtropical valley" },
  { place: "Trashigang", elevation: "1,151 m", note: "Eastern hub" },
  { place: "Wangduephodrang", elevation: "1,350 m", note: "Scenic ridge" },
  { place: "Mongar", elevation: "1,620 m", note: "Hillside town" },
  { place: "Trashiyangtse", elevation: "1,830 m", note: "Arts & crafts" },
  { place: "Paro", elevation: "2,280 m", note: "Valley & airport" },
  { place: "Trongsa", elevation: "2,316 m", note: "Historic fortress" },
  { place: "Thimphu", elevation: "2,320 m", note: "Capital city" },
  { place: "Bumthang", elevation: "2,600 m", note: "Spiritual heartland" },
  { place: "Haa", elevation: "2,863 m", note: "High altitude valley" },
  { place: "Gangtey (Phobjikha)", elevation: "3,000 m", note: "Glacial valley" },
];

export default function AboutBhutanComplete() {
const [activeTab, setActiveTab] = useState<"travel" | "elevations">("travel");



  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
    <section className=" ">
        <Banner />
      </section>
    <section className="bg-slate-50  text-slate-800 antialiased overflow-hidden">
      <div className="mx-auto w-[90%] max-w-7xl py-12 space-y-24">

        {/* ========================================================= */}
        {/* HEADER */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <span className="text-[#b31212] font-bold uppercase tracking-widest text-xs sm:text-sm">
            Heritage & Identity
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-2 tracking-tight">
            Heart & Heritage of <span className="text-[#b31212]">Bhutan</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
            Discover the national symbols, vibrant ethnicities, timeless customs, and sacred faith that define the Land of the Thunder Dragon.
          </p>
        </div>

        {/* ========================================================= */}
        {/* ROW 1: 3 CARDS WITH IMAGES (Emblem, Flag, Language)       */}
        {/* ========================================================= */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3" data-aos="fade-right">
            <span className="w-2.5 h-8 bg-[#b31212] rounded-full inline-block"></span>
            <h3 className="text-2xl font-bold text-gray-950">National Symbols & Lingua</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. National Emblem */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 flex flex-col transition duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-56 w-full bg-gray-100">
                <Image
                  src="/images/ne.jpg" // Replace with your image
                  alt="National Emblem of Bhutan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="p-2.5 bg-orange-100 text-[#b31212] rounded-xl text-lg">
                      <FaScroll />
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">National Emblem</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A circular emblem projecting a double diamond thunderbolt (<em>dorje</em>) placed above a lotus, framed vertically by two dragons. The thunderbolts signify the harmony of secular and religious authority, the lotus denotes pristine purity, and the dragons stand for <strong>Druk Yul</strong>.
                  </p>
                </div>
                <span className="mt-5 pt-3 border-t border-gray-100 text-xs font-semibold text-orange-600 uppercase tracking-wider">
                  Harmony & Sovereign Purity
                </span>
              </div>
            </div>

            {/* 2. National Flag */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 flex flex-col transition duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-56 w-full bg-gray-100">
                <Image
                  src="/images/newsimg1.jpg" // Replace with your image
                  alt="National Flag of Bhutan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="p-2.5 bg-amber-100 text-[#b31212] rounded-xl text-lg">
                      <FaFlag />
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">National Flag</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Divided diagonally into golden-yellow and saffron-orange halves. Yellow signifies secular royal power and authority, while orange represents the spiritual tradition of Drukpa Kagyu Buddhism. The white dragon symbolizes purity, clutching jewels representing wealth and perfection.
                  </p>
                </div>
                <span className="mt-5 pt-3 border-t border-gray-100 text-xs font-semibold text-[#b31212] uppercase tracking-wider">
                  Dual Power of King & Dharma
                </span>
              </div>
            </div>

            {/* 3. Language */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 flex flex-col transition duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="relative h-56 w-full bg-gray-100">
                <Image
                  src="/images/newsimg2.jpg" // Replace with your image
                  alt="Bhutanese Script and Dzongkha"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="p-2.5 bg-orange-100 text-[#b31212] rounded-xl text-lg">
                      <FaLanguage />
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">Language</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Bhutan is a multilingual nation with about 18 regional languages and dialects. The national tongue is <strong>Dzongkha</strong> (&ldquo;language of the fortress&rdquo;). Other prominent languages include <strong>Sharchop</strong> in the east and <strong>Lhotshamkha</strong> in the south.
                  </p>
                </div>
                <span className="mt-5 pt-3 border-t border-gray-100 text-xs font-semibold text-[#b31212] uppercase tracking-wider">
                  18 Living Regional Dialects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ROW 2: 3 CARDS WITH IMAGES (People, Society, Religion)    */}
        {/* ========================================================= */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3" data-aos="fade-right">
            <span className="w-2.5 h-8 bg-[#b31212] rounded-full inline-block"></span>
            <h3 className="text-2xl font-bold text-gray-950">People, Society & Faith</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. People */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 flex flex-col transition duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-56 w-full bg-gray-100">
                <Image
                  src="/images/newsimg3.jpg" // Replace with your image
                  alt="People of Bhutan in traditional dress"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="p-2.5 bg-orange-100 text-[#b31212] rounded-xl text-lg">
                      <FaUsers />
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">People</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Diverse regional communities have preserved their unique dress, cuisine, and lifestyles. The multiethnic population includes the <strong>Bumthaps</strong> and <strong>Khengpas</strong> of central valleys, the <strong>Kurtoeps</strong> in Lhuentse, the nomadic <strong>Brokpas</strong> of Merak and Sakteng, the <strong>Doyas</strong>, and the <strong>Monpas</strong>.
                  </p>
                </div>
                <span className="mt-5 pt-3 border-t border-gray-100 text-xs font-semibold text-[#b31212] uppercase tracking-wider">
                  Diverse Himalayan Ethnicities
                </span>
              </div>
            </div>

            {/* 2. Society & Driglam Namzha */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 flex flex-col transition duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-56 w-full bg-gray-100">
                <Image
                  src="/images/society.jpg" // Replace with your image
                  alt="Bhutanese Custom and Etiquette"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="p-2.5 bg-orange-100 text-[#b31212] rounded-xl text-lg">
                      <FaHandsHelping />
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">Society</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Bhutanese customs and social harmony are rooted in <strong>Driglam Namzha</strong>—the ancient etiquette code dictating polite speech, respect, dining customs, and the wearing of the traditional <em>Gho</em> and <em>Kira</em>. It ensures mutual dignity and communal balance.
                  </p>
                </div>
                <span className="mt-5 pt-3 border-t border-gray-100 text-xs font-semibold text-[#b31212] uppercase tracking-wider">
                  Traditional Code of Driglam Namzha
                </span>
              </div>
            </div>

            {/* 3. Religion */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 flex flex-col transition duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="relative h-56 w-full bg-gray-100">
                <Image
                  src="/images/religion.jpg" // Replace with your image
                  alt="Bhutanese Monks and Temple Ceremony"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="p-2.5 bg-orange-100 text-[#b31212] rounded-xl text-lg">
                      <FaPray />
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">Religion</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    As the world&rsquo;s last sovereign <strong>Mahayana Buddhist</strong> kingdom, spiritual rites, colorful <em>Tshechus</em> (festivals), prayer flags, and sacred stupas permeate daily life. Freedom of faith is protected by the constitution, with thriving Hindu and Christian communities.
                  </p>
                </div>
                <span className="mt-5 pt-3 border-t border-gray-100 text-xs font-semibold text-[#b31212] uppercase tracking-wider">
                  Vajrayana Buddhism & Living Faith
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ROW 3: MAP OF BHUTAN SECTION                              */}
        {/* ========================================================= */}
        <div 
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 overflow-hidden"
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Map Visual Container */}
            <div className="w-full lg:w-1/2 relative min-h-85 sm:min-h-105 rounded-2xl overflow-hidden border-4 border-slate-100 shadow-inner bg-slate-50 flex items-center justify-center">
              <Image
                src="/images/bhutan_map.jpg" // Put your map image in public/images/
                alt="Map of Bhutan Valleys and Dzongkhags"
                fill
                className="object-contain p-2 hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Map Highlights / Description */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center space-x-3 text-[#b31212]">
                <FaMapMarkedAlt className="text-2xl" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                  Geography & Regions
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Navigating the Valleys of the Dragon Kingdom
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Landlocked between China to the north and India to the south, Bhutan covers 38,394 square kilometers. From subtropical plains in the south (150m) to glaciated Himalayan summits over 7,500m, its landscape is carved into deep, scenic valleys connected by winding mountain passes.
              </p>

              {/* Valley Quick Badges */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <h5 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                    <FaCompass className="text-[#b31212]" /> Western Bhutan
                  </h5>
                  <p className="text-xs text-gray-500 mt-1">Paro, Thimphu, Haa — cultural hubs, historic dzongs, international airport.</p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <h5 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                    <FaCompass className="text-[#b31212]" /> Central Bhutan
                  </h5>
                  <p className="text-xs text-gray-500 mt-1">Punakha, Wangdue, Bumthang — ancient spiritual heartland and fertile valleys.</p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <h5 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                    <FaCompass className="text-[#b31212]" /> Eastern Bhutan
                  </h5>
                  <p className="text-xs text-gray-500 mt-1">Mongar, Trashigang — raw wilderness, indigenous textiles, nomadic tribes.</p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <h5 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                    <FaCompass className="text-[#b31212]" /> Southern Foothills
                  </h5>
                  <p className="text-xs text-gray-500 mt-1">Gelephu, Samtse — subtropical plains, trade gateways, lush wildlife parks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ROW 4: OTHER ESSENTIAL INFORMATION (Key Travel Facts)    */}
        {/* ========================================================= */}
        <div className="space-y-8" data-aos="fade-up">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[#b31212] font-bold uppercase tracking-widest text-xs sm:text-sm">
              Essential Facts
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Key Insights for Travelers
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">
              Everything you need to know before visiting the last Himalayan kingdom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Fact 1: GNH */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:-translate-y-1 transition duration-200">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[green]-50 text-[#b31212] flex items-center justify-center text-xl mb-4">
                  <FaSmile />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Gross National Happiness</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Bhutan measures national progress through collective happiness, preservation of culture, environmental conservation, and good governance rather than GDP alone.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-green-700 mt-4 block">Sustainable Development</span>
            </div>

            {/* Fact 2: Carbon Negative */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:-translate-y-1 transition duration-200">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#b31212] flex items-center justify-center text-xl mb-4">
                  <FaTree />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">World&apos;s Only Carbon-Negative</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  The constitution mandates at least 60% forest cover for all future generations (currently over 71%), absorbing more carbon dioxide than the nation emits.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 mt-4 block">71%+ Protected Forest</span>
            </div>

            {/* Fact 3: Currency & Climate */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:-translate-y-1 transition duration-200">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#b31212] flex items-center justify-center text-xl mb-4">
                  <FaInfoCircle />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Currency & Economy</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  The national currency is the <strong>Ngultrum (BTN)</strong>, pegged 1:1 with the Indian Rupee. Cash is preferred outside urban centers, with local ATM networks available in major towns.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#b31212] mt-4 block">Ngultrum (BTN)</span>
            </div>

            {/* Fact 4: Visa & Tourism Policy */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:-translate-y-1 transition duration-200">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#b31212] flex items-center justify-center text-xl mb-4">
                  <FaCompass />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">High Value, Low Volume</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  All international travelers require an approved visa arranged through licensed tour operators and pay the Sustainable Development Fee (SDF) to protect local ecology.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#b31212] mt-4 block">Regulated Tourism Policy</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className="bg-slate-50 py-16 text-slate-800 antialiased overflow-hidden">
      <div className="mx-auto w-[90%] max-w-7xl space-y-20">

        {/* ========================================================= */}
        {/* SECTION 1: GROSS NATIONAL HAPPINESS (HERO & PHILOSOPHY)   */}
        {/* ========================================================= */}
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <span className="text-[#b31212] font-bold uppercase tracking-widest text-xs sm:text-sm">
              National Development Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-2 tracking-tight">
              Gross National <span className="text-[#b31212]">Happiness</span> (GNH)
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
              Propounded in the 1970s by His Majesty Jigme Singye Wangchuck, the Fourth King of Bhutan, GNH prioritizes collective human well-being and moral values over conventional GDP.
            </p>
          </div>

          {/* Royal Quote Banner */}
          <div
            className="bg-linear-to-r from-[#b31212] to-amber-600 text-white p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden"
            data-aos="zoom-in"
          >
            <FaQuoteLeft className="absolute right-6 -bottom-4 text-8xl text-white/10 pointer-events-none" />
            <div className="relative z-10 max-w-4xl space-y-3">
              <p className="text-base sm:text-lg leading-relaxed font-light italic">
                &ldquo;To me, GNH signifies simply development with values. For the nation today, GNH is the bridge between fundamental values of kindness, equality, and humanity and the necessary pursuit of economic growth. GNH acts as our national conscience guiding us toward wise decisions for a better future.&rdquo;
              </p>
              <span className="block text-xs sm:text-sm font-semibold tracking-wider uppercase pt-2 text-amber-100">
                — His Majesty King Jigme Khesar Namgyel Wangchuck
              </span>
            </div>
          </div>

          {/* Three Key GNH Pillars in Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Carbon & Environment */}
            <div
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-green-50 text-[#b31212] flex items-center justify-center text-xl mb-4">
                  <FaTree />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Ecological Commitments</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Pioneering sustainable environmental stewardship on an international scale:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span>Pledged at COP-16 to remain carbon neutral for all time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span>Over 71% forest cover preserved by constitutional decree.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span>Over 33% designated as protected national parks & wildlife corridors.</span>
                  </li>
                </ul>
              </div>
              <span className="text-[11px] font-semibold text-green-700 mt-6 uppercase tracking-wider">
                Carbon Negative Leader
              </span>
            </div>

            {/* Card 2: Holistic Accounting */}
            <div
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#b31212] flex items-center justify-center text-xl mb-4">
                  <FaSmile />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">GNH Accounting</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Bhutan is developing the world&apos;s first comprehensive set of national accounts that reckon natural, social, and cultural capital alongside manufactured wealth. By quantifying true ecological and social costs, economic development remains grounded in societal wellness.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#b31212] mt-6 uppercase tracking-wider">
                Beyond Financial GDP
              </span>
            </div>

            {/* Card 3: Inspiring the World */}
            <div
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#b31212] flex items-center justify-center text-xl mb-4">
                  <FaGlobe />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Global UN Recognition</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  On 19 July 2011, the UN General Assembly adopted happiness as a holistic universal goal following Bhutan&apos;s initiative. International policymakers from Canada, Brazil, and France continue to examine Bhutan&apos;s framework to inform sustainable public policy.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-blue-600 mt-6 uppercase tracking-wider">
                Adopted by UN Resolution
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 2: VITAL STATISTICS & HEALTH INDICATORS           */}
        {/* ========================================================= */}
        <div className="space-y-8" data-aos="fade-up">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-8 bg-[#b31212] rounded-full inline-block"></span>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Vital Statistics & Demographics</h3>
              <p className="text-xs sm:text-sm text-gray-500">Official territorial and public health metrics</p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
              <span className="text-xs text-gray-500 font-medium block">Total Area</span>
              <span className="text-lg sm:text-xl font-extrabold text-gray-900 mt-1 block">38,394 km²</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
              <span className="text-xs text-gray-500 font-medium block">Gewogs (Blocks)</span>
              <span className="text-lg sm:text-xl font-extrabold text-gray-900 mt-1 block">205</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
              <span className="text-xs text-gray-500 font-medium block">Dzongkhags</span>
              <span className="text-lg sm:text-xl font-extrabold text-gray-900 mt-1 block">20 Districts</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
              <span className="text-xs text-gray-500 font-medium block">Sub-districts</span>
              <span className="text-lg sm:text-xl font-extrabold text-gray-900 mt-1 block">15 Dungkhags</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
              <span className="text-xs text-gray-500 font-medium block">Safe Water</span>
              <span className="text-lg sm:text-xl font-extrabold text-green-600 mt-1 block">98%</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
              <span className="text-xs text-gray-500 font-medium block">Health Coverage</span>
              <span className="text-lg sm:text-xl font-extrabold text-green-600 mt-1 block">90%</span>
            </div>
          </div>

          {/* Detailed Health Infrastructure Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <span className="p-3 bg-red-50 text-[#b31212] rounded-xl text-xl">
                <FaHeartbeat />
              </span>
              <div>
                <h4 className="text-lg font-bold text-gray-900">National Healthcare Capacity</h4>
                <p className="text-xs text-gray-500">Universal free basic and secondary healthcare</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2 border-t border-gray-100 text-sm">
              <div className="flex items-center space-x-3">
                <FaHospital className="text-gray-400 text-2xl" />
                <div>
                  <span className="font-bold text-gray-900 block text-base sm:text-lg">32</span>
                  <span className="text-xs text-gray-500">Hospitals</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaHospital className="text-gray-400 text-2xl" />
                <div>
                  <span className="font-bold text-gray-900 block text-base sm:text-lg">205</span>
                  <span className="text-xs text-gray-500">Basic Health Units</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaUserMd className="text-gray-400 text-2xl" />
                <div>
                  <span className="font-bold text-gray-900 block text-base sm:text-lg">203 / 799</span>
                  <span className="text-xs text-gray-500">Doctors & Nurses</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaTint className="text-gray-400 text-2xl" />
                <div>
                  <span className="font-bold text-gray-900 block text-base sm:text-lg">49</span>
                  <span className="text-xs text-gray-500">Indigenous Units</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 3: TRAVEL DISTANCES & ELEVATIONS GUIDE           */}
        {/* ========================================================= */}
        <div className="space-y-6" data-aos="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-8 bg-[#b31212] rounded-full inline-block"></span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Valley Travel Guide</h3>
                <p className="text-xs sm:text-sm text-gray-500">Driving distances, transit times, and regional altitudes</p>
              </div>
            </div>

            {/* View Switcher Toggle */}
            <div className="inline-flex p-1 bg-slate-200/70 rounded-xl self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab("travel")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                  activeTab === "travel"
                    ? "bg-white text-[#b31212] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FaRoute /> Distance & Times
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("elevations")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                  activeTab === "elevations"
                    ? "bg-white text-[#b31212] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FaMountain /> Valley Elevations
              </button>
            </div>
          </div>

          {/* Tab 1: Distances Table */}
          {activeTab === "travel" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100/70 text-gray-700 font-semibold border-b border-gray-200">
                      <th className="py-3.5 px-6">Departure</th>
                      <th className="py-3.5 px-6">Destination</th>
                      <th className="py-3.5 px-6">Distance</th>
                      <th className="py-3.5 px-6">Approx. Driving Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    {travelDistances.map((item, idx) => (
                      <tr key={idx} className="hover:bg-orange-50/40 transition">
                        <td className="py-3 px-6 font-medium text-gray-900">{item.from}</td>
                        <td className="py-3 px-6">{item.to}</td>
                        <td className="py-3 px-6 font-semibold text-[#b31212]">{item.distance}</td>
                        <td className="py-3 px-6 text-gray-500 flex items-center gap-2">
                          <FaClock className="text-gray-400 text-xs" /> {item.time}
                        </td>
                      </tr> 
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-slate-50 border-t border-gray-100 text-[11px] text-gray-500">
                * Note: Mountain driving in Bhutan averages 25–35 km/h due to winding Himalayan terrain, road curves, and scenic elevation passes.
              </div>
            </div>
          )}

          {/* Tab 2: Elevations Grid */}
          {activeTab === "elevations" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {elevations.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-orange-200 transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900 text-base">{item.place}</span>
                    <FaMountain className="text-orange-500" />
                  </div>
                  <div className="text-xl font-extrabold text-orange-600">{item.elevation}</div>
                  <span className="text-xs text-gray-400 mt-1 block">{item.note}</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
    </>
  );
}