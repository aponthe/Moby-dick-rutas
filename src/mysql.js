const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
// https://github.com/mysqljs/mysql
const conexion = mysql.createConnection({
  host     : 'localhost',
  user     : 'gustavo',
  password : 'zheinoX550E',
  database : 'mobydick'
});

conexion.connect(
  function(err){
    if (err) throw err;
    console.log("CONECTADO A LA BASE DE DATOS");
  }
);

// Initialize the app
const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json())

// https://expressjs.com/en/guide/routing.html
app.get('/posts', (req, respuesta) => {


    conexion.query('SELECT * FROM usuarios LIMIT 0, 10', function (err, resultados, fields) {
      if (err) throw err;
      respuesta.send(resultados)
    });

    conexion.end();
});

app.post('/nuevaruta', (req,respuesta) => {
  var sql = "INSERT INTO rutas (nombre_ruta, coordenadas) VALUES (?, ?)";
  //ejemplo de solicitud nombre_ruta=ruta 11&coordenadas=LINESTRING(20.1 10.2,-1 1.1,2 2)
    conexion.query(sql, [req.body.nombre_ruta, req.body.coordenadas], (err, resultados) => {
        if (err) throw err;

        respuesta.status(201).send(resultados);
    });
});
// INICIAR EL SERVIDOR
app.listen(3001, () => {
 console.log('https://localhost:3001/');
});
