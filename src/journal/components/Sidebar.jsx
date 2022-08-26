import { useSelector } from 'react-redux';
import {Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText} from "@mui/material";
import { AiOutlineFileText } from "react-icons/ai";

export const Sidebar = ({drawerWidth = 240}) =>{

  const { displayName } = useSelector(state => state.auth);
  
  return (
    <Box
      component='nav'
      sx={{
        width:{sm:drawerWidth},
        flexShrink:{sm:0}
      }}>
      <Drawer 
        variant="permanent" 
        open
        sx={{
          display:{xs:'block'},
          '& .MuiDrawer-paper':{boxSizing: 'border-box', width: drawerWidth}
        }}>
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            {displayName}
          </Typography>
        </Toolbar>
        <Divider/>
        <List>
          {
            ['Enero', 'Febrero','Marzo', 'Abril'].map(
              text => (
                <ListItem key={text} disablePadding> 
                  <ListItemButton>
                    <ListItemIcon> 
                      <AiOutlineFileText/>
                    </ListItemIcon>
                    <Grid>
                      <ListItemText primary={text} /> 
                      <ListItemText secondary={'this is a description'} />
                    </Grid>
                  </ListItemButton>
                </ListItem>)
            )
          }
        </List>
      </Drawer>
    </Box>
    )
}