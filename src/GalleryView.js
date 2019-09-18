import React, {
    useEffect
} from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImgCard from './Card';

const useStyles = makeStyles(theme =>({
    root: {
        flexGrow: 1,
        width: "80%"
    },
    control: {
        padding: theme.spacing(2),      
    },
}));

const GalleryView = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState();
    useEffect(() => {
        fetch('http://styleguide.effectivedigital.com/interview/api/' + props.match.url)
            .then(response => response.json())
            .then((myJson) => {
                setValue(()=>(myJson))
            })
    }, [props.match.url]);
    return (
        <Grid container className={classes.root}>
        <Grid item xs={12}>
                <Grid container justify="center"> {value && value.map(animalData => <ImgCard {...animalData} />)} 
                </Grid>
            </Grid>
            </Grid>
    );
}

export default GalleryView;