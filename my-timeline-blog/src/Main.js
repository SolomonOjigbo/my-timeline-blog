import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Posts from './components/Timeline/Posts';
import Form from './components/Form/Form';
import timelineimage from './images/timelineimage.png';


// const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
		display: 'flex'
	},
    appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)'
  },
  image: {
    marginLeft: '5px'
  }
}));


export const Main = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit" >
        <Typography className={classes.heading} variant="h3" align="center" >My Timeline</Typography>
        <img className={classes.image} src={timelineimage} alt='icon' height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing="3" >
              <Grid item xs={12} sm={7}>
                 <Posts  />
              </Grid>
              <Grid item xs={12} sm={7}>
                <Form  />
              </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  )
}
