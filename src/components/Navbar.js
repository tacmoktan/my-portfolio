import React from 'react';

//styles
import { makeStyles } from '@material-ui/core/styles';

const useNavStyles = makeStyles(theme => ({

    headerClass: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        alignItems: "center",
        height: 57,
        position: "fixed",
        width: "100%",
        fontWeight: 'bold',
        background: props => props.headerStyles.background,
        transition: 'background 0.25s ease-in',
        zIndex: 10
        /*boxShadow: "0 1px 8px 0px" */
    },
    logoClass: {
        margin: "0 auto 0 20px"
    },
    navbar: {
        '& a': {
            padding: props => props.paddingVar,
            textDecoration: "none",
            color: props => props.headerStyles.color,
            '&:hover': {
                color: props => props.myTheme.palette.primary.main
            },
            '&:nth-child(4)': {
                marginRight: "20px"
            }
        }
    }
}));


const Navbar = ({ myTheme, paddingVar, navbarHeight }) => {

    const [headerStyles, setHeaderStyles] = React.useState({
        background: "transparent",
        color: "black"
    })
    //const [headerBgColor, setHeaderBgColor] = React.useState("transparent");

    React.useEffect(() => {
        window.onscroll = () => handleScroll();
    });

    const handleScroll = () => {
        let headerBg, headerFont;
        headerBg = window.pageYOffset > navbarHeight ? myTheme.palette.secondary.main : "transparent";
        headerFont = window.pageYOffset > navbarHeight ? "white" : "black";
        setHeaderStyles({ background: headerBg, color: headerFont });
    }

    const { headerClass, navbar, logoClass } = useNavStyles({ myTheme, headerStyles, paddingVar });

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
