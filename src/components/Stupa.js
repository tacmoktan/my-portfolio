import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

export default ({ stupaBg, width, pinacleHeight, hb_Height }) => {

    const responsive = {
        width: width - 80,
        pinacleHeight: pinacleHeight - 50,
        hb_Height: hb_Height - 50
    }

    //since styles are declared within the component so, props are used as variables directly
    const useStupaStyles = makeStyles(theme => ({
        pinacle: {
            height: pinacleHeight,           //300
            width: width,
            background: stupaBg,
            clipPath: "polygon(50% 0, 70% 15%, 58% 30%, 100% 100%, 0 100%, 42% 30%, 30% 15%)",
            [theme.breakpoints.down(650)]: {
                height: responsive.pinacleHeight,
                width: responsive.width
            }
        },
        head: {
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
            background: stupaBg,
            height: hb_Height,     //100
            width: width,
            margin: "5px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down(650)]: {
                height: responsive.hb_Height,
                width: responsive.width
            }
        },
        body: {
            height: hb_Height,
            clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
            background: stupaBg,
            [theme.breakpoints.down(650)]: {
                height: responsive.hb_Height
            }
        },
    }));

    const { pinacle, head, body } = useStupaStyles();

    return (
        <>
        <div className={pinacle}>
        </div>
        <div className={head}>
        </div>
        <div className={body}>
        </div>
        </>
    );
}