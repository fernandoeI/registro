import React, { useRef } from "react";
import {QRCodeSVG} from 'qrcode.react';
import { toast } from "react-toastify";
import {
  Container,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
  TextField,
  Grid,
  Radio,
  RadioGroup,
  Box,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { ComponentToPrint } from "../components/ComponentToPrint";
import ReactToPrint from "react-to-print";
import firebaseApp from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import ValidateBrowser from "../components/ValidateBrowser";

const db = firebase.firestore(firebaseApp);

const route = 'http://localhost:3000/validar'

const hostes = [
  "Secretaría de Turismo",
  "Asociación de Hoteles y Moteles de Tabasco, A.C.",
  "Viajes CAMGO",
  "Tabasco Travel",
  "Surline Travel",
  "Grace Viajes y Eventos",
  "RT Díaz Operadores",
  "Viajes Tabasco | Mayan Cruise",
  "Jungla Experience",
  "Saraguato Extremo",
  "Hacienda La Luz",
  "Hacienda Jesús María",
  "Jonuteek",
  "BC BEP",
  "Hotel Azul Esmeralda",
  "Hotel Viva Villahermosa",
  "Gamma Hotel Villahermosa",
  "Hotel Olmeca Plaza",
  "Hotel Urban Express by Olmeca Plaza",
  "Holiday Inn Villahermosa Aeropuerto",
  "Hotel Tabasco Inn",
  "Hotel Villa Margaritas",
  "Hacienda La Chonita",
  "Wayakxuul",
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
      !data?.nombre?.trim() ||
      !data?.apellido?.trim() ||
      !data?.email?.trim() ||
      !data?.telefono
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
          value={data?.telefono || 0}
          onChange={(e) => setData({ ...data, telefono: Number(e.target.value) })}
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
    if (!data?.evento || !data?.schedule) {
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
            setData({ ...data, evento: e.target.value, schedule: "" });
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
  const { prevStep, nextStep, data, setData, db } = props;
  const handleNext = () => {
    try {
      db.collection("registro").add({
        evento: data.evento,
        schedule: data.schedule,
        name: data.nombre,
        empresa: data?.empresa || "",
        cargo: data?.cargo || "",
        web: data?.web || "",
        facebook: data?.facebook || "",
        instagram: data?.instagram || "",
        twitter: data?.twitter || "",
        host: data.host,
        promotion: data?.promotion || false,
        fechaRegistro: new Date(),
      });
      
      nextStep();
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControl>
          <FormLabel>
            ¿Cómo recibiste la invitación?
          </FormLabel>
          <RadioGroup
            name="host"
            value={data?.host || ""}
            onChange={(e) => setData({ ...data, host: e.target.value })}
          >
            {hostes.map((item, key) => (
              <FormControlLabel
                key={key}
                value={item}
                control={<Radio />}
                label={item}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={data?.promotion || false}
              onChange={(e) =>
                setData({ ...data, promotion: e.target.checked })
              }
            />
          }
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
          onClick={handleNext}
        >
          Finalizar
        </Button>
      </Grid>
    </Grid>
  );
}
function Congratulations(props) {
  const { data } = props;
  const componentRef = useRef();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography>
          Ha finalizado tu registro, esperamos tu asistencia!
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <div>
          <ReactToPrint
            trigger={() => (
              <Button color='primary' variant='contained'>
                Descargar
              </Button>
            )}
            content={() => componentRef.current}
          />
          <div style={{ display: 'none' }}>
            <ComponentToPrint ref={componentRef} data={data} qr={<QRCodeSVG value={`${route}/?m=${data.email}`} />} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default function SignUp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState();

  const nextStep = () => setActiveStep(activeStep + 1);
  const prevStep = () => setActiveStep(activeStep - 1);

  return (
      <Container component="main" maxWidth="sm">
        <ValidateBrowser />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={require("../assets/img/logo.png")}
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
              <Step>
                <StepLabel>Finalizado</StepLabel>
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
          {activeStep === 2 ? (
            <FinalQuestions
              prevStep={prevStep}
              nextStep={nextStep}
              data={data}
              setData={setData}
              db={db}
            />
          ) : null}
          {activeStep === 3 ? (
            <Congratulations data={data} />
          ) : null}
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
}
