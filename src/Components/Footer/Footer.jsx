// import React from 'react'
import { NavLink } from 'react-router-dom'
import FooterLogo from '../../assets/IMAGES/EXPERIENCE footer LOGO.png';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoCall } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-darkBlue min-h-[70vh] w-full flex flex-col md:flex-row gap-5 items-center lg:items-start justify-between text-white p-8 md:p-16 box-border ">
      <div className='socials flex flex-col gap-10 md:gap-5 box-border items-start w-[45%]  h-[100%]'>
        <NavLink to={'/'} className='lg:flex w-full hidden  items-center justify-center md:h-[25vh] pt-5 box-border ' > <img src={FooterLogo} alt="Logo white" className='logo-flip flex items-center justify-center w-[300px] md:w-[200px] ' /></NavLink>
        {/* <img src={FooterLogo } alt="School logo"  />  */}
        <p className='text-3xl md:text-lg text-justify'> <span className='text-textOrange'> Experience International School, Aba. </span> A citadel of learning committed to setting high expectations and standards for learners.  </p>
        <div className='flex gap-4'>
          <FaFacebookF className='text-3xl md:text-2xl text-lightBlue' />
          <BsTwitter className='text-3xl md:text-2xl text-lightBlue'  />
          <FaWhatsapp className='text-3xl md:text-2xl text-lightBlue'  />
          <CiYoutube className='text-3xl md:text-2xl text-lightBlue'  />
          <BsInstagram className='text-3xl md:text-2xl text-lightBlue'  />
        </div>
      </div>
      <div className='mx-auto w-full md:ps-6  gap-6 box-border flex flex-col  justify-start items-center md:w-[25%]  h-[100%]'>
          <h1 className=' w-full text-xl text-lightBlue'>SITE MAP</h1>
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex gap-4  items-center justify-start w-full '>
              <IoIosArrowForward  className='text-lightBlue md:text-textOrange text-lg  ' />
              <h1 className='text-3xl md:text-lg '> <NavLink to={"/"}>Home</NavLink> </h1>
            </div>
            <div className='flex gap-4 items-center justify-start w-full '>
              <IoIosArrowForward className='text-lightBlue md:text-textOrange text-lg h-[100%]'  />
              <h1 className='text-3xl md:text-lg '> <NavLink to={"/About"}> About </NavLink> </h1>
            </div>
            <div className=' flex gap-4 items-center justify-start w-full '>
              <IoIosArrowForward className='text-lightBlue md:text-textOrange text-lg h-[100%]'  />
              <h1 className='text-3xl md:text-lg '>Campuses</h1>
            </div>
            <div className='flex gap-4 items-center justify-start w-full '>
              <IoIosArrowForward className='text-lightBlue md:text-textOrange text-lg h-[100%]' />
              <h1 className='text-3xl md:text-lg '> <NavLink to={"/Programs"}> Programs</NavLink> </h1>
            </div>
            <div className='flex gap-4 items-center justify-start w-full '>
              <IoIosArrowForward className='text-lightBlue md:text-textOrange text-lg h-[100%]' />
              <h1 className='text-3xl md:text-lg '> <NavLink to={"/Staff"}> Staff</NavLink> </h1>
            </div>
            <div className='flex gap-4 items-center justify-start w-full  '>
              <IoIosArrowForward className='text-lightBlue md:text-textOrange text-lg h-[100%]' />
              <h1 className='text-3xl md:text-lg '> <NavLink to={"/Blog"}> Blog </NavLink> </h1>
            </div>
          </div>
      </div>
      <div className='w-full mx-auto  gap-6 box-border flex flex-col  justify-start items-start md:items-center md:w-[25%]  h-[100%]'>
        <h1 className='text-xl text-lightBlue'>Contact Us</h1>
        <div className='flex gap-5 items-center  '>
          <IoCall className=' h-[100%] text-lg text-lightBlue ' />
          <p className='text-3xl md:text-lg ' >+2348039387345 <br />+2348032543732</p>
        </div>
      </div>
      <div className='w-full md:w-[55%] hidden bg-lightBlue h-[50vh] lg:flex items-start justify-center'>Google map</div>
    </div>
  )
}

export default Footer