import React from 'react';
import Mapa from './Mapa';
import './autocompletado.css';
import {InputGroup, FormControl, Button} from 'react-bootstrap';



export default class Mapaadmisitrador extends React.Component {

  state = {
              puntos: {
                lat: [19.04315,19.04399,],
                lng: [-98.19806,-98.19806,],
              },
              userInput:"",
          };

  Guardarruta = () => {
    //console.log(JSON.stringify(this.state.puntos));
    //console.log(JSON.parse(JSON.stringify(this.state.puntos)));
    const https = require("https");
    fetch("http://192.168.1.65:3001/nuevaruta", {
      agent: new https.Agent({rejectUnauthorized: false}),
      body: "nombre_ruta="+this.state.userInput+"&coordenadas="+JSON.stringify(this.state.puntos),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    method: "POST"
})
  };

  onChange = (e) => {
    const userInput = e.currentTarget.value;
    this.setState({userInput: userInput,});
  }


  render() {
    const {
      onChange,
      Guardarruta,
      state: {
        userInput
      }
    } = this;
    return (
      <>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Nombre de la ruta</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Ruta M1"
          aria-label="Nombre"
          aria-describedby="basic-addon1"
          value={userInput}
          onChange={onChange}
        />
      </InputGroup>
        <Mapa puntos={this.state.puntos}/>
        <Button onClick={Guardarruta} style={{margin: "12px"}}>Agregar ruta</Button>
      </>

    );
  }
}
