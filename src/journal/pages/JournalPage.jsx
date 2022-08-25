import { IconButton } from '@mui/material';
import {JournalLayout} from '../layout';  
import { NothingSelectedView, NoteView }from '../views';
import { AiOutlinePlus } from "react-icons/ai";

export const JournalPage = () => {
  return (
    <JournalLayout>
   <NothingSelectedView/>
  <IconButton
    size='medium'
    sx={{
      color: 'white',
      backgroundColor:'error.main',
      ':hover':{backgroundColor: 'error.main', opacity: 0.9},
      position:'fixed',
      right:50,
      bottom:50
    }}>
    <AiOutlinePlus/>
  </IconButton>

    </JournalLayout>
  )
}