import React from 'react';

function TestimonialsCard({name, title, desc, img, icon, featured}) {
  return <div className={featured ? 'w-[300px] h-[80%] mx-7 shadow-[0_0_15px_-8px] shadow-black flex flex-col justify-around p-[20px] rounded-lg  transition-all hover:scale-110' : 'w-[250px] h-[70%] shadow-[0_0_15px_-8px] shadow-black flex flex-col justify-around p-[20px] rounded-lg transition-all hover:scale-110'}>

          {/* top */}
          <div className='flex items-center justify-center'>

            {/* left */}
            <img className='h-[25px]' src='images/right-arrow.png' alt=''/>
            <img className="mx-8 h-[60px] w-[60px] rounded-[50%] object-cover" src={img} alt=''/>
            <img className='h-[25px]' src={icon} alt=''/>
          </div>
          
          {/* center */}
          <div className='p-2 bg-pink-50 rounded-[10px]'>
            {desc}
          </div>
          {/* bottom */}
          <div className='flex flex-col items-center justify-center'>
            <h3 className='mb-[5px] text-[18px]'>{name}</h3>
            <h4 className='text-gray-400 text-[16px]'>{title}</h4>
          </div>

      </div>;
}

export default TestimonialsCard;
