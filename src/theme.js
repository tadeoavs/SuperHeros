import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        black: {
            main: '#000000',
        },
        white: {
            main: '#FFFFFF',
        },
        blackv2: {
            main: '#333',
        },
        gray: {
            main: '#666',
        },
        prueba: {
            main: '#DDE6ED',
        },
        error: {
            main: red.A400,
        },
        heroRed: {
            main: '#FF4500', // Rojo heroico
        },
        heroGold: {
            main: '#FFD700', // Dorado heroico
        },
        heroBlue: {
            main: '#1E90FF', // Azul heroico
        },
        typography: {
            fontFamily: '"Circular", "Helvetica", "Arial", sans-serif',
            h1: {
                fontWeight: 900,
                fontSize: '3.5rem', // Tamaño para títulos principales
            },
            h4: {
                fontWeight: 700, // Peso para subtítulos o encabezados menores
            },
        },
    },
});

export default theme;