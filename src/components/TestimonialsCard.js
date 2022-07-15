import React from 'react';

function TestimonialsCard({name, title, desc, img, icon, featured}) {
  return <div className={featured ? 'sm:w-[200px] md:w-[260px] lg:w-[300px] h-[80%] mx-7 shadow-[0_0_15px_-8px] shadow-black flex flex-col justify-around sm:p-[10px] md:p-[16px] lg:p-[20px] rounded-lg  transition-all hover:scale-110' : 'sm:w-[180px] md:w-[240px] lg:w-[250px] h-[70%] shadow-[0_0_15px_-8px] shadow-black flex flex-col justify-around p-[20px] rounded-lg transition-all hover:scale-110'}>

          {/* top */}
          <div className='md:mx-3 lg:mx-4 flex items-center justify-center'>

            {/* left */}
            <img className='sm:h-[14px] md:h-[20px] lg:h-[25px]' src='https://lh5.googleusercontent.com/fp3Wca308AGN5kxW-cHp0_bAXDmY-P2ZbByLDIQp7YsECOmSrd3C3Bc-J3aUKsS14ns=w2400' alt=''/>
            <img className="sm:mx-2 md:mx-4 lg:mx-8 sm:h-[36px] md:h-[48px] lg:h-[60px] sm:w-[36px] md:w-[48px] lg:w-[60px] rounded-[50%] object-cover" src={img} alt=''/>
            <img className='sm:h-[14px] md:h-[20px] lg:h-[25px]' src={icon} alt=''/>
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
