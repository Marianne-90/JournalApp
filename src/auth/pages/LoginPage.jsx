import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout'


export const LoginPage = () => {
  return (
    <>
<AuthLayout title='Login'>

<form>
      <Grid container>

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
        <Grid item xs={12} sm={6}>
          <Button variant='contained' fullWidth>
            Login
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant='contained' fullWidth>
            <Typography sx={{ ml: 1 }}>Google</Typography>
          </Button>
        </Grid>


        <Grid container direction='row' justifyContent='end' sx={{ mt: 2 }}>

          <Link component={RouterLink} color='inherit' to='/auth/register'>
            Crear una cuenta
          </Link>

        </Grid>

      </Grid>
    </form>
</AuthLayout>
</>
  )
}