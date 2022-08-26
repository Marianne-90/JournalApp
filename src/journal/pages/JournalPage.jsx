import { IconButton } from '@mui/material';
import {JournalLayout} from '../layout';  
import { NothingSelectedView, NoteView }from '../views';
import { AiOutlinePlus } from "react-icons/ai";
import { StartNewNote } from '../../store';
import { useDispatch, useSelector }  from 'react-redux'
export const JournalPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector(state => state.journal);
  
  const onClickNewNote = () => {
    dispatch(StartNewNote() );
  };
  
  return (
    <JournalLayout> 
      
   {!active ?<NothingSelectedView/> : <NoteView/>}
      
  <IconButton
    disabled = {isSaving}
    onClick={ onClickNewNote }
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