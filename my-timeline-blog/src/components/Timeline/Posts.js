import React from 'react'
import Post from './Post/Post'
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
        <>
        <h1>Posts</h1>
        <Post />
        </>
    
  )
}

export default Posts