import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";



const data = [
  {
    avatar : AVTR1,
    name : 'Tina Snow',
    review : 'Fusce placerat mauris ex, non ullamcorper magna maximus hendrerit. Duis ex elit, aliquam at nunc cursus, mollis viverra dui. Suspendisse bibendum condimentum dui, maximus posuere urna bibendum ut.'
  },
  {
    avatar : AVTR2,
    name : 'Shatta Wale',
    review : 'Phasellus in est ullamcorper, maximus arcu sit amet, vestibulum quam. Ut aliquet nisl diam, nec commodo purus ornare sit amet. Fusce maximus feugiat ultrices. Donec tempor, elit ut aliquet dignissim, neque velit vestibulum mi, ac iaculis felis leo ullamcorper nibh.'
  },
  {
    avatar : AVTR3,
    name : 'ina Snow',
    review : 'Praesent nisi libero, varius quis nulla eu, molestie ullamcorper nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi a tristique metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ac luctus metus, a lobortis mi. Nunc quis lectus enim.'
  },
  {
    avatar : AVTR4,
    name : 'Duis ex elit',
    review : 'Donec ultrices porttitor urna et posuere. Proin et ligula rhoncus, ultricies neque sed, imperdiet tellus. Nunc ac aliquam leo, et tristique felis. Nunc sed nibh ac massa imperdiet tristique at eget felis.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>
        Review from clients
      </h5>
      <h2>Testimonials</h2>
      
      <Swiper pagination={true} modules={[Pagination]}  className="container testimonials__container">
        {

           data.map(({avatar, name, review}, index) => {
             return (

              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                {review}
                </small>
            </SwiperSlide>

             )
           }) 
        }
      </Swiper>
    </section>
  )
}



export default Testimonials