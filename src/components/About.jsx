import React from 'react'

const About = () => {
  return (
    <div name="about" 
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About Me
                </p>
            </div>
            <p className="text-xl mt-20">
                My name's Ace, I'm 28, currently living in Lagos State, West-Africa Nigeria.
                I'm a Software Engineer, prior to my journey into Software Engineering, I own
                own a Business of my own here in Lagos, That's been on for years.
                My quest for impact and love towards Innovation, drove me into Tech.
                as i find it fascinitating to be part of the an Ecosystem,
                That's built and structure for the purpose of technology enhancement and
                the development Software applications, that would serve as solution and to
                to human needs and the ecosystem at large. 
                   
            </p>

            <p className='text-xl mt-5'>
                My journey into Software Engineering as been an Amazing one so far, its not just
                a Career path for me, it's considered a way of life, as the daily challenges as not 
                just helped me as a developer, but also it as contributed greatly to my life in general.
            </p>

            <p className='text-xl mt-5'>
                There's seldom a boring day in the life of a software developer. Every day there's 
                a new problem to solve and something new to learn. The field is evovling and changing
                every year so there are endless amount of lessons to learn and puzzle to solve.

                With every project you get the opportunity to work on, you learn a little bit more,
                about the world through its different industries. From my work experiences so far, 
                I have had the opportunity to learn more about industries such as health care, sales,
                banking, grant writing, and the entertainment industry.
                I look forward to having the opportunity to work with many
                more companies and adding more value to the world through my work.
            </p>

            <br/>

            <p className="text-xl mt-20">
                 Started first by writing java - unit testing, test driving development (TDD), alongside MySQL
                (workbench) for database queries.
                Later added python few months down the line, started writing spring frameworks for java,
                django framworks for python and had to add web and other languages for frontend which i started first
                with Html and CSS.
                Also added javascript, react and building my software engineering skills on agile and design princples
                has really made the journey so fun
                and currently vibing on these languages and more adding to the list... 
               
            </p>
        </div>
    </div>
  )
}

export default About