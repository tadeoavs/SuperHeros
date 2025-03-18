import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Paper, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Divider, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid2';
import Chip from '@mui/material/Chip';
import InfoIcon from '@mui/icons-material/Info';


import { Person, Place, Book, Business, Group, FamilyRestroom, Visibility, Face, Height, Scale, Palette } from '@mui/icons-material';
import { Link } from 'react-router-dom'

export default function ApiComponent() {
    const location = useLocation();
    const navigate = useNavigate();
    const { datos } = location.state || { datos: [] };

    return (
        <div style={{ backgroundColor: '#F9F7F7', padding: 40 }}>
            <Container maxWidth="md" sx={{}} >
                <Box>
                    <Typography color='blackv2' variant="h3" sx={{ textAlign: 'left', }} gutterBottom>
                        {datos.length > 0 ? (
                            <>
                                {datos[0].name} - Info
                                <InfoIcon sx={{ marginLeft: 1, width: '40px', height: '40px',}} />
                            </>
                        ) : 'No se encontró el personaje'}
                    </Typography>
                </Box>
                {datos.length > 0 ? (
                    datos.map((heroe, index) => (
                        <Paper key={index} sx={{ padding: 2, mb: 3, bgcolor: 'white.main' }}>
                            <Typography color='gray' variant="h5" align="center" gutterBottom>
                                {heroe.name}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                <img src={heroe.image.url} alt={heroe.name} style={{ width: '100%', maxWidth: 300, borderRadius: 8 }} />
                            </Box>
                            <Grid container direction='column' spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Typography color='gray' variant="h6">Información General</Typography>
                                <Divider sx={{ border: 'solid', width: '80%' }} />
                                <Grid item><Chip icon={<Person />} label={`ID: ${heroe.id}`} variant="outlined" /></Grid>
                                <Grid item><Chip icon={<Book />} label={`Nombre: ${heroe.biography['full-name']}`} variant="outlined" /></Grid>
                                <Grid item><Chip icon={<Business />} label={`Publicador: ${heroe.biography.publisher}`} variant="outlined" /></Grid>
                                <Grid item><Chip icon={<Place />} label={`Lugar de nacimiento: ${heroe.biography['place-of-birth']}`} variant="outlined" /></Grid>
                            </Grid>
                            <Accordion sx={{ mt: 2 }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography component="span">Estadísticas de Poder</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={1} justifyContent='center'>
                                        {Object.entries(heroe.powerstats).map(([stat, value]) => (
                                            <Grid key={stat} size={{sx:6, md:4, lg:3}}>
                                                <Chip label={`${stat}: ${value}`} variant="outlined" color="blackv2" sx={{ width: '100%' }} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                                    <Typography component="span">Apariencia</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={1} justifyContent='center'>
                                        <Grid item><Chip icon={<Face />} label={`Género: ${heroe.appearance.gender}`} variant="outlined" /></Grid>
                                        <Grid item><Chip icon={<Group />} label={`Raza: ${heroe.appearance.race}`} variant="outlined" /></Grid>
                                        <Grid item><Chip icon={<Height />} label={`Altura: ${heroe.appearance.height.join(' / ')}`} variant="outlined" /></Grid>
                                        <Grid item><Chip icon={<Scale />} label={`Peso: ${heroe.appearance.weight.join(' / ')}`} variant="outlined" /></Grid>
                                        <Grid item><Chip icon={<Visibility />} label={`Color de ojos: ${heroe.appearance['eye-color']}`} variant="outlined" /></Grid>
                                        <Grid item><Chip icon={<Palette />} label={`Color de cabello: ${heroe.appearance['hair-color']}`} variant="outlined" /></Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
                                    <Typography component="span">Conexiones</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={1} justifyContent='center'>
                                        <Grid item><Chip icon={<Group />} label={`Afiliaciones: ${heroe.connections['group-affiliation']}`} variant="outlined" /></Grid>
                                        <Grid item><Chip icon={<FamilyRestroom />} label={`Familiares: ${heroe.connections.relatives}`} variant="outlined" /></Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Button variant="contained" color="blackv2" sx={{
                                    borderRadius: '50px',
                                    padding: '10px 30px',
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                    },
                                }} onClick={() => navigate(`/hero/${heroe.id}`,)}>
                                    <Typography color='white'>Ver más detalles</Typography>
                                </Button>
                            </Box>
                        </Paper>
                    ))
                ) : (
                    <Typography variant="body1">No se encontraron resultados.</Typography>
                )}
            </Container>
        </div>
    );
}