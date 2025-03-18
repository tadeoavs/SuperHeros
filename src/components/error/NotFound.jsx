import React from 'react';
import { Link } from 'react-router';
import { Box, Typography, Button, Container } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import './style/styles.css'

export default function NotFound() {
    return (
        <div className='body'>
            <Container maxWidth="md" sx={{ textAlign: 'center'}}>
                <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main' }} />
                <Typography variant="h2" gutterBottom>
                    404 - Página no encontrada
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Lo sentimos, la página que estás buscando no existe.
                </Typography>
                <Button
                    variant="contained"
                    color="blackv2"
                    component={Link}
                    to="/"
                    sx={{ mt: 6 }}
                >
                    <Typography color="white">
                        Volver a la página de inicio
                    </Typography>

                </Button>
            </Container>
        </div>
    );
}