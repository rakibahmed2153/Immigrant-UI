import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from "@/app/components/utility/footer";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation';
import { postData} from "@/app/components/api/fetchData";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [openEmailAlert, setOpenEmailAlert] = useState(false)
  const [openPassAlert, setOpenPassAlert] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Submit Sign In Button
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let email = data.get('email')
    let password = data.get('password')
    let validationCheck = handleEmptyFieldCheck(email, password)
    if(validationCheck === false){
      setOpenEmailAlert(false)
      setOpenPassAlert(false)
      signedIn().then((data)=>{
        if(data.status === 'success'){
          props.alert('success', 'Login Successful')
          console.log(data)
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('user_type', data.user_type);
          router.push('/dashboard');
        }
        else if(data.status === 'failed'){
           props.alert('error', data.message)
        }
    })} 
  };

  const handleEmptyFieldCheck = (email, password) => {
      if(email !== '' && password === ''){setOpenEmailAlert(false); setOpenPassAlert(true)}
      else if(email === '' && password !== ''){setOpenEmailAlert(true); setOpenPassAlert(false)}
      else{setOpenEmailAlert(true); setOpenPassAlert(true)}
      return email === '' || password === '';
  }

  const signedIn = async () => {
    const options = {
        email: email, password: password}
    return await postData('login/signIn', options);
  }

  return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box sx={{marginTop: 2, display: 'flex', flexDirection: 'column', alignItems: 'center',  px: 2, py: 3}}>
            <Typography style={{fontSize: '36px', fontWeight: '700', color: '#012970', fontFamily: 'Nunito, sans-serif'}}
                        component="h3" variant="h3">
              <img style={{maxHeight: '34px', marginRight: '6px'}} src="/images/logo.png" alt="Logo Image" />ImmiCan</Typography>
          </Box>
          <Box sx={{marginTop: 0, display: 'flex', flexDirection: 'column', alignItems: 'center',
              boxShadow: 3, borderRadius: 2, px: 4, py: 6}}>
            {/* --- Sign Up --- */}
            <Typography component="h1" variant="h5">Login to Your Account</Typography>
            <Typography component="p" variant="p">Enter your username & password to login</Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              {/* --- Email Address --- */}
              <TextField error={openEmailAlert} margin="normal" required fullWidth id="email" label="Email Address"
                         name="email" autoComplete="email" autoFocus value={email}
                         onChange={(e)=>setEmail(e.target.value)} />
              {/* --- Password --- */}
              <TextField
                  error={openPassAlert}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'} // Toggle between text and password
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              {/* --- Remember Me --- */}
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me"/>

              {/* --- Sign In Button --- */}
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>

              {/* --- Forgot Password --- */}
              <Grid container>
                <Grid item xs>
                  <Link style={{cursor: 'pointer'}} onClick={()=>props.setType('forgotPassword')} variant="body2">Forgot password?</Link>
                </Grid>
                {/* --- Sign Up and Registration --- */}
                <Grid item>
                  <Link style={{cursor: 'pointer'}} onClick={()=>props.setType('signUp')} variant="body2">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* --- Footer --- */}
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
  );
}