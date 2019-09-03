import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';
import { ThemeProvider } from '@material-ui/styles/';

//component
import ProjectContainer from '../../components/ProjectContainer';
import projectDescription from './ProjectDescription';
//styles
import useStyles from '../styles';

const useProjectStyles = makeStyles(theme => ({
    projects: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    viewMore: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
        fontSize: '1.5rem',
        '& h1': {
            fontFamily: 'Ubuntu Condensed, sans-serif',
        },
        '& a': {
            textDecoration: "none",
            color: 'white'
        }
    }
}));

const Project = ({ navbarHeight, myTheme }) => {

    const rootBg = "linear-gradient(to bottom, #fddb92 0%, #d1fdff 100%)";
    const { root, title } = useStyles({ rootBg, navbarHeight, myTheme });
    const { projects, viewMore } = useProjectStyles();

    return (
        <ThemeProvider theme={myTheme}>
            <section id="projects" className={root}>
                <div className={title}>
                    <div>
                        <i className="fas fa-tasks"></i>
                        <h1>Projects</h1>
                        <i className="fas fa-tasks"></i>
                    </div>
                    <p>Some projects I've worked on</p>
                </div>
                <div className={projects}>
                    {
                        projectDescription.map((description, i) =>
                            <ProjectContainer key={'project_' + i} {...description} myTheme={myTheme} />
                        )
                    }
                </div>
                <div className={viewMore}>
                    <h1>VIEW MORE ?</h1>
                    <Button variant="contained" color="secondary" >
                        <a href="../../assets/CV/Tashi_Lama_Resume.pdf" download> Download CV </a>
                    </Button>
                </div>
            </section>
        </ThemeProvider>
    );
}

export default Project;