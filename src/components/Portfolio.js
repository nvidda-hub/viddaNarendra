import React, { useEffect, useState } from 'react';
import PortfolioItems from './PortfolioItems';
import PortfolioList from './PortfolioList';
import {  
        featuredPortfolio,
        webPortfolio,
        skills,
        Extra_curricular,
        Hobbies
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
                    id:"skills",
                    title:"Skills"
                  },
                  {
                    id:"extra_curricular",
                    title:"Scholastic and Extra Curricular"
                  },
                  {
                    id:"hobbies",
                    title:"Hobbies"
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
      
      case "skills":
        setData(skills);
        break;
      
      case "extra_curricular":
        setData(Extra_curricular);
        break;
      
      case "hobbies":
        setData(Hobbies);
        break;
      
      
      default:
        setData(featuredPortfolio);
      
    }

  }, [selected])
  console.log('data : ', data)

  return <div id='portfolio' className='flex flex-col items-center bg-white w-screen h-[calc(100vh_-_64px)] snap-start'>
    <h1 className='sm:text-2xl md:text-3xl  lg:text-4xl xl:text-5xl font-medium'>Portfolio</h1>
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
