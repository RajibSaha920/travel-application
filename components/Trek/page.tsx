"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  allTreksData,
  trekInclusions,
  trekExclusions,
} from "@/data/trekData";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaArrowRight,
  FaInfoCircle,
  FaMountain,
} from "react-icons/fa";
import Banner from "./Banner";

export default function Trek() {
  const [selectedTrekIndex, setSelectedTrekIndex] = useState(0);

  const activeTrek = allTreksData[selectedTrekIndex] || allTreksData[0];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
    <section className=" ">
        <Banner />
      </section>
    
    <section className="min-h-screen bg-slate-50 text-slate-800 antialiased pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. TOP HEADER & TREK SELECTOR */}
      <section className="mx-auto w-[90%] max-w-7xl text-center mb-12">
        <div data-aos="fade-up">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#b31212]">
            Himalayan Alpine Treks
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-2 tracking-tight">
            Trek <span className="text-[#b31212]">Packages</span> & Routes
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Click any trek below to view its complete mountain route, daily itinerary, high passes, and highlights.
          </p>
        </div>

        {/* Categories Grid */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {allTreksData.map((trek, idx) => {
            const isSelected = selectedTrekIndex === idx;

            return (
              <button
                key={trek.id}
                type="button"
                onClick={() => setSelectedTrekIndex(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#b31212] text-white border-[#b31212] shadow-lg scale-105"
                    : "bg-white text-gray-800 border-gray-200 hover:border-[#b31212] hover:shadow-sm"
                }`}
              >
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                    isSelected ? "text-amber-200" : "text-[#b31212]"
                  }`}>
                    {trek.tag}
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm leading-snug">
                    {trek.title}
                  </h4>
                </div>
                <div className={`mt-3 flex items-center justify-between text-[11px] font-medium ${
                  isSelected ? "text-white/80" : "text-gray-400"
                }`}>
                  <span>{trek.duration}</span>
                  <span className="flex items-center gap-1">
                    <FaMountain className="text-[10px]" /> {trek.maxAltitude}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. DYNAMIC CONTENT SECTION FOR ACTIVE TREK */}
      <section className="mx-auto w-[90%] max-w-7xl">
        
        {/* Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8" data-aos="fade-right">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-10 bg-[#b31212] rounded-full inline-block"></span>
            <div>
              <span className="text-xs uppercase font-bold text-[#b31212] tracking-wider">
                {activeTrek.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
                {activeTrek.title}
              </h2>
            </div>
          </div>

          {activeTrek.season && (
            <div className="bg-amber-50 border border-amber-200 text-amber-900 px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2">
              <FaInfoCircle className="text-amber-600 shrink-0" />
              <span>Recommended Season: {activeTrek.season}</span>
            </div>
          )}
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* LEFT 2 COLUMNS: Image, Overview, Highlights, and Daily Routing */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Featured Image */}
            <div 
              className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md border-4 border-white bg-gray-100"
              data-aos="zoom-in"
            >
              <Image
                src={activeTrek.image}
                alt={activeTrek.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-[#b31212] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {activeTrek.tag}
                </span>
                <p className="text-sm sm:text-base font-medium text-gray-200 mt-2">
                  {activeTrek.summary}
                </p>
              </div>
            </div>

            {/* Overview Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100" data-aos="fade-up">
              <h3 className="text-lg font-bold text-gray-900 mb-3">About This Trek</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {activeTrek.overview}
              </p>
              <p className="text-xs text-gray-500 mt-4 italic">
                * All our Bhutan treks are private, tailor-made journeys for independent travel on dates of your choosing. We can easily customise the routes and rest days to suit your fitness level.
              </p>
            </div>

            {/* Trek Highlights */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100" data-aos="fade-up">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#b31212]"></span>
                Trek Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeTrek.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-snug">
                    <FaCheckCircle className="text-[#b31212] text-xs mt-1 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary Schedule */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100" data-aos="fade-up">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Detail Trek Itinerary</h3>
                  <p className="text-xs text-gray-400">
                    Day-by-day hiking route and overnight camp destinations
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#b31212]">
                  <FaCalendarAlt /> {activeTrek.itinerary.daysCount}
                </div>
              </div>

              {/* Schedule List */}
              <div className="border-t border-gray-100 pt-6 space-y-3">
                {activeTrek.itinerary.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-red-200 transition"
                  >
                    <span className="shrink-0 px-2.5 py-1 rounded-md bg-[#b31212] text-white font-bold text-[11px] sm:text-xs">
                      {item.day}
                    </span>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-800">
                      <FaMapMarkerAlt className="text-gray-400 text-xs shrink-0" />
                      <span>{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
              {/* Inclusions */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-600" /> What We Include
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                    {trekInclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="mt-5 pt-3 border-t border-gray-100 text-[11px] font-semibold text-emerald-700 uppercase">
                  All-Inclusive Camping Standard
                </span>
              </div>

              {/* Exclusions */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaTimesCircle className="text-red-500" /> Not Included
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                    {trekExclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500 font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="mt-5 pt-3 border-t border-gray-100 text-[11px] font-semibold text-red-600 uppercase">
                  Personal Out-of-Pocket
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR: BOOKING & INQUIRY */}
          <div className="sticky top-28 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6" data-aos="fade-left">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
                Selected Trek
              </span>
              <h3 className="text-2xl font-extrabold text-gray-900 mt-1">
                {activeTrek.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Private tailor-made trek. Custom dates, routes, and rest days available on request.
              </p>
            </div>

            <div className="border-y border-gray-100 py-4 space-y-3 text-xs sm:text-sm text-gray-600">
              <div className="flex justify-between">
                <span className="text-gray-400">Duration:</span>
                <span className="font-semibold text-gray-800">{activeTrek.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Max Elevation:</span>
                <span className="font-semibold text-gray-800">{activeTrek.maxAltitude}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Difficulty Grade:</span>
                <span className="font-semibold text-[#b31212]">{activeTrek.difficulty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Visa & SDF Royalty:</span>
                <span className="font-semibold text-emerald-600">Included in Package</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Camp Crew:</span>
                <span className="font-semibold text-gray-800">Cook, Guide & Pack Yaks</span>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-[#b31212] hover:bg-black text-white font-bold text-sm shadow-md transition duration-200"
              >
                <span>Book This Trek</span>
                <FaArrowRight className="text-xs" />
              </Link>
              <a
                href="tel:+97517000000"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold transition"
              >
                <FaPhoneAlt className="text-xs text-gray-400" /> Talk to Trek Specialist
              </a>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-center">
              <p className="text-[11px] text-gray-500">
                Official License No. 1034049 · Ministry of Economic Affairs, Royal Government of Bhutan.
              </p>
            </div>
          </div>

        </div>
      </section>

    </section>
    </>
  );
}