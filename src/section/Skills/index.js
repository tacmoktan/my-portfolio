import React from 'react';
//styles
import useStyles from '../styles';
import { makeStyles } from '@material-ui/core/styles';
//data
import skillsDescription from './SkillsDescription';
const useSkillStyles = makeStyles(theme => ({
    skills: {
        flexDirection: 'column',
        display: 'flex',
    },
    skillType: {
        margin: '20px auto',
        textAlign: 'center',
        '& h1': {
            fontFamily: 'Ubuntu Condensed, sans-serif'
        },
        '& div': {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            width: '55vw',
            marginTop:10,
            [theme.breakpoints.down(900)]:{
                width:'90vw'
            }
        },
        '& i': {
            margin:5,
            fontSize: '3rem'
        }
    },
}))

export default ({ navbarHeight, myTheme }) => {

    const rootBg = "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)";
    const { root, title } = useStyles({ rootBg, navbarHeight, myTheme })

    const { skills, skillType } = useSkillStyles();
    return (
        <section id="skills" className={root}>
            <div className={title}>
                <div>
                    <i className="fas fa-tasks"></i>
                    <h1>Skills</h1>
                    <i className="fas fa-tasks"></i>
                </div>
                <p>Some skills I acquire</p>
            </div>
            <div className={skills}>
                <div className={skillType}>
                    <h1>MAJOR</h1>
                    <div>
                        {
                            skillsDescription.major.map((skill, i) =>
                                <i className={skill.iconClass} key={'major_' + i}></i>
                            )
                        }
                    </div>

                </div>
                <div className={skillType}>
                    <h1>BASIC</h1>
                    <div>
                        {
                            skillsDescription['basic'].map((skill, i) =>
                                <i className={skill.iconClass} key={'major_' + i}></i>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}