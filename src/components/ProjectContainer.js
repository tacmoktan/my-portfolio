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
        minWidth: 300,
        [theme.breakpoints.down(865)]: {
            width: 446
        },
        [theme.breakpoints.down(500)]: {
            width: 300
        }
    },
    projectDescription: {
        minWidth: 300,
        order: 0,
        lineHeight: 1.5,
        padding: "20px 0",
        [theme.breakpoints.down(865)]: {
            order: 1
        }
    },
    projectImage: {
        minWidth: 300,
        width: 546,                         //width of all images
        height: 366,
        order: 1,
        overflow: 'hidden',
        [theme.breakpoints.down(865)]: {    //project container becomes vertical
            order: 0,
            width: 'inherit',               //inherits from root
            height: 250
        },
        '& div': {
            backgroundSize: 'cover',
            height: "100%",
            transition: 'all 5s linear',
            '&:hover': {
                backgroundPosition: 'bottom'
            },
            [theme.breakpoints.down(865)]: {
                transitionDuration: '3s'
            }
        }
    },
    projectAttributes: {
        margin: "10px 0",
        padding: "0px 20px",
        '& h1': {
            fontFamily: 'Ubuntu Condensed, sans-serif',
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
        margin: '0 3px',
        '&:hover': {
            textDecoration: "underline"
        }
    }
}));

const ProjectContainer = ({ title, languageIcons, type, sources, imageUrl, myTheme }) => {

    const { root, projectDescription, projectImage, projectAttributes, chip } = useProjectStyles({ myTheme });

    return (
        <ThemeProvider theme={myTheme}>
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
                                <a href={source.link} key={'source_' + i} target="_blank">
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
                    {/* <img src={imageUrl} alt="project" />  */}
                    <div style={{ backgroundImage: `url(${imageUrl})` }}>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default ProjectContainer;