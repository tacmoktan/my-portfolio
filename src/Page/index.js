import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
//component
import Navbar from '../components/Navbar';
//section
import Introduction from '../section/Introduction';
import Project from '../section/Project/';


const myTheme = createMuiTheme({
    palette: {
        primary: {
            //main: '#AAA139',      //light, dark, contrast will be calculated from palette.primary.main
            main: '#db7093'
        },
        secondary: {
            main: '#4D2D73'
        }
    }
});
//style variables
const styleVar = {
    myTheme,
    paddingVar: 20,
    navbarHeight: 57,
}

const SinglePage = () => (
    <>
    <Navbar {...styleVar} />
    <Introduction {...styleVar} />
    <Project {...styleVar} />
    </>
);

export default SinglePage;
