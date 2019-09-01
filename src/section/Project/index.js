import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//component
import ProjectContainer from '../../components/ProjectContainer';

import projectDescription from './ProjectDescription';


const useProjectStyles = makeStyles(theme => ({
    root: {
        background: "linear-gradient(to bottom, #fddb92 0%, #d1fdff 100%)",
        //height: window.innerHeight,     //innerHeight;
        paddingTop: props => props.navbarHeight,
        marginTop: props => -props.navbarHeight,
    },
    title: {
        
        minWidth: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5em",
        "& h1": {
            margin: "0 10px",
            fontFamily:'Righteous, cursive',
            textTransform:"uppercase",
            fontSize:'2em'
        },
        '& i':{
            color:props => props.myTheme.palette.primary.main
        }
    },
    projects: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }
}));

const Project = ({ navbarHeight, myTheme }) => {

    const { root, title, projects } = useProjectStyles({ navbarHeight, myTheme });

    return (
        <section id="projects" className={root}>
            <div className={title}>
                <i className="fas fa-tasks"></i><h1>Projects</h1><i className="fas fa-tasks"></i>
            </div>
            <div className={projects}>
                {
                    projectDescription.map((description, i) =>   
                        <ProjectContainer key={'project_' + i} {...description} myTheme={myTheme} /> 
                    )
                }
            </div>
        </section>
    );
}

export default Project;