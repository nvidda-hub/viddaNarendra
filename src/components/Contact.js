import React, { useState } from 'react';

function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setMessage(true);
  }
  console.log("message : ", message)
  return <div id="contact" className='bg-white flex snap-start'>
      <div className='flex-1 overflow-hidden'>
        <img 
          src='images/shake.svg'
          alt=''
          className='h-full'
        />
      </div>

      <div className='flex-1 flex flex-col items-center justify-center' onSubmit={handleSubmit}>
        <h2 className='text-[30px]'>Contact</h2>
        <span className='w-1/5 h-0.5 bg-black'></span>
        <form className='w-[70%] h-[70%] flex flex-col items-center justify-around'>
          <input type="text" placeholder="Email" className='w-[300px] h-[30px] text-[14px] border-2 border-slate-300 border-solid rounded-sm p-3'/>
          <textarea placeholder='Message' className='w-[300px] h-[200px] text-[14px] border-2 border-slate-300 border-solid rounded-sm p-3'></textarea>
          <button type='submit' className='w-[150px] h-[30px] bg-pink-700 border-none font-medium cursor-pointer  text-white rounded-lg hover:bg-green-800 focus:outline-none'>Send</button>
          {message && <span className='text-green-800 font-medium text-xl'>Thanks! I 'll replay ASAP:)</span>}
        </form>
      </div>
  </div>;
}

export default Contact;
