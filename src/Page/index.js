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
            //main: '#4D2D73'
            main:'#d9c694'
        }
    }
});
//style variables
const styleVar = {
    myTheme,
    paddingVar: 20,
    navbarHeight: 57,
    stupaBg:"linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)"
}

const SinglePage = () => (
    <>
    <Navbar {...styleVar} />
    <Introduction {...styleVar} />
    <Project {...styleVar} />
    </>
);

export default SinglePage;
