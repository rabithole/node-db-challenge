const express = require('express');

const projectRouter = require('./router/project-router.js');

const server = express();

server.use(express.json()); 
server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
  res.send('Server access success! YeaHaw!');
});

module.exports = server;