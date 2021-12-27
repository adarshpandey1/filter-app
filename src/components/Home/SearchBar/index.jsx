import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {IconButton, Badge,makeStyles} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import MicIcon from '@material-ui/icons/Mic';
import EmailIcon from '@material-ui/icons/Email';

const useStyles =makeStyles(theme =>({
    root:{
        backgroundColor:'#fff',
       
    },
    
    searchInput:{
        opacity:'1.2',
        fontSize:'1.2rem',
        width: '60%',
        marginLeft: 'auto',
        marginRight: '0px',
        color: 'black',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        border:'1px solid black',
        paddingLeft:'15px',
        paddingRight:'5px'
    },
    toolbar:{
        paddingLeft:'5px',
        paddingRight:'5px'
    },
    searchContent:{
        width: '60%',
        maxWidth: '800px',
        margin: 'auto',
        display: 'flex',
        height:'100%',
        maxHeight:'34px'
    },
    searchButton:{
        height:'100%',
        maxHeight:'34px',
        border:'1px solid black',
        borderRadius:'0px',
        padding:'4px 15px'
    }
    
}))

export default function HeaderBar({value, changeInput})  {
    const classes =useStyles();
    return(
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
           <Grid container
           alignItems="center">
          <Grid item>
          <IconButton>
            <MenuIcon />
            </IconButton>
          
           
           </Grid >
               
               
            <Grid 
            item
            className={classes.searchContent}>
            <InputBase
              type='text'
              placeholder="Search Hotel Name"
              className={classes.searchInput}
              value={value}
              onChange={changeInput}
              
            />
             <IconButton className={classes.searchButton}>
            <SearchIcon />
            </IconButton>
            <IconButton>
            <MicIcon />
            </IconButton>
           </Grid >
            {/* <Grid item sm></Grid> */}
          <Grid>
          
          <IconButton>
                 <Badge badgeContent={4} color='secondary'>
                 <EmailIcon />
                 </Badge>
              
             </IconButton>
        
             <IconButton>
                 <Badge badgeContent={4} color='secondary'>
                 <NotificationsIcon />
                 </Badge>
              
             </IconButton>
             <IconButton>               
                 <AccountCircleIcon />
             </IconButton>
          </Grid> 
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
            
            {/* <SearchIcon className='searchBar-icon' />
            <input
              type='text'
              placeholder='search '
              value={console.log(value)}
              onChange={changeInput}
              /> */}
        
