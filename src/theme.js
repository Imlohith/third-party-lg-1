import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0E2F05',
            light: '#F2F2F2' // Replace with your primary color code
        },
        secondary: {
            main: '#FED843', // Replace with your secondary color code
        },
        success: {
            main: '#13BC1A', // Replace with your success color code
        },
    },
    typography: {
        fontFamily: 'regular',
        h3: {
             fontSize: 22,
             fontFamily: 'bold'
        },
        h5: {
            fontSize: 16,
            fontFamily: 'regular'
        },
        h6: {
            fontSize: 18,
            fontFamily: 'bold'
        },
        body1: {
            fontSize: 14,
            fontFamily: 'regular'
        },
        subtitle1: {
            fontSize: 14,
            fontFamily: 'light'
        },
        subtitle2: {
            fontSize: 16,
            fontFamily: 'regular'
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides:{
                root: {
                    padding: 15
                }
            }
        },
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    color: 'white', // default color
                    "&.Mui-selected": {
                        color: 'white', // color when selected
                    },
                },
            },
        }
    }
});