import React from 'react';

function Menu({menuOpen, setMenuOpen}) {
  return <div className={menuOpen ? 'flex flex-col items-center justify-center h-screen w-72 bg-slate-800 fixed top-0 -right-72 z-10 ': 'flex flex-col items-center justify-center h-screen w-72 bg-slate-800 fixed top-0 right-0 z-10 transition-on-menu-click' }>
      <ul className='m-0 p-0 list-none text-3xl text-white font-light w-3/5'>
          <li onClick={()=>setMenuOpen(!menuOpen)} className='mb-6 hover:font-medium'>
              <a href='#intro' className='hover:text-orange-600'>Home</a>
          </li>
          <li onClick={()=>setMenuOpen(!menuOpen)} className='mb-6 hover:font-medium'>
              <a href='#portfolio' className='hover:text-orange-600'>Portfolio</a>
          </li>
          <li onClick={()=>setMenuOpen(!menuOpen)} className='mb-6 hover:font-medium'>
              <a href='#works' className='hover:text-orange-600'>Work</a>
          </li>
          <li onClick={()=>setMenuOpen(!menuOpen)} className='mb-6 hover:font-medium'>
              <a href='#testimonials' className='hover:text-orange-600'>Testimonials</a>
          </li>
          <li onClick={()=>setMenuOpen(!menuOpen)} className='mb-6 hover:font-medium'>
              <a href='#contact' className='hover:text-orange-600'>Contact</a>
          </li>
      </ul>
  </div>;
}

export default Menu;
