import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from "/app/components/utility/footer";
import ImmigrantSignUp from "@/app/login/immigrantSignUp";
import ProfessionalSignUp from "@/app/login/professionalSignUp";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import getLookUpData from "@/app/components/api/commonApi";
import Link from "@mui/material/Link";
const theme = createTheme();

const SignUp = (props) => {

  const [registrationTypeList, setRegistrationTypeList] = useState([])
  const [regiType, setRegiType] = useState('')

  const handleAlertChange = (type, message) =>{
    props.alert(type, message)
  }

  useEffect(() => {
    getLookUpData('4', '1').then((data)=> setRegistrationTypeList(data.data))
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box sx={{marginTop: 2, display: 'flex', flexDirection: 'column', alignItems: 'center',  px: 2, py: 3}}>
          <Typography style={{fontSize: '36px', fontWeight: '700', color: '#012970', fontFamily: 'Nunito, sans-serif'}}
                      component="h3" variant="h3">
          <img style={{maxHeight: '34px', marginRight: '6px'}} src="/images/logo.png" alt="Logo Image" />ImmiCan</Typography>
        </Box>
        <Box sx={{marginTop: 0, display: 'flex', flexDirection: 'column', alignItems: 'center',
          boxShadow: 3, borderRadius: 2, px: 4, py: 6}}>

          {/* --- Registration Type --- */}
          <Typography component="h1" variant="h5">Create an Account</Typography>
          <Typography component="p" variant="p">Enter your personal details to create account</Typography>
          <Box component="form" noValidate sx={{ mt: 3 }} style={{width: '100%'}}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Registration Type *</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select"
                        value={regiType} label="Registration Type * "
                        onChange={(event) => setRegiType(event.target.value)}>
                  {registrationTypeList.map((item, key) =>
                      <MenuItem key={key} value={item.levelData}>{item.levelData}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
          </Box>

          {regiType === 'Immigrant'?
              // Immigrant Sign Up
              <ImmigrantSignUp setType={props.setType} regiType={regiType} handleAlertChange={handleAlertChange}/>
              :
              regiType === 'Professional'?
              // Professional Sign Up
              <ProfessionalSignUp regiType={regiType} handleAlertChange={handleAlertChange} /> :null

          }

          {/* --- Sign In Option ---*/}
          <Grid container justifyContent="flex-end" style={{marginTop:'5px'}}>
            <Grid item>
              <Link style={{cursor: 'pointer'}} onClick={() => props.setType('signIn')} variant="body2">Already have
                an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>

        {/* ---- Footer ----- */}
        <Copyright sx={{mt: 5}}/>

      </Container>
    </ThemeProvider>
  );
}
export default SignUp;