import React from "react";
import Typography from '@mui/material/Typography'
import Grid from "@mui/material/Grid2";
import { TextField, Button, Card, CardContent, CircularProgress, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import InfoIcon from '@mui/icons-material/Info';
import './style/style.css';


export default function Heroes() {


    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

    const [textoBuscar, setTextoBuscar] = React.useState('');

    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate();


    const obtenerHeroePorNombre = async () => {
        const buscar = textoBuscar.trim();
        if (buscar == "") {
            alert("No se ha ingresado ningun texto");
            setLoading(false);
            return
        }

        try {
            setLoading(true);
            const response = await fetch(`https://www.superheroapi.com/api.php/7b85261e5c06bfbc1cb085ff657641dd/search/${buscar}`);

            if (!response.ok) {
                throw new Error(`Error en la API: ${response.status}`);
            }

            const result = await response.json();

            if (result.response === "success" && result.results) {
                navigate('/hero', { state: { datos: result.results } });
            } else {
                alert("No se encontraron héroes con ese nombre");
            }
        } catch (error) {
            console.error("Error al obtener el héroe:", error);
            alert("Hubo un error al buscar el héroe. Intenta de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
    });

    return (
        <div className="container" >
            <Grid container spacing={0} direction="column" justifyContent="center"
                alignItems="center" sx={{ textAlign: 'center' }}>
                {/* <Grid sx={{ mt: 10 }} size={{ xs: 12 }}>
                    <Typography variant="h3" color="blackv2.main">WikiHero</Typography>
                </Grid> */}
                <Grid sx={{ mt: 5 }} size={{ xs: 12, md: 8 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '60px' }} variant="h4" color="blackv2.main">Bienvenido a la sección de SuperHeroes!</Typography>
                </Grid>
                <Grid sx={{ mt: 8, mb: 4 }} size={{ xs: 8, md: 8 }}>
                    <TextField value={textoBuscar} onChange={e => setTextoBuscar(e.target.value)} fullWidth label='Busca el nombre de tu heroe' InputProps={{
                            endAdornment: !isSmallScreen && (
                                <InputAdornment position="end">
                                    <Button
                                        variant='contained'
                                        size="large"
                                        color='blackv2'
                                        sx={{
                                            color: 'white.main',
                                            borderRadius: '25px',
                                            transition: 'transform 0.3s',
                                            '&:hover': {
                                                transform: 'translateY(-2px)',
                                            },
                                        }}
                                        onClick={obtenerHeroePorNombre}
                                        endIcon={loading ? <CircularProgress size={20} sx={{ color: "white.main" }} /> : <SearchIcon />}
                                    >
                                        Search
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
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
                {isSmallScreen && (
                        <Button
                            variant='contained'
                            size="large"
                            color='blackv2'
                            sx={{
                                mt: 2,
                                color: 'white.main',
                                borderRadius: '25px',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                },
                            }}
                            onClick={obtenerHeroePorNombre}
                            endIcon={loading ? <CircularProgress size={20} sx={{ color: "white.main" }} /> : <SearchIcon />}
                        >
                            Search
                        </Button>
                    )}
                </Grid>
            </Grid>
            {/* Cartas */}
            <Grid container spacing={3} sx={{ mt: 6, justifyContent: 'center' }}>
                {[
                    { titulo: 'Estadísticas de Poder', descripcion: 'Conoce las estadísticas de poder de tus héroes favoritos, incluyendo inteligencia, fuerza, velocidad, durabilidad, poder y combate.'  },
                    { titulo: 'Información Biográfica', descripcion: 'Descubre el nombre real, lugar de nacimiento, primera aparición y afiliaciones de tus héroes.' },
                    { titulo: 'Apariencia', descripcion: 'Conoce detalles sobre la apariencia de tus héroes, como género, raza, altura, peso, color de ojos y color de cabello.' },
                    { titulo: 'Imágenes', descripcion: 'Disfruta de imágenes de alta calidad de tus héroes favoritos.' }
                ].map((item, index) => (
                    <Grid size={{ xs: 12, md: 5 }} key={index}>
                        <Card sx={{
                            p: 3, textAlign: 'center', borderRadius: '15px', minHeight: 175,
                            backgroundColor: 'white',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                            '&:hover': { transform: 'scale(1.03)', transition: '0.7s' }
                        }}>
                            <Typography variant="h5" color="blackv2" sx={{ fontWeight: 600, mb: 2 }}>
                                {item.titulo}
                            </Typography>
                            <Typography variant='subtitle1' color="blackv2" sx={{}}>
                                {item.descripcion}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>


            {/* <Grid container spacing={2} sx={{ mt: 4 }} justifyContent="center">
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card sx={{ height: 170, paddingX: 5, textAlign: 'center' }}>
                        <CardContent>
                            <Typography variant="h6" color="gray" sx={{ mb: 2 }}>
                                Estadísticas de Poder
                            </Typography>
                            <Typography variant="body1">
                                Conoce las estadísticas de poder de tus héroes favoritos, incluyendo inteligencia, fuerza, velocidad, durabilidad, poder y combate.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card sx={{ height: 170, paddingX: 5, textAlign: 'center' }}>
                        <CardContent>
                            <Typography variant="h6" color="gray" sx={{ mb: 2 }}>
                                Información Biográfica
                            </Typography>
                            <Typography variant="body1">
                                Descubre el nombre real, lugar de nacimiento, primera aparición y afiliaciones de tus héroes.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card sx={{ height: 170, paddingX: 5, textAlign: 'center' }}>
                        <CardContent>
                            <Typography variant="h6" color="gray" sx={{ mb: 2 }}>
                                Apariencia
                            </Typography>
                            <Typography variant="body1">
                                Conoce detalles sobre la apariencia de tus héroes, como género, raza, altura, peso, color de ojos y color de cabello.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card sx={{ height: 170, paddingX: 5, textAlign: 'center' }}>
                        <CardContent>
                            <Typography variant="h6" color="gray" sx={{ mb: 2 }}>
                                Imágenes
                            </Typography>
                            <Typography variant="body1">
                                Disfruta de imágenes de alta calidad de tus héroes favoritos.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid> */}

            {/* <ApiComponent
                datos={datos.results}
            /> */}

        </div>
    )
}

