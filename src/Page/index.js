import React from 'react';

//component
import Navbar from '../components/Navbar';
//section
import Introduction  from '../section/Introduction';
import Project from '../section/Project';

const SinglePage = () => (
    <>  
        <Navbar/>
        <Introduction />
        <Project />
    </>
);

export default SinglePage;
