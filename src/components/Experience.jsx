import React from 'react'
import html from '../assert/html.png';
import css from '../assert/css.png';
import javascript from '../assert/javascript.png';
import reactImage from '../assert/react.png';
import nextjs from '../assert/nextjs.png';
import graphql from '../assert/graphql.png';
import github from '../assert/github.png';
import mongodb from '../assert/mongodb-logo.jpg';
import java from '../assert/java-logo.jpg'
import mysql from '../assert/mysql-logo-text.jpg'
import postgresql from '../assert/postgresql-logo.jpg'
import python from '../assert/python-language-logo.jpg'
import tailwind from '../assert/tailwind.png';

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: java,
            title: "JAVA",
            style: "shadow-orange-500"
        },

        {
            id: 2,
            src: python,
            title: "PYTHON",
            style: "shadow-blue-500"
        },

        {
            id: 3,
            src: mongodb,
            title: "MONGOD",
            style: "shadow-yellow-500"
        },

        {
            id: 4,
            src: reactImage,
            title: "REACTIMAGE",
            style: "shadow-blue-600"
        },

        {
            id: 5,
            src: nextjs,
            title: "NEXTJS",
            style: "shadow-white"
        },

        {
            id: 6,
            src: graphql,
            title: "GRAPHQL",
            style: "shadow-gray-400"
        },

        {
            id: 7,
            src: github,
            title: "GITHUB",
            style: "shadow-blue-500"
        },

        {
            id: 8,
            src: tailwind,
            title: "TAILWIND",
            style: "shadow-sky-400"
        }
    ]

  return (
    <div name="experience"
    className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">

    <div className="max-w-screenlg mx-auto p-4 flex flex-col justify-center 
    w-full h-full text-white"> 

            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                    Experience
                </p>
                <p className="py-6">
                    These are the technologies I've worked with.
                </p>
            </div>

            <div className="w-full grid grid-cols-2 sm;grid-cols-3 gap-8 text-center py-8
            px-2 sm:px-0">

                {techs.map(({id, src, title, style}) =>(
                     <div key={id} 
                     className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                     <img src={src} alt="" className="w-20 mx-auto"/>
                     <p className="mt-4">{title}</p>
                 </div>

                )
                )}

        
            </div>

        </div>

    </div>
  ) 
}

export default Experience