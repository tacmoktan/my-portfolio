import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
//component
import Cloud from '../components/Cloud';
import Stupa from '../components/Stupa';

const mediaWidth = 529;
const useIntroStyles = makeStyles(theme => ({

    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        height: window.innerHeight,
        marginBottom: props => -props.navbarHeight,
        paddingBottom: props => props.navbarHeight,
        background: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
        [theme.breakpoints.down(mediaWidth)]: {
            height: '100%',
            paddingTop: 60,
            justifyContent: "center"
        }
    },
    stupaContainer: {
        [theme.breakpoints.down(mediaWidth)]: {
            width: 300,
            display: 'grid',
            justifyContent: 'center',
        }
    },
    introduction: {
        zIndex: 2
    },
    picContainer: {
        margin: '0 auto',
        boxShadow: '0 0 10px 0px #3c5655',
        width: 152,
        height: 150,
        borderRadius: '50%',
        '& img': {
            borderRadius: '50%'
        },
        [theme.breakpoints.down(mediaWidth)]: {
            border: '10px solid #ccc',
            boxShadow: 'none'
        }
    },
    description: {
        '& div': {
            marginBottom: 20
        },
        '& p': {
            fontFamily: 'Righteous, cursive',
            '& i': {
                color: props => props.myTheme.palette.primary.dark,
                marginRight: 10
            },
            '& span': {
                fontFamily: 'Ubuntu Condensed, sans-serif',
            }
        },
        lineHeight: 1.5,
    },
    socialMedia: {
        '& a':{
            textDecoration:'none'
        },
        '& i': {
            fontSize: '2em'
        }
    }
}));

export default function Introduction({ navbarHeight, stupaBg, myTheme }) {

    const { root, stupaContainer, introduction, picContainer, description, socialMedia } = useIntroStyles({ navbarHeight, stupaBg, myTheme });

    const cloudProps = [
        { top: 50, right: "80%", fontSize: "3.5em", resFont: "2.5em", zIndex: 0, delay: "0s", mediaWidth: mediaWidth },
        { top: 100, right: "90%", fontSize: "7em", resFont: "5em", zIndex: 1, delay: "2.5s", mediaWidth: mediaWidth },
        { top: 100, right: "80%", fontSize: "2.5em", resFont: "1.5em", zIndex: 0, delay: "15s", mediaWidth: mediaWidth },
    ]

    const stupaProp = { stupaBg: stupaBg, width: 250, pinacleHeight: 300, hb_Height: 100, mediaWidth: mediaWidth }

    const socialMediaLinks = [
        { iconClass: 'devicon-github-plain colored', link: 'https://www.github.com/tacmoktan', color: 'black' },
        { iconClass: 'fab fa-linkedin', link: "https://www.linkedin.com/in/tacmoktan", color: '#0077B5' },
        { iconClass: 'fab fa-youtube', link: 'https://www.youtube.com/tashilamamoktan', color: 'red' }
    ]

    return (
        <>
        <div id="about" className={root}>
            <div className={stupaContainer}>
                {
                    cloudProps.map((cloudprop, i) =>
                        <Cloud key={'cloudprop_' + i} {...cloudprop} />
                    )
                }

                <Stupa {...stupaProp} />
            </div>

            <div className={introduction}>
                <div className={picContainer}>
                    <img src={require("../assets/Tashi.jpg")} alt="profile" />
                </div>
                <div className={description}>
                
                    <div style={{ textAlign: 'center' }}>
                        <h1>Hi! I'm Tashi Lama</h1>
                        <p>" A Frontend Developer "</p>
                    </div>

                    <div>
                        <p>Contact</p>
                        <p><i className="fas fa-home"></i> <span>Boudha, Kumarigal-7</span></p>
                        <p><i className="fas fa-phone"></i> <span> 9860910219 </span></p>
                        <p><i className="fas fa-envelope"></i> <span>tacmoktan@gmail.com</span></p>
                    </div>

                    <div className={socialMedia}>
                        <p>Social Medias</p>
                        <p>
                            {
                                socialMediaLinks.map((socialMedia, i) =>
                                    <a href={socialMedia.link} key={'socialMedia_' + i} target="_blank">
                                        <i className={socialMedia.iconClass} style={{color:socialMedia.color}}></i>
                                    </a>
                                )
                            }
                        </p>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}
