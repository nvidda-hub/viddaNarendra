import React from 'react';

function PortfolioItems({itemDetail}) {
  return <div className='portfolio_items flex items-center justify-center transition cursor-pointer text-white relative rounded-2xl border border-gray-300 border-solid hover:bg-slate-800'>
    <img
        className='w-full h-full object-cover z-10 hover:opacity-20 hover:z-0'
        src={itemDetail.img}
        alt=''
    />
    <h3 className='text-xl absolute mx-3'>{itemDetail.title}</h3>
</div>;
}

export default PortfolioItems;
