import React from 'react'
import Post from './Post/Post'
import { makeStyles } from '@mui/styles';


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

  const classes = useStyles();
  return (
        <>
        <h1>Posts</h1>
        <Post />
        </>
    
  )
}

export default Posts