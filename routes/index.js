const express = require('express');

const getPosts = require('../controllers/posts');
const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');

const apiRoutes = express.Router();


apiRoutes.get('/posts', getPosts);
apiRoutes.post('/register', createUsers);
apiRoutes.post('/login', login);

module.exports = apiRoutes; 
