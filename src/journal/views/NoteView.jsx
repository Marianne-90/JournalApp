
import { Grid, Typography, Button, TextField } from "@mui/material";
import { AiFillSave } from "react-icons/ai";
import { ImageGalery } from '../components';

export const NoteView = () => {
  return (
    <Grid
      container direction='row'
      justifyContent='space-between'
      sx={{ mb: 1 }}
      alignItems='center'>
      <Grid item>
        <Typography fontSize={20} fontWeight='light'>
          28 de agosto, 2023</Typography>
      </Grid>
      <Grid item>
        <Button color='primary' sx={{ padding: 2 }}>
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
        />

        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder="What happened today"
          minRows={5}
        />
      </Grid>
      <ImageGalery />
    </Grid>
  )
}