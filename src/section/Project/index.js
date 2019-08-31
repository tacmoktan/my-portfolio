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
            margin: "0 10px"
        }
    },
    projects: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }
}));

const Project = ({ navbarHeight }) => {

    const { root, title, projects } = useProjectStyles({ navbarHeight });

    return (
        <section id="projects" className={root}>
            <div className={title}>
                <i className="fas fa-project-diagram"></i><h1>Projects</h1><i className="fas fa-project-diagram"></i>
            </div>
            <div className={projects}>
                {
                    projectDescription.map((description, i) => {
                        return <ProjectContainer key={'project_' + i} {...description} />
                    })
                }
            </div>
        </section>
    );
}

export default Project;