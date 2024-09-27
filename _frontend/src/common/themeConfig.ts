import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light', // Світлий режим
        primary: {
            main: '#1976d2', // Основний колір (синій)
        },
        secondary: {
            main: '#388e3c', // Додатковий колір (зелений)
        },
        background: {
            default: '#f5f5f5', // Світлий фон для всієї сторінки
            paper: '#ffffff', // Білий фон для компонентів
        },
        text: {
            primary: '#333333', // Темний текст для кращого контрасту
            secondary: '#555555', // Трохи світліший текст
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', // Стандартний шрифт MUI
        h1: {
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1976d2',
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#388e3c',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px', // Злегка заокруглені кнопки
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: '#1976d2', // Синій колір для AppBar
                },
            },
        },
    },
});

export default theme;
