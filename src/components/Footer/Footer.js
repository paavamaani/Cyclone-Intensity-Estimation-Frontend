import React from 'react';

const Footer = () => {
  return (
    <div className='p-4 z-10 flex justify-around items-center bg-gradient-to-r from-[#080509] to-[#1a171c]'>
      <p className='text-slate-50'>© CMPE-295B Master Project II</p>
      <ul className='mr-2 flex justify-between'>
        <li className='mr-6 cursor-pointer text-slate-50 hover:text-slate-600'>
          Hurricane Intensity Estimation
        </li>
        <li className='mr-6 cursor-pointer text-slate-50 hover:text-slate-600'>
          Team Alpha
        </li>
      </ul>
    </div>
  );
};

export default Footer;
