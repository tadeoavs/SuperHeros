import React from "react";

import './style/styles.css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Paper, Card, CardContent, CardActionArea, CardMedia } from "@mui/material";
import GradeIcon from '@mui/icons-material/Grade';
import Grid from '@mui/material/Grid2';
import SearchIcon from '@mui/icons-material/Search';


export default function HomePage() {

    const handleHeroClick = (heroName) => {
        navigate(`/heroe/${heroName}`);
    };

    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    }


    const featuredHeroes = [
        {
            id: 1,
            name: 'Spider-Man',
            image: 'https://www.superherodb.com/pictures2/portraits/10/100/133.jpg',
            serch: 'spider-man'
        },
        {
            id: 2,
            name: 'Iron Man',
            image: 'https://www.superherodb.com/pictures2/portraits/10/100/85.jpg',
            serch: 'ironman'
        },
        {
            id: 3,
            name: 'Batman',
            image: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
            serch: 'batman'
        },
        {
            id: 4,
            name: 'Superman',
            image: 'https://www.superherodb.com/pictures2/portraits/10/100/791.jpg',
            serch: 'superman'
        },
        {
            id: 5,
            name: 'Wonder Woman',
            image: 'https://www.superherodb.com/pictures2/portraits/10/100/807.jpg',
            serch: 'wonder woman'
        },
        {
            id: 6,
            name: 'Hulk',
            image: 'https://www.superherodb.com/pictures2/portraits/10/100/83.jpg',
            serch: 'hulk'
        },
        {
            id: 7,
            name: 'Thor',
            image: 'https://www.superherodb.com/pictures2/portraits/10/100/140.jpg',
            serch: 'thor'
        },
        {
            id: 8,
            name: 'Flash',
            image: 'https://www.superherodb.com/pictures2/portraits/10/100/891.jpg',
            serch: 'flash'
        }
    ];

    return (
        <Box className='background'>
            <div className="container">
                <div>
                    <Typography
                        variant="h1" color="blackv2"
                        sx={{
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 700,
                            fontSize: '80px',
                            mb: 3,
                            mt: 6,
                            textAlign: 'center'
                        }}
                    >
                        WikiHero API
                    </Typography>
                </div>
                <div className="subtitle">
                    <Typography variant="h5" color="blackv2" sx={{
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 500,
                        fontSize: '30px',
                    }} >
                        Encuentra informacion de tus superhéroes favoritos!
                    </Typography>
                </div>
                <Button
                    variant="contained"
                    color="blackv2"
                    component={Link}
                    to="/heroes"
                    className="search-button"
                    sx={{
                        borderRadius: '50px',
                        padding: '10px 30px',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                        },
                    }}
                >
                    <Typography sx={{mr:1}} color="white">
                        Buscar heroe 
                    </Typography>
                    <SearchIcon color="white" />
                </Button>
                <div className="boxy">
                    <div className="select-container">
                        <Typography variant="h4" color="white" sx={{
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 700,
                            fontSize: '40px',
                        }} >
                            Busca por tu Universo favorito!
                        </Typography>
                    </div>
                    <Grid container sx={{ mt: 4, mb: 3, }} spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Card sx={{ width: { xs: "100%", md: 500 }, height: 400, borderRadius: 7 }}>
                                <CardActionArea
                                    onClick={() => handleClick('/universe/Marvel Comics')}
                                    sx={{
                                        height: '100%',
                                        transition: 'transform 0.3s, background-color 0.3s',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            backgroundColor: 'rgba(199, 195, 195, 0.76)', // Color de fondo más marcado
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="/src/components/home/images/R.jpg"
                                        alt="Marvel"
                                        sx={{ objectFit: "cover" }}
                                    />
                                    <CardContent sx={{ height: '100%' }}>
                                        <Typography variant="h5" component="div">
                                            Universo de Marvel
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Explora de Marvel.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'start' }}>
                            <Card sx={{ width: { xs: "100%", md: 500 }, height: 400, borderRadius: 7 }}>
                                <CardActionArea
                                    onClick={() => handleClick('/universe/DC Comics')}
                                    sx={{
                                        height: '100%',
                                        transition: 'transform 0.3s, background-color 0.3s',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            backgroundColor: 'rgba(223, 221, 220, 0.2)', // Color de fondo más marcado
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="/src/components/home/images/j.jpg"
                                        alt="DC"
                                        sx={{ objectFit: "cover" }}
                                    />
                                    <CardContent sx={{ height: '100%' }}>
                                        <Typography variant="h5" component="div">
                                            Universo Cinematografico de DC
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Explora el universo de DC.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <Box>
                        <Typography variant="h5" color="white" sx={{ fontWeight: 900, fontFamily: 'Roboto', textAlign: 'center', mt: 10 }}>
                            Personajes Destacados <GradeIcon />
                        </Typography>

                    </Box>
                    <Grid container spacing={2} sx={{ mt: 2 }} justifyContent='center'>
                        {featuredHeroes.map((hero) => (
                            <Grid sx={{ xs: 12, sm: 6, md: 6, }} key={hero.id}>
                                <Card sx={{ borderRadius: '7px' }}>
                                    <CardActionArea onClick={() => handleHeroClick(hero.serch)}>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image={hero.image}
                                            alt={hero.name}
                                            sx={{
                                                height: {xs:300, md:400, lg:400}, 
                                                objectFit: "cover", borderRadius: '7px 7px 0 0',
                                                transition: 'transform 0.3s, background-color 0.3s',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                    backgroundColor: 'rgba(223, 221, 220, 0.2)', // Color de fondo más marcado
                                                }, }}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" component="div">
                                                {hero.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>

            </div>

        </Box >


    );
}
