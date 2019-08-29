import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";

//styles
const navbarHeight = 57;
const stupaBg = "linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)";

const useIntroStyles = makeStyles(theme => ({
    '@keyframes movingClouds':{
        '10%':{
            opacity:1
        },
        '100%':{
            left:'80%',        
            opacity:0
        }
    },

    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: window.innerHeight,
        marginBottom: -navbarHeight,
        paddingBottom: navbarHeight,
        background: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
    },
    pinacle: {
        height: 300,
        width: 250,
        background: stupaBg,
        clipPath: "polygon(50% 0, 70% 15%, 58% 30%, 100% 100%, 0 100%, 42% 30%, 30% 15%)"
    },
    head: {
        clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
        background: stupaBg,
        height: 100,
        width: 250,
        margin: "5px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    body: {
        height: 100,
        //clipPath:"polygon(20% 0%, 80% 0%, 100% 20%, 100% 100%, 0 100%, 0% 20%);",
        clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
        background: stupaBg
    },
    stupa: {
        '& i': {
            color: "#89d9d2",
            fontSize: "3em",
            position: "absolute",
            animation:"$movingClouds 30s linear infinite",
            left:-20,
            opacity:0,
            transition:"opacity 0.5s ease-in"
        }
    },
    
}));

export default function Introduction() {

    const { root, pinacle, head, body, stupa } = useIntroStyles();

    return (
        <>
        <div id="about" className={root}>
            <div className={stupa}>
                <i class="fas fa-cloud"></i>
                <div className={pinacle}>
                </div>
                <div className={head}>
                </div>
                <div className={body}>
                </div>
            </div>

            <div>
                <h1>Hi! I'm Tashi Lama</h1>
                <p>A Frontend Developer</p>
            </div>
        </div>
        </>
    );
}
