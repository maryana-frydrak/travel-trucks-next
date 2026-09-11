"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import css from "./CamperGallery.module.css";

interface GalleryItem {
  thumb: string;
  original: string;
}

interface CamperGalleryProps {
  gallery: GalleryItem[];
}

export default function CamperGallery({ gallery }: CamperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <div className={css.galleryContainer}>
      
      <Swiper
        modules={[FreeMode, Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className={css.mainSwiper}
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.original}
              alt={`Camper photo ${index + 1}`}
              className={css.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={css.thumbsSwiper}
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index} className={css.thumbSlide}>
            <img
              src={item.thumb}
              alt={`Camper thumbnail ${index + 1}`}
              className={css.thumbImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
