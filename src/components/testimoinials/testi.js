import React from "react";
import { TestiSide } from "./style";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import "swiper/swiper.min.css";
import { BoxArray } from "../../array";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Controller } from "swiper";
import { useState, useRef } from "react";

export default function Test() {
  const swiperRef = useRef();
  const [firstSwiper, setFirstSwiper] = useState({});
  const [secondSwiper, setSecondSwiper] = useState({});

  return (
    <TestiSide>
      <div className="Test-Menu-Section">
        <div className="Test-Container">
          <div className="Test-Title-Section">
            <h1 className="Test-Title">Testimonials</h1>

          </div>

          <Swiper
            style={{ width: "100vw" }}
            spaceBetween={50}
            slidesPerView={3}
            modules={[Mousewheel, Controller]}
            onSlideChange={() => console.log("slide change")}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            // Define breakpoints for different screen sizes
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {BoxArray.map((item, index) => (
              <SwiperSlide
                style={{
                  width: "100vw",
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "0px",
                }}
                key={index}
              >
                <div className="Box-Container">
                  <div className="Box-Section-menu">
                    <div className="Box-Image">
                      <img className="Box-Image1" src={item.img} alt="" />
                      <div className="Box-Person">
                        <span className="Person-Name">{item.desc}</span>
                        <span className="Cbo">{item.title}</span>
                      </div>
                    </div>


                    <div className="Box-Text-Section">
                      <p className="Box-Text">{item.name}</p>
                    </div>



                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </TestiSide>
  );
}
