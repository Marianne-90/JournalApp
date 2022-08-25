import { useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Link as RouterLink } from 'react-router-dom';

import { Grid, Typography, TextField, Button, Link } from "@mui/material";

import { AuthLayout } from '../layout';
import { useForm } from '../../hooks';

import { chekingAuthentication, startGoogleSignIn } from '../../store';

export const LoginPage = () => {

  const { status } = useSelector(state => state.auth);

  const dispach = useDispatch();

  const { email, password, onInputChange, formState } = useForm(
    {
      email: 'mail@mail.com',
      password: '123456'
    }
  );

  const isAutenticating = useMemo(() => status === 'cheking', [status])

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispach(chekingAuthentication());
  }

  const onGoogleSignIn = () => {
    console.log('on google sign in')
    dispach(startGoogleSignIn());
  }


  return (
    <>
      <AuthLayout title='Login'>

        <form onSubmit={onSubmit} >
          <Grid container>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Mail'
                type='email'
                placeholder="mail@mail.com"
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
              /> </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Password'
                type='password'
                placeholder="Password"
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
              />

            </Grid>


          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type='submit'
                variant='contained'
                fullWidth
                disabled={isAutenticating}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignIn}
                variant='contained'
                fullWidth
                disabled={isAutenticating}>
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>


            <Grid container direction='row' justifyContent='end' sx={{ mt: 2 }}>

              <Link component={RouterLink} color='inherit' to='/auth/register'>
                Create an account
              </Link>

            </Grid>

          </Grid>
        </form>
      </AuthLayout>
    </>
  )
}