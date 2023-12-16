import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const CityNav = () => {
    const [onmouseOver,setOnMouseOver]=useState(false);
  const cityName = [
    {
       id:1,
       name:"Bangalore",
       upward:<MdOutlineKeyboardArrowUp/>,
       downward:<MdOutlineKeyboardArrowDown />
    },
    {
        id:2,
        name:"Chennai",
        upward:<MdOutlineKeyboardArrowUp/>,
        downward:<MdOutlineKeyboardArrowDown />
    },
    {
        id:3,
        name:"Delhi",
        upward:<MdOutlineKeyboardArrowUp/>,
        downward:<MdOutlineKeyboardArrowDown />
    },
    {
        id:4,
        name:"Gurgaon",
        upward:<MdOutlineKeyboardArrowUp/>,
        downward:<MdOutlineKeyboardArrowDown />
    },
    {
        id:5,
        name:"Hyderabad",
        upward:<MdOutlineKeyboardArrowUp/>,
        downward:<MdOutlineKeyboardArrowDown />
    },
    {
        id:6,
        name:"Kolkata",
        upward:<MdOutlineKeyboardArrowUp/>,
        downward:<MdOutlineKeyboardArrowDown />
    },
    {
        id:7,
        name:"Mumbai",
        upward:<MdOutlineKeyboardArrowUp/>,
        downward:<MdOutlineKeyboardArrowDown />
    },
    {
        id:8,
        name:"Noida",
        upward:<MdOutlineKeyboardArrowUp/>,
        downward:<MdOutlineKeyboardArrowDown />
    },
    {
        id:9,
        name:"Pune",
        upward:<MdOutlineKeyboardArrowUp/>,
        downward:<MdOutlineKeyboardArrowDown />
    },
    {
        id:10,
        name:"All Cities",
    },
  ];

  const onMouseOverHandler = (id)=>{
    // console.log("MouseOverHandler",id)
    setOnMouseOver(prev=>!prev)
  }
  const onMouseLeaveHandler = (id)=>{
    // console.log("MouseDownHandler",id)
    setOnMouseOver(prev=>!prev)
  }
  return (
    <div className="w-100 h-100 bg-slate-200 relative py-2 px-12 ">
      <div className="flex items-center justify-between gap-4" >
      {
        cityName.map((item)=>{
            return(
              <div key={item.id} className="font-light flex gap-2 items-center justify-center cursor-pointer" onMouseLeave={()=>onMouseLeaveHandler(item.id)} onMouseOver={()=>onMouseOverHandler(item.id)} >
                <span>{item.name}</span>
                {
                    onmouseOver ? <span>{item.upward}</span> :<span>{item.downward}</span> 
                }
              </div>
            )
        })
      }
      </div>
    </div>
  );
};

export default CityNav;
