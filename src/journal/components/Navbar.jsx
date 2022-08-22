import { AppBar, Toolbar, IconButton, Grid, Typography } from "@mui/material";
import { AiOutlineMenu, AiOutlineLogout } from "react-icons/ai";


export const Navbar = ({drawerWidth = 240}) => {
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

          <IconButton color='error' edge='end'>
            <AiOutlineLogout/>
          </IconButton>
          
        </Grid>
        
      </Toolbar>
    </AppBar>
  )
}