import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import CustomInput from '../../components/input-field/CustomInput';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Header from '../../Container/header/Header';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Baaj Group
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {
  return (
    <>
      <Header login={false} />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <AccountCircleIcon color='primary' style={{ fontSize: 160, marginTop: 4 }} />
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h3">
                  Login
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputLabel htmlFor="username">User name</InputLabel>
                <CustomInput
                  required
                  id="username"
                  name="username"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="component-simple">Email</InputLabel>
                <CustomInput
                  required
                  id="email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              disableElevation
              size='large'
              variant="contained"
              color='secondary'
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Typography variant="h6" align='center'>OR</Typography>
            <Button
              type="submit"
              fullWidth
              disableElevation
              size='large'
              variant="contained"
              color='primary'
              sx={{ mt: 3, mb: 2 }}
            >
              Login with Baaj 
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}