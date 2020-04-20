const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);
// normally place above code in a db-helper file. 

module.exports = {
	add,
	find,
	findById,
	findResource,
	addResource,
};

function add(project) {
	console.log(project)
	return db('projects')
		.insert(project)
}

function find() {
	return db('projects');
	console.log({ Yes_find: 'find' })
}

function findById(id) {
	return db('projects').where({ id }).first();
}

function findResource(id) {
	
	return db('resource')
	// console.log(resource)
		.join('projects', 'resource.resource_id', 'projects.id')
		.select('resource.id', 'resource.description', 'resource.resource_name', 'projects.completed' )
		.where({ resource_id: id });
}

function addResource(resource) {
	// console.log(resource)
	return db('resource')
		.insert(resource)
}