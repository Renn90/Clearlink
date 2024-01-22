import React from 'react'
import logo from '../assets/logo.png'
import { FaAngleDown } from "react-icons/fa6";
import Button from './UI/Button';

const NavBar = () => {
  const li = 'flex items-center text-xs mx-4'
  return (
    <nav className='container fixed inset-x-0 top-5 border-[1px] border-lightgrey z-[999] flex justify-between items-center bg-grey rounded-full p-4'>
      <img src={logo} alt='logo' className='w-[100px]'/>
      <ul className='flex text-darkgrey'>
        <li className={li}>Products <FaAngleDown className='mx-1 text-xs'/></li>
        <li className={li}>Solutions <FaAngleDown className='mx-1 text-xs' /></li>
        <li className={li}>Resourses <FaAngleDown className='mx-1 text-xs' /></li>
        <li className={li}>Pricing</li>
      </ul>
      <div className='flex text-xs'>
        <button className='rounded-full text-xs px-4 py-2 bg-white border-[1px] border-lightgrey mx-1'>Talk to Sales</button>
        <Button cta={'Sign up for free'}/>
      </div>
    </nav>
  )
}

export default NavBar
