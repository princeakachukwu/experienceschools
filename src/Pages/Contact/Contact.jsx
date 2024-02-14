// import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <div className="mx-auto py-4 flex gap-3 flex-col items-center justify-center bg-white h-auto lg:pt-40 lg:pb-6 box-border lg:relative ">
      <div className="flex flex-wrap flex-col md:flex-row w-full lg:w-[70vw]  gap-2 items-center justify-center lg:absolute lg:top-4">
        <div className="bg-lightBlue w-96 lg:flex-1 flex flex-col items-center justify-center lg:justify-start h-[180px] p-4 cursor-pointer">
          <FaLocationDot className="text-darkBlue text-4xl mb-3" />
          <h1 className="w-full text-darkBlue font-bold flex justify-center hover:text-textOrange">CAMPUSSES</h1>
          <h1 className="text-darkBlue flex items-center justify-center w-full font-bold hover:underline hover:text-textOrange">38 Emelogu Street</h1>
          <h1 className="text-darkBlue flex items-center justify-center w-full font-bold hover:underline hover:text-textOrange ">169 Opobo Road, Ovom 1</h1>
          <h1 className="text-darkBlue w-full flex items-center justify-center font-bold hover:underline hover:text-textOrange">4 Egege Street, Ogbor.</h1>
        </div>
        <div className="bg-lightBlue w-96 lg:flex-1 flex flex-col items-center justify-start h-[180px] p-4 cursor-pointer">
          <IoCall className="text-darkBlue text-4xl mb-3" />
          <h1 className="w-full text-darkBlue font-bold flex justify-center hover:text-textOrange">PHONE NUMBERS</h1>
          <h1 className="w-full text-darkBlue font-bold flex justify-center hover:text-textOrange hover:underline">+2348039387345</h1>
          <h1 className="w-full text-darkBlue font-bold flex justify-center hover:text-textOrange hover:underline">+2348032543732</h1>
          <h1 className="w-full text-darkBlue font-bold flex justify-center hover:text-textOrange hover:underline">+2348056628345</h1>
        </div>
        <div className="bg-lightBlue w-96 lg:flex-1 flex flex-col items-center justify-start h-[180px] p-4 box-border cursor-pointer">
          <MdEmail className="text-darkBlue text-4xl mb-3"  />
          <h1 className="w-full text-darkBlue font-bold flex justify-center hover:text-textOrange">EMAIL</h1>
          <h1 className="w-full text-darkBlue font-bold flex justify-center text-center hover:underline hover:text-textOrange">experienceacademy <br /> @yahoo.com</h1>
        </div>
        <div className="bg-lightBlue w-96 lg:flex-1 flex flex-col items-center justify-start h-[180px] p-4 box-border cursor-pointer">
          <IoShareSocial className="text-darkBlue text-4xl mb-3"  />
          <h1 className="w-full text-darkBlue font-bold flex justify-center hover:text-textOrange">SOCIAL MEDIA</h1>
          <figure className="flex gap-2 items-center justify-center">
            <NavLink to="https://www.youtube.com/@experienceacademytv9500" target='blank'> <BsYoutube className="text-red-500 text-2xl " /> </NavLink>
            <NavLink to="https://www.youtube.com/@experienceacademytv9500" target='blank'> <figcaption className=" text-sm w-full text-darkBlue font-bold flex justify-center text-center hover:underline hover:text-textOrange">Experience Academy Tv</figcaption> </NavLink>
          </figure>
          <figure className="flex gap-2 items-center justify-center">
            <NavLink to="https://web.facebook.com/profile.php?id=100053946435834" target='blank'><FaFacebookSquare className="text-darkBlue text-2xl mb-3"  /></NavLink>
            <NavLink to="https://web.facebook.com/profile.php?id=100053946435834" target='blank'><figcaption className=" text-xs w-full text-darkBlue font-bold flex justify-center text-center hover:underline hover:text-textOrange">Experience International Schools Aba</figcaption></NavLink>

          </figure>
        </div>
      </div>
      <div className="bg-darkBlue w-96  md:w-full lg:w-[40vw] h-[60vh] lg:h-[95vh] flex gap-3 flex-col items-center justify-center  box-border">
        <h1 className="text-lightBlue text-3xl font-bold">CONTACT US</h1>
        <form action="" className="flex items-center justify-center flex-col gap-4 w-[80%]">
          <input type="text" placeholder="Enter Your Name" className="block bg-white w-full p-2 rounded-sm border-none outline-none" />
          <input type="email" placeholder="Enter a valid Email" className="block bg-white w-full p-2 rounded-sm outline-none border-none" />
          <textarea name="" id="" rows="10" placeholder="Write us a message" className="bg-white rounded-sm w-full p-2 border-none outline-none"></textarea>
          
          <button className="p-2 bg-lightBlue w-32 rounded-md text-white hover:bg-textOrange hover:font-bold hover:shadow-xl">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact