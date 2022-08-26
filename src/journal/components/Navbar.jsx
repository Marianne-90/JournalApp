import { useDispatch } from 'react-redux';
import { AppBar, Toolbar, IconButton, Grid, Typography } from "@mui/material";
import { AiOutlineMenu, AiOutlineLogout } from "react-icons/ai";
import { startLogout } from '../../store/auth';

export const Navbar = ({drawerWidth = 240}) => {
  const dispatch = useDispatch();
  const onLogout  = () => {
    dispatch( startLogout() );
  }

  
  return (
    <AppBar 
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)`},
        ml:{sm: `${drawerWidth}px`}
      }}>
      <Toolbar>
        <IconButton 
          color='inherit'
          edge='start'
          sx={{mr:2, display:{sm:'none'}}}>
          <AiOutlineMenu/>
        </IconButton>

        <Grid container 
          direction='row' justifyContent='space-between' 
          alignItems='center'>
              <Typography variant='h6' 
                noWrap component='div'>JournalApp</Typography>

          <IconButton onClick={onLogout} color='error' edge='end'>
            <AiOutlineLogout/>
          </IconButton>
          
        </Grid>
        
      </Toolbar>
    </AppBar>
  )
}