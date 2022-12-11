import React from 'react';
import edu1 from '../../../Assets/projects/eduhub1.png'
import edu2 from '../../../Assets/projects/eduhub2.png'
import edu3 from '../../../Assets/projects/eduhub3.png'


const ProjectB = () => {
    return (
        <div className=' bg-gradient-to-r from-pink-300 to-purple-600'>
          <p className='text-3xl py-5 text-center '>EduHub-Educational courses website
</p>     
       
        <div className='flex justify-center py-5 bg-gradient-to-r from-pink-300 to-purple-600'>
             
            <div className="carousel lg:w-1/2 ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={edu1} className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={edu2} className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={edu3} className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
        </div>

        <div className='px-10 pb-10'>
                <ol className='text-xl text-center font-bold'>
                    <li>
                        
                    •	Summary: Different kinds of courses can be purchased on this website. Normal users can audit the websites but for premium access, one must be a registered member.





                    </li>
                    <li> •	Functionality: JavaScript, React, Bootstrap, React Bootstrap, Vercel, React icon, Context API, React router dom, Github Login, Google login.</li>
                    
                    <li>•	Project Duration- October 2022 | <a href="https://eduhub-6899a.web.app/">Live-Link</a>  | <a href="https://github.com/JNKarif/edu-hub-client">Client-side-code</a>  | <a href="https://github.com/JNKarif/edu-hub-server">Server-side-codes</a>  </li>
                </ol>
            </div>

        </div>
    );
};

export default ProjectB;