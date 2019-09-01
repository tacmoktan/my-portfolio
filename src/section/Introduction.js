import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
//component
import Cloud from '../components/Cloud';


const useIntroStyles = makeStyles(theme => ({

    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        height: window.innerHeight,
        marginBottom: props => -props.navbarHeight,
        paddingBottom: props => props.navbarHeight,
        background: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
    },
    pinacle: {
        height: 300,
        width: 250,
        background: props => props.stupaBg,
        clipPath: "polygon(50% 0, 70% 15%, 58% 30%, 100% 100%, 0 100%, 42% 30%, 30% 15%)"
    },
    head: {
        clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
        background: props => props.stupaBg,
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
        clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
        background: props => props.stupaBg
    },
    stupa: {

    }

}));

export default function Introduction({ navbarHeight, stupaBg }) {

    const { root, pinacle, head, body, stupa } = useIntroStyles({ navbarHeight, stupaBg });

    return (
        <>
        <div id="about" className={root}>
            <div className={stupa}>
                <Cloud top={50} right="80%" fontSize="3.5em" zIndex={0} delay="0s" />
                <Cloud top={100} right="90%" fontSize="7em" zIndex={1} delay="2.5s" />
                <Cloud top={100} right="80%" fontSize="2.5em" zIndex={0} delay="15s" />

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
