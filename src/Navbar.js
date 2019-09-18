import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
        flexGrow: 1,
        width:"80%"
  },
});

const NavBar = props => {
  const classes = useStyles();
  const path = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  const [value, setValue] = React.useState(path == 'animals' ? 0 :1 );

  const handleChange = (event, newValue) =>{
    setValue(newValue);
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
          >
            <Tab label="Animals" component={Link} to="/animals" />
            <Tab label="Fruit & Veg" component={Link} to="/fruitveg" />
      </Tabs>
    </Paper>
  );
}   

export default NavBar;