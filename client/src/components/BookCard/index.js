import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import BOOKS from '../../utils/BOOKS'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '0 1 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const BookCard = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const saveBook = () => {
    console.log(props.data)
    BOOKS.saveBook(props.data).then(response => {
      console.log(response)
      if (!response.data.errors) {
          console.log('it worked');
      } else {
        console.log('validation failed')
      }
      
  });
  }

  return (
    <Card className={classes.root}>
        <CardMedia
        className={classes.cover}
        image={props.img}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          {props.title ? (
            <Typography component="h5" variant="h5">
              {props.title.slice(0,50)}
            </Typography>
          ) : (
          <Typography component="h5" variant="h5">
            {"No Title For This Book"}
          </Typography>
          )}
          <Typography variant="subtitle1" color="textSecondary">
            {props.authors}
          </Typography>
        </CardContent>
        <div>
            {props.description ? 
            (
              <p>
              {props.description.slice(0,100)}
              </p>
            ) : (
            <p>
              {"No Description For This Book"}
             </p> 
            )

            }
        </div>
        <div>
        <Button id ={props.id} variant="contained" color="primary" onClick = {saveBook}>
          Save
        </Button>
        </div>

      </div>

    </Card>
  );
}

export default BookCard;