import React from "react";
import { AuthStyle } from "./style";
import { BsPerson } from "react-icons/bs";
import "swiper/swiper.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Controller } from "swiper";
import { useState, useRef } from "react";
import { SignArray } from "../../array";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";

export default function AuthLayout({ children }) {
  const swiperRef = useRef();
  const [firstSwiper, setFirstSwiper] = useState({});
  const [secondSwiper, setSecondSwiper] = useState({});
  return (
    <>
      <AuthStyle>
        <div className="Sign-Menu-Section">
          <Swiper
            style={{ width: "40vw" }}
            spaceBetween={50}
            slidesPerView={1}
            modules={[Mousewheel, Controller]}
            onSlideChange={() => console.log("slide change")}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{ delay: 3000 }} // Add this line for autoplay with a 3-second delay
            // Define breakpoints for different screen sizes
          >
            {SignArray.map((item, index) => (
              <SwiperSlide
                style={{
                  width: "40vw",
                  display: "flex",
                  marginRight: "30px",
                }}
                key={index}
              >
                <div className="Sign-Slider">
                  <div className="Sign-Slider-menu">
                    <div className="Img-Container">
                      <img className="Sign-Image1" src={item.img} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="Form-Section">{children}</div>
        </div>
      </AuthStyle>
    </>
  );
}
