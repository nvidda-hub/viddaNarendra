import React from 'react';

function PortfolioItems({itemDetail}) {
  return <div className='w-[220px] h-[150px] relative rounded-2xl border border-gray-300 border-solid my-2 mx-5 flex items-center justify-center transition cursor-pointer text-white hover:bg-slate-800'>
    <img
        className='w-full h-full object-cover z-10 hover:opacity-20 hover:z-0'
        src={itemDetail.img}
        alt=''
    />
    <h3 className='text-xl absolute'>{itemDetail.title}</h3>
</div>;
}

export default PortfolioItems;
