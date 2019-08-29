import React from 'react';

//styles
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#AAA139',      //light, dark, contrast will be calculated from palette.primary.main
        },
        secondary: {
            main: '#4D2D73'
        }
    }
});

//style variables
let paddingVar = 20;
const navbarHeight = 57;

const useNavStyles = makeStyles((theme, props) => ({
    
    headerClass: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: 57,
        position: "fixed",
        width: "100%",
        fontWeight: 'bold',
        background: props => props.headerBgColor,
        transition: 'background 0.25s ease-in'
        /* 
        boxShadow: "0 1px 8px 0px" */
    },
    logoClass: {
        margin: "0 auto 0 20px"
    },
    navbar: {
        '& a': {
            padding: paddingVar,
            textDecoration: "none",
            color: "black",
            '&:hover': {
                color: myTheme.palette.primary.main
            },
            '&:nth-child(4)': {
                marginRight: "20px"
            }
        }
    }
}));


const Navbar = (props) => {

    const [headerBgColor, setHeaderBgColor] = React.useState("transparent");

    React.useEffect(() => {
        window.onscroll = () => handleScroll() ;
    });

    const handleScroll = () => {
        let headerColor;
        headerColor = window.pageYOffset > navbarHeight ? myTheme.palette.secondary.main : "transparent";
        setHeaderBgColor(headerColor);
    }

    const { headerClass, navbar, logoClass } = useNavStyles({headerBgColor});

    return (
        <header id="header" className={headerClass} >
            <div id="logo" className={logoClass} >
                <img src="https://via.placeholder.com/150x57" alt="logo" />
            </div>
            <nav className={navbar}>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Navbar;
