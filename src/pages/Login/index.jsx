import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../../services/user";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(postUser(formValues));

    if (response.meta.requestStatus === "fulfilled") {
      navigate("/home");
    }
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
          <Typography component="h1" variant="h5">
            Inicio de sesion
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Ingresa tu Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />
            {state.error && (
              <Typography
                variant="body2"
                color="error"
                align="center"
                sx={{ mt: 2 }}
              >
                ¡Ups! Parece que tu usuario o contraseña no son correctos.
              </Typography>
            )}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordar contraseña"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"¿No tienes una cuenta? Crear"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
