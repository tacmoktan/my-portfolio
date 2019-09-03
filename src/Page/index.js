import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
//component
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//section
import Introduction from '../section/Introduction';
import Projects from '../section/Projects/';
import Skills from '../section/Skills';

const myTheme = createMuiTheme({
    palette: {
        primary: {
            //main: '#AAA139',      //light, dark, contrast will be calculated from palette.primary.main
             //'#db7093',
            main:'#89d9d2'
        },
        secondary: {
            main:'#800080'//'#E91E63' //'#d9c694' '#4D2D73'
        }
    },
    //to override Avatar styles after the site is being deployed
    overrides:{
        //StyleSheet name
        MuiAvatar:{
            //rule name
            colorDefault:{
                color:"white",
                backgroundColor:'#800080'
            },
            root:{
                width:32,
                height:32,
                fontSize:'1rem'
            }
        },
    }
});
//style variables
const styleVar = {
    myTheme,
    paddingVar: 20,
    navbarHeight: 90,   //prev 57
    stupaBg:"linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)"
}

const SinglePage = () => (
    <>
    <Navbar {...styleVar} />
    <Introduction {...styleVar} />
    <Projects {...styleVar} />
    <Skills {...styleVar} />
    <Footer {...styleVar}/>
    </>
);

export default SinglePage;
