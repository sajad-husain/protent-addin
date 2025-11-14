// theme.ts
import { createTheme } from '@mui/material/styles';

const lightPurple = '#f0ebff'; // tweak saturation / lightness as you like

export const theme = createTheme({
    palette: {
        background: {
            default: `linear-gradient(to bottom, #ffffff 0%, ${lightPurple} 100%)`,
            paper: `linear-gradient(to bottom, #ffffff 0%, ${lightPurple} 100%)`,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    minHeight: '100vh',
                    background: 'linear-gradient(to bottom, #ffffff 0%, var(--light-purple) 100%)',
                    backgroundAttachment: 'fixed',
                    '--light-purple': lightPurple, // re-use variable anywhere
                },
                '.MuiPaper-root': {
                    background: 'inherit',
                },
            }
        },
    },
});