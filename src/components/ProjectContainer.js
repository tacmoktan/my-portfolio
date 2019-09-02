import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Avatar, Chip } from '@material-ui/core';

const useProjectStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: "wrap",
        margin: "20px 0",
        boxShadow: "0 0 10px 0 #c1c1c1",
        width: '70vw',
        minWidth: 300,
        [theme.breakpoints.down(860)]: {
            width: '90vw'
        },
        [theme.breakpoints.down(670)]: {
            width: '50vw'
        }
    },
    projectDescription: {
        minWidth: 300,
        order: 0,
        lineHeight: 1.5,
        [theme.breakpoints.down(860)]: {
            order: 1
        }
    },
    projectImage: {
        minWidth: 300,
        order: 1,
        [theme.breakpoints.down(860)]: {
            order: 0
        }
    },
    projectAttributes: {
        margin: "10px 0",
        padding: "0px 20px",
        '& h1':{
            
            fontFamily: 'Ubuntu Condensed, sans-serif',
            //color:props=> props.myTheme.palette.primary.dark
        },

        '& div': {
            '& i': {
                fontSize: '3em'
            }
        },
        '& a': {
            textDecoration: "none"
        }
    },
    chip: {
        // cursor: "pointer",
        margin: '0 3px',
        '&:hover':{
            textDecoration:"underline"
        }
    }
}));

const ProjectContainer = ({ title, languageIcons, type, sources, myTheme }) => {

    const { root, projectDescription, projectImage, projectAttributes, chip } = useProjectStyles({myTheme});

    return (
        <ThemeProvider theme={myTheme} >
            <div className={root}>
                <div className={projectDescription}>
                    <div className={projectAttributes}>
                        <h1>Title</h1>
                        <p>{title}</p>
                    </div>
                    <div className={projectAttributes}>
                        <h1>Languages</h1>
                        <div>
                            {
                                languageIcons.map((iconClass, index) =>
                                    <i key={'icon_' + index} className={iconClass}></i>
                                )
                            }
                        </div>
                    </div>
                    <div className={projectAttributes}>
                        <h1>Type</h1>
                        <p>{type}</p>
                    </div>
                    <div className={projectAttributes}>
                        <h1>Source</h1>
                        {
                            sources.map((source, i) =>
                                <a href={source.link} key={'source_' + i}>
                                    <Chip 
                                        color="secondary"
                                        avatar={<Avatar> {source.title[0].toUpperCase()}</Avatar>}
                                        label={source.title}
                                        className={chip}
                                        variant="outlined"
                                        clickable
                                    />
                                </a>
                            )
                        }
                    </div>
                </div>
                <div className={projectImage}>
                    <img src="https://via.placeholder.com/300x300" alt="project" />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default ProjectContainer;