import React from 'react';
import TestimonialsCard from './TestimonialsCard';
import { TestimonialsData } from './TestimonialsData';

function Testimonials() {

  const data = TestimonialsData;

  return <div id="testimonials" className='bg-white w-screen h-[calc(100vh_-_64px)] snap-start flex  flex-col items-center'>
      <h1 className='text-[50px] font-semibold'>Testimonials</h1>
      <div className='w-full h-[80%] flex items-center justify-center'>
      {data.map(testimonial => {
        return <TestimonialsCard name={testimonial.name} title={testimonial.title} desc={testimonial.desc} img={testimonial.img} icon={testimonial.icon} featured={testimonial.featured}/>
      })}
      </div>
  </div>;
}

export default Testimonials;
