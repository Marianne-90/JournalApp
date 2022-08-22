
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout'


export const RegisterPage = () => {
  return (
    <>
<AuthLayout title='Register'>

<form>
      <Grid container>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label='Full Name'
            type='text'
            placeholder="enter your full name"
            fullWidth
          /> </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label='Mail'
            type='email'
            placeholder="mail@mail.com"
            fullWidth
          /> </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label='Password'
            type='password'
            placeholder="Password"
            fullWidth
          />
        </Grid>


      </Grid>

      <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
        <Grid item xs={12} >
          <Button variant='contained' fullWidth>
            Create Account
          </Button>
        </Grid>

        <Grid container direction='row' justifyContent='end' sx={{ mt: 2 }}>
          <Typography sx={{mr:1}}> Are you already registered? </Typography>
          <Link component={RouterLink} color='inherit' to='/auth/login'>
            Login
          </Link>

        </Grid>

      </Grid>
    </form>
</AuthLayout>
</>
  )
}
