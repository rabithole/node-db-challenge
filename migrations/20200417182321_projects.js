
exports.up = function(knex) {
	return knex.schema
		.createTable('projects', tbl => {
			tbl.increments();
			tbl.text('prject_name', 128)
				.notNullable();
			tbl.text('description');
			tbl.boolean('completed')
				.notNullable();
		})

		.createTable('resource', tbl => {
			tbl.increments();
			tbl.text('resource_name', 128)
				.notNullable();
			tbl.text('description', 128);
			tbl.integer('resource_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			tbl.integer('task_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('task')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
		})

		.createTable('task', tbl => {
			tbl.increments();
			tbl.text('description', 128)
				.notNullable();
			tbl.text('notes', 128);
			tbl.boolean('completed')
				.notNullable();
		})
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('resource');
		// .dropTableIfExists('project')
		// .dropTableIfExists('task');
	};
