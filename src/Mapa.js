import React from 'react';
import L from 'leaflet';
import Icono_destino from './img/marcadores mapa/destino.png';
import Sombra from './img/marcadores mapa/sombra.png';
import 'leaflet-routing-machine';
import {Button} from 'react-bootstrap';


export default class Map extends React.Component {

  constructor(props) {
    //REPARACION Leaflet
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

    super(props);

    this.icono_destino = L.icon({
      iconUrl: Icono_destino,
      iconSize: [25, 41],
      iconAnchor: [25, 41],
      popupAnchor: [-12, -40],
      shadowUrl: Sombra,
      shadowSize: [48, 45],
      shadowAnchor: [25, 44]
    });

  }

  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [19.04365, -98.19806],
      zoom: 18,
      zoomControl: false,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
    this.origen = L.marker([19.04315,-98.19806])
    this.destino = L.marker([19.04399,-98.19806])

    if(window.location.pathname!=="/Administrador"){

      this.origen = L.marker([19.04315,-98.19806]).addTo(this.map).bindPopup('Este es tu origen', {autoClose: false});
      this.destino = L.marker([19.04399,-98.19806], {icon: this.icono_destino}).addTo(this.map)
      .bindPopup('Este es tu destino', {autoClose: false});

      this.puntos=L.Routing.control({
        waypoints: [
          L.latLng(this.origen.getLatLng()),
          L.latLng(this.destino.getLatLng()),
        ]
        ,addWaypoints: false,routeWhileDragging: true,extendToWaypoints: true, createMarker: function(i: number, waypoint: any, n: number) { return null; } } ).addTo(this.map);
        this.puntos.hide();

        //ACTIVANDO LA LOCALIZACION
        this.map.locate({enableHighAccuracy: true});
        //FUNCION ASINCRONA QUE NOS DA LA LOCALIZACION
        this.map.on('locationfound', (e) => {
          const coords = [e.latlng.lat, e.latlng.lng];

          this.origen.setLatLng(coords);
          this.destino.setLatLng({lat: coords[0]-0.01090,lng: coords[1]});

          this.puntos.getPlan().setWaypoints([
            L.latLng(this.origen.getLatLng()),
            L.latLng(this.destino.getLatLng()),
          ]);

        });
        this.origen.openPopup();
        this.destino.openPopup();

      }
    else{
      this.puntos=L.Routing.control({
        language: 'es',showAlternatives: false }).addTo(this.map);
        for(var i=0;i<=this.props.puntos.lat.length-1;i++){
          this.puntos.spliceWaypoints(i,1,[this.props.puntos.lat[i],this.props.puntos.lng[i]]);
        }
    }

  }



  componentDidUpdate({ marcadores }) {
    if (this.props.marcadores !== marcadores) {
      const {origen}=this.props.marcadores,{destino}=this.props.marcadores;
      this.origen.setLatLng({lat: origen.latOrigen,lng: origen.lngOrigen});
      this.destino.setLatLng({lat: destino.latDestino,lng: destino.lngDestino});

      this.map.panTo({lat: parseFloat(this.props.marcadores.origen.latOrigen),lng: parseFloat(this.props.marcadores.origen.lngOrigen)});

        this.puntos.getPlan().setWaypoints([
          L.latLng(this.origen.getLatLng()),
          L.latLng(this.destino.getLatLng()),
        ]);

    }
  }

  almacenaPuntos = (e) =>{
    //this.puntos.getPlan().setWaypoints(this.puntos.getWaypoints())  ;
    if(window.location.pathname==="/Administrador"){
      this.props.puntos.lat.length = 0;
      this.props.puntos.lng.length = 0;
      for(var i=0;i<=this.puntos.getWaypoints().length-1;i++){
        this.props.puntos.lat.push(this.puntos.getWaypoints()[i].latLng.lat);
        this.props.puntos.lng.push(this.puntos.getWaypoints()[i].latLng.lng);
      }
    }
  }

  eliminaPuntos = (e) => {
    try{
      console.log(this.props.puntos.lat.length-1);
      if(this.props.puntos.lat.length-1>1){
        this.props.puntos.lat.pop();
        this.props.puntos.lng.pop();
        this.puntos.spliceWaypoints(this.props.puntos.lat.length-1,1,);
      }else{
        alert("El sistema necesita al menos 2 puntos");
      }
    }catch(error){
      alert("Ocurrio un error al eliminar uno de los puntos");
    }
  }


  render() {
    var administrador=false;
    if(window.location.pathname==="/Administrador"){
      administrador=true;
    }

    return (
      <>
        <div id="map" style={{height: "80vh"}} onClick={this.almacenaPuntos} onMouseMove={this.almacenaPuntos}/>
        {administrador?
         (<Button onClick={this.eliminaPuntos} style={{margin: "12px"}}>Eliminar ultimo punto</Button>):(null)}
      </>
    )
  }
}
