import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        background: props => props.rootBg,
        paddingTop: props => props.navbarHeight,
        marginTop: props => -props.navbarHeight,
        paddingBottom:60
    },
    title: {

        minWidth: 300,
        fontSize: "1.5em",
        '& div': {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        "& h1": {
            margin: "0 10px",
            fontFamily: 'Righteous, cursive',
            textTransform: "uppercase",
            fontSize: '2em'
        },
        '& i': {
            color: props => props.myTheme.palette.secondary.main
        },
        '& p': {
            width: '100%',
            textAlign: 'center',
            fontFamily: 'Ubuntu Condensed, sans-serif'
        }
    }
}))

export default useStyles;