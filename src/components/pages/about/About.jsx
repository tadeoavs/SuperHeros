import React from "react";
import { Container, Typography, Box, Paper, Avatar } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function About() {
    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography color="blackv2" variant="h2" component="h1" gutterBottom>
                        About WikiHero
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Avatar
                        alt="SuperHeros Logo"
                        src="/images/logo.webp"
                        sx={{ width: 100, height: 100, mx: 'auto' }}
                    />
                </Box>
                <Typography variant="body1" paragraph>
                    ¡Bienvenido al Proyecto SuperHeros! Esta aplicación está diseñada para proporcionar información detallada sobre varios superhéroes de diferentes universos. Encontrarás datos completos sobre sus habilidades, orígenes y mucho más.
                </Typography>
                <Typography variant="body1" paragraph>
                    Nuestro proyecto utiliza la poderosa <strong>SuperHero API</strong> para obtener datos en tiempo real sobre tus héroes favoritos. Ya seas fan de Marvel, DC u otro universo, nuestra aplicación tiene todo lo que necesitas.
                </Typography>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <img src="/images/iconos.jpg" alt="SuperHeros" style={{ width: '100%', borderRadius: '8px' }} />
                </Box>
                <Typography variant="h4" component="h2" gutterBottom>
                    Características del Proyecto SuperHeros
                </Typography>
                <Typography variant="body1" paragraph>
                    Algunas de las características destacadas de nuestro proyecto incluyen:
                </Typography>
                <ul>
                    <li>
                        <Typography variant="body1">Perfiles detallados de superhéroes</Typography>
                    </li>
                    <li>
                        <Typography variant="body1">Funcionalidad de búsqueda para encontrar a tus héroes favoritos</Typography>
                    </li>
                    <li>
                        <Typography variant="body1">Información actualizada de la SuperHero API</Typography>
                    </li>
                    <li>
                        <Typography variant="body1">Diseño responsivo para una excelente experiencia de usuario en cualquier dispositivo</Typography>
                    </li>
                </ul>
                {/* <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <img src="/path/to/feature-image.jpg" alt="Features" style={{ width: '100%', borderRadius: '8px' }} />
                </Box> */}
                <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
                    Equipo
                </Typography>
                <Typography variant="body1" paragraph>
                    Integrantes:
                </Typography>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Avatar onClick={() => window.open('https://github.com/tadeoavs', '_blank')}
                                alt="Tadeo Aviles"
                                src="https://avatars.githubusercontent.com/u/181107968?v=4"
                                sx={{
                                    width: 100, height: 100, mx: 'auto', mb: 2, cursor: 'pointer',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            />
                            <Typography variant="body1" sx={{ textAlign: 'center' }}>Tadeo Aviles Perez</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>Creador</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="body1" paragraph sx={{ mt: 4 }}>
                    Esperamos que disfrutes usando el Proyecto SuperHeros. ¡Mantente atento para más actualizaciones y características!
                </Typography>
            </Paper>
        </Container>
    );
}