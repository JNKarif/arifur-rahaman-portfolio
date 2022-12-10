import React from 'react';
import { Link } from 'react-router-dom';

import arifPic from '../../../Assets/Images/Arif_HD_Banner.png'



const Banner = () => {
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={arifPic} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 className="text-5xl font-bold">Frontend Developer</h1>
      <p className="py-6 sm:mx-auto">I am interested in freelance opportunities - <br/> especially on ambitious
            or large projects.<br/> However, if you have any other requests <br/> or
            questions,  don't hesitate to contact me <br/>using below form either. </p>
      
      <Link to='/contactme'>

      <button className="btn btn-outline"> Contact me</button>
      </Link>
     
    </div>
  </div>
</div> 
        </div>
    );
};

export default Banner;