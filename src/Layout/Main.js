import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar className="sticky top-0 z-50"></NavBar>
            <Outlet className="relative"></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;