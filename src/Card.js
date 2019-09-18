import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from './Dialog'
import { is } from '@babel/types';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 300,
        margin: '10px',
  },
 
}));

const ImgCard = props => {
    const classes = useStyles();
    const [isDialogOpen, toggleIsDialogOpen] = React.useState(false);

    const handleToggle = () =>  toggleIsDialogOpen((lastVal) => !lastVal);
    return (
    <Card className={classes.card} onClick={handleToggle}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.Title}
          height="140"
          image={props.ImageURLs.Thumb}
          title={props.Title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.Title}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
                Family: {props.Family}
            </Typography>      
            <Typography variant="body2" color="textSecondary" component="p">
            {props.Description}
            </Typography>
        </CardContent>
        {isDialogOpen ? <Dialog isDialogOpen {...props} onClose={handleToggle} /> : ''}
      </CardActionArea>
    </Card>
  );
}

export default ImgCard;