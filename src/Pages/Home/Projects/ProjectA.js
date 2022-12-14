import React from 'react';
import bike1 from '../../../Assets/projects/bike1.png'
import bike2 from '../../../Assets/projects/bike2.png'
import bike3 from '../../../Assets/projects/bike3.png'
import bike4 from '../../../Assets/projects/bike4.png'

const ProjectA = () => {
    return (
        <div className='bg-gradient-to-r from-pink-300 to-purple-600'>
            <p className='text-3xl py-5 text-center font-extrabold'>BikeHub-Used bike buy/sell website
</p>



<div className='flex justify-center bg-gradient-to-r from-pink-300 to-purple-600 py-5'>
             
             <div className="carousel lg:w-1/2 ">
   <div id="slide1" className="carousel-item relative w-full">
     <img src={bike1} className="w-full" alt=''/>
     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
       <a href="#slide4" className="btn btn-circle">❮</a> 
       <a href="#slide2" className="btn btn-circle">❯</a>
     </div>
   </div> 
   <div id="slide2" className="carousel-item relative w-full">
     <img src={bike2} className="w-full" alt=''/>
     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
       <a href="#slide1" className="btn btn-circle">❮</a> 
       <a href="#slide3" className="btn btn-circle">❯</a>
     </div>
   </div> 
   <div id="slide3" className="carousel-item relative w-full">
     <img src={bike4} className="w-full" alt=''/>
     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
       <a href="#slide2" className="btn btn-circle">❮</a> 
       <a href="#slide4" className="btn btn-circle">❯</a>
     </div>
   </div> 
   <div id="slide3" className="carousel-item relative w-full">
     <img src={bike3} className="w-full" alt=''/>
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
                  
                    <li> •	 Different account authentication system for buyer and seller,
                        </li>
                   <li>•  Admin has admin dashboard where he can delete any user and can verify any buyer. </li>
                   <li>  • Buyer/ Seller can sell or delete products, a buyer can pay and a seller can add images.</li>
                    <li> •	Functionality: JavaScript, React, Firebase, MongoDB, Express.js, CRUD, Tailwind CSS, daisyUI, dotenv.</li>
                    <li>•	Project Duration- November 2022 to present 
                      </li>
                      <li> • <a href="https://bikehub-3a5dd.web.app/">Live Link</a>  | <a href="https://github.com/JNKarif/bikehub-client">Client-side-code</a>   | <a href="https://github.com/JNKarif/bikehub-server">Server-side-code</a>  </li>
                </ol>
            </div>

        </div>

    );
};

export default ProjectA;