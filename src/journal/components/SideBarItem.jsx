import {ListItem, ListItemButton, ListItemIcon, Grid, ListItemText} from "@mui/material";
import { AiOutlineFileText } from "react-icons/ai";
import { useMemo } from 'react';

export const SideBarItem = ({ title, body, id }) => {

  const newTitle = useMemo( () => {
    return title.length > 17
      ? title.substring(0,17) +'...'
      : title;
  }, [ title ]);
  
  return (
    <ListItem disablePadding > 
                  <ListItemButton>
                    <ListItemIcon> 
                      <AiOutlineFileText/>
                    </ListItemIcon>
                    <Grid>
                      <ListItemText primary={newTitle} /> 
                      <ListItemText secondary={body} />
                    </Grid>
                  </ListItemButton>
                </ListItem>
  )
}