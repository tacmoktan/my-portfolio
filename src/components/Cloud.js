import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useCloudStyles = makeStyles((theme, props) => ({
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
        top: props => props.top,
        right: props => props.right,
        fontSize: props => props.fontSize,
        zIndex: props => props.zIndex,
        animation: `$movingClouds 30s linear infinite`,
        animationDelay:props => props.delay ,
        opacity: 0,
        transition: "opacity 0.5s ease-in",
        '& i': {
            color: "#89d9d2",
        }
    }

}))

//Cloud Component
const Cloud = (props) => {

    const { cloud } = useCloudStyles(props);

    return (<div className={cloud}> <i class="fas fa-cloud"></i></div>)
}

export default Cloud;