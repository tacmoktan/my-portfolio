import React from 'react';

//styles
import { makeStyles } from '@material-ui/core/styles';


//style variables
let paddingVar= 20;
const useNavStyles = makeStyles(theme => ({
    headerClass: {
        display: "flex",
        justifyContent:"flex-end",
        alignItems:"center",
        height:57,
        position:"fixed",
        width:"100%",/* 
        boxShadow: "0 1px 8px 0px" */
    },
    logoClass:{
        margin:"0 auto 0 20px"
    },
    navbar:{
        '& a':{
            padding:paddingVar,
            textDecoration:"none",
            color:"black",
            '&:hover':{
                color:"white"
            },
            '&:nth-child(4)':{
                marginRight:"20px"
            }
        }
    }
}));

const Navbar = () => {

    const { headerClass, navbar, logoClass } = useNavStyles();

    return (
        <>
        <header id="header" className={headerClass}>
            <div id="logo" className={logoClass} >
                Logo
            </div>
            <nav className={navbar}>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        </>
    );
}

export default Navbar;
