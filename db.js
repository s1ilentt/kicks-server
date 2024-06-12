const { Sequelize } = require('sequelize');

let sequelize;

if (process.env.DATABASE_URL) {
	// Database connection via URL
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres',
		protocol: 'postgres',
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false
			}
		}
	});
} else {
	// Connection to the database through individual variables
	sequelize = new Sequelize(
		process.env.DB_NAME, // Name db
		process.env.DB_USER, // User
		process.env.DB_PASSWORD, // Password
		{
			dialect: 'postgres',
			host: process.env.DB_HOST, // Host
			port: process.env.DB_PORT, // Port
		}
	);
}

module.exports = sequelize;
