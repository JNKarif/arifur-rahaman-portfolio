



import { Link } from 'react-router-dom';
import bikehub from '../../../Assets/projects/BikeHome.png'
import eduhub from '../../../Assets/projects/eduhome.png'
import legal from '../../../Assets/projects/legalhome.png'



const Projects = () => {




    return (
        <div className="py-10 overflow-x-auto bg-gradient-to-r from-pink-300 to-purple-600 ">
            <h2 className="text-4xl  text-center font-bold">My Projects</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 py-4 gap-5 ml-8 ">


            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
  <figure><img src={bikehub} alt="Shoes" /></figure>
  <div className="card-body bg-gradient-to-r from-pink-300 to-purple-600">
    <h2 className="card-title">BikeHub</h2>
    <p>Used bike buy/sell website.</p>
    <p> Different account authentication system for buyer and seller, admin has admin dashboard where he can delete any user. 
      Buyer/ Seller can sell or delete products, a buyer can pay and a seller can add images.</p>
    <div className="card-actions justify-end">
    <Link to='/projecta'>
      <button  className="btn btn-outline">Details</button>
      </Link>
    </div>
  </div>
</div>

            {/* <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={bikehub} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">BikeHub</h2>
    <p>Used bike buy/sell website.</p> 
    <p> Different account authentication system for buyer and seller, admin has admin dashboard where he can delete any user. Buyer/ Seller can sell or delete products, a buyer can pay and a seller can add images.</p>
    <div className="card-actions justify-end">
      
      <Link to='/projecta'>
      <button  className="btn btn-outline">Details</button>
      </Link>
      
    </div>
  </div>
</div> */}



<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={eduhub} alt="Shoes" /></figure>
  <div className="card-body bg-gradient-to-r from-pink-300 to-purple-600">
    <h2 className="card-title">EduHub</h2>
    <p>Educational courses website.</p>
    <p>Different kinds of courses can be purchased on this website. 
        Normal users can audit the websites but for premium access, one must be a registered member.</p>
    <div className="card-actions justify-end">
    <Link to='/projectb'>
      <button  className="btn btn-outline">Details</button>
      </Link>
    </div>
  </div>
</div>

{/* <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={eduhub} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">EduHub</h2>
    <p>Educational courses website </p>
    <p>Different kinds of courses can be purchased on this website. 
        Normal users can audit the websites but for premium access, one must be a registered member.</p>
    <div className="card-actions justify-end">
      
      <Link to='/projectb'>
      <button className="btn btn-outline">Details</button>
      </Link>
    </div>
  </div>
</div> */}

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={legal} alt="Shoes" /></figure>
  <div className="card-body bg-gradient-to-r from-pink-300 to-purple-600">
    <h2 className="card-title">Mr. Legal Aid</h2>
    <p>Legal service review website.</p>
    <p>On this website, the service user can give, edit and delete reviews.</p>
    <div className="card-actions justify-end">
    <Link to='/projectc'>
      <button  className="btn btn-outline">Details</button>
      </Link>
    </div>
  </div>
</div>


{/* <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={legal} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Mr. Legal Aid</h2>
    <p>Legal service review website </p>
    <p>On this website, the service user can give, edit and delete reviews.</p>
    <div className="card-actions justify-end">
      <Link to='/projectc'>
      <button className="btn btn-primary">Details</button>
      </Link>
    </div>
  </div>
</div> */}
            </div>

            
        </div>
    );
};

export default Projects;