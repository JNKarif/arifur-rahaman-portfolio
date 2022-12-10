import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../../Assets/Resume/Arifur_Rahaman_Resume.pdf'

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 py-3">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case lg:text-3xl ">Arifur Rahaman</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {/* <li><Link to='/resume' disabbled>Blog</Link></li> */}
            {/* <li tabIndex={0}>
              <Link>
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </Link>
              <ul className="p-2 bg-base-100">
                <li><Link>Submenu 1</Link></li>
                <li><Link>Submenu 2</Link></li>
              </ul>
            </li> */}
            <li> <button className="btn btn-outline">

<a href={resume} download={resume}>
  Download Resume
</a>
</button> </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;