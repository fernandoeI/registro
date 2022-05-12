import React, { useEffect, useState } from 'react';
import { Alert, CircularProgress, Container } from '@mui/material';
import { useSearchParam } from 'react-use';

const ValidateQr = () => {
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const email = useSearchParam('m');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        //

        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  if (loading) return <CircularProgress size={50} color='primary' />

  return (
    <Container component="main" maxWidth="sm">
      {isValid ? (
        <Alert severity='success'>Correo registrado</Alert>
      ) : (
        <Alert severity='error'>Correo no registrado</Alert>
      )}
    </Container>
  );
};

export default ValidateQr;