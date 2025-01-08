/* eslint-disable no-unused-vars */
import React from 'react'
import BgImage from "../../assets/bg-slate.png"
import BlackCoffe from "../../assets/black.png"

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgrounRepeat: "no-repeat",
};

const Hero = () => {
    return (
        <main style={bgImage}>
            <section className='min-h-[750px] w-full'>
                <div className="container">
                    {/*Navbar Section*/}
                    
                    {/*Hero Section*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
                        {/* text content section */}
                        <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                            <h1 className='text-5xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
                            <div className='relative'>
                                <div className='relative z-10 space-y-4'>
                                    <h1 className='text-2xl'>Black Lifestyle Lovers,</h1>
                                    <h1 className='text-sm opacity-55 leading-loose'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing 
                                        elit. Ad mollitia eos sequi nihil magni tempore rerum, 
                                        animi ut aut voluptatum saepe in tenetur veritatis? 
                                        Quibusdam dolor commodi incidunt consequuntur natus!
                                    </h1>
                                </div>
                                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
                            </div>
                        </div>
                    
                        {/* hero Image section */}
                        <div className="relative">
                            <img 
                                src={BlackCoffe} 
                                alt="" 
                                className='relative z-40 h-[500px] md:h[800px] img-shadow'
                            />
                            {/* orange ring circle */}
                            <div className="h-[180px] w-[180px] absolute top-24 -rigth-16 border-primary border-[20px] rounded-full z-10"></div>
                            <div>
                                <h1 className="text-[140px] scale-150 
                                font-bold text-darkGray/40 leading-none">
                                    Blvck Tumbler
                                </h1>
                            </div>

                        {/* third div section */}
                        <div></div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Hero
