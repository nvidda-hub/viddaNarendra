import React, { useState } from 'react';
import { WorksData } from './WorksData';

function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = WorksData;
 
  // here way means left or right
  const handleClick = way => {
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1:data.length-1)
    : setCurrentSlide(currentSlide < data.length-1 ? currentSlide + 1 : 0)

  }
  console.log('currentSlide : ', currentSlide)
  return <div id='works' className='bg-pink-600 relative flex items-center justify-center w-screen h-[calc(100vh_-_64px)] snap-start'>
      
      {/* slider */}
      <div className='sm:h-[48%] md:h-[52%] lg:h-[60%] flex absolute left-0 transition-on-menu-click' style={{transform : `translateX(-${currentSlide * 100}vw)`}}>
        {data.map(d => {
          {/* container */}
        return <div className='w-screen flex items-center justify-center'>

        {/* item */}
        <div className='sm:w-[400px] md:w-[480px] lg:w-[600px] xl:w-[700px] h-full bg-white rounded-[20px] flex items-center justify-center'>

          {/* left */}
          <div className='flex-[4] h-[80%] flex items-center justify-center'>
            
            {/* left container */}
            <div className='w-[90%] h-[70%] flex flex-col justify-between'>

              {/* image container */}
              <div className='w-[30%] h-[30%] rounded-[50%] bg-orange-300 flex flex-col items-center justify-center'>
                  <img src={d.icon} alt='' className='sm:w-[14px] md:w-[18px] lg:w-[22px] xl:w-[25px]'/>
              </div>
              <h2 className='sm:text-[15px] lg:text-[18px] xl:text-[20px] font-semibold'>{d.title}</h2>
              <p className='text-[13px]'>{d.desc}</p>
              <span className='text-xl font-[600] cursor-pointer underline decoration-1'>Projects</span>
            </div>

          </div>
        
          
        {/* right */}
        <div className='flex-[8] h-full flex items-center justify-center'>
          <img 
            src='https://res.cloudinary.com/practicaldev/image/fetch/s--1Udov0n---/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/d9taiqwp0968js9hcn5u.png'
            alt=''
            className='sm:w-[240px] md:w-[320px] lg:w-[400px] -rotate-12'
          />
        </div>
      </div>
      </div>
        })}
        
      </div>

      {/* left arrow */}
      <img src='images/arrow.png'alt='' className='cursor-pointer sm:h-[28px] md:h-[40px] lg:h-[50px] absolute sm:left-[40px] md:left-[60px] lg:left-[100px] rotate-180' onClick={() => handleClick("left")}/>

      {/* right arrow */}
      <img src='images/arrow.png 'alt='' className='cursor-pointer sm:h-[28px] md:h-[40px] lg:h-[50px] absolute sm:right-[40px] md:right-[60px] lg:right-[100px] ' onClick={() => handleClick()}/>
      
    </div>;
}

export default Work;
