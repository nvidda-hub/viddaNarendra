import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';



function Topbar({menuOpen, setMenuOpen}) {
  return <div className={menuOpen ? 'w-full h-16 text-slate-800 bg-white fixed z-20 ': 'w-full h-16 bg-slate-800 text-white fixed z-20 transition-on-menu-click '} >
      <div className='py-2 px-7 flex items-center justify-between'>

        {/* left topbar */}
        <div className='flex items-center'>
          <a href='#intro' className='text-4xl font-semibold mr-10'>Vidda</a>
          <div className='flex items-center ml-2 sm:ml-7'>
            <PersonIcon className='text-3xl mr-1'/>
            <span className='text-xs font-medium'>+91 88511 41572</span>
          </div>

          <div className='flex items-center ml-7'>
            <EmailIcon className='text-3xl mr-1'/>
            <span className='text-xs font-medium'>nkvidda@gmail.com</span>
          </div>
        </div>

        {/* right topbar */}
        <div className='right'>
          
            
            {
              menuOpen 
              ? 
              <div className='flex flex-col w-8 h-6 justify-between cursor-pointer' onClick={()=>setMenuOpen(!menuOpen)}>
                <span className='w-full h-1 bg-slate-800'></span>
                <span className='w-full h-1 bg-slate-800'></span>
                <span className='w-full h-1 bg-slate-800'></span>
              </div>
              : 
              <CloseIcon className='flex flex-col w-8 h-6 justify-between cursor-pointer' onClick={()=>setMenuOpen(!menuOpen)}/>
            }
          </div>
        </div>


      </div>
}

export default Topbar;
