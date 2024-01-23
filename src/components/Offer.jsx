import React from 'react'
import { TiTick } from "react-icons/ti";
import Button from './UI/Button';
import screen from '../assets/screenMockUp.png'
const Offer = () => {
  return (
    <div className='container flex flex-col items-center justify-between md:flex-row'>
      <div className='w-full md:w-1/2'>
        <h2 className='text-2xl font-semibold my-2'>Ready to clear the path to perfect communication?</h2>
        <p className='flex items-center my-2 text-darkgrey text-sm'><TiTick className='text-primary border-[1px] mr-2 border-primary rounded-full text-2xl p-1'/> 30 days free trial</p>
        <p className='flex items-center my-2 text-darkgrey text-sm'><TiTick className='text-primary border-[1px] mr-2 border-primary rounded-full text-2xl p-1'/> Cancel at any time</p>
        <p className='flex items-center my-2 text-darkgrey text-sm'><TiTick className='text-primary border-[1px] mr-2 border-primary rounded-full text-2xl p-1'/> Access to all features</p>
        <p className='flex items-center my-2 text-darkgrey text-sm'><TiTick className='text-primary border-[1px] mr-2 border-primary rounded-full text-2xl p-1'/> Peronalized onboarding</p>
        <div className='my-3'>
        <button className='rounded-full text-xs px-4 py-2 bg-white border-[1px] border-lightgrey mx-1'>Talk to Sales</button>
         <Button cta={'Start your free trial'}/>      
       </div>    
      </div>
        <img src={screen} alt='img' className='w-full my-5 md:my-0 md:w-[50%]'/>
    </div>
  )
}

export default Offer
