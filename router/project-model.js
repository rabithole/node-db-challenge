const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);
// normally place above code in a db-helper file. 

module.exports = {
	add,
	find,
};

function add(resource) {
	console.log(resource)
	return db('projects')
		.insert(resource)
}

function find() {
	return db('projects');
	console.log({ Yes_find: 'find' })
}