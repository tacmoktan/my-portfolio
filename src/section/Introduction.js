import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";

//styles
const navbarHeight = 57;

const useIntroStyles = makeStyles(theme => ({
    '@keyframes animate': {
        '0%': {
            height: 0,      //h=90,w=150 best for 43.5% arc borderRadius
            width: 60,
        },
        '50%': {
            height: 250,
            borderRadius: '25%'
        },
        '100%': {
            height: "100%",
            width: "100%",
            borderRadius: 0
        }
    },
    root: {
        background: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 686,
        marginBottom: -navbarHeight,
        paddingBottom: navbarHeight
    },
    root2: {
        background: "#6F2A3C",
        borderRadius: "50%",
        marginBottom: navbarHeight,
        paddingBottom: navbarHeight,
        animation: '$animate 5s ease-in',
        animationFillMode: "forwards",
    },
    intro: {
        position: "absolute",
        bottom: "45%",
        left: "10%"
    },
    switchButton: {
        position: "absolute",
        bottom: "30.5%",            //43.5 for h=80, w=80
        minWidth: 80,
        minHeight: 80,
        background: "#00d5ec",
        boxShadow: "0 0 10px 10px #1b9fbd",
        borderRadius:"50%",
        cursor: "grab",
        width:"15vw",
        height:"15vw"
    },

}));


let countClick = 0;

export default function Introduction() {

    const { root, intro, root2, switchButton } = useIntroStyles();

    function handleClick() {


    }

    return (
        <>
        <div id="about" className={root}>
            <div class={root2}>
            </div>
            <div onClick={handleClick} className={switchButton}>
            </div>
            <div className={intro}>
                <h1> I am TASHI LAMA </h1>
                <p>An aspiring Frontend Developer</p>
            </div>
        </div>
        </>
    );
}
