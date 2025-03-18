import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';

export default function UniversePage() {
    const { universe } = useParams();
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRandomHeroes = async () => {
            const maxAttempts = 100; // Número máximo de intentos para encontrar héroes
            const targetCount = 50; // Número de héroes que deseas mostrar
            const fetchedHeroes = [];

            for (let i = 0; fetchedHeroes.length < targetCount && i < maxAttempts; i++) {
                const randomId = Math.floor(Math.random() * 731) + 1; // IDs de 1 a 731
                try {
                    const response = await fetch(`https://www.superheroapi.com/api.php/7b85261e5c06bfbc1cb085ff657641dd/${randomId}`);
                    const data = await response.json();

                    if (data.biography.publisher.toLowerCase() === universe.toLowerCase()) {
                        fetchedHeroes.push(data);
                    }
                } catch (error) {
                    console.error('Error fetching hero:', error);
                }
            }

            setHeroes(fetchedHeroes);
            setLoading(false);
        };

        fetchRandomHeroes();
    }, [universe]);

    const handleHeroClick = (heroId) => {
        navigate(`/hero/${heroId}`);
    };

    const renderContent = () => {
        if (loading) {
            return <CircularProgress />;
        }

        if (heroes.length === 0) {
            return (
                <Box>
                    <Typography variant="h5">No se encontraron héroes</Typography>
                    <Typography variant="body1">No se pudieron encontrar héroes para el universo seleccionado.</Typography>
                </Box>
            );
        }

        return (
            <Grid container spacing={2}>
                {heroes.map(hero => (
                    <Grid size={{xs:6, sm:4,md:3,lg:2}} key={hero.id}>
                        <Box sx={{ textAlign: 'center', mb: 2 }}>
                            <Avatar
                                alt={hero.name}
                                src={hero.image.url}
                                onClick={() => handleHeroClick(hero.id)}
                                sx={{
                                    width: 150,
                                    height: 150,
                                    mx: 'auto',
                                    mb: 1,
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            />
                            <Typography variant="body2">{hero.name}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        );
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 10 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                {universe.charAt(0).toUpperCase() + universe.slice(1)} Universe
            </Typography>
            {renderContent()}
        </Container>
    );
}