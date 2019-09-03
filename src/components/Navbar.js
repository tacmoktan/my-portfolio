import React from 'react';
//styles
import { makeStyles } from '@material-ui/core/styles';

const useNavStyles = makeStyles(theme => ({

    headerClass: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        alignItems: "center",
        height: props => props.navbarHeight,
        position: "fixed",
        width: "100%",
        fontWeight: 'bold',
        background: props => props.headerStyles.background,
        transition: 'background 0.25s ease-in',
        zIndex: 10,
        boxShadow: props => props.headerStyles.boxShadow,
        [theme.breakpoints.down(650)]: {
            justifyContent: 'center'
        }
    },
    logoClass: {
        margin: "0 auto 0 20px"
    },

    navlinks: {
        '& a': {
            fontFamily: 'Righteous, cursive',
            textDecoration: "none",
            textTransform: "uppercase",
            padding: props => props.paddingVar,
            color: props => props.headerStyles.color,
            '&:hover': {
                color: props => props.myTheme.palette.primary.main
            },
            marginRight: '2vw',
            [theme.breakpoints.down(650)]: {
                marginRight: 0
            },
        },
    }

}));


const Navbar = ({ myTheme, paddingVar, navbarHeight, stupaBg }) => {

    const [headerStyles, setHeaderStyles] = React.useState({
        background: "transparent",
        color: "black",
        boxShadow: "none"
    });

    React.useEffect(() => {
        window.onscroll = () => handleScroll();
    });
    //handlers
    const handleScroll = () => {
        let headerBg, headerFont, boxShadow;
        headerBg = window.pageYOffset > navbarHeight ? myTheme.palette.secondary.light : "transparent";
        headerFont = window.pageYOffset > navbarHeight ? "white" : "black";
        boxShadow = window.pageYOffset > navbarHeight ? "0 1px 5px 0 black" : "none";
        setHeaderStyles({ background: headerBg, color: headerFont, boxShadow: boxShadow });
    }

    const { headerClass, logoClass, navlinks }
        = useNavStyles({ navbarHeight, myTheme, headerStyles, paddingVar });



    return (
        <>
        <header id="header" className={headerClass} >
            {/* <div id="logo" className={logoClass} >
                <img src="https://via.placeholder.com/150x57" alt="logo" />
            </div> */}

            <nav className={navlinks}>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
            </nav>

        </header>
        </>
    );
}

export default Navbar;
