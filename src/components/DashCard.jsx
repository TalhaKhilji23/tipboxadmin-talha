import React from 'react';
import { ReactSVG } from "react-svg";

export default function DashCard({ title, value, icon }) {
  return (
    <div className='bg-white hover:bg-[#FFECEC] w-[210px] h-[104px] mb-4 rounded-[10px] transition-all duration-300 group flex flex-col justify-between p-4'>
      <div>
        <p className='text-[14px] font-semibold text-[#8E8E8E]'>{title}</p>
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-[26px] font-semibold'>{value}</p>
        <div className='bg-[#FFECEC] group-hover:bg-white h-11 w-11 rounded-[10px] flex justify-center items-center transition-all duration-300'>
          <ReactSVG src={icon} className="mt-1" />
        </div>
      </div>
    </div>
  );
}
