const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.post('/', (req, res) => {
  const resource = req.body;
  // console.log(resource)

  Projects.add(resource)
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource, bone head!' });
  });
});

router.get('/', (req, res) => {
	// console.log('body', res.params.id)

  Projects.find()
	  .then(proj => {
	    res.json(proj);
	  })
	  .catch(err => {
	    res.status(600).json({ message: 'Failed to get proj' });
	  });
});

module.exports = router;
