import React from 'react'
import installNode from "../assert/portfolio/installNode.jpg";
import navBar from "../assert/portfolio/navbar.jpg";
import reactParallax from "../assert/portfolio/reactParallax.jpg";
import reactSmooth from "../assert/portfolio/reactSmooth.jpg";
import reactWeather from "../assert/portfolio/reactWeather.jpg";
import todo from "../assert/portfolio/todo.png"


const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: todo,
            href:"https://todo-app-with-react-dajq.vercel.app/",
            link: "https://github.com/Momentwithace/Todo-app-with-react"
        },

        {
            id:2,
            src:installNode,
            href:"https://todo-app-with-react-dajq.vercel.app/",
            link: "https://github.com/Momentwithace/Todo-app-with-react"
        },

        {
            id:1,
            src: navBar,
            href: "https://todo-app-with-react-dajq.vercel.app" ,
            link: "https://github.com/Momentwithace/Todo-app-with-react"

        },

        {
            id:1,
            src: reactParallax,
            href: "https://todo-app-with-react-dajq.vercel.app/" ,
            link: "https://github.com/Momentwithace/Todo-app-with-react"

        },

        {
            id:1,
            src: reactSmooth,
            href: "https://todo-app-with-react-dajq.vercel.app/" ,
            link: "https://github.com/Momentwithace/Todo-app-with-react"

        },

        {
            id:1,
            src: reactWeather,
            href: "https://todo-app-with-react-dajq.vercel.app/" ,
            link: "https://github.com/Momentwithace/Todo-app-with-react"

        }
    ]

  return <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full
   text-white md:h-screen">

    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500"
            >Portfolio</p>

            <p className="py-6"
            >Check out my work right here</p>
        </div>


        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">


        {portfolios.map(({id, src, href, link}) => (
           

            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img  
                src={src} 
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                />
            <div className="flex items-center justify-center">

            <a 
            href={href}
            className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
            >Demo
            </a>

            <a 
            href={link}
            className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"

            >Code
            </a>
            </div>
            {console.log(href)}

            </div>

        ))}

        </div>

    </div>
  </div>
}

export default Portfolio