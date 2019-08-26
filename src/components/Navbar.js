import React from 'react';

//styles
import {makeStyles} from '@material-ui/core/styles';

const useStyles = (theme) => ({

});

const Navbar = () => (
    <>
    <header id="header">
        <div id="logo">
            Tashi Lama
        </div>
        <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    </>
);

export default Navbar;