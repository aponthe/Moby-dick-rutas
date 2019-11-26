import React from 'react';
import {Container, Form, Button, Row, Col} from 'react-bootstrap';
import BackgroundBaja from "./img/background de baja.png";
import BackgroundUsuario from './img/background usuario.png';
import BallenaBaja from "./img/ballena de baja.png";
import Icono from "./img/icono moby dick rutas.png";

const HistorialViajes = () => {
  return(
    <div style={{ backgroundImage: `url('${BackgroundUsuario}')`, backgroundSize: 'cover' }}>
      <div style={{backgroundColor: "rgba(109,191,198,0.7)"}}>
      <Container className="text-center py-3">
        <h1>Historial de viajes</h1>
        <Row>
          <Col md="6">
          </Col>
          <Col md="6">
            <img src={Icono} alt="" style={{height: "100%", width:"100%"}}/>
          </Col>
        </Row>
      </Container>
    </div>
    </div>

  );
}
const Favoritos = () => {
  return(
    <div style={{ backgroundImage: `url('${BackgroundUsuario}')`, backgroundSize: 'cover' }}>
      <div style={{backgroundColor: "rgba(109,191,198,0.7)"}}>
      <Container className="text-center py-3">
        <h1>Favoritos</h1>
        <Row>
          <Col md="6">
          </Col>
          <Col md="6">
            <img src={Icono} alt="" style={{height: "100%", width:"100%"}}/>
          </Col>
        </Row>
      </Container>
    </div>
    </div>

  );
}
const CambiarInformacion = () => {
  return(
    <div style={{ backgroundImage: `url('${BackgroundUsuario}')`, backgroundSize: 'cover' }}>
      <div style={{backgroundColor: "rgba(109,191,198,0.7)"}}>
      <Container className="text-center py-3">
        <h1>Cambiar información</h1>
        <Row>
          <Col md="6">
            <Form className="text-left">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre"/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" placeholder="Apellidos"/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Direccion"/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="****************"/>
              </Form.Group>
            </Form>
            <div className="text-right py-3">
              <Button className="mt-2" variant="primary">Aceptar</Button>
            </div>
          </Col>
          <Col md="6">
            <img src={Icono} alt="" style={{height: "100%", width:"100%"}}/>
          </Col>
        </Row>
      </Container>
    </div>
    </div>

  );
}
const DeBaja = () => {
  return(
    <div style={{ backgroundImage: `url('${BackgroundBaja}')`, backgroundSize: 'cover' }}>
      <div style={{backgroundColor: "rgba(109,191,198,0.7)"}}>
        <Container className="text-center py-3">
        <h1>¿Tan pronto?</h1>
        <Row>
          <Col className="text-left" md="6">
            <h3>¿Cancelar la suscripción?</h3>
            <p>Gracias por su interés en Moby Dick Rutas &copy;. ¿Podria darnos su motivo de baja?</p>
            <Form>
            <Form.Group>
              <Form.Label>Mensaje</Form.Label>
              <Form.Control placeholder="tu mensaje" as="textarea" rows="10" />
            </Form.Group>
            </Form>
            <div className="text-right py-3">
              <Button className="mt-2" variant="primary">Aceptar</Button>
            </div>
          </Col>
          <Col>
            <img src={BallenaBaja} alt="" style={{height: "100%", width: "100%"}}/>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
  );
}

export {HistorialViajes,Favoritos, CambiarInformacion, DeBaja}
