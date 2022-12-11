import React from 'react';
import { Link } from 'react-router-dom';

import arifPic from '../../../Assets/Images/Arif_HD_Banner.png'



const Banner = () => {
    return (
        <div className=''>
           <div className="hero  overflow-auto  px-5  bg-gradient-to-r from-pink-300 to-purple-600">
  <div className="hero-content flex-col lg:flex-row-reverse">


    
    <img src={arifPic} className="max-w-xl " alt=''/>
    <div>
      <h1 className="lg:text-5xl sm:text-2xl font-bold">Frontend Developer</h1>
      <p className="py-6 sm:mx-auto text-white font-bold">I am interested in freelance opportunities, <br/>onsite or remote job -  especially on ambitious
            or large projects.<br/> However, if you have any other requests <br/> or
            questions,  don't hesitate to contact me <br/>using below form either. </p>
      
      <Link to='/contactme'>

      <button className="btn btn-outline"> Contact me</button>
      </Link>
      
     
    </div>

    {/* <ul className="menu bg-base-100 rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </a>
  </li>
</ul> */}

  </div>
</div> 
        </div>
    );
};

export default Banner;