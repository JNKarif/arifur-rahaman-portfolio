import React from 'react';
import legal1 from '../../../Assets/projects/legal1.png'
import legal2 from '../../../Assets/projects/legal2.png'
import legal3 from '../../../Assets/projects/legal3.png'
const ProjectC = () => {
    return (
        <div className='bg-gradient-to-r from-pink-300 to-purple-600'>
            <p className='text-3xl py-5 text-center font-extrabold'>Mr.Legal Aid-Service review website </p>

            <div className='flex justify-center py-5 bg-gradient-to-r from-pink-300 to-purple-600'>

                <div className="carousel lg:w-1/2 ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={legal2} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={legal1} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={legal3} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>

            <div className='px-10 pb-10'>
            <p className='text-2xl text-center font-extrabold'>Project summary</p>
                <ol className='text-xl text-center font-bold'>
                   <li>•On this website, user can buy any legal service</li>
                    <li>                  
                    •  The service user can give, edit and delete reviews
                   </li>
                    <li> •		Functionality: JavaScript, React, Tailwind CSS, daisyUI, Vercel, JWT, Context API, React router dom, MongoDB</li>
                    
                    <li>•	Project Duration- November 2022 to present
                        </li>
                        <li>• <a href="https://assignment-11-45242.web.app/">Live-Link</a>  | <a href="https://github.com/JNKarif/Mr.-Legal-Aid-Client">Client-side-code</a>  | <a href="https://github.com/JNKarif/Mr.-Legal-Aid-Server">Server-side-codes</a>  </li>
                </ol>
            </div>
        </div>
    );
};

export default ProjectC;