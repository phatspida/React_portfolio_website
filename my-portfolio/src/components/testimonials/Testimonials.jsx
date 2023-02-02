import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/pic1.jpg'
import AVTR2 from '../../assets/pic2.jpg'
import AVTR3 from '../../assets/pic3.jpg'
import AVTR4 from '../../assets/pic4.jpg'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Shilla Reginna',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iste, error nam sed aut architecto et minima ex, sequi neque voluptatibus placeat maxime unde in quas quos? Culpa, quos earum.'
  },
  {
    avatar: AVTR2,
    name: 'Brock Lesner',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iste, error nam sed aut architecto et minima ex, sequi neque voluptatibus placeat maxime unde in quas quos? Culpa, quos earum.'
  },
  {
    avatar: AVTR3,
    name: 'Shurrer Kivle',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iste, error nam sed aut architecto et minima ex, sequi neque voluptatibus placeat maxime unde in quas quos? Culpa, quos earum.'
  },
  {
    avatar: AVTR4,
    name: 'Shilla Reginna',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iste, error nam sed aut architecto et minima ex, sequi neque voluptatibus placeat maxime unde in quas quos? Culpa, quos earum.'
  },
]



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
      >

      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key = {index} className='testimonial'>
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
