import { grey } from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        h1: {
            fontSize: '64px',
            color: 'black',
            lineHeight: '84px',
            fontWeight: 900
        },
        h3: {
            fontSize: '31px',
            color: 'black',
            lineHeight: '36px',
            fontWeight: 900
        },
        h6: {
            fontSize: '17px',
            color: 'black',
            lineHeight: '20px',
            fontWeight: 700
        }
    },
    palette: {
        primary: {
            main: "rgb(29,161,242)",
            dark: "rgb(26,145,218)",
            contrastText: "#fff",
        },
        secondary: {
            main: grey[500]
        },
        error: {
            main: '#A40000'
        },
        background: {
            default: "#fff"
        }
    },
    // shadows: [],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth:300,
                    borderRadius: 30,
                    textTransform: "none",
                    fontSize: 16,
                    height: 40,
                    background: 'rgb(29,161,243)',
                    color: '#fff',
                    fontWeight: 600,
                    ":hover": {
                        background: 'rgb(29,131,249)'
                    }
                },
                textPrimary: {
                    paddingLeft: 20,
                    paddingRight: 20
                },
                outlinedPrimary: {
                    borderColor: "rgb(207, 217, 222)",
                    background: 'transparent',
                    color: 'rgb(29,161,243)',
                    fontWeight: 600,
                    ":hover": {
                        background: 'rgb(29,161,243)',
                        color: '#fff'
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                underline: {
                    "&:after": {
                        borderBottomWidth: "2px"
                    },
                    "&:before": {
                        borderColor: "#000",
                        borderBottomWidth: "2px"
                    }
                },
                input: {
                    backgroundColor: "rgb(245,248,250)"
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: 15
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    marginBottom: 8
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    borderBottom: "1px solid rgb(204,214,221)",
                    marginBottom: 10,
                    padding: "10px 15px",
                    "&:h2": {
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "800"
                    },
                    "& button": {
                        padding: 8,
                        marginRight: 20
                    }
                }
            }
        }
    }
});

export default theme