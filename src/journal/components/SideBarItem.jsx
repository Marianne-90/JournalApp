import {ListItem, ListItemButton, ListItemIcon, Grid, ListItemText} from "@mui/material";
import { AiOutlineFileText } from "react-icons/ai";
import { useMemo } from 'react';
import { useDispatch }  from 'react-redux';
import { setActiveNote } from '../../store';

export const SideBarItem = ({ title, body, id, imageUrls=[], date }) => {

  const dispatch = useDispatch();
  
  const activeNote= {
id,
title,
imageUrls,
body,
date
    }

  const onsetActiveNote = () => {

   dispatch(setActiveNote(activeNote));
    
  }

  
  const newTitle = useMemo( () => {
    return title.length > 17
      ? title.substring(0,17) +'...'
      : title;
  }, [ title ]);
  
  return (
    <ListItem disablePadding > 
                  <ListItemButton onClick={ onsetActiveNote }>
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