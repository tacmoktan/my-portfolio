import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
        [theme.breakpoints.down(860)]:{
            width:'90vw'
        },
        [theme.breakpoints.down(670)]:{
            width:'50vw'
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
        padding:"0px 20px",
        /* '& h1':{
            textTransform:'uppercase'
        }, */

        '& div': {
            '& i': {
                fontSize: '3em'
            }
        }
    }
}));

const ProjectContainer = ({ title, languageIcons, type, sources }) => {

    const { root, projectDescription, projectImage, projectAttributes } = useProjectStyles();

    return (
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
                            languageIcons.map( (iconClass, index) =>
                                <i key={'icon_'+index} className={iconClass}></i>
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
                        sources.map( (source, i) => 
                            <p key={'source_'+i}><a href={source.link}>{source.title}</a></p>
                        )
                    }
                </div>
            </div>
            <div className={projectImage}>
                <img src="https://via.placeholder.com/300x300" alt="project" />
            </div>
        </div>
    );
}

export default ProjectContainer;