import { Grid, Typography } from "@mui/material";
import { AiOutlineQq } from "react-icons/ai";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        borderRadius:3,
      }}
      className='animate__animated animate__fadeIn animate__faster'
    >
      <Grid item xs={12}>
        <AiOutlineQq className='icon'/>
      </Grid>
      <Grid item xs={12} >
      <Typography color='white' variant='h5'>Create or select a note</Typography>
      </Grid>
    </Grid>
  )
}