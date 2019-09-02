import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


//Cloud Component
const Cloud = ({ top, right, fontSize, resFont, zIndex, delay, mediaWidth }) => {

    const useCloudStyles = makeStyles(theme => ({
        '@keyframes movingClouds': {
            '10%': { opacity: 1 },
            '90%': { opacity: 1 },
            '100%': {
                right: '0%',
                opacity: 0
            }
        },
        cloud: {
            position: "absolute",
            top: top,
            right: right,
            fontSize: fontSize,
            zIndex: zIndex,
            animation: `$movingClouds 30s linear infinite`,
            animationDelay: delay,
            opacity: 0,
            transition: "opacity 0.5s ease-in",
            '& i': {
                color: "#89d9d2",
            },
            [theme.breakpoints.down(mediaWidth)]: {
                fontSize:resFont
            }
        }

    }))

    const { cloud } = useCloudStyles();

    return <div className={cloud}> <i className="fas fa-cloud"></i></div>
}

export default Cloud;