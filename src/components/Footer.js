import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useFooterStyles = makeStyles(theme => ({
    root: {
        background: props => props.myTheme.palette.secondary.main,
        color: "white",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "1px 0 5px 0 black",
        '& div':{   
            fontFamily: "Righteous, cursive"
        }
        
    }
}))

const Footer = ({ myTheme }) => {

    const { root } = useFooterStyles({ myTheme });

    return (
        <footer className={root}>
            <div> &copy; All Rights Reserved 2019</div>
        </footer>
    );
}
export default Footer;