const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.post('/', (req, res) => {
  const project = req.body;
  // console.log(project)

  Projects.add(project)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project, bone head!' });
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

router.get('/resource', (req, res) => {
	console.log(req.params.id)
  Projects.findResource(req.params.id)
	  .then(proj => {
	    res.json(proj);
	  })
	  .catch(err => {
	    res.status(600).json({ message: 'Failed to get resource, dork!' });
	  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
  .then(proj => {
    if (proj) {
      res.json(proj);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get project' });
  });
});



router.get('/:id/task', (req, res) => {
	console.log(req.params.id)
  Projects.findTask(req.params.id)
	  .then(task => {
	    res.json(task);
	  })
	  .catch(err => {
	    res.status(600).json({ message: 'Failed to get the task, dork!' });
	  });
});

router.post('/resource', (req, res) => {
  const resource = req.body;
  // console.log(resource)

  Projects.addResource(resource)
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource, bone head!' });
  });
});

router.post('/task', (req, res) => {
  const task = req.body;
  // console.log(req.body)

  Projects.addTask(task)
  .then(task => {
    res.status(201).json(task);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new task, bone head!' });
  });
});

module.exports = router;
