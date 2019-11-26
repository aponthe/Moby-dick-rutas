import React from 'react';
import {Navbar,Nav, Row, Col, Container} from 'react-bootstrap';
import { Inicio, MiCuenta, ReportarRuta, Contacto, IniciarSesion, Ayuda, Administrador, NotFound } from "./Paginas";
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom';
import {HistorialViajes, Favoritos, CambiarInformacion, DeBaja} from "./Usuario.js";


export default class Barra_navegacion extends React.Component{

  render(){

  return(
    <BrowserRouter>
      <Container className="py-3" style={{display: window.location.pathname==="/Administrador"? "none": "inline"}}>
      <Row>
        <Col as={Link} to="/" md="6" sm="6">Moby Dick Rutas</Col>
        <Col className="text-right" md="6" sm="6">
          <Link to="IniciarSesion">Iniciar sesión </Link>
          <Link to="Ayuda"> Ayuda</Link>
        </Col>
      </Row>
      </Container>
      <Navbar sticky="top" bg="primary" variant="dark" expand="lg" style={{display: window.location.pathname==="/Administrador"? "none": "flex"}}>
        <Navbar.Brand as={Link} to="/Inicio">Moby Dick Rutas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link className="text-center" as={Link} to="/Inicio">Inicio</Nav.Link>
            <Nav.Link className="text-center" as={Link} to="/MiCuenta">Mi Cuenta</Nav.Link>
            <Nav.Link className="text-center" as={Link} to="/ReportarRuta">Reportar ruta</Nav.Link>
            <Nav.Link className="text-center" as={Link} to="/Contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
          <Switch>
            <Route exact path='/' component={Inicio} />
            <Route path='/Inicio' component={Inicio} />
            <Route path='/MiCuenta' component={MiCuenta} />
            <Route path='/ReportarRuta' component={ReportarRuta} />
            <Route path='/Contacto' component={Contacto} />
            <Route path='/IniciarSesion' component={IniciarSesion} />
            <Route path='/Ayuda' component={Ayuda} />
            <Route path="/HistorialViajes" component={HistorialViajes}/>
            <Route path="/Favoritos" component={Favoritos}/>
            <Route path="/CambiarInformacion" component={CambiarInformacion}/>
            <Route path="/DeBaja" component={DeBaja}/>
            <Route path="/Administrador" component={Administrador}/>
            <Route component={NotFound} />

          </Switch>
      </div>

        <footer style={{backgroundColor:"#354FBC", color:"white"}} className="text-right py-5">
          <Container>
            Moby Dick Rutas
          </Container>
        </footer>

    </BrowserRouter>);
  }

  }


//export default Barra_navegacion;
