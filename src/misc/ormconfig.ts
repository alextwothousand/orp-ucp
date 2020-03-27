export default {
	"type": "mysql",
	"host": "localhost",
	"port": 3306,
	"username": "root",
	"password": "",
	"database": "orp",
	"synchronize": true,
	"logging": false,
	"migrations": [
	   "migration/**/*.js"
	],
	"subscribers": [
	   "subscriber/**/*.js"
	]
}