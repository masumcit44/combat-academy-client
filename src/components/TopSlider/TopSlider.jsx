import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TopSlider.css";
import axios from "axios";

// Install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

const TopSlider = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/topslider").then((response) => {
      setSlider(response.data);
    });
  }, []);
  console.log(slider);
  return (
    <Swiper
      spaceBetween={30}
      effect="fade"
      // navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      className="mySwiper"
    >
      {slider.map((slide, index) => (
        <SwiperSlide key={index} className="relative" >
          <img
            className="swiper-img"
            src={slide.image}
            alt={`Slide ${slide.id}`}
          />
          <h3 className="absolute top-10 active-url text-amber-500 left-16 text-5xl font-bold">{slide.martialartname}</h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopSlider;
