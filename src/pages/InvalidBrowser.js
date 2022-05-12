import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const InvalidBrowser = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ height: '100vh', width: '100vw' }}>
      <Grid 
        container 
        spacing={5}
        direction='column'
        justifyContent='center'
        height='100%'
        width='100%'
        sx={{
          '& img': {
            maxWidth: 150
          }
        }}
      >
        <Grid item>
          <Typography variant='h4'>Tu navegador no es compatible con está página, descargue alguna de estas opciones:</Typography>
        </Grid>
        <Grid item container spacing={4} alignItems='center'>
          <Grid
            item
            component='a'
            href='https://www.google.com/intl/es-419/chrome/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='http://assets.stickpng.com/images/588525cd6f293bbfae451a37.png' alt='chrome' />
          </Grid>
          <Grid
            item
            component='a'
            href='https://www.mozilla.org/es-MX/firefox/new/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='http://assets.stickpng.com/images/5847f407cef1014c0b5e4889.png' alt='firefox' />
          </Grid>
          <Grid
            item
            component='a'
            href='https://brave.com/es/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='https://seeklogo.com/images/B/brave-logo-F5E1D99D9E-seeklogo.com.png' alt='firefox' />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InvalidBrowser;