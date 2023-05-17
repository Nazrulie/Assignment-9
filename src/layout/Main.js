import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Stubjects from '../Components/subjects/Stubjects';
import './main.css'



const Main = () => {

    return (
        <div>
            <Header></Header>

            <Outlet></Outlet>
        </div>
    );
};

export default Main;