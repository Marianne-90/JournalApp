import { useMemo, useEffect, useRef } from 'react';
import { Grid, Typography, Button, TextField, IconButton } from "@mui/material";
import { AiFillSave } from "react-icons/ai";
import { ImageGalery } from '../components';
import { useForm } from '../../hooks';
import { useSelector, useDispatch } from 'react-redux'
import { setActiveNote, startSaveNote, startUploadingFiles, startDeletingNote} from '../../store'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { AiOutlineUpload, AiFillDelete } from "react-icons/ai";





export const NoteView = () => {

  const dispatch = useDispatch();
  
  const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
  const { body, title, onInputChange, formState, date } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const onDelete = () => {
    dispatch( startDeletingNote() );
  }
  
useEffect(()=>{
  
dispatch(setActiveNote(formState))
  
},[formState]);


  useEffect(()=>{
  

  if( messageSaved.length > 0 ){
    Swal.fire('updated note', messageSaved,'success')
  }
    },[messageSaved]
  )

  const onSaveNote = () => {
    dispatch(startSaveNote())
  };

  const onFileInputChange = ({ target }) => {
    if( target.files === 0 ) return; 
    dispatch( startUploadingFiles( target.files ) )
  }

const fileInputRef = useRef();


  
  return (
    <Grid
      container direction='row'
      justifyContent='space-between'
      sx={{ mb: 1 }}
      alignItems='center'
      className='animate__animated animate__fadeIn animate__faster'>
      <Grid item>
        <Typography fontSize={20} fontWeight='light'>
          {dateString}</Typography>
      </Grid>
      <Grid item> 

        <input
          type='file'
          multiple
          onChange={ onFileInputChange }
          style={{display:'none'}}
          ref={ fileInputRef }
        />

        <IconButton 
          disabled = { isSaving }
          color='primary'
          onClick={ ()=> fileInputRef.current.click() }
          >
          <AiOutlineUpload/>
        </IconButton>
        
        <Button 
          color='primary'
          sx={{ padding: 2 }}
          onClick={ onSaveNote }
          disabled = { isSaving }>
          <AiFillSave className='AiFillSave' />
          Save
        </Button>
      </Grid>
      <Grid container>

        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Enter a new title'
          label='Title'
          sx={{ border: 'none', mb: 1 }}
          name='title'
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder="What happened today"
          minRows={5}
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid >

      <Grid container justifyContent='end'>
        <Button
          onClick={ onDelete }
          sx = {{ mt:2 }}
          color='error'>
            < AiFillDelete style={{marginRight:'5px', fontSize:'20px'}}/> 
           Borrar
        </Button> 
      </Grid>
      
      <ImageGalery images={ note.imageUrls } />
    </Grid>
  )
}