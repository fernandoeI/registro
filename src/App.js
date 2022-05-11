import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Box,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";

const hostes = [
  { name: "Secretaría de Turismo" },
  { name: "Asociación de Hoteles y Moteles de Tabasco, A.C." },
  { name: "Viajes CAMGO" },
  { name: "Tabasco Travel" },
  { name: "Surline Travel" },
  { name: "Grace Viajes y Eventos" },
  { name: "RT Díaz Operadores" },
  { name: "Viajes Tabasco | Mayan Cruise" },
  { name: "Jungla Experience" },
  { name: "Saraguato Extremo" },
  { name: "Hacienda La Luz" },
  { name: "Hacienda Jesús María" },
  { name: "Jonuteek" },
  { name: "BC BEP" },
  { name: "Hotel Azul Esmeralda" },
  { name: "Hotel Viva Villahermosa" },
  { name: "Gamma Hotel Villahermosa" },
  { name: "Hotel Olmeca Plaza" },
  { name: "Hotel Urban Express by Olmeca Plaza" },
  { name: "Holiday Inn Villahermosa Aeropuerto" },
  { name: "Hotel Tabasco Inn" },
  { name: "Hotel Villa Margaritas" },
  { name: "Hacienda La Chonita" },
  { name: "Wayakxuul" },
];

