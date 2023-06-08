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
import { Fade } from "react-awesome-reveal";

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
      autoplay={{ delay: 3000 }}
      className="mySwiper"
    >
      {slider.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <Fade delay={index * 1000} cascade damping={1}>
            <img
              className="swiper-img"
              src={slide.image}
              alt={`Slide ${slide.id}`}
            />
            <div className="absolute top-4 active-url  left-4 ">
              <h3 className="text-5xl font-bold">{slide.martialartname}</h3>
              <p className="text-2xl">{slide.detail}</p>
            </div>
          </Fade>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopSlider;
