"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  galleryItems,
  galleryCategories,
  GalleryCategory,
  GalleryItem,
} from "@/data/galleryData";
import {
  FaMapMarkerAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaCamera,
  FaArrowRight,
  FaPaintBrush,
  FaQuoteLeft,
  FaPalette,
} from "react-icons/fa";
import Banner from "./Banner";

export default function ArtistThought() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Filter items based on active tab
  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // Lightbox navigation handlers
  const handlePrev = useCallback(() => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedPhoto(filteredItems[prevIndex]);
  }, [selectedPhoto, filteredItems]);

  const handleNext = useCallback(() => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedPhoto(filteredItems[nextIndex]);
  }, [selectedPhoto, filteredItems]);

  // Keyboard controls for the modal (Esc, Left Arrow, Right Arrow)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === "Escape") setSelectedPhoto(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, handlePrev, handleNext]);

  return (
    <>
    <section className=" ">
        <Banner />
      </section>
    <section className="min-h-screen bg-slate-50 text-slate-800 antialiased pt-28 pb-24 overflow-x-hidden">
      
      {/* 1. HERO HEADER */}
      <section className="mx-auto w-[90%] max-w-7xl text-center mb-10">
        <div data-aos="fade-up">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#b31212]">
            Visual Arts & Heritage
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-2 tracking-tight">
            Gallery & <span className="text-[#b31212]">Artist Thoughts</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mt-3 leading-relaxed">
            Discover Bhutan through the lens of sacred hand-painted murals (Zorig Chusum Thangkas) and landscape photography, accompanied by reflections from master Himalayan painters.
          </p>
        </div>

        {/* 2. CATEGORY FILTER TABS */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat;
            const isArtTab = cat === "Paintings & Hand Art";

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-[#b31212] text-white shadow-md shadow-red-900/20 scale-105"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-[#b31212] hover:text-[#b31212]"
                }`}
              >
                {isArtTab && <FaPaintBrush className="text-xs text-amber-500" />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. ARTIST THOUGHT SPOTLIGHT CARD (Displayed when "Paintings & Hand Art" or "All" is active) */}
      {(activeCategory === "All" || activeCategory === "Paintings & Hand Art") && (
        <section className="mx-auto w-[90%] max-w-7xl mb-12" data-aos="fade-up">
          <div className="bg-linear-to-br from-[#1a0505] to-[#2c0a0a] text-white rounded-3xl p-6 sm:p-10 border border-red-950 shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
              <FaPalette className="text-[240px]" />
            </div>

            <div className="relative z-10 max-w-4xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-amber-300 text-xs font-bold uppercase tracking-widest border border-red-500/30">
                <FaPaintBrush /> Sacred Bhutanese Art (Zorig Chusum)
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Art as a Path of Meditation & Mindfulness
              </h2>
              <div className="flex items-start gap-3 pt-2">
                <FaQuoteLeft className="text-amber-400 text-2xl shrink-0 mt-1 opacity-80" />
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;In Bhutan, a hand-painted Thangka is never simply an object of art. It is a visual prayer. When our apprentices grind natural mineral pigments—lapis lazuli, cinnabar, and gold dust—and measure sacred iconometric proportions, each stroke quietens the mind. It is our hope that every traveler who gazes upon these sacred forms carries home a moment of inner clarity and peace.&rdquo;
                </p>
              </div>
              <div className="pt-2 text-xs text-amber-300 font-semibold">
                — Master Painters of the National Institute of Zorig Chusum, Thimphu
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. MASONRY PHOTO & ART GRID */}
      <section className="mx-auto w-[90%] max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                item.featured ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Shading gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow ${
                    item.isArtPiece ? "bg-amber-500 text-slate-950" : "bg-[#b31212] text-white"
                  }`}>
                    {item.isArtPiece ? "Hand Art Painting" : item.category}
                  </span>
                </div>

                {/* Fullscreen icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <FaExpand className="text-xs" />
                </div>

                {/* Bottom Content Bar */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10">
                  <div className="flex items-center gap-1.5 text-xs text-amber-300 mb-1">
                    <FaMapMarkerAlt className="text-[11px] shrink-0" />
                    <span className="font-medium">{item.location}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold leading-snug text-white group-hover:text-amber-200 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1.5 line-clamp-2 font-light">
                    {item.description}
                  </p>

                  {item.isArtPiece && item.artistThought && (
                    <div className="mt-2.5 pt-2 border-t border-white/20 flex items-center gap-2 text-[11px] text-amber-200 font-medium">
                      <FaPaintBrush className="text-[10px]" />
                      <span>Includes Artist Reflection & Technique</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <FaCamera className="text-4xl text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-700">No artwork found</h3>
            <p className="text-xs text-gray-400 mt-1">
              Select another filter to view our photos and paintings.
            </p>
          </div>
        )}
      </section>

      {/* 5. LIGHTBOX MODAL WITH "ARTIST THOUGHTS" DRAWER */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full bg-gray-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#b31212] text-white flex items-center justify-center transition cursor-pointer"
            >
              <FaTimes className="text-sm" />
            </button>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#b31212] text-white flex items-center justify-center transition cursor-pointer"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#b31212] text-white flex items-center justify-center transition cursor-pointer"
            >
              <FaChevronRight className="text-sm" />
            </button>

            {/* Image Preview */}
            <div className="relative h-[48vh] sm:h-[58vh] w-full bg-black">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Details Footer */}
            <div className="p-6 bg-gray-900 border-t border-white/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      selectedPhoto.isArtPiece ? "bg-amber-500 text-slate-950" : "bg-[#b31212] text-white"
                    }`}>
                      {selectedPhoto.category}
                    </span>
                    <span className="text-xs text-amber-300 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-[10px]" />
                      {selectedPhoto.location}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-bold text-white">
                    {selectedPhoto.title}
                  </h2>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#b31212] hover:bg-white hover:text-gray-900 text-white font-bold text-xs shadow transition shrink-0"
                >
                  <span>Inquire About Cultural Art Tours</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>

              {/* ARTIST THOUGHT SECTION (When Hand Art Painting is viewed) */}
              {selectedPhoto.isArtPiece && selectedPhoto.artistThought ? (
                <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-amber-500/30 space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 text-amber-400 font-bold">
                      <FaPaintBrush />
                      <span>Artist: {selectedPhoto.artistName}</span>
                    </div>
                    {selectedPhoto.medium && (
                      <span className="text-slate-400 text-[11px] italic">
                        Medium: {selectedPhoto.medium}
                      </span>
                    )}
                  </div>
                  
                  <div className="border-t border-slate-800 pt-2 flex items-start gap-2.5">
                    <FaQuoteLeft className="text-amber-400 text-xs shrink-0 mt-1 opacity-70" />
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light italic">
                      &ldquo;{selectedPhoto.artistThought}&rdquo;
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {selectedPhoto.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
    </>
  );
}