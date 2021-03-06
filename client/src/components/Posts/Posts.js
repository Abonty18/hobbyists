import React from 'react';
import { Grid, CircularProgress,createMuiTheme, ThemeProvider  } from '@material-ui/core';
import { useSelector } from 'react-redux';
import blog from '../../images/Blogging (3).gif';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  const theme = createMuiTheme({

    typography: {fontSize: 14,
      fontFamily: [
      

      'Roboto Condensed', 
      'sans-serif'
      ].join(','),
    }

  });

  if (!posts.length && !isLoading) return 'No posts to show :(';
 
  return (
   
    isLoading ? <CircularProgress /> : (
      <ThemeProvider theme={theme}>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
      </ThemeProvider>
    )
  );
};

export default Posts;
