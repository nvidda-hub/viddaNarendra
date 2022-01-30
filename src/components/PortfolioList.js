import React from 'react';

function PortfolioList({ id, title, isActive, setSelected}) {
  return <li onClick={() => setSelected(id)} className={isActive ? 'portfolio_list bg-slate-800 text-white' : 'portfolio_list hover:text-white hover:bg-slate-800'}>{title}</li>;
}

export default PortfolioList;
