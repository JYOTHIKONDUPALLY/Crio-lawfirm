import React, { useState } from "react";
import Image1 from "../../assests/Ellipse 14.png";
import Image2 from "../../assests/Ellipse 14 (1).png";
import Image3 from "../../assests/Ellipse 14 (2).png";
import Image4 from "../../assests/Ellipse 16.png";
import LeftArrow from "../../assests/leftarrow.svg";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {useSwiper} from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";




import { Grid} from "swiper/modules";


const Data = [
  {
    name: "Jane Cooper",
    position: "Ceo of Hunt",
    alt: "image1",
    url: Image1,
  },
  {
    name: "Devon Lane",
    position: "Ceo of Hunt",
    alt: "image2",
    url: Image2,
  },
  {
    name: "Robert Fox",
    position: "Ceo of Hunt",
    alt: "image3",
    url: Image3,
  },
  {
    name: "Jane Cooper",
    position: "Ceo of Hunt",
    alt: "image4",
    url: Image4,
  },
];

export default function App() {
  return (
    <div className={styles.carousel}>
    <h1>What says our happy Clients</h1>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
          columns: 3
        }}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Grid]}
        className="mySwiper"
      >
        {Data.map((item, index) => (
          <SwiperSlide key={item.alt}>
            <div className={styles.card}>
              <img src={item.url} alt={item.alt} className={styles.image} />
              <h1 className={styles.name}>{item.name}</h1>
              <p className={styles.position}>{item.position}</p>
              <p className={styles.description}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 
