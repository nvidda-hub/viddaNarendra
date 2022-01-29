import React, { useEffect, useRef } from 'react';
import {init} from "ityped";

function Intro() {

  // instead of using querySector for selecting element we are using useRef hook
  const textRef = useRef();
  
  useEffect(()=>{
   init(textRef.current, {
     showCursor:true,
     backSpeed:60,
     backDelay:1500,
     strings:["MERN Stack", "TailwindCSS", "Python", "Django", "Flask", "Nginx", "uWSGI"]
   });
  }, [])

  return <div id="intro" className='flex bg-white w-screen h-[calc(100vh_-_64px)] snap-start'>
    
    {/* left part of intro */}
    <div className='flex-1 '>
      <div className='flex bg-rose-600 rounded-full w-introLeft h-introLeft items-end justify-center float-right'>
        <img 
        
          src='images/vidda_2.png' 
          alt=''
        />
      </div>
    </div>
    
    {/* right part of intro */}
    <div className='flex-1 relative '>
      <div className='w-full h-full pl-12 flex flex-col justify-center'>
        <h2 className='text-4xl'>Hi there! I am </h2>
        <h1 className='mx-0 my-2 text-6xl'>Narendra K Vidda</h1>
        <h3 className='text-3xl'>Skills <span className='animate-[blink_1s_infinite] font-bold text-pink-700' ref={textRef}></span></h3>
      </div>
      <a href='#portfolio' className='absolute bottom-2 left-1/2'>
        <img 
          className='w-7 animate-bounce'
          src='images/down.png'
          alt=''
          />
      </a>
    </div>
    
    </div>;
}

export default Intro;
