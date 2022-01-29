import React, { useEffect, useState } from 'react';
import PortfolioItems from './PortfolioItems';
import PortfolioList from './PortfolioList';
import {  
        featuredPortfolio,
        webPortfolio,
        whatsappPortfolio,
        amazonPortfolio,
        djangoECommercePortfolio
} from "./PortfolioDynamicData";

function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
                  {
                    id:"featured",
                    title:"Featured"
                  },
                  {
                    id:"web",
                    title:"Web Apps"
                  },
                  {
                    id:"w_clone",
                    title:"WhatsApp Clone using MERN Stack"
                  },
                  {
                    id:"a_clone",
                    title:"Amazon Clone using MERN Stack"
                  },
                  {
                    id:"voice_assistant",
                    title:"Voice Assistant using Python"
                  },
                  {
                    id:"e_com_django",
                    title:"E-Commerce Webpage Using Django"
                  },
            ]

  useEffect(()=>{

    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      
      case "web":
        setData(webPortfolio);
        break;
      
      case "w_clone":
        setData(whatsappPortfolio);
        break;
      
      case "a_clone":
        setData(amazonPortfolio);
        break;
      
      case "voice_assistant":
        setData(amazonPortfolio);
        break;
      
      case "e_com_django":
        setData(djangoECommercePortfolio);
        break;
      
      
      default:
        setData(featuredPortfolio);
      
    }

  }, [selected])
  console.log('data : ', data)

  return <div id='portfolio' className='flex flex-col items-center bg-white w-screen h-[calc(100vh_-_64px)] snap-start'>
    <h1 className='text-5xl font-medium'>Portfolio</h1>
    <ul className='m-2 p-0 list-none flex'>
      {list.map(item => {

        return <PortfolioList isActive={selected === item.id} id={item.id} title={item.title} setSelected={setSelected}/>
      })}
      
      
    </ul>
      <div className='w-8/12 flex flex-wrap items-center justify-center'>
        
        {/* portfolio items */}
        {data.map(d => {
          return <PortfolioItems itemDetail = {d}/>;
        })}
        
      </div>
    </div>;
}

export default Portfolio;
