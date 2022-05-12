import React from 'react';
import { Grid, Typography } from '@mui/material';

export class ComponentToPrint extends React.PureComponent {
  render() {
    const {data, qr} = this.props;

    return (
      <Grid 
        container 
        spacing={5} 
        direction='column'
        justifyContent='center' 
        height='100vh' 
        padding={10} 
        sx={{
          '& span': {
            fontWeight: 'bold'
          }
        }}
      >
        <Grid item textAlign='center'>
          <img src={require('../assets/img/logo.png')} alt='logo' width={350} />
        </Grid>
        <Grid item xs container spacing={3} direction='column' justifyContent='center'>
          <Grid item>
            <Typography color='primary' variant='h5' fontWeight={600}>¡Hola!</Typography>
          </Grid>
          <Grid item textAlign='justify'>
            <Typography>
              <span>{data.nombre} {data.apellido}</span>, has completado tu registro al evento de <span>{data.evento}</span>, el cual se llevará a cabo en el horario que seleccionaste.
            </Typography>
          </Grid>
          <Grid item textAlign='center'>
            <Typography>Por favor, al llegar muestra tu pase de acceso.</Typography>
          </Grid>
          <Grid item textAlign='center'>
            <Typography fontWeight={600}>Fecha y hora del evento:</Typography>
            <Typography>{data.schedule}</Typography>
          </Grid>
          <Grid item textAlign='center'>
            {qr}
          </Grid>
          <Grid item textAlign='justify'>
            <Typography color='GrayText'>Está hoja es tu pase de acceso al evento seleccionado en el horario que escogiste previamente. En caso de perderlo, podrás volver a descargar el documento desde la sección de inicio de esta página.</Typography>
          </Grid>
        </Grid>
        <Grid item textAlign='center'>
          <Typography variant='caption' color='GrayText'>Todos los derechos reservados Secretaria de Turismo del Estado de Tabasco - 2022&copy;</Typography>
        </Grid>
      </Grid>
    );
  }
}