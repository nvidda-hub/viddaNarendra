import React from 'react';

function PortfolioList({ id, title, isActive, setSelected}) {
  return <li onClick={() => setSelected(id)} className={isActive ? 'text-[14px] rounded-lg cursor-pointer mr-12 p-2 bg-slate-800 text-white' : 'text-[14px] rounded-lg cursor-pointer mr-12 p-2 hover:bg-slate-800 hover:text-white'}>{title}</li>;
}

export default PortfolioList;
