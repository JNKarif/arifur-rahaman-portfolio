// import React, { useState } from 'react';
// import Project from './Project';

const Projects = () => {
    // const [projects, setProjects]=useState(null)
    return (
        <div className="px-4">
            <h2 className="text-4xl mt-4 mb-2 text-center font-bold">My Projects</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2  mb-4">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
  <div className="card-body">
    <h2 className="card-title">BikeHub</h2>
    <p>Used bike buy/sell website.</p> 
    <p> Different account authentication system for buyer and seller, admin has admin dashboard where he can delete any user. Buyer/ Seller can sell or delete products, a buyer can pay and a seller can add images.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline">Details</button>
    </div>
  </div>
</div>


<div className="card w-96 bg-base-100 shadow-xl image-full">
  {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
  <div className="card-body">
    <h2 className="card-title">EduHub</h2>
    <p>Educational courses website </p>
    <p>Different kinds of courses can be purchased on this website. 
        Normal users can audit the websites but for premium access, one must be a registered member.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline">Details</button>
    </div>
  </div>
</div>


<div className="card w-96 bg-base-100 shadow-xl image-full">
  {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
  <div className="card-body">
    <h2 className="card-title">Mr. Legal Aid</h2>
    <p>Legal service review website </p>
    <p>On this website, the service user can give, edit and delete reviews.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline">Details</button>
    </div>
  </div>
</div>
            </div>

            
        </div>
    );
};

export default Projects;