const events = [
  {
    name: "Cata Hac. Jesús María",
    schedule: [
      "23 de Mayo - 11:30 a 12:30 hrs.",
      "24 de Mayo - 12:00 a 13:00 hrs.",
      "25 de Mayo - 11:15 a 12:15 hrs.",
    ],
  },
  {
    name: "Cata Hac. La Luz",
    schedule: [
      "23 de Mayo - 13:30 a 14:30 hrs.",
      "24 de Mayo - 10:30 a 11:30 hrs.",
      "25 de Mayo - 12:45 a 13:45 hrs.",
    ],
  },
  {
    name: "Ritual del Cacao",
    schedule: [
      "23 de Mayo - 16:0 a 17:00 hrs.",
      "24 de Mayo - 16:00 a 17:00 hrs.",
      "25 de Mayo - 10:00 a 11:00 hrs.",
    ],
  },
];

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Todos los derechos reservados "}
      <Link color="inherit" href="https://mui.com/">
        Secretaria de Turismo del estado de Tabasco
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function PersonalInformation(props) {
  const { nextStep, data, setData } = props;

  const handleNext = () => {
    if (
      !data?.nombre.trim() ||
      !data?.apellido.trim() ||
      !data?.email.trim() ||
      !data?.telefono.trim()
    ) {
      return toast.info("Favor de llenar todos los campos");
    }
    nextStep();
  };

  return (
    <Grid component="form" container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          autoFocus
          fullWidth
          name="nombre"
          label="Nombre(s)"
          autoComplete="given-name"
          value={data?.nombre || ""}
          onChange={(e) => setData({ ...data, nombre: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="apellido"
          label="Apellidos"
          autoComplete="family-name"
          value={data?.apellido || ""}
          onChange={(e) => setData({ ...data, apellido: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          name="empresa"
          label="Empresa"
          value={data?.empresa || ""}
          onChange={(e) => setData({ ...data, empresa: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          name="cargo"
          label="Cargo"
          value={data?.cargo || ""}
          onChange={(e) => setData({ ...data, cargo: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          name="email"
          autoComplete="email"
          label="Correo electrónico"
          value={data?.email || ""}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          name="telefono"
          label="Teléfono"
          type="tel"
          autoComplete="tel"
          value={data?.telefono || ""}
          onChange={(e) => setData({ ...data, telefono: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Página web"
          name="web"
          value={data?.web || ""}
          onChange={(e) => setData({ ...data, web: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="facebook"
          label="Facebook"
          name="facebook"
          type="url"
          value={data?.facebook || ""}
          onChange={(e) => setData({ ...data, facebook: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="instagram"
          label="Instagram"
          name="instagram"
          type="url"
          value={data?.instagram || ""}
          onChange={(e) => setData({ ...data, instagram: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="twitter"
          label="Twitter"
          name="twitter"
          type="url"
          value={data?.twitter || ""}
          onChange={(e) => setData({ ...data, twitter: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Siguiente
        </Button>
      </Grid>
    </Grid>
  );
}

function EventInformation(props) {
  const { nextStep, prevStep, data, setData } = props;
  const [schedule, setSchedule] = React.useState();

  const handleNext = () => {
    if (!data?.evento || !data.schedule) {
      return toast.info("Seleccione el evento y horario");
    }

    nextStep();
  };

  return (
    <Grid component="form" container spacing={3}>
      <Grid item xs={12}>
        <TextField
          select
          fullWidth
          label="Evento"
          color="primary"
          name="evento"
          value={data?.evento || ""}
          onChange={(e) => {
            const selected = events.find(
              (event) => event.name === e.target.value
            );
            setData({ ...data, evento: e.target.value });
            setSchedule(selected.schedule);
          }}
        >
          <MenuItem value="" disabled selected>
            Seleccione un evento
          </MenuItem>
          {events.map((event, key) => (
            <MenuItem key={key} value={event.name}>
              {event.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {data?.evento && schedule ? (
        <Grid item xs={12}>
          <FormControl>
            <FormLabel>Horarios disponibles</FormLabel>
            <RadioGroup
              name="horario"
              value={data?.schedule || ""}
              onChange={(e) => setData({ ...data, schedule: e.target.value })}
            >
              {schedule.map((time, key) => (
                <FormControlLabel
                  key={key}
                  value={time}
                  control={<Radio />}
                  label={time}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      ) : null}

      <Grid item xs={12}>
        <Button
          sx={{ marginRight: 2 }}
          variant="outlined"
          color="primary"
          onClick={prevStep}
        >
          Atrás
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Siguiente
        </Button>
      </Grid>
    </Grid>
  );
}

function FinalQuestions(props) {
  const { prevStep, data } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            ¿Cómo recibiste la invitación?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {hostes.map((item, key) => (
              <FormControlLabel
                value={item.name}
                control={<Radio />}
                label={item.name}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="Quiero recibir promociones y actualizaciones via correo electrónico."
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          sx={{ marginRight: 2 }}
          variant="outlined"
          color="primary"
          onClick={prevStep}
        >
          Atrás
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={console.log(data)}
        >
          Finalizar
        </Button>
      </Grid>
    </Grid>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState();

  const nextStep = () => setActiveStep(activeStep + 1);
  const prevStep = () => setActiveStep(activeStep - 1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={require("./assets/img/logo.png")}
            alt="logo"
            style={{ maxWidth: 300, width: "100%", paddingBottom: 20 }}
          />
          <Typography component="h1" variant="h5" fontWeight="bold">
            Registro de asistencia
          </Typography>

          <Box marginY={3}>
            <Stepper activeStep={activeStep} alternativeLabel>
              <Step>
                <StepLabel>Información personal</StepLabel>
              </Step>
              <Step>
                <StepLabel>Datos del evento</StepLabel>
              </Step>
              <Step>
                <StepLabel>Información adicional</StepLabel>
              </Step>
            </Stepper>
          </Box>

          {activeStep === 0 ? (
            <PersonalInformation
              nextStep={nextStep}
              data={data}
              setData={setData}
            />
          ) : null}
          {activeStep === 1 ? (
            <EventInformation
              nextStep={nextStep}
              prevStep={prevStep}
              data={data}
              setData={setData}
            />
          ) : null}
          {activeStep === 2 ? <FinalQuestions prevStep={prevStep} /> : null}
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      <CssBaseline />
      <ToastContainer theme="dark" />
    </ThemeProvider>
  );
}
