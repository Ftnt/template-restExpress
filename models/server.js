const express = require('express');
const cors = require('cors');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = '/api/user';

    //Middlewares : funcion que siempre se ejecuta cuando iniciamos nuestro servidor
    this.middlewares();

    //Rutas de mi aplicacion
    this.route();
  }

  middlewares() {
    //CORS
    this.app.use(cors())
    //Lectura y Parseo del body
    this.app.use(express.json());
    //Directorio Publico
    this.app.use(express.static('public'));

  }

  route() {
    this.app.use(this.userPath, require('../routes/user.routes'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto:', this.port)
    })
  }

}

module.exports = Server;