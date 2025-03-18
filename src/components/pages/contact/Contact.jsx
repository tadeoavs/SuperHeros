import React from "react";
import { Container, Typography, Box, TextField, Button, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
    return (
        <Box sx={{
            backgroundImage: 'url(/images/fon.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            py: 6,
        }}>
            <Container maxWidth="md">
                <Paper elevation={6} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'blackv2.main' }}>
                            Contacto
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                            Nos encantaría saber de ti. Completa el formulario a continuación o utiliza la información de contacto para comunicarte con nosotros.
                        </Typography>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid size={{xs:12, md:4}}>
                            <Box sx={{ textAlign: 'center', mb: 3 }}>
                                <EmailIcon sx={{ fontSize: 40, color: 'blackv2.main', mb: 1 }} />
                                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                                    Email
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    contacto@superheros.com
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{xs:12, md:4}}>
                            <Box sx={{ textAlign: 'center', mb: 3 }}>
                                <PhoneIcon sx={{ fontSize: 40, color: 'blackv2.main', mb: 1 }} />
                                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                                    Teléfono
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    +1 (123) 456-7890
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{xs:12, md:4}}>
                            <Box sx={{ textAlign: 'center', mb: 3 }}>
                                <LocationOnIcon sx={{ fontSize: 40, color: 'blackv2.main', mb: 1 }} />
                                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                                    Dirección
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    123 Calle Falsa, Ciudad, País
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box component="form" sx={{ mt: 4 }}>
                        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'blackv2.main', textAlign: 'center' }}>
                            Formulario de Contacto
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12, md:6}}>
                                <TextField
                                    fullWidth
                                    label="Nombre"
                                    variant="outlined"
                                    required
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '20px',
                                            '& fieldset': {
                                                borderColor: 'blackv2.main',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'blackv2.main',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'blackv2.main',
                                            },
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: 'blackv2.main',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    required
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '20px',
                                            '& fieldset': {
                                                borderColor: 'blackv2.main',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'blackv2.main',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'blackv2.main',
                                            },
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: 'blackv2.main',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid size={{xs:12}}>
                                <TextField
                                    fullWidth
                                    label="Asunto"
                                    variant="outlined"
                                    required
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '20px',
                                            '& fieldset': {
                                                borderColor: 'blackv2.main',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'blackv2.main',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'blackv2.main',
                                            },
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: 'blackv2.main',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid size={{xs:12}}>
                                <TextField
                                    fullWidth
                                    label="Mensaje"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    required
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '20px',
                                            '& fieldset': {
                                                borderColor: 'blackv2.main',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'blackv2.main',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'blackv2.main',
                                            },
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: 'blackv2.main',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid size={{xs:12}} sx={{ textAlign: 'center' }}>
                                <Button variant="contained" color="blackv2" size="large" sx={{ mt: 2 }}>
                                    <Typography color="white">
                                    Enviar
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}