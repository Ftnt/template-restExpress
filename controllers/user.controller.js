const { request, response } = require('express')

const usuarioGet = (req = request, res = response) => {

  const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;
  res
    .status(200)
    .json({
      msg: 'get Api - Controller',
      q,
      nombre,
      apikey,
      page,
      limit
    })
}

const usuarioPut = (req, res) => {

  const { id } = req.params;

  res
    .status(400)
    .json({
      msg: 'put Api - Controller',
      id
    });
}

const usuarioPost = (req, res) => {

  const body = req.body;

  res
    .status(201)
    .json({
      msg: 'post Api - Controller',
      body
    });
}

const usuarioDelete = (req, res) => {
  res
    .status(200)
    .json({
      msg: 'delete Api - Controller'
    });
}



module.exports = {
  usuarioGet, usuarioPut, usuarioPost, usuarioDelete

}