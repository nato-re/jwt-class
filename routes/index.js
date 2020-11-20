const express = require('express');

const getPosts = require('../controllers/posts');
const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');
const createPost = require('../controllers/createPost');

const verifyJWT = require('../auth/validateJWT')


const apiRoutes = express.Router();


apiRoutes.get('/posts', verifyJWT, getPosts);
apiRoutes.post('/post', verifyJWT, createPost);
apiRoutes.post('/register', createUsers);
apiRoutes.post('/login', login);

module.exports = apiRoutes; 
