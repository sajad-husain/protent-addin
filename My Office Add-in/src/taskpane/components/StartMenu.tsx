// StartMenu.tsx
import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
    useTheme,
} from '@mui/material';




export const StartMenu: React.FC = () => {
    const theme = useTheme();

    const handleMicrosoftLogin = () => {
        /* TODO: trigger MSAL / SSO flow */
        console.log('Microsoft login clicked');
    };

    const handleGoogleLogin = () => {
        /* TODO: trigger Google Identity Services */
        console.log('Google login clicked');
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // background: `linear-gradient(135deg, ${theme.palette.grey[50]} 0%, ${theme.palette.grey[100]} 100%)`,
            }}
        >
            <Card
                elevation={0}
                sx={{
                    width: 360,
                    borderRadius: 4,
                    // boxShadow: '0 12px 40px rgba(0,0,0,.08)',
                    overflow: 'visible',
                }}
            >
                <CardContent sx={{ px: 4, py: 5 }}>
                    <Box
                        component="img"
                        src="https://cdn.prod.website-files.com/656880d9cb0b1e4088fdd4ba/656880d9cb0b1e4088fdd50d_Portant%20Logo%20Blue.svg"
                        alt="Portant"
                        sx={{
                            display: 'block',
                            mx: 'auto',
                            mb: 4,               // same gap that was under “Welcome back”
                            height: 40,          // tweak to taste
                        }}
                    />

                    <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        startIcon={<MicrosoftIcon />}   // ← swapped here
                        onClick={handleMicrosoftLogin}
                        sx={{
                            mb: 2,
                            background: '#1F75FE',
                            color: '#fff',
                            fontWeight: 600,
                            textTransform: 'none',
                            borderRadius: 5,
                            boxShadow: 'none',
                            '&:hover': { background: '#1675fb', boxShadow: 'none' },
                        }}
                    >
                        Login with Microsoft
                    </Button>

                    <Button
                        fullWidth
                        size="large"
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                        onClick={handleGoogleLogin}
                        sx={{
                            color: '#1f1f1f',
                            borderColor: '#dadce0',
                            fontWeight: 600,
                            textTransform: 'none',
                            borderRadius: 5,
                            '&:hover': { borderColor: '#1a73e8', background: '#f8f9ff' },
                        }}
                    >
                        Login with Google
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

/* ------------------------------------------------------------------ */
/* GoogleIcon – 24×24 SVG to keep the button sharp on Hi-DPI screens  */
/* ------------------------------------------------------------------ */
export const GoogleIcon: React.FC<{ fontSize?: 'small' | 'medium' | 'large' }> = ({
    fontSize = 'medium',
}) => (
    <Box
        component="svg"
        viewBox="0 0 24 24"
        width={fontSize === 'small' ? 20 : fontSize === 'large' ? 28 : 24}
        height={fontSize === 'small' ? 20 : fontSize === 'large' ? 28 : 24}
        fill="none"
    >
        <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
        />
        <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
        />
        <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
        />
        <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
        />
    </Box>
);

export const MicrosoftIcon: React.FC<{ fontSize?: 'small' | 'medium' | 'large' }> = ({
    fontSize = 'medium',
}) => (
    <Box
        component="svg"
        viewBox="0 0 24 24"
        width={fontSize === 'small' ? 20 : fontSize === 'large' ? 28 : 24}
        height={fontSize === 'small' ? 20 : fontSize === 'large' ? 28 : 24}
        fill="none"
    >
        <rect x="1" y="1" width="10" height="10" fill="#f35325" />
        <rect x="13" y="1" width="10" height="10" fill="#81bc06" />
        <rect x="1" y="13" width="10" height="10" fill="#05a6f0" />
        <rect x="13" y="13" width="10" height="10" fill="#ffba08" />
    </Box>
);