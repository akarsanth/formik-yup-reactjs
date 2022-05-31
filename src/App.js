import "./App.css";

// MUI imports
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";

// Forms Import
import General from "./components/Forms/General";
import Register from "./components/Forms/Register";
import Login from "./components/Forms/Login";
import UpdatePassword from "./components/Forms/UpdatePassword";
import ContactUs from "./components/Forms/ContactUs";
import Numbers from "./components/Forms/Numbers";

// Styles
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import DependentValidation from "./components/Forms/DependentValidation";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[700],
    },

    secondary: {
      main: "#cda07d",
    },
  },

  typography: {
    fontFamily: "Roboto Flex",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    allVariants: {
      color: "#444",
    },
  },

  shape: {
    borderRadius: 2,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Grid container>
          <Grid item xs={12}>
            <Container maxWidth="md">
              {/* General Form */}
              <General />
              {/* Login Form */}
              <Login />
              {/* Register Form */}
              <Register />
              {/* Update Password Form */}
              <UpdatePassword />
              {/* Contact Us Form */}
              <ContactUs />
              {/* Working with numbers */}
              <Numbers />
              {/* Dependent Validation */}
              <DependentValidation />
            </Container>
          </Grid>
        </Grid>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
