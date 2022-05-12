import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import LebronStretch from "./assets/img/logo.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  text: {
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
    maxWidth: 200,
    margin: '0 auto',
    position: "absolute",
    top: -30
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  }
});

const Credentials = (props) => {
  const {data} = props;
  

  return (
    <Document>
      <Page style={styles.body}>
          <Image style={styles.image} src={LebronStretch} />
        <div style={styles.container}>
          <Text style={styles.text}>
            ¡Hola!
            {data.nombre} {data.apellidos}, has completado tu registro al evento de {data.evento}, el cual se llevará a cabo en el horario que seleccionaste.
            Por favor, al llegar muestra tu pase de acceso.
          </Text>
          <Text>
            Fecha y hora del evento:
            {data.schedule}
          </Text>
          <Text>
            QR here
          </Text>
          <Text>
            Está hoja es tu pase de acceso al evento seleccionado en el horario que escogiste previamente. En caso de perderlo, podrás volver a descargar el documento desde la sección de inicio de esta página.
          </Text>
          <Text>
            Secretaría de Turismo de Tabasco &copy;
          </Text>
        </div>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default Credentials;