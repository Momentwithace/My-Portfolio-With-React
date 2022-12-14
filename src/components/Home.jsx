import React from "react"
import Image from "../assert/portfolio/laptop.jpg"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { Link } from 'react-scroll'
// import { FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black
     via-black  to-gray-800">

     <div className="max-w-screen-lg mx-auto flex flex-col items-center
      justify-center h-full px-4 md:flex-row  ">

        <div className="flex flex-col justify-center h-full mt-20 mr-40 ">
            <h2 className="text-4xl sm:text-7xl font-bold text-white
            ">
                My name is Ace. I'm a Software Engineer.
            </h2>
            <p className="text-gray-500 py-4 max-w-xl">
                With over 2years of working and contributing greatly to the Tech Ecosystem,
                am happy to say have inquiped myself with great knowledge and skill needed, 
                to influence the growth of technology and innovation, throw building and 
                development of scalable softwares.
            </p>
            <p className="text-gray-500 py-4 max-w-md">
            I've worked with great technologies, like Java, Python, Mysql, PosTgresl alongside frameworks
            like Sprinboot, Django, FastApi. 
            </p>
            <p  className="text-gray-500 py-4 max-w-md" >
            I have little knowledge of Mobile Development, working with Koltin and Flutter.
            </p>

            <div>
                <Link to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2
                flex items-center rounded-md bg-gradient-to-r from-cyan-500
                to-blue-50o cursor-pointer"
                >
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} 
                    className="ml-1"/>
                    </span>
                </Link>
            </div>
        </div>
        <div>
            <img src={Image} 
            alt="my profile " 
            className="rounded-2xl mx-auto w-2/3 md:w-full mt-10"/>
        </div>
     </div>
    </div>
  )
}

export default Home