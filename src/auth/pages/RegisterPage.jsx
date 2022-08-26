import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material";
import { AuthLayout } from '../layout'
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store'


  const formData = {
     email: '',
     password: '',
     displayName:''
  }

  const formValidations = {
    email:[(value)=>value.includes('@'),'The mail must hava an @'],
    password:[(value)=>value.length >=6,'The password must have more than 6 digits'],
    displayName:[(value)=>value.length >=1,"name can´t be empty"],
  }
 
export const RegisterPage = () => {

  const dispatch= useDispatch();
  
  const [ formSubmited, setFormSubmited] = useState(false);

  const {status, errorMessage} = useSelector(state => state.auth);
  
  const isChekingAuthentication = useMemo(()=> status==='cheking',[status]);
  
  const { formState, displayName, email, password, onInputChange, 
          isFormValid, displayNameValid, emailValid, passwordValid, 
        } = useForm(formData,formValidations);

  
  
   const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmited(true);
     
    if(!isFormValid)return;
     
    dispatch(startCreatingUserWithEmailPassword(formState) );
  }
  
  return (
    <>
<AuthLayout title='Register'>

<form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
      <Grid container>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label='Full Name'
            type='text'
            placeholder="enter your full name"
            fullWidth
            name='displayName'
            value={ displayName }
            onChange={ onInputChange }
            error={!!displayNameValid && formSubmited}
            helperText={displayNameValid }
          /> </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label='Mail'
            type='email'
            placeholder="mail@mail.com"
            fullWidth
            name='email'
            value={ email }
            onChange={ onInputChange }
            error={!!emailValid && formSubmited}
            helperText={emailValid}
          /> </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label='Password'
            type='password'
            placeholder="Password"
            fullWidth
            name='password'
            value={ password }
            onChange={ onInputChange }
            error={!!passwordValid && formSubmited}
            helperText={passwordValid}
          />
        </Grid>


      </Grid>
  
      <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

        <Grid item xs={12} display={!!errorMessage?'':'none'}>
        <Alert severity='error'>
          { errorMessage }
        </Alert>
        </Grid>
        
        <Grid item xs={12} >
          <Button type='submit' variant='contained' fullWidth disabled={isChekingAuthentication}>
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
