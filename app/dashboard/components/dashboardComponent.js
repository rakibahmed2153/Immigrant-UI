import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TopBar from "@/app/dashboard/components/topBar";
import LeftSideBar from "@/app/dashboard/components/leftSideBar";


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function DashboardComponent(props) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <TopBar />
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <LeftSideBar userType={props.userType}/>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}