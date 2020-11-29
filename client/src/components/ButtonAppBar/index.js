import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { withRouter} from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  root: {
  },
  menuButton: {
  },
  title: {
    display: "flex",
    flexGrow: 1,
  },
  headerOptions: {
    display: "flex",
    flexgrow: 1,
    '& > *': {
      margin: theme.spacing(1),
    },
  },

}));

const MenuAppBar = (props) => {
  const {history} = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  console.log(isMobile)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick= (url) => {
    history.push(url)
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Book Search
          </Typography>
            { isMobile ? (
            <>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={handleMenu}
            >
            <MenuIcon/>
          </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => handleClick('/')}>Search</MenuItem>
                <MenuItem onClick={() => handleClick('/savedbooks')}>Saved Books</MenuItem>
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button size="small" variant="outlined" onClick={() => handleClick('/')}>Search</Button>
              <Button size="small" variant="outlined" onClick={() => handleClick('/savedbooks')}>Saved Books</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(MenuAppBar);