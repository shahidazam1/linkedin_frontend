import { createTheme, ThemeOptions } from "@mui/material/styles";

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#2977C9",
      light: "rgba(41, 119, 201, 1)",
      dark: "rgba(41, 119, 201,0.8)",
    },
    secondary: {
      main: "#717171",
      light: "rgba(113, 113, 113, 1)",
      dark: "rgba(113, 113, 113,0.8)",
    },
    // info: {
    //   main: "#F2F2F2",
    //   light: "rgb(242, 242, 242, 0.1)",
    //   dark: "rgb(242, 242, 242, 1)",
    // },
    background: {
      default: "#ffffff",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontFamily: "Source Sans Pro",
          fontSize: "16px",
          borderRadius: "20px",
          paddingX: "10px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: "Source Sans Pro",
          color: "#2B2D22",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          fontFamily: "poppins_regular",
          color: "#2B2D22",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "poppins_regular",
          color: "#2B2D22",
          opacity: "70%",
          fontSize: "12px",
        },
        shrink: ({ ownerState }) => ({
          ...(ownerState.shrink && {
            fontSize: "0.9rem !important",
            // top: "-1 !important",
          }),
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        formControl: {
          fontFamily: "poppins_regular",
          color: "#2B2D22",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "poppins_regular",
          color: "#2B2D22",
          fontSize: "13px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: "0px 2px 10px #0000001A",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 5px 20px #0000001A",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 5px 20px #0000001A",
          borderRadius: "8px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: "poppins_regular",
          color: "#2B2D22",
          fontSize: "11px",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          fontFamily: "poppins_regular",
          color: "#2B2D22",
        },
        option: {
          fontFamily: "poppins_regular",
          color: "#2B2D22",
          fontSize: "12px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Source Sans Pro",
        },
        h1: {
          fontFamily: "Source Sans Pro",
          fontWeight: 700,
          fontSize: "40px",
        },
        h2: {
          fontFamily: "Source Sans Pro",
          fontWeight: 700,
          fontSize: "36px",
        },
        h3: {
          fontFamily: "Source Sans Pro",
          fontWeight: 700,
          fontSize: "32px",
        },
        h4: {
          fontFamily: "Source Sans Pro",
          fontWeight: 700,
          fontSize: "24px",
        },
        h5: {
          fontFamily: "Source Sans Pro",
          fontWeight: 700,
          fontSize: "19px",
        },
        h6: {
          fontFamily: "Source Sans Pro",
          fontWeight: 700,
          fontSize: "16px",
        },
        subtitle1: {
          fontFamily: "Source Sans Pro",
          fontWeight: 600,
          fontSize: "17px",
        },
        subtitle2: {
          fontFamily: "Source Sans Pro",
          fontWeight: 600,
          fontSize: "15px",
        },
        body1: {
          fontFamily: "Source Sans Pro",
          fontWeight: 400,
          fontSize: "16px",
        },
        body2: {
          fontFamily: "Source Sans Pro",
          fontWeight: 400,
          fontSize: "14px",
        },
        caption: {
          fontFamily: "Source Sans Pro",
          fontWeight: 300,
          fontSize: "12px",
        },
      },
    },
  },
});
