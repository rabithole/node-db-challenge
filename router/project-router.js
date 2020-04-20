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

// router.post('/resource', (req, res) => {
//   const resource = req.body;
//   // console.log(resource)

//   Projects.add(resource)
//   .then(resource => {
//     res.status(201).json(resource);
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new resource, bone head!' });
//   });
// });

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

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
  .then(proj => {
    if (proj) {
      res.json(proj);
    } else {
      res.status(404).json({ message: 'Could not find proj with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get project' });
  });
});

router.get('/:id/resource', (req, res) => {
	console.log(req.params.id)
  Projects.findResource(req.params.id)
	  .then(proj => {
	    res.json(proj);
	  })
	  .catch(err => {
	    res.status(600).json({ message: 'Failed to get resource, dork!' });
	  });
});

// router.post('/:id/resource', (req, res) => {
// 	console.log(req.body)
//   const resource = req.body;
//   const { id } = req.params; 

//   Projects.findById(id)
//   .then(reso => {
//     if (resource) {
//       Projects.addResource(resource, id)
//       .then(reso => {
//         res.status(201).json(reso);
//       })
//     } else {
//       res.status(404).json({ message: 'Could not find resource with given id.' })
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new resource' });
//   });
// });

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

module.exports = router;
