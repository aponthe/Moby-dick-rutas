import React, { Component} from "react";
import PropTypes from "prop-types";
import {OpenStreetMapProvider} from 'leaflet-geosearch';
import {ListGroup, InputGroup, FormControl} from 'react-bootstrap';
import Destino from './img/marcadores mapa/destino.png';
import Origen from './img/marcadores mapa/origen.png';

export default class Autocomplete extends Component {


  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);
    this.proveedor = new OpenStreetMapProvider();


    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };
  }


  onChange = (e) => {
    var { suggestions } = this.props;
    const userInput = e.currentTarget.value;


    this.proveedor.search({query: userInput})
    .then( (resultado)=>{
        for(var i=0;i<=resultado.length-1;i++)
          if(suggestions.indexOf(resultado[i].label)===-1){
            this.props.suggestions.push(resultado[i].label);//sugerencias
          }
          var filteredSuggestions;

          filteredSuggestions = this.props.suggestions.filter(
            suggestion =>
              suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
          );

          this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,

          });
    })
    .catch( function (error){
      console.log(error)
    });

    this.setState({userInput: userInput,});
  };


  onClick = e => {

    this.proveedor.search({query: e.currentTarget.innerText})
    .then( (resultado)=>{

        if(this.props.value.latOrigen!==undefined){
          this.props.value.lngOrigen = parseFloat(resultado[0].x);
          this.props.value.latOrigen = parseFloat(resultado[0].y);
        }
        else{
          this.props.value.lngDestino = parseFloat(resultado[0].x);
          this.props.value.latDestino = parseFloat(resultado[0].y);

        }
        this.props.actualizacion();
    })
    .catch( function (error){
      console.log(error)
    });

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };


  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }

    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }

    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;


    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ListGroup as="ul" className="suggestions">

            {filteredSuggestions.map((suggestion, index) => {
              let className;


              if (index === activeSuggestion) {
                className = "active";
              }

              return (
                <ListGroup.Item as="li"
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        );
      } else {
        suggestionsListComponent = (
          <ListGroup as="ul" className="no-suggestions">
            <ListGroup.Item as="li" variant="danger">No se encontraron sugerencias :(</ListGroup.Item>
          </ListGroup>
        );
      }
    }

    return (
      <>
      <InputGroup style={{paddingBottom: "1rem"}} value={this.props.value}>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">{this.props.texto}
          <img src={this.props.texto==='Destino'? Destino: Origen} alt={this.props.texto} style={{width: "15px"}}/>
          </InputGroup.Text>

        </InputGroup.Prepend>
        <FormControl
          placeholder={this.props.placeholder}
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
      </InputGroup>
        {suggestionsListComponent}

      </>
    );
  }
}
