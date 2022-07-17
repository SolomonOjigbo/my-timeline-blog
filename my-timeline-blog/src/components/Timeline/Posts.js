import React from 'react'
import Post from './Post/Post'
import { Grid, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts)
  return (
        !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post}  />
          </Grid>
        ))}
      </Grid>
    
  )
  )
}

export default Posts