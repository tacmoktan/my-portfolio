import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
//component
import Cloud from '../components/Cloud';
import Stupa from '../components/Stupa';

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
    stupaContainer: {

    }

}));

export default function Introduction({ navbarHeight, stupaBg }) {

    const { root, stupaContainer } = useIntroStyles({ navbarHeight, stupaBg });

    return (
        <>
        <div id="about" className={root}>
            <div className={stupaContainer}>
                <Cloud top={50} right="80%" fontSize="3.5em" zIndex={0} delay="0s" />
                <Cloud top={100} right="90%" fontSize="7em" zIndex={1} delay="2.5s" />
                <Cloud top={100} right="80%" fontSize="2.5em" zIndex={0} delay="15s" />

                <Stupa stupaBg={stupaBg} width={250} pinacleHeight={300} hb_Height={100}/>
            </div>

            <div>
                <h1>Hi! I'm Tashi Lama</h1>
                <p>A Frontend Developer</p>
            </div>
        </div>
        </>
    );
}
