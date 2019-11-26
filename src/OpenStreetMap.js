import React from 'react';
import Mapa from './Mapa';
import Autocomplete from './Autocomplete';
import './autocompletado.css';
import {ListGroup} from 'react-bootstrap';



export default class App extends React.Component {
  state = { origen: { latOrigen: 19.04365, lngOrigen: -98.19806 },
            destino: {latDestino: 19.04355,lngDestino: -98.19806}
          };

  movermarcador = () => {
    const { latOrigen, lngOrigen } = this.state.origen;
    const { latDestino, lngDestino } = this.state.destino;
    this.setState({
      origen: {
        latOrigen: latOrigen,
        lngOrigen: lngOrigen,
      },
      destino:{
        latDestino: latDestino,
        lngDestino: lngDestino,
      }
    });
    console.log(this.state);
  };


  render() {
    return (
      <>
        <Autocomplete value={this.state.origen} placeholder="Escribir tu direccion origen" actualizacion={this.movermarcador} texto="Origen"/>
        <Autocomplete value={this.state.destino} placeholder="Escribir tu direccion destino" actualizacion={this.movermarcador} texto="Destino"/>

          <Mapa marcadores={this.state}/>
          <ListGroup variant="flush">
            <ListGroup.Item style={{backgroundColor: "rgba(255,255,255,0.5)"}}>RUTA #11, PZA DORADA</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: "rgba(255,255,255,0.5)"}}>RUTA 64C, Loma bonita</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: "rgba(255,255,255,0.5)"}}>RUTA #19, PANZA COLA</ListGroup.Item>
          </ListGroup>
      </>

    );
  }
}
