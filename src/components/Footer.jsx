import React from 'react'
import { Link } from 'react-scroll'
import {BsFileArrowUpFill} from "react-icons/bs"
import {AiFillCopyrightCircle} from "react-icons/ai"

const Footer = () => {
  return (
    <div name="footer"
    className="bg-gradient-to-b from-gray-800 to-black text-white flex flex-col 
    justify-center items-center "
    >     
         <div class="map-container">
                    <h2
                    className="text-xl mt-20 pb-5"
                    >My Location</h2>
                    <iframe 
                    title='myframe'
                    className=''
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.
                    1195228155516!2d3.378466199999999!3d6.5065513!2m3!1f0!2f0!3f0!3m2!1i1024
                    !2i768!4f13.1!3m3!1m2!1s0x103b8c5f6e28522b%3A0x34bb7fdf47960f07!
                    2s312%20Herbert%20Macaulay%20Way%2C%20Sabo%20yaba%20101245%2C%20Lagos!5e0
                    !3m2!1sen!2sng!4v1660305168618!5m2!1sen!2sng" 
                   ></iframe>
                </div>


                <div class="contact-me-box">
                <div 
                className="text-xl mt-20 pb-5 pt-5"
                class="contact-details">
                    <h3>312 Herbert Macualay Way</h3>
                    <h3>Lagos, 101245</h3>
                    <h3> Nigeria</h3>
                    <h3>augustineezekiel763@gmail.com</h3>
                    <h3>+2349035122224</h3>
                </div>
                </div>

        <div>
        <p className="text-xl mt-20 pb-5">
                Human Engineering, Before Software Engineering
            </p>
           
        </div>

        <div>
                <Link to="home"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2
                flex items-center rounded-md bg-gradient-to-r from-cyan-500
                to-blue-50o cursor-pointer"
                >
                    Home
                    <span className="group-hover:up duration-300">
                    <BsFileArrowUpFill size={25} 
                    className="ml-1  animate-bounce w-6 h-6"/>
                    </span>
                </Link>
        </div>

        <div className="content-center">
            
               <p className="text-white w-fit px-6 py-10 mt-10 flex items-center"> 
               <div>
                  <h1 className='text-5xl font-signature ml-2 pr-3' >Ace</h1>
                </div>
               <span className="pr-2">
                    <AiFillCopyrightCircle size={25} 
                    className="ml-1"/>
                    </span>
                2022 All Right Reserved</p>
               
        </div>

         </div>
  )
}

export default Footer