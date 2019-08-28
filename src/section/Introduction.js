import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";

//styles
const navbarHeight = 57;

const useIntroStyles = makeStyles(theme => ({
    root: {
        background: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 686,
        marginBottom: -navbarHeight,
        paddingBottom: navbarHeight
    },
    intro: {
        position: "absolute",
        bottom: "45%",
        left: "10%"
    }
}));

export default function Introduction() {

    const { root, intro } = useIntroStyles();

  

    return (
        <>
        <div id="about" className={root}>
            <div className={intro}>
                <h1> I am TASHI LAMA </h1>
                <p>A Frontend Developer</p>
            </div>
        </div>
        </>
    );
}
