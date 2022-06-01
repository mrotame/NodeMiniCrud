const express = require('express');
const UserController = require('./src/controllers/UserController');

const routes = express.Router();

routes.post('/', UserController.insertAll)
routes.get('/', UserController.index);

routes.post('/users', UserController.store);

module.exports = routes;