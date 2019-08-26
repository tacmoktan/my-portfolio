import React from 'react';
//styles
import { makeStyles } from '@material-ui/core/styles';

const navbarHeight = 57;
const useProjectStyles = makeStyles(theme => ({
    root:{
        background:"skyblue",
        height:629,     //innerHeight;
        paddingTop:navbarHeight,
        marginTop:-navbarHeight
    }
}));

const Project = () => {

    const {root}  = useProjectStyles();

    return (
        <div id="projects" className={root}>
            <h1>Projects</h1>
        </div>
    );
}

export default Project;