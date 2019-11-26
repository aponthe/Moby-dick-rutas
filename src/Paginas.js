import React from "react"
import Publicidad_img from "./img/tacos de canasta.png";
import {Container, Row, Col, Button, ListGroup, Form, InputGroup,FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import BackgroundUsuario from './img/background usuario.png';
import BackgroundMobyDickRutas from './img/background moby dick rutas.png';
import Icono from "./img/icono moby dick rutas.png";
import Reportar from "./img/Reportar.png";
import OpenStreetMap from './OpenStreetMap';
import Mapaadmisitrador from './Mapaadministrador';


const Inicio = () => {

  return (
    <div style={{ backgroundImage: `url('${BackgroundMobyDickRutas}')`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      <div style={{backgroundColor: "rgba(109,191,198,0.7)"}}>
        <Container className="py-3" style={{textAlign: "center"}}>
                <h1>Bienvenido a Moby Dick Rutas</h1>
                <label htmlFor="basic-url">Selecciona tu origen y destino</label>
                <Row>
                  <Col>
                    <OpenStreetMap/>
                  </Col>
                </Row>
        </Container>
          <Container className="text-center py-3">
            <h3 className="py-1">Publicidad</h3>
            <Row>
              <Col md="6" sm="12">
                <img src={Publicidad_img} alt="tacos de canasta" style={{width: "100%"}}/>
              </Col>
              <Col md="6" sm="12">
                <h5>Taquitos de canasta don martin</h5>
                <h6>Toda una tradición</h6>
                <p>Una preparación mexicana que en su forma estándar consiste
                en una tortilla (generalmente de maíz, también de harina de trigo,
                  de nopal o de algún otro ingrediente) que contiene algún alimento
                  encima. Es considerado como uno de los platillos más representativos
                  de la comida mexicana.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
  );
}

const MiCuenta = () => {
  return (
    <div style={{ backgroundImage: `url('${BackgroundUsuario}')`, backgroundSize: 'cover' }}>
      <div style={{backgroundColor: "rgba(109,191,198,0.7)"}}>
        <Container className="py-3">
          <div style={{textAlign: "center"}}>
            <h1>Mi cuenta</h1>
          </div>
          <Row>
            <Col md="6" sm="12">
              <ListGroup variant="flush">
                <ListGroup.Item className="MiCuenta" as={Link} to="/Contacto">
                  Contacto a Moby Dick Rutas
                </ListGroup.Item>
                <ListGroup.Item className="MiCuenta" as={Link} to="/HistorialViajes">
                  Historial de viajes
                </ListGroup.Item>
                <ListGroup.Item className="MiCuenta" as={Link} to="/Favoritos">
                  Favoritos
                </ListGroup.Item>
                <ListGroup.Item className="MiCuenta" as={Link} to="/CambiarInformacion">
                  Cambiar mi información personal
                </ListGroup.Item>
                <ListGroup.Item className="MiCuenta" as={Link} to="/DeBaja">
                  Darme de baja
                </ListGroup.Item>
              </ListGroup>
              </Col>
            <Col md="6" sm="12">
              <img src={Icono} alt="" style={{height: "100%", width:"100%"}}/>
            </Col>
          </Row>
      </Container>
    </div>
    </div>
  );
}

const ReportarRuta = () => {
  return (
    <div style={{ backgroundImage: `url('${BackgroundMobyDickRutas}')`, backgroundSize: 'cover' }}>
      <div style={{backgroundColor: "rgba(109,191,198,0.7)"}}>
        <Container className="py-3">
        <div style={{textAlign: "center"}}>
          <h1>Reportar ruta</h1>
        </div>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Asunto</Form.Label>
            <Form.Control type="text" placeholder="Asunto del reporte"/>
          </Form.Group>
          <Form.Group>
          <Form.Label>Mensaje</Form.Label>
          <Form.Control placeholder="Describe tu reporte" as="textarea" rows="10"/>
          </Form.Group>
        </Form>

        <div className="text-center py-3">
          <Button className="mt-2" variant="primary">Enviar</Button>
        </div>
      </Container>
    </div>
  </div>
  );
}

const Contacto= () => {
  return (
    <div style={{ backgroundImage: `url('${BackgroundMobyDickRutas}')`, backgroundSize: 'cover' }}>
      <div style={{backgroundColor: "rgba(109,191,198,0.7)"}}>
        <Container className="py-3">
        <div style={{textAlign: "center"}}>
          <h1>Contacto</h1>
        </div>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Asunto</Form.Label>
            <Form.Control type="text" placeholder="Asunto de este mensaje"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Mensaje</Form.Label>
            <Form.Control placeholder="Redacta tu mensaje" as="textarea" rows="10"/>
          </Form.Group>
        </Form>

        <div className="text-center py-3">
          <Button className="mt-2" variant="primary">Enviar</Button>
        </div>
      </Container>
    </div>
  </div>
  );
}

const IniciarSesion = () => {
  return(
    <div style={{ backgroundImage: `url('${BackgroundMobyDickRutas}')`, backgroundSize: 'cover' }}>
      <div style={{backgroundColor: "rgba(109,191,198,0.7)"}}>
        <Container className="py-3">
          <div style={{textAlign: "center"}}>
          <h1>Iniciar sesion</h1>
          </div>
        </Container>
        <Container className="py-3">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Password"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">Password</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <div style={{textAlign: "center"}}>
          <Button className="mt-2" variant="primary">Aceptar</Button>
          </div>
        </Container>
    </div>
    </div>
  );
}

const Ayuda = () => {
  return(
    <div style={{ backgroundImage: `url('${BackgroundMobyDickRutas}')`, backgroundSize: 'cover' }}>
      <div style={{backgroundColor: "rgba(109,191,198,0.7)"}}>
        <Container className="py-3">
          <div style={{textAlign: "center"}}>
          <h1>Ayuda</h1>
          </div>
        </Container>
    </div>
    </div>
  );
}

const Administrador = () => {
  return(
    <div style={{ backgroundImage: `url('${BackgroundMobyDickRutas}')`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      <div style={{backgroundColor: "rgba(109,191,198,0.7)"}}>
        <Container className="py-3" style={{textAlign: "center"}}>
                <h1>Bienvenido Administrador</h1>
                <label htmlFor="basic-url">Aqui podras trazar las rutas</label>
                <Row>
                  <Col>
                    <Mapaadmisitrador/>
                  </Col>
                </Row>
        </Container>
        </div>
      </div>
  );
}

const NotFound = () => {
  return (
    <div style={{ backgroundImage: `url('${BackgroundMobyDickRutas}')`, backgroundSize: 'cover' }}>
      <div className="text-center" style={{backgroundColor: "rgba(109,191,198,0.7)"}}>
        <h1>404 PAGINA NO ENCONTRADA</h1>
        <h3>Lo sentimos</h3>
        <img className="py-5" src={Reportar} alt=""/>
      </div>
    </div>
  );
}


export { Inicio, MiCuenta, ReportarRuta, Contacto, IniciarSesion, Ayuda,NotFound, Administrador }
