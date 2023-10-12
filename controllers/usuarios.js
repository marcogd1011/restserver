const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const query = req.query;

    res.json({
        msg: 'get API',
        query
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API',
        id
    });
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
  }




module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}