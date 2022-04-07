import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import './Testimonial.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper";
import 'swiper/css/autoplay';



const Testimonial = () => {
    
  return (
    <div>
        <div className='section section-testimonial'>
            <div className='container'>
                <h2 className='common-heading'>Testimonials</h2>
            </div>
           
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
       
       
 
  // Alternative with 3sec default timeout:
  // autoplay={true}

  
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 2500 }}
      >
        <SwiperSlide className='swiper container'>
            <div className='swiper-client-msg'>
                <p>Features are awesome</p>
            </div>
            <div className='swiper-client-data grid grid-two-column'>
                    <img src='images/test1.jpg' alt="client review" />
                <div className='client-data-details'>
                    <p>pratik</p>
                </div>
            </div>
        </SwiperSlide >
        <SwiperSlide className='swiper container'>
        <div className='swiper-client-msg'>
                <p>
                    Tested working properly
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='swiper-client-data grid grid-two-column'>
                    <img src='images/test2.png' alt="client review" />
                <div className='client-data-details'>
                    <p>Awesomesam</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swiper container'>
        <div className='swiper-client-msg'>
                <p>
                    Tested working properly
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='swiper-client-data grid grid-two-column'>
                    <img src='images/test3.jpg' alt="client review" />
                <div className='client-data-details'>
                    <p>pinki</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swiper container'>
        <div className='swiper-client-msg'>
                <p>
                    Tested working properly
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='swiper-client-data grid grid-two-column'>
                    <img src='images/test4.jpg' alt="client review" />
                <div className='client-data-details'>
                    <p>rinki</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Testimonial




